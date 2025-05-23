import { create } from 'zustand'
import { ConversionCategory, Unit, CategoryType } from '@/types'
import { conversionCategories } from '@/data/units'

interface CategoriesStoreState {
  categories: ConversionCategory[]
  isLoading: boolean
  error: string | null
  
  // Actions
  setCategories: (categories: ConversionCategory[]) => void
  addCategory: (category: ConversionCategory) => void
  updateCategory: (id: string, updates: Partial<ConversionCategory>) => void
  removeCategory: (id: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  // Selectors
  getCategoryById: (id: string) => ConversionCategory | undefined
  getUnitsByCategory: (categoryId: CategoryType) => Unit[]
  findUnitById: (unitId: string) => Unit | undefined
  searchUnits: (query: string, categoryId?: CategoryType) => Unit[]
  getAllUnits: () => Unit[]
}

export const useCategoriesStore = create<CategoriesStoreState>((set, get) => ({
  // 초기 상태
  categories: [],
  isLoading: false,
  error: null,
  
  // Actions
  setCategories: (categories) => {
    set({ categories, error: null })
  },
  
  addCategory: (category) => {
    set(state => ({
      categories: [...state.categories, category]
    }))
  },
  
  updateCategory: (id, updates) => {
    set(state => ({
      categories: state.categories.map(cat => 
        cat.id === id ? { ...cat, ...updates } : cat
      )
    }))
  },
  
  removeCategory: (id) => {
    set(state => ({
      categories: state.categories.filter(cat => cat.id !== id)
    }))
  },
  
  setLoading: (loading) => {
    set({ isLoading: loading })
  },
  
  setError: (error) => {
    set({ error })
  },
  
  // Selectors
  getCategoryById: (id) => {
    const { categories } = get()
    return categories.find(cat => cat.id === id)
  },
  
  getUnitsByCategory: (categoryId) => {
    const { categories } = get()
    const category = categories.find(cat => cat.id === categoryId)
    return category?.units || []
  },
  
  findUnitById: (unitId) => {
    const { categories } = get()
    for (const category of categories) {
      const unit = category.units.find(unit => unit.id === unitId)
      if (unit) return unit
    }
    return undefined
  },
  
  searchUnits: (query, categoryId) => {
    const { categories } = get()
    const lowerQuery = query.toLowerCase()
    
    let allUnits: Unit[] = []
    
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId)
      allUnits = category?.units || []
    } else {
      allUnits = categories.flatMap(cat => cat.units)
    }
    
    return allUnits.filter(unit => 
      unit.name.toLowerCase().includes(lowerQuery) ||
      unit.symbol.toLowerCase().includes(lowerQuery) ||
      unit.aliases?.some(alias => alias.toLowerCase().includes(lowerQuery))
    )
  },
  
  getAllUnits: () => {
    const { categories } = get()
    return categories.flatMap(cat => cat.units)
  }
}))

// 카테고리 데이터를 초기화하는 함수
export const initializeCategories = () => {
  const store = useCategoriesStore.getState()
  
  // 실제 카테고리 데이터 로드
  if (store.categories.length === 0) {
    store.setLoading(true)
    
    try {
      // 데이터를 즉시 로드 (정적 데이터이므로)
      store.setCategories(conversionCategories)
      store.setLoading(false)
    } catch (error) {
      console.error('Failed to load conversion categories:', error)
      store.setError('카테고리 데이터를 로드하는데 실패했습니다.')
      store.setLoading(false)
    }
  }
} 