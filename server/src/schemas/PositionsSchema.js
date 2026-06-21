const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const positionSchema = Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    instrument:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    avg:{
        type:Number,
        required:true
    }
});

module.exports=positionSchema;