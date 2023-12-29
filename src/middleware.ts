import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest): Promise<NextResponse | void> {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const session = request.cookies.get(
      process.env.NODE_ENV === 'development' ? 'next-auth.session-token' : '__Secure-next-auth.session-token',
    );

    if (!session) {
      return NextResponse.redirect(process.env.NEXTAUTH_URL ?? '/');
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
