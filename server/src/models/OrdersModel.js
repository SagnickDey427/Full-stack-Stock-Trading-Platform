const {model} = require('mongoose');
const orderSchema = require('../schemas/OrdersSchema.js');

const OrdersModel= model("order",orderSchema);

module.exports = OrdersModel;