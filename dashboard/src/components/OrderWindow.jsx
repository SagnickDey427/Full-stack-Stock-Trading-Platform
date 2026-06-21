import React, { useState } from "react";
import axios from "axios";

const OrderModal = ({ stockName, currentLtp, type, onClose, onOrderPlaced }) => {
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(currentLtp || 0);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            // Post order data matching your exact Mongoose Schema types
            const response = await axios.post("http://localhost:3002/api/portfolio/orders", {
                stock: stockName,
                type: type, // "BUY" or "SELL"
                qty: Number(qty),
                price: Number(price)
            }, {
                withCredentials: true
            });

            // Show notification/flash message to user using your frontend alert suite
            alert(`🎉 ${response.data.message}! Order ID: ${response.data.orderId}`);

            if (onOrderPlaced) onOrderPlaced();
            onClose(); // Auto-close window
        } catch (err) {
            console.error("Order placement crash:", err);
            const backendMessage = err.response?.data?.message || "Failed to place order.";

            // Show the actual reason to the user
            alert(`❌ Trade Rejected: ${backendMessage}`);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 w-full max-w-md mx-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">
                        {type === "BUY" ? "🟢 Buy" : "🔴 Sell"} {stockName}
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        LTP: ₹{currentLtp}
                    </span>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Quantity</label>
                        <input
                            type="number"
                            min="1"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            disabled={isProcessing}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Price (₹)</label>
                        <input
                            type="number"
                            step="0.05"
                            min="0.05"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            disabled={isProcessing}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                            required
                        />
                    </div>

                    {/* Action Footer Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isProcessing}
                            className="flex-1 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`flex-1 py-2 text-sm font-semibold text-white rounded-lg transition-colors cursor-pointer ${type === "BUY"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-red-600 hover:bg-red-700"
                                } disabled:bg-gray-400`}
                        >
                            {isProcessing ? "Processing..." : `${type}`}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderModal;