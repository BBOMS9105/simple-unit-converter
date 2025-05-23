'use client'

import { useEffect } from 'react'
import { useConverterStore } from '@/store'
import { CategorySelector } from './CategorySelector'
import { UnitSelector } from './UnitSelector'
import { NumberInput } from './NumberInput'
import { ConversionResult } from './ConversionResult'
import { ConversionCategory, CategoryType } from '@/types'
import { useLanguage } from '@/contexts/LanguageContext'

interface ConverterPanelProps {
  initialCategory?: ConversionCategory
}

export function ConverterPanel({ initialCategory }: ConverterPanelProps) {
  const { setSelectedCategory } = useConverterStore()
  const { t } = useLanguage()

  // 초기 카테고리 설정
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory.id as CategoryType)
    }
  }, [initialCategory, setSelectedCategory])

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 헤더 - 초기 카테고리가 없을 때만 표시 */}
      {!initialCategory && (
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.site.title}
          </h1>
          <p className="text-muted-foreground">
            {t.site.description}
          </p>
        </div>
      )}

      {/* 카테고리 선택 - 초기 카테고리가 없을 때만 표시 */}
      {!initialCategory && (
        <section aria-label={t.categories.title}>
          <CategorySelector />
        </section>
      )}

      {/* 단위 선택 */}
      <section aria-label={t.converter.selectFromUnit}>
        <UnitSelector />
      </section>

      {/* 입력 및 결과 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <section aria-label={t.converter.enterValue} className="flex flex-col">
          <NumberInput />
        </section>
        
        <section aria-label={t.converter.result} className="flex flex-col">
          <ConversionResult />
        </section>
      </div>

      {/* 도움말 - 초기 카테고리가 없을 때만 표시 */}
      {!initialCategory && (
        <div className="text-center text-sm text-muted-foreground border-t pt-6">
          <p>
            {t.converter.keyboardTip}
          </p>
        </div>
      )}
    </div>
  )
} 