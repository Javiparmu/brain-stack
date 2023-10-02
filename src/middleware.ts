import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse | void {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const session = request.cookies.get('next-auth.session-token');

    if (!session) {
      return NextResponse.redirect('http://localhost:3000');
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
