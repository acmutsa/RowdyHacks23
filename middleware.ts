import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
	const url = request.nextUrl;
	switch (request.nextUrl.pathname) {
		case '/judges':
		case '/judge':
			return NextResponse.redirect('https://go.rowdyhacks.org/judge');
			break;
		case '/mentors':
		case '/mentor':
			return NextResponse.redirect('https://go.rowdyhacks.org/mentor');
			break;
		case '/volunteers':
		case '/schedule':
			if (
				(await get('allowViewSchedule')) === true ||
				process.env.NEXT_PUBLIC_IS_STAGED_PROD == 'true'
			) {
				return NextResponse.next();
				break;
			}
			const url = request.nextUrl;
			url.pathname = '/404';

			return NextResponse.rewrite(url);
		case '/music':
			if (
				(await get('enableHackPortalMusicClient')) === true ||
				process.env.NEXT_PUBLIC_IS_STAGED_PROD == 'true'
			) {
				return NextResponse.next();
				break;
			}
			url.pathname = '/404';

			return NextResponse.rewrite(url);
		case '/volunteer':
			return NextResponse.redirect('https://go.rowdyhacks.org/volunteer');
			break;
		default:
			return NextResponse.next();
			break;
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		'/judges',
		'/mentors',
		'/mentor',
		'/judge',
		'/volunteer',
		'/volunteers',
		'/music',
		'/schedule',
	],
};
