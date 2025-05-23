import { 
  ConversionHistoryItem, 
  FavoriteConversion, 
  AppSettings, 
  StorageKey,
  DEFAULT_SETTINGS 
} from '@/types'

/**
 * 로컬 스토리지에서 안전하게 데이터를 가져오는 함수
 */
export function getFromStorage<T>(key: StorageKey, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue
  }

  try {
    const item = localStorage.getItem(key)
    if (item === null) {
      return defaultValue
    }
    return JSON.parse(item)
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error)
    return defaultValue
  }
}

/**
 * 로컬 스토리지에 안전하게 데이터를 저장하는 함수
 */
export function saveToStorage<T>(key: StorageKey, value: T): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error saving to localStorage key "${key}":`, error)
    return false
  }
}

/**
 * 로컬 스토리지에서 데이터를 제거하는 함수
 */
export function removeFromStorage(key: StorageKey): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Error removing from localStorage key "${key}":`, error)
    return false
  }
}

/**
 * 변환 히스토리 관련 함수들
 */
export const historyStorage = {
  get(): ConversionHistoryItem[] {
    return getFromStorage('conversion-history', [])
  },

  add(item: ConversionHistoryItem): void {
    const history = this.get()
    
    // 동일한 변환이 있으면 제거 (최신 것만 유지)
    const filtered = history.filter(h => 
      !(h.conversion.fromUnit.id === item.conversion.fromUnit.id && 
        h.conversion.toUnit.id === item.conversion.toUnit.id &&
        h.conversion.value === item.conversion.value)
    )
    
    // 새 항목을 맨 앞에 추가
    filtered.unshift(item)
    
    // 최대 100개 항목만 유지
    const trimmed = filtered.slice(0, 100)
    
    saveToStorage('conversion-history', trimmed)
  },

  clear(): void {
    saveToStorage('conversion-history', [])
  },

  remove(id: string): void {
    const history = this.get()
    const filtered = history.filter(item => item.id !== id)
    saveToStorage('conversion-history', filtered)
  }
}

/**
 * 즐겨찾기 관련 함수들
 */
export const favoritesStorage = {
  get(): FavoriteConversion[] {
    return getFromStorage('favorite-conversions', [])
  },

  add(favorite: FavoriteConversion): void {
    const favorites = this.get()
    
    // 중복 확인
    const exists = favorites.some(f => 
      f.fromUnitId === favorite.fromUnitId && 
      f.toUnitId === favorite.toUnitId &&
      f.category === favorite.category
    )
    
    if (!exists) {
      favorites.push(favorite)
      saveToStorage('favorite-conversions', favorites)
    }
  },

  remove(id: string): void {
    const favorites = this.get()
    const filtered = favorites.filter(item => item.id !== id)
    saveToStorage('favorite-conversions', filtered)
  },

  isFavorite(fromUnitId: string, toUnitId: string, category: string): boolean {
    const favorites = this.get()
    return favorites.some(f => 
      f.fromUnitId === fromUnitId && 
      f.toUnitId === toUnitId &&
      f.category === category
    )
  },

  clear(): void {
    saveToStorage('favorite-conversions', [])
  }
}

/**
 * 앱 설정 관련 함수들
 */
export const settingsStorage = {
  get(): AppSettings {
    return getFromStorage('app-settings', DEFAULT_SETTINGS)
  },

  save(settings: Partial<AppSettings>): void {
    const current = this.get()
    const updated = { ...current, ...settings }
    saveToStorage('app-settings', updated)
  },

  reset(): void {
    saveToStorage('app-settings', DEFAULT_SETTINGS)
  }
}

/**
 * 최근 사용한 카테고리 관련 함수들
 */
export const recentCategoriesStorage = {
  get(): string[] {
    return getFromStorage('recent-categories', [])
  },

  add(category: string): void {
    const recent = this.get()
    
    // 기존에 있으면 제거
    const filtered = recent.filter(c => c !== category)
    
    // 맨 앞에 추가
    filtered.unshift(category)
    
    // 최대 5개만 유지
    const trimmed = filtered.slice(0, 5)
    
    saveToStorage('recent-categories', trimmed)
  },

  clear(): void {
    saveToStorage('recent-categories', [])
  }
}

/**
 * 모든 저장된 데이터를 초기화하는 함수
 */
export function clearAllStorage(): void {
  historyStorage.clear()
  favoritesStorage.clear()
  settingsStorage.reset()
  recentCategoriesStorage.clear()
} 