const {model} = require('mongoose');
const holdingSchema = require('../schemas/HoldingSchema.js');

const HoldingsModel= model("Holding",holdingSchema);

module.exports = HoldingsModel;