const mongoose = require('mongoose');

const ConnnectDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected successfully...`);
    } catch(err){
        console.log(`Soem error occured : ${err}`);
        process.exit(1);
    }
}

module.exports = ConnnectDb;