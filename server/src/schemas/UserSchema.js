const {Schema} = require('mongoose');
const bcrypt = require("bcryptjs");
const validator = require('validator');

const userSchema = new Schema({
    email:{
        required:[true,"User email is required"],
        type:String,
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"Please provide a valid email address."]
    },
    username:{
        required:[true,"Username is required"],
        type:String,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Account password is required"],
        minlength: [8, "Password must be at least 8 characters long."],
        select:false
    },
    funds:{
        type:Number,
        default:10000
    }

},{timestamps:true});

userSchema.pre("save",async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); 
})

module.exports= userSchema;