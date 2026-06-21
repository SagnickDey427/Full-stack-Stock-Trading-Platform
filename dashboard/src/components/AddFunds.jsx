import React, { useState } from 'react';
import {useAuth} from '../context/AuthContext.jsx';
import axios from 'axios';


export default function AddFunds({onClose}) {
    const {user, updateFunds} = useAuth();
    const [price,setPrice] = useState(0);
    const [error,setError]= useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsProcessing(true);
        try{
            const resp = await axios.post('http://localhost:3002/api/auth/addfunds',{
                price
            },{withCredentials:true});
            if(!resp.data.success){
                setError(resp.data.message);
            } else{
                updateFunds(resp.data.funds);
                alert(`Funds added to your account successfully. ✅`);
                onClose();
            }
        }catch(err){
            console.log('[Fund adding error] : ',err.message);
            setError(err.message);
        }finally{
            setIsProcessing(false);
        }
    }
    
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 w-full max-w-md mx-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">
                        Add Funds
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Current balance: ₹{user.funds || 0}
                    </span>
                    {error !== "" ?<p className='bg-red-400 text-red-700 border-l border-red-700 px-4 py-2'>
                        {error}
                    </p> : null}
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Amount (₹)</label>
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
                            className={`flex-1 py-2 text-sm font-semibold text-white rounded-lg transition-colors cursor-pointer bg-blue-700 hover:bg-blue-300 disabled:bg-gray-400`}
                        >
                            {isProcessing ? "Processing..." : "Add funds"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
