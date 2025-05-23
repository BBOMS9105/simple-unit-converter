// 변환 카테고리를 나타내는 인터페이스
export interface ConversionCategory {
  id: string
  name: string
  description: string
  icon: string
  units: Unit[]
}

// 개별 단위를 나타내는 인터페이스
export interface Unit {
  id: string
  name: string
  symbol: string
  toBase: number // 기준 단위로 변환하는 계수
  category: string
  aliases?: string[] // 단위의 별명들 (검색용)
}

// 변환 결과를 나타내는 인터페이스
export interface Conversion {
  id: string
  fromUnit: Unit
  toUnit: Unit
  value: number
  result: number
  timestamp: Date
  category: string
}

// 즐겨찾기 변환을 나타내는 인터페이스
export interface FavoriteConversion {
  id: string
  name: string
  fromUnitId: string
  toUnitId: string
  category: string
  createdAt: Date
}

// 변환 히스토리 항목
export interface ConversionHistoryItem {
  id: string
  conversion: Conversion
  timestamp: Date
}

// 애플리케이션 설정
export interface AppSettings {
  theme: 'light' | 'dark' | 'system'
  precision: number // 소수점 자릿수
  favoriteCategories: string[]
  showHistory: boolean
  maxHistoryItems: number
}

// 변환 카테고리 타입
export type CategoryType = 
  | 'length'
  | 'weight' 
  | 'volume'
  | 'temperature'
  | 'time'
  | 'data'
  | 'speed'
  | 'area'
  | 'pressure'
  | 'energy'

// 변환 상태
export interface ConversionState {
  selectedCategory: CategoryType | null
  fromUnit: Unit | null
  toUnit: Unit | null
  inputValue: string
  result: number | null
  isConverting: boolean
  error: string | null
}

// 검색 결과
export interface SearchResult {
  type: 'unit' | 'category'
  id: string
  name: string
  category: string
  description?: string
}

// 단위 그룹 (UI 표시용)
export interface UnitGroup {
  name: string
  units: Unit[]
} 