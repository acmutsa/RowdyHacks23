import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
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
	matcher: ['/judges', '/mentors', '/mentor', '/judge', '/volunteer', '/volunteers'],
};
