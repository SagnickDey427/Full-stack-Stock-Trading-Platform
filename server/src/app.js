const express= require('express');
const seedRouter = require('./routes/SeedRoute.js');
const portfolioRouter = require('./routes/PortfolioRoutes.js');
const OrdersRouter = require('./routes/OrdersRoute.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middlewarwes
app.use(cors());
app.use(bodyParser.json());


app.use('/api/seed',seedRouter);
app.use('/api/portfolio',portfolioRouter);
app.use('/api/portfolio/orders',OrdersRouter);


module.exports = app;