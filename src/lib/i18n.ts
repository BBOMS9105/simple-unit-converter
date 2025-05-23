import { type Translation } from '@/locales'

export const locales = ['ko', 'en', 'ja', 'es'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ko'

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  es: 'Español'
}

export const localeFlags: Record<Locale, string> = {
  ko: '🇰🇷',
  en: '🇺🇸',
  ja: '🇯🇵',
  es: '🇪🇸'
}

// 국가 코드에 따른 언어 매핑
export const countryToLocale: Record<string, Locale> = {
  // 한국
  'KR': 'ko',
  
  // 일본
  'JP': 'ja',
  
  // 스페인어권
  'ES': 'es', // 스페인
  'MX': 'es', // 멕시코
  'AR': 'es', // 아르헨티나
  'CO': 'es', // 콜롬비아
  'PE': 'es', // 페루
  'VE': 'es', // 베네수엘라
  'CL': 'es', // 칠레
  'EC': 'es', // 에콰도르
  'BO': 'es', // 볼리비아
  'PY': 'es', // 파라과이
  'UY': 'es', // 우루과이
  'CR': 'es', // 코스타리카
  'PA': 'es', // 파나마
  'GT': 'es', // 과테말라
  'HN': 'es', // 온두라스
  'SV': 'es', // 엘살바도르
  'NI': 'es', // 니카라과
  'CU': 'es', // 쿠바
  'DO': 'es', // 도미니카 공화국
  'PR': 'es', // 푸에르토리코
  
  // 영어권
  'US': 'en', // 미국
  'GB': 'en', // 영국
  'CA': 'en', // 캐나다
  'AU': 'en', // 호주
  'NZ': 'en', // 뉴질랜드
  'IE': 'en', // 아일랜드
  'ZA': 'en', // 남아프리카공화국
  'SG': 'en', // 싱가포르
  'IN': 'en', // 인도
  'PH': 'en', // 필리핀
  'MY': 'en', // 말레이시아
}

// Accept-Language 헤더 파싱
export function parseAcceptLanguage(acceptLanguage: string): Locale {
  if (!acceptLanguage) return defaultLocale
  
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
  
  for (const lang of languages) {
    if (lang.startsWith('ko')) return 'ko'
    if (lang.startsWith('ja')) return 'ja'
    if (lang.startsWith('es')) return 'es'
    if (lang.startsWith('en')) return 'en'
  }
  
  return 'en' // 기본값
}

// 쿠키에서 locale 읽기
export function getLocaleFromCookie(cookies: string): Locale {
  const match = cookies.match(/locale=([^;]+)/)
  const locale = match?.[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

// 단위 이름 번역 헬퍼 함수
export function getUnitName(unitId: string, t: Translation): string {
  // units 객체에서 단위 ID에 해당하는 번역을 찾음
  const unitName = (t.units as any)[unitId]
  return unitName || unitId // 번역이 없으면 원본 ID 반환
} 