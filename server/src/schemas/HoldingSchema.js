const {Schema} = require('mongoose');

const holdingSchema = new Schema({
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