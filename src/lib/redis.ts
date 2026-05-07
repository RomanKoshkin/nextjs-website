import Redis from 'ioredis'

export const redis = process.env.USE_REDIS === 'true' ? new Redis({
    host: process.env.REDIS_URL,
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD
}) : null
