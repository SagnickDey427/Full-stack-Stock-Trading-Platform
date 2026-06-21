const {model} = require('mongoose');
const orderSchema = require('../schemas/OrdersSchema.js');

const OrdersModel= model("Order",orderSchema);

module.exports = OrdersModel;