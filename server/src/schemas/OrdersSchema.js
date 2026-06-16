const {Schema} = require('mongoose');

const orderSchema = Schema({
    stock:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:{
            values:["BUY","SELL"],
            message: '{VALUE} is not a valid transaction type. Must be "BUY" or "SELL".'
        },
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:{
            values:["COMPLETED","REJECTED","PENDING"],
            message:"{VALUE} is not a valid option , must be 'COMPLETED' or 'REJECTED' or 'PENDING' "
        },
        default:"PENDING"
    }
},{
    timestamps: true
});

module.exports = orderSchema;