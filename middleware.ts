// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/meet') {
    return NextResponse.redirect(new URL('https://meet.google.com/wzr-mkbj-ait'));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/meet',
};
