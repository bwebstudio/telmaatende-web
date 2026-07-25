import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale } from '@/content'

// Redirect the bare root to the default language. Everything else lives
// under /pt and /en, so this is the only rewrite we need.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}`
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
