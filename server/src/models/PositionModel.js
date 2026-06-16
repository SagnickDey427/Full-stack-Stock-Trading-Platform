const {model} = require('mongoose');
const positionSchema = require('../schemas/PositionsSchema.js');

const PositionModel= model("position",positionSchema);

module.exports = PositionModel;