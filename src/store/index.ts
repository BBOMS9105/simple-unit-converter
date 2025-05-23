// 스토어들 export
export { useConverterStore } from './converter-store'
export { useSettingsStore } from './settings-store'
export { useCategoriesStore, initializeCategories } from './categories-store'

// 타입들 re-export (편의를 위해)
export type {
  ConversionCategory,
  Unit,
  Conversion,
  ConversionState,
  CategoryType,
  ConversionHistoryItem,
  FavoriteConversion,
  AppSettings
} from '@/types'

// 스토어들을 import
import { useConverterStore } from './converter-store'
import { useSettingsStore } from './settings-store'
import { useCategoriesStore, initializeCategories } from './categories-store'

// 스토어 상태 타입들
export type ConverterStoreState = ReturnType<typeof useConverterStore.getState>
export type SettingsStoreState = ReturnType<typeof useSettingsStore.getState>
export type CategoriesStoreState = ReturnType<typeof useCategoriesStore.getState>

// 전역 스토어 초기화 함수
export const initializeStores = () => {
  // 카테고리 데이터 초기화
  initializeCategories()
  
  // 다른 스토어들의 초기화가 필요하다면 여기에 추가
}

// 스토어 리셋 함수 (개발/테스트용)
export const resetAllStores = () => {
  const converterStore = useConverterStore.getState()
  const settingsStore = useSettingsStore.getState()
  const categoriesStore = useCategoriesStore.getState()
  
  // 설정 리셋
  settingsStore.resetSettings()
  
  // 변환 히스토리와 즐겨찾기 클리어
  converterStore.clearHistory()
  converterStore.clearError()
  
  // 선택된 카테고리와 단위 클리어
  converterStore.setSelectedCategory(null)
  converterStore.setInputValue('')
  
  // 카테고리 에러 클리어
  categoriesStore.setError(null)
}

// 유틸리티 훅들
export const useConverterActions = () => {
  const store = useConverterStore()
  return {
    setSelectedCategory: store.setSelectedCategory,
    setFromUnit: store.setFromUnit,
    setToUnit: store.setToUnit,
    setInputValue: store.setInputValue,
    swapUnits: store.swapUnits,
    performConversion: store.performConversion,
    addToFavorites: store.addToFavorites,
    removeFromFavorites: store.removeFromFavorites,
    clearHistory: store.clearHistory,
    clearError: store.clearError,
  }
}

export const useConverterSelectors = () => {
  const store = useConverterStore()
  return {
    selectedCategory: store.selectedCategory,
    fromUnit: store.fromUnit,
    toUnit: store.toUnit,
    inputValue: store.inputValue,
    result: store.result,
    isConverting: store.isConverting,
    error: store.error,
    history: store.history,
    favorites: store.favorites,
    canConvert: store.canConvert,
  }
}

export const useSettingsActions = () => {
  const store = useSettingsStore()
  return {
    setTheme: store.setTheme,
    setPrecision: store.setPrecision,
    toggleFavoriteCategory: store.toggleFavoriteCategory,
    setShowHistory: store.setShowHistory,
    setMaxHistoryItems: store.setMaxHistoryItems,
    resetSettings: store.resetSettings,
  }
}

export const useCategoriesActions = () => {
  const store = useCategoriesStore()
  return {
    setCategories: store.setCategories,
    addCategory: store.addCategory,
    updateCategory: store.updateCategory,
    removeCategory: store.removeCategory,
    setLoading: store.setLoading,
    setError: store.setError,
  }
}

export const useCategoriesSelectors = () => {
  const store = useCategoriesStore()
  return {
    categories: store.categories,
    isLoading: store.isLoading,
    error: store.error,
    getCategoryById: store.getCategoryById,
    getUnitsByCategory: store.getUnitsByCategory,
    findUnitById: store.findUnitById,
    searchUnits: store.searchUnits,
    getAllUnits: store.getAllUnits,
  }
} 