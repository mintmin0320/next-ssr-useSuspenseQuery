import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 기존 요청의 헤더 복사
  const headers = new Headers(request.headers)
  headers.set('Authorization', `Bearer ${token}`)

  return NextResponse.next({
    request: {
      headers,
    },
  })
}
