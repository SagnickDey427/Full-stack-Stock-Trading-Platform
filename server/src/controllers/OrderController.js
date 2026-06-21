const OrdersModel = require('../models/OrdersModel.js');
const HoldingsModel = require('../models/HoldingModel.js');
const UserModel = require('../models/UserModel.js');

const handleTransaction = async (req, res) => {
    try {
        const { stock, type, qty, price } = req.body;
        const userId = req.user;

        if (!stock || !type || !qty || !price) {
            return res.status(400).json({ success: false, message: "MissingValueError : All fields are required" });
        }
        if (qty <= 0) {
            return res.status(400).json({ success: false, message: "Quantity cannot be negative or zero." });
        }

        // FIX: Calculate total transaction value
        const totalValue = qty * price;
        const stockOwner = await UserModel.findById(userId);

        if (type === "BUY") {
            // FIX: Don't place the order if they are broke!
            if (stockOwner.funds < totalValue) {
                return res.status(400).json({ success: false, message: "Insufficient funds for this trade." });
            }
        }

        if (type === "SELL") {
            // FIX: Ensure we only search THIS user's holdings
            const existingHolding = await HoldingsModel.findOne({ instrument: stock, owner: userId });
            
            if (!existingHolding) {
                return res.status(400).json({ success: false, message: "Error : You don't own this stock." });
            }
            if (existingHolding.qty < qty) {
                return res.status(400).json({ success: false, message: `Error : Requested amount exceeds your total holdings. Currently have : ${existingHolding.qty}` });
            }
        }

        // Create the PENDING order
        const newOrder = new OrdersModel({
            stock, type, qty, price, status: "PENDING", owner: userId
        });
        await newOrder.save();

        // Respond instantly to the frontend
        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            orderId: newOrder._id,
            orderStatus: "PENDING"
        });

        // ==========================================
        // ASYNC MATCHING ENGINE
        // ==========================================
        setTimeout(async () => {
            try {
                if (type === "BUY") {
                    // FIX: Use $inc to safely deduct totalValue
                    await UserModel.findByIdAndUpdate(userId, { $inc: { funds: -totalValue } });
                    
                    // FIX: Search for THIS user's holding
                    const existingHolding = await HoldingsModel.findOne({ instrument: stock, owner: userId });
                    
                    if (!existingHolding) {
                        // FIX: Include the owner field!
                        const newHolding = new HoldingsModel({
                            owner: userId,
                            instrument: stock,
                            qty: qty,
                            avgCost: price
                        });
                        await newHolding.save();
                    } else {
                        const totalOldValue = existingHolding.qty * existingHolding.avgCost;
                        const newQty = existingHolding.qty + qty;
                        const newAvgCost = (totalOldValue + totalValue) / newQty;
                        
                        await HoldingsModel.findByIdAndUpdate(existingHolding._id, { qty: newQty, avgCost: newAvgCost });
                    }
                } 
                
                else if (type === "SELL") {
                    // FIX: Use $inc to safely add totalValue
                    await UserModel.findByIdAndUpdate(userId, { $inc: { funds: totalValue } });
                    
                    // FIX: Search for THIS user's holding
                    const existingHolding = await HoldingsModel.findOne({ instrument: stock, owner: userId });
                    const remainingQty = existingHolding.qty - qty;
                    
                    if (remainingQty === 0) {
                        await HoldingsModel.findByIdAndDelete(existingHolding._id);
                    } else {
                        await HoldingsModel.findByIdAndUpdate(existingHolding._id, { qty: remainingQty });
                    }
                }

                // Finally, mark the order as completed
                await OrdersModel.findByIdAndUpdate(newOrder._id, { status: "COMPLETED" });
                console.log(`[Engine] Order ${newOrder._id} for ${stock} successfully COMPLETED.`);

            } catch (err) {
                console.log(`[Engine Error] : failed to process order ${newOrder._id}, error : ${err.message}`);
                // If it fails, mark the order as FAILED so the user knows
                await OrdersModel.findByIdAndUpdate(newOrder._id, { status: "FAILED" });
            }
        }, 1000);

    } catch (err) {
        console.log(`[Server Error] : failed to add the new order, error : ${err.message}`);
        return res.status(500).json({ success: false, message: "Order placement failed", error: err.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const userId= req.user;
        const ordersData = await OrdersModel.find({owner:userId});
        return res.status(200).json(ordersData);
    } catch (err) {
        console.log(`Error fetching orders : ${err}`);
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


module.exports = { handleTransaction, getOrders};