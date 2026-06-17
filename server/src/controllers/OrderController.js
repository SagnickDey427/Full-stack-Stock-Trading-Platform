const OrdersModel = require('../models/OrdersModel.js');
const HoldingsModel = require('../models/HoldingModel.js');

const handleTransaction = async (req,res)=>{
    try{
        const {stock,type,qty,price} = req.body;
        if(!stock || !type || !qty || !price){
            return res.status(400).json({
                success:false,
                message:"MissingValueError : All fields are required"
            })
        }

        const newOrder = new OrdersModel({
            stock,
            type,
            qty,
            price,
            status:"PENDING"
        });
        await newOrder.save();
        res.status(201).json({
            success:true,
            message:"Order placed succesfully",
            orderId:newOrder._id,
            orderStatus:"PENDING"
        });
        setTimeout(async ()=>{
            try{
                const updatedOrder = await OrdersModel.findByIdAndUpdate(newOrder._id,{status:"COMPLETED"});

                const newHolding = new HoldingsModel({
                    instrument:newOrder.stock,
                    qty:newOrder.qty,
                    avgCost:newOrder.price
                });
                await newHolding.save();
                console.log(`[Engine] Order ${newOrder._id} for ${stock} successfully COMPLETED.`);
            } catch(err){
                console.log(`[Engine Error] : failed to update the statuas of order ${newOrder._id}, error : ${err}`);
            }
        },7500);
    } catch(err){
        console.log(`[Server Error] : failed to add the new order, error : ${err}`);
        return res.status(500).json({
            success:false,
            message: "Order placement failed",
            error:err.message
        });
    }
}

const getOrders = async (req,res)=>{
    try{
        const ordersData = await OrdersModel.find({});
        return res.status(201).json(ordersData);
    }catch(err){
        console.log(`Error fetching orders : ${err}`);
        return res.status(500).json({
            success:false,
            message:err.message
        });
    }
}

module.exports = {handleTransaction, getOrders};