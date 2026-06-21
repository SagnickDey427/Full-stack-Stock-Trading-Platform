require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.createSecretTokens = (id)=>{
    const secret = process.env.JWT_SECRET || "SECRETCODE1";
    return jwt.sign({id},secret,{
        expiresIn:7*24*60*60 
    });
};