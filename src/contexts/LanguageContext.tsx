'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { defaultLocale } from '@/lib/i18n'
import { getTranslation, type Translation } from '@/locales'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || defaultLocale)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    
    // 클라이언트에서 쿠키나 로컬스토리지에서 언어 설정 읽기
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale
      if (savedLocale && ['ko', 'en', 'ja', 'es'].includes(savedLocale)) {
        setLocaleState(savedLocale)
      } else if (initialLocale) {
        setLocaleState(initialLocale)
      }
    }
  }, [initialLocale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    
    // 로컬스토리지와 쿠키에 저장
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
      document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}` // 1년
    }
  }

  const t = getTranslation(locale)

  // Hydration 불일치 방지
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{
        locale: defaultLocale,
        setLocale: () => {},
        t: getTranslation(defaultLocale)
      }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 