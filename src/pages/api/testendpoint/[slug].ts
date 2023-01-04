// just delete this folder (iv) it's for testing
import { getViews, increseViews } from 'lib/views'
import type { NextApiRequest, NextApiResponse } from 'next'


// we make the arguments typed (as in Python)
export default function countVisit(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query

	if (slug === '1') {
        // increseViews(slug);
		res.status(200).json({ name: 'John Doe'})
		
	}

}



