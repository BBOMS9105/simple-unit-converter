'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type Locale } from '@/lib/i18n'

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]) // 기본값: 한국어

  const handleLanguageChange = (language: { code: Locale; name: string; flag: string }) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('언어 변경:', language.name)
    }
    setCurrentLanguage(language)
    // TODO: 실제 언어 변경 로직 구현 (다국어 지원 시스템 완성 후)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-sm">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-sm">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`flex items-center gap-3 ${
              currentLanguage.code === language.code ? 'bg-accent' : ''
            }`}
          >
            <span className="text-base">{language.flag}</span>
            <span>{language.name}</span>
            {currentLanguage.code === language.code && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 