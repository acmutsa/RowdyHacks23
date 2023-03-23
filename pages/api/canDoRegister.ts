import { type NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

export default async function handler(req: NextRequest) {
	const canDoRegister = await get('allowRegistrations');
	return new Response(JSON.stringify({ canDoRegister }));
}

export const config = {
	runtime: 'experimental-edge',
};
