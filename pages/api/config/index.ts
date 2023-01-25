import { firestore } from 'firebase-admin';
import { type NextApiRequest, type NextApiResponse } from 'next';
import initializeApi from '../../../lib/admin/init';

initializeApi();
const db = firestore();

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		return res.status(400).json({ error: 'Invalid request method' });
	}

	const dbRes = await db.collection('/config').get();
	let dataToRet = {};
	dbRes.forEach((doc) => {
		const data = doc.data();
		dataToRet[data.key] = data.value;
	});
	res.status(200).json(dataToRet);
};

export default handleRequest;
