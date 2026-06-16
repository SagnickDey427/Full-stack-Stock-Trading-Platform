require('dotenv').config();
const app = require('./app.js');
const ConnectDb = require('./config/db.js');
const port = process.env.PORT || 3002;

ConnectDb().then(() => {
    app.listen(port, () => {
        console.log("Server is listening to port ", port);
    })
})

