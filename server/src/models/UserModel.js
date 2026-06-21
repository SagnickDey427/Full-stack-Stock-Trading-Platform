const {model} = require('mongoose');
const userSchema = require('../schemas/UserSchema.js');

const UserModel= model("User",userSchema);

module.exports = UserModel;