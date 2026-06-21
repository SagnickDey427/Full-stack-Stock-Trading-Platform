const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const holdingSchema = new Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    instrument:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    avgCost:{
        type:Number,
        required:true
    }
});

module.exports = holdingSchema;