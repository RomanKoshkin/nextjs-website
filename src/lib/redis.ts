import Redis from 'ioredis'

export const redis = new Redis({
    host: process.env.REDIS_URL,
    port: parseInt(process.env.REDIS_PORT || '6379'), // Provide a default value for REDIS_PORT
    password: process.env.REDIS_PASSWORD
})
