import { redis } from 'lib/redis'

export async function getViews(slug: string): Promise<string> {
	const count = await redis.hget('views', slug)
	console.log(count);

	return count !== null ? count : '1'
}

export async function increseViews(slug: string) {
	console.log(slug);
	const count = await redis.hget('views', slug)

	if (count === null) {
		redis.hset('views', slug, 1)
		return
	}
	console.log(count)
	redis.hset('views', slug, parseInt(count) + 1)
}
