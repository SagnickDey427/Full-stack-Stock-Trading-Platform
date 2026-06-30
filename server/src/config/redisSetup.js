const Redis = require('ioredis');

const redisClient= new Redis({
    host:process.env.REDIS_HOST||'localhost',
    port:process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
});

redisClient.on('connect',()=>{
    console.log('🟢 Successfully connected to Redis');
})

redisClient.on('error',(error)=>{
    console.log('🔴 Redis connection error:', error.message)
})
module.exports = redisClient;