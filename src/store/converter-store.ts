import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { 
  ConversionCategory, 
  Unit, 
  Conversion, 
  ConversionState,
  CategoryType,
  ConversionHistoryItem,
  FavoriteConversion
} from '@/types'
import { 
  generateConversionId,
  convertUnit,
  convertTemperature 
} from '@/lib/conversion-utils'

interface ConverterStoreState extends ConversionState {
  // 추가 상태
  categories: ConversionCategory[]
  history: ConversionHistoryItem[]
  favorites: FavoriteConversion[]
  
  // 계산된 값
  canConvert: boolean
  
  // Actions
  setSelectedCategory: (category: CategoryType | null) => void
  setFromUnit: (unit: Unit) => void
  setToUnit: (unit: Unit) => void
  setInputValue: (value: string) => void
  swapUnits: () => void
  performConversion: () => void
  addToFavorites: (name: string) => void
  removeFromFavorites: (id: string) => void
  clearHistory: () => void
  clearError: () => void
  
  // 카테고리 관련
  getUnitsForCategory: (categoryId: CategoryType) => Unit[]
  findUnitById: (unitId: string) => Unit | undefined
}

export const useConverterStore = create<ConverterStoreState>()(
  persist(
    (set, get) => ({
      // 초기 상태
      selectedCategory: null,
      fromUnit: null,
      toUnit: null,
      inputValue: '',
      result: null,
      isConverting: false,
      error: null,
      
      categories: [],
      history: [],
      favorites: [],
      
      // 계산된 값
      get canConvert() {
        const state = get()
        // state가 제대로 초기화되지 않은 경우 방어 처리
        if (!state) return false
        
        return !!(
          state.fromUnit && 
          state.toUnit && 
          state.inputValue && 
          state.inputValue.trim() !== '' &&
          !state.isConverting &&
          !state.error
        )
      },
      
      // Actions
      setSelectedCategory: (category: CategoryType | null) => {
        set({ 
          selectedCategory: category,
          fromUnit: null,
          toUnit: null,
          result: null,
          error: null
        })
      },
      
      setFromUnit: (unit: Unit) => {
        set({ fromUnit: unit, result: null, error: null })
        
        // 자동 변환 실행
        const state = get()
        if (state.toUnit && state.inputValue.trim()) {
          state.performConversion()
        }
      },
      
      setToUnit: (unit: Unit) => {
        set({ toUnit: unit, result: null, error: null })
        
        // 자동 변환 실행
        const state = get()
        if (state.fromUnit && state.inputValue.trim()) {
          state.performConversion()
        }
      },
      
      setInputValue: (value: string) => {
        set({ inputValue: value, result: null, error: null })
        
        // 자동 변환 실행
        const state = get()
        if (state.fromUnit && state.toUnit && value.trim()) {
          state.performConversion()
        }
      },
      
      swapUnits: () => {
        const { fromUnit, toUnit } = get()
        if (fromUnit && toUnit) {
          set({
            fromUnit: toUnit,
            toUnit: fromUnit,
            result: null,
            error: null
          })
          
          // 스왑 후 자동 변환
          const state = get()
          if (state.inputValue.trim()) {
            state.performConversion()
          }
        }
      },
      
      performConversion: () => {
        const { fromUnit, toUnit, inputValue, selectedCategory } = get()
        
        if (!fromUnit || !toUnit || !inputValue.trim()) {
          return
        }
        
        set({ isConverting: true, error: null })
        
        try {
          const numericValue = parseFloat(inputValue.replace(/,/g, ''))
          
          if (isNaN(numericValue)) {
            throw new Error('유효한 숫자를 입력해주세요.')
          }
          
          let conversionResult
          
          // 온도 변환은 특별 처리
          if (selectedCategory === 'temperature') {
            conversionResult = convertTemperature(numericValue, fromUnit.id, toUnit.id)
          } else {
            conversionResult = convertUnit(numericValue, fromUnit, toUnit)
          }
          
          if (conversionResult.error) {
            throw new Error(conversionResult.error)
          }
          
          const conversion: Conversion = {
            id: generateConversionId(),
            fromUnit,
            toUnit,
            value: numericValue,
            result: conversionResult.value,
            timestamp: new Date(),
            category: selectedCategory || fromUnit.category
          }
          
          const historyItem: ConversionHistoryItem = {
            id: generateConversionId(),
            conversion,
            timestamp: new Date()
          }
          
          set(state => ({
            result: conversionResult.value,
            isConverting: false,
            history: [historyItem, ...state.history.slice(0, 99)] // 최대 100개 유지
          }))
          
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : '변환 중 오류가 발생했습니다.',
            isConverting: false,
            result: null
          })
        }
      },
      
      addToFavorites: (name: string) => {
        const { fromUnit, toUnit, selectedCategory } = get()
        
        if (!fromUnit || !toUnit || !selectedCategory) {
          return
        }
        
        const favorite: FavoriteConversion = {
          id: generateConversionId(),
          name,
          fromUnitId: fromUnit.id,
          toUnitId: toUnit.id,
          category: selectedCategory,
          createdAt: new Date()
        }
        
        set(state => ({
          favorites: [...state.favorites, favorite]
        }))
      },
      
      removeFromFavorites: (id: string) => {
        set(state => ({
          favorites: state.favorites.filter(fav => fav.id !== id)
        }))
      },
      
      clearHistory: () => {
        set({ history: [] })
      },
      
      clearError: () => {
        set({ error: null })
      },
      
      // 헬퍼 함수들
      getUnitsForCategory: (categoryId: CategoryType) => {
        const { categories } = get()
        const category = categories.find(cat => cat.id === categoryId)
        return category?.units || []
      },
      
      findUnitById: (unitId: string) => {
        const { categories } = get()
        for (const category of categories) {
          const unit = category.units.find(unit => unit.id === unitId)
          if (unit) return unit
        }
        return undefined
      }
    }),
    {
      name: 'unit-converter-storage',
      skipHydration: true, // SSR에서 hydration 스킵
      partialize: (state) => ({
        history: state.history,
        favorites: state.favorites,
        selectedCategory: state.selectedCategory,
      }),
      // 오류 처리 추가
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.warn('Zustand persist: Failed to rehydrate state, using defaults:', error)
          // localStorage를 클리어하고 기본값 사용
          if (typeof window !== 'undefined') {
            try {
              localStorage.removeItem('unit-converter-storage')
            } catch (e) {
              console.warn('Failed to clear localStorage:', e)
            }
          }
        }
      },
      // 커스텀 storage로 오류 처리 강화
      storage: {
        getItem: (name) => {
          // 클라이언트 사이드에서만 실행
          if (typeof window === 'undefined') {
            return null
          }
          
          try {
            const item = localStorage.getItem(name)
            return item ? JSON.parse(item) : null
          } catch (error) {
            console.warn(`Failed to parse localStorage item "${name}":`, error)
            // 손상된 데이터 제거
            try {
              localStorage.removeItem(name)
            } catch (e) {
              console.warn('Failed to remove corrupted localStorage item:', e)
            }
            return null
          }
        },
        setItem: (name, value) => {
          // 클라이언트 사이드에서만 실행
          if (typeof window === 'undefined') {
            return
          }
          
          try {
            localStorage.setItem(name, JSON.stringify(value))
          } catch (error) {
            console.warn(`Failed to save to localStorage "${name}":`, error)
          }
        },
        removeItem: (name) => {
          // 클라이언트 사이드에서만 실행
          if (typeof window === 'undefined') {
            return
          }
          
          try {
            localStorage.removeItem(name)
          } catch (error) {
            console.warn(`Failed to remove localStorage item "${name}":`, error)
          }
        },
      },
    }
  )
) 