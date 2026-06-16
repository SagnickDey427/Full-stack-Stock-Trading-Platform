const PositionModel = require('../models/PositionModel.js');
const HoldingsModel = require('../models/HoldingModel.js');

const {positions} = require('../../../dashboard/src/data/PositionsData.js'); 
const {holdings} = require('../../../dashboard/src/data/HoldingsData.js');

const seedPosition = async (req,res)=>{
    try{
        await PositionModel.deleteMany({});
    
        const insertedPos = await PositionModel.insertMany(positions);
        return res.status(201).json({
            success:true,
            message:"Positions Data added succesfuly!",
            positionsAdded:insertedPos.length
        });

    } catch(err){
        console.log(`Server error : ${err}`);
        return res.status(501).json({
            success:false,
            message:`Server Error : ${err}`
        })
    }

}


const seedHolding = async (req,res)=>{
    try{
        await HoldingsModel.deleteMany({});
    
        const insertedHoldings = await HoldingsModel.insertMany(holdings);
        return res.status(201).json({
            success:true,
            message:"Holdings Data added succesfuly!",
            positionsAdded:insertedHoldings.length
        });

    } catch(err){
        console.log(`Server error : ${err}`);
        return res.status(501).json({
            success:false,
            message:`Server Error : ${err}`
        })
    }

}

module.exports = {seedPosition, seedHolding};