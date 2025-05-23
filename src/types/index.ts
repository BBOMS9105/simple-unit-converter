// 변환 관련 타입들
export type {
  ConversionCategory,
  Unit,
  Conversion,
  FavoriteConversion,
  ConversionHistoryItem,
  AppSettings,
  CategoryType,
  ConversionState,
  SearchResult,
  UnitGroup,
} from './converter'

// 유틸리티 타입들
export type {
  ConversionResult,
  ConversionFunction,
  SpecialConversionFunction,
  NumberFormatOptions,
  ValidationResult,
  InputValidator,
  SearchOptions,
  HistoryFilterOptions,
  StorageKey,
  ApiResponse,
  ConversionError,
} from './utils'

// AppSettings를 값으로 import
import type { AppSettings } from './converter'

// 상수들
export const DEFAULT_PRECISION = 6
export const MAX_HISTORY_ITEMS = 100
export const STORAGE_KEYS = {
  HISTORY: 'conversion-history',
  FAVORITES: 'favorite-conversions',
  SETTINGS: 'app-settings',
  RECENT_CATEGORIES: 'recent-categories',
} as const

// 기본 설정
export const DEFAULT_SETTINGS: AppSettings = {
  theme: 'system',
  precision: DEFAULT_PRECISION,
  favoriteCategories: [],
  showHistory: true,
  maxHistoryItems: MAX_HISTORY_ITEMS,
} 