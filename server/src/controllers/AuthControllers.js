const { VerifyAuth } = require('../middlewares/AuthMiddlewares.js');
const UserModel = require('../models/UserModel.js');
const { router } = require('../routes/AuthRoutes.js');
const { createSecretTokens } = require('../utils/secretToken.js');
const bcrypt = require("bcryptjs");

const cookieConfig = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 3 * 24 * 60 * 60 * 1000
};

module.exports.SignUp = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            });
        }
        const newUser = await UserModel.create({
            email,
            password,
            username
        });
        const token = createSecretTokens(newUser._id);
        res.cookie("token", token, cookieConfig);
        res.status(201).json({
            success: true,
            message: "User signed up successfully!",
            user: newUser
        });
        next();
    } catch (err) {
        console.log(`Error : ${err}`);
        return res.status(500).json({
            succes: false,
            message: `[Server error] : ${err}`
        });
    }
}

module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password."
            });
        }
        const existingUser = await UserModel.findOne({ email }).select('+password');
        if (!existingUser) {
            console.log('[Invalid email or password] in login route.');
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }
        const auth = await bcrypt.compare(password, existingUser.password);
        if (!auth) {
            console.log(`[Auth error] in login route`);
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }
        const token = createSecretTokens(existingUser._id);
        res.cookie("token", token, cookieConfig);
        res.status(200).json({
            success: true,
            message: "User logged in succesfully."
        });
    } catch (err) {
        console.log(`[Login route error] : ${err}`);
        return res.status(500).json({
            success: false,
            message: `[Server Error] : ${err.message}`
        });
    }
};
module.exports.MeController = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user);

        res.status(200).json({
            success: true,
            user: { id: user._id, username: user.username, email: user.email,funds:user.funds }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports.logOut =(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"lax"
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
}

module.exports.addFunds = async (req,res)=>{
    try{
        const userId= req.user;
        const {price} = req.body;
        
        const numericAmount = Number(price);
        if(isNaN(numericAmount) || numericAmount<=0){
            return res.status(400).json({
                success:false,
                message:"Invalid amount, must be a positive number."
            });
        }
        const updatedUser = await UserModel.findByIdAndUpdate(userId,{$inc:{funds:numericAmount}},{new:true});
        if(!updatedUser){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        console.log('Updated user ...');
        console.log(updatedUser);
        res.status(200).json({
            success:true,
            message:"Funds added to user's account",
            funds:updatedUser.funds
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:`[Fund adding error] : ${err.message}`
        });
    }
}
