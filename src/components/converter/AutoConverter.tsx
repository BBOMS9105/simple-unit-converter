'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useConverterStore, useCategoriesStore } from '@/store'
import { ConversionCategory, CategoryType } from '@/types'

interface AutoConverterProps {
  category: ConversionCategory
}

export function AutoConverter({ category }: AutoConverterProps) {
  const searchParams = useSearchParams()
  const { setFromUnit, setToUnit, setInputValue, setSelectedCategory, fromUnit, toUnit, inputValue } = useConverterStore()
  const { getCategoryById, categories } = useCategoriesStore()

  useEffect(() => {
    // categories가 로드되기를 기다림
    if (categories.length === 0) {
      console.log('AutoConverter: categories 아직 로드되지 않음')
      return
    }

    // 카테고리 설정
    setSelectedCategory(category.id as CategoryType)

    // URL 매개변수에서 값 추출
    const fromUnitParam = searchParams.get('from')
    const toUnitParam = searchParams.get('to')
    const value = searchParams.get('value')

    console.log('AutoConverter 파라미터:', { fromUnit: fromUnitParam, toUnit: toUnitParam, value, categoryId: category.id })

    if (fromUnitParam && toUnitParam && value) {
      // categories store에서 현재 카테고리 찾기
      const storeCategory = getCategoryById(category.id)
      
      if (!storeCategory) {
        console.warn('AutoConverter: store에서 카테고리를 찾을 수 없음:', category.id)
        return
      }

      // 해당 카테고리에서 단위 찾기
      const fromUnitData = storeCategory.units.find(unit => unit.id === fromUnitParam)
      const toUnitData = storeCategory.units.find(unit => unit.id === toUnitParam)

      console.log('단위 찾기 결과:', { fromUnitData, toUnitData })

      if (fromUnitData && toUnitData) {
        console.log('자동 변환 설정 중:', { fromUnitData, toUnitData, value })
        
        // 약간의 지연을 두고 설정 (다른 초기화가 완료된 후)
        setTimeout(() => {
          setFromUnit(fromUnitData)
          setToUnit(toUnitData)
          setInputValue(value)
          
          console.log('AutoConverter: 단위 설정 완료')
        }, 50)
        
        // 설정 후 상태 확인 (다음 렌더 사이클에서)
        setTimeout(() => {
          const state = useConverterStore.getState()
          console.log('AutoConverter 설정 후 store 상태:', {
            storeFromUnit: state.fromUnit?.id,
            storeToUnit: state.toUnit?.id,
            storeInputValue: state.inputValue,
            storeSelectedCategory: state.selectedCategory
          })
        }, 200)
      } else {
        console.warn('단위를 찾을 수 없습니다:', { 
          fromUnit: fromUnitParam, 
          toUnit: toUnitParam, 
          availableUnits: storeCategory.units.map(u => u.id) 
        })
      }
    }
  }, [searchParams, category, setFromUnit, setToUnit, setInputValue, setSelectedCategory, getCategoryById, categories])

  // 현재 store 상태도 로그로 출력
  useEffect(() => {
    console.log('AutoConverter 현재 store 상태:', { 
      fromUnit: fromUnit?.id, 
      toUnit: toUnit?.id, 
      inputValue 
    })
  }, [fromUnit, toUnit, inputValue])

  return null // 이 컴포넌트는 UI를 렌더링하지 않음
} 