import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { countryToLocale, parseAcceptLanguage, getLocaleFromCookie, defaultLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  // 이미 locale 쿠키가 있으면 그대로 통과
  const existingLocale = getLocaleFromCookie(request.headers.get('cookie') || '')
  if (existingLocale !== defaultLocale) {
    return NextResponse.next()
  }

  // 지리적 위치 기반 언어 감지
  // Vercel의 경우 x-vercel-ip-country, Cloudflare의 경우 cf-ipcountry 헤더 사용
  const country = request.headers.get('x-vercel-ip-country') || 
                 request.headers.get('cf-ipcountry') || 
                 request.headers.get('x-country-code') || ''
  let detectedLocale: Locale = defaultLocale

  // 1. 국가 코드로 언어 결정
  if (country && countryToLocale[country]) {
    detectedLocale = countryToLocale[country]
  } else {
    // 2. Accept-Language 헤더로 언어 결정
    const acceptLanguage = request.headers.get('accept-language') || ''
    detectedLocale = parseAcceptLanguage(acceptLanguage)
  }

  // 기본 언어와 다른 경우에만 쿠키 설정
  if (detectedLocale !== defaultLocale) {
    const response = NextResponse.next()
    
    // 쿠키 설정 (1년 유효)
    response.cookies.set('locale', detectedLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax'
    })

    // 감지된 언어 정보를 헤더에 추가 (클라이언트에서 사용 가능)
    response.headers.set('x-detected-locale', detectedLocale)
    response.headers.set('x-detected-country', country)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 모든 경로에 적용하되, API 경로와 정적 파일은 제외
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
} 