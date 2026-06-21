const {model} = require('mongoose');
const positionSchema = require('../schemas/PositionsSchema.js');

const PositionModel= model("Position",positionSchema);

module.exports = PositionModel;