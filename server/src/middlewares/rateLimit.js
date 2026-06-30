const redisClient = require('../config/redisSetup.js')

async function rateLimiter(req,res,next){
    try{
        const userIp = req.ip;
        const redisKey = `rate-limit:${userIp}`;
        const maxlimit = process.env.RATE_LIMIT_MAX || 5;
        const count = await redisClient.incr(redisKey);
        if(count === 1){
            await redisClient.expire(redisKey,60);
        }
        if(count> maxlimit){
            const timeRemaining = await redisClient.ttl(redisClient);
            return res.status(429).json({
                success:false,
                message:"Too many requests. Slow down.",
                retryAfterSeconds:timeRemaining
            });
        }
        next();
    }catch(err){
        console.log("[Server error] : ",err.message);
        next();
    }
}

module.exports = rateLimiter;