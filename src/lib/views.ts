import { redis } from 'lib/redis'

export async function getViews(slug: string): Promise<string> {
	if (!redis) return '1'
	const count = await redis.hget('views', slug)
	console.log(count);
	return count !== null ? count : '1'
}

export async function increseViews(slug: string) {
	if (!redis) return
	console.log(slug);
	const count = await redis.hget('views', slug)

	if (count === null) {
		redis.hset('views', slug, 1)
		return
	}
	console.log(count)
	redis.hset('views', slug, parseInt(count) + 1)
}
