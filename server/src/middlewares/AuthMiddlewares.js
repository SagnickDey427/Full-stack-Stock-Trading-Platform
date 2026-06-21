const jwt = require('jsonwebtoken');


module.exports.VerifyAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log(`[Auth middleware error] : Unauthorised access.`);
        return res.status(401).json({
            success: false
        });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({
                success: false,
                message: "Forbidden: Session expired or invalid token."
            });
        }
        req.user = decodedToken.id;
        next();
    });
}