'use client'

import { useEffect } from 'react'
import { useConverterStore } from '@/store'
import { CategorySelector } from './CategorySelector'
import { UnitSelector } from './UnitSelector'
import { NumberInput } from './NumberInput'
import { ConversionResult } from './ConversionResult'
import { ConversionCategory, CategoryType } from '@/types'

interface ConverterPanelProps {
  initialCategory?: ConversionCategory
}

export function ConverterPanel({ initialCategory }: ConverterPanelProps) {
  const { setSelectedCategory } = useConverterStore()

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
            단위 변환기
          </h1>
          <p className="text-muted-foreground">
            다양한 단위를 빠르고 정확하게 변환해보세요
          </p>
        </div>
      )}

      {/* 카테고리 선택 - 초기 카테고리가 없을 때만 표시 */}
      {!initialCategory && (
        <section aria-label="카테고리 선택">
          <CategorySelector />
        </section>
      )}

      {/* 단위 선택 */}
      <section aria-label="단위 선택">
        <UnitSelector />
      </section>

      {/* 입력 및 결과 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <section aria-label="값 입력" className="flex flex-col">
          <NumberInput />
        </section>
        
        <section aria-label="변환 결과" className="flex flex-col">
          <ConversionResult />
        </section>
      </div>

      {/* 도움말 - 초기 카테고리가 없을 때만 표시 */}
      {!initialCategory && (
        <div className="text-center text-sm text-muted-foreground border-t pt-6">
          <p>
            💡 팁: 키보드 단축키를 사용하여 더 빠르게 변환할 수 있습니다
          </p>
        </div>
      )}
    </div>
  )
} 