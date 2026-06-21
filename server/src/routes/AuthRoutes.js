const express= require('express');
const router = express.Router();
exports.router = router;
const {SignUp , Login,MeController, logOut, addFunds} = require('../controllers/AuthControllers.js');
const {VerifyAuth} = require('../middlewares/AuthMiddlewares.js')


router.post('/signup',SignUp);
router.post('/login',Login);
router.get('/me',VerifyAuth, MeController);
router.post('/logout',logOut);
router.post('/addfunds',VerifyAuth,addFunds);
module.exports = router;