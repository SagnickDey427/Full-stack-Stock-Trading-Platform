const express= require('express');
const seedRouter = require('./routes/SeedRoute.js');
const portfolioRouter = require('./routes/PortfolioRoutes.js');
const OrdersRouter = require('./routes/OrdersRoute.js');
const AuthRouter = require('./routes/AuthRoutes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const rateLimiter = require('./middlewares/rateLimit.js');

const app = express();

//middlewarwes
app.use(cors({
    origin:["http://localhost:5173","http://localhost:3000"],
    credentials:true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(rateLimiter);


app.use('/api/seed',seedRouter);
app.use('/api/portfolio',portfolioRouter);
app.use('/api/portfolio/orders',OrdersRouter);
app.use('/api/auth',AuthRouter);


module.exports = app;