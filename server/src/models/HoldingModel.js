const {model} = require('mongoose');
const holdingSchema = require('../schemas/HoldingSchema.js');

const HoldingsModel= model("holding",holdingSchema);

module.exports = HoldingsModel;