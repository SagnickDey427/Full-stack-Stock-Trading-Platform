const {Schema} = require('mongoose');

const positionSchema = Schema({
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