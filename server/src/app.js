const express= require('express');
const seedRouter = require('./routes/SeedRoute.js');
const portfolioRouter = require('./routes/PortfolioRoutes.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middlewarwes
app.use(cors());
app.use(bodyParser.json());


app.use('/api/seed',seedRouter);
app.use('/api/portfolio',portfolioRouter);

module.exports = app;