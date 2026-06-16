const express= require('express');
const seedRouter = require('./routes/SeedRoute.js');

const app = express();


app.use('/api/seed',seedRouter);

module.exports = app;