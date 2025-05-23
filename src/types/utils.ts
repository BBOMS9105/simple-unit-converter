import { Unit, CategoryType } from './converter'

// 변환 함수의 결과 타입
export interface ConversionResult {
  value: number
  formatted: string
  error?: string
}

// 변환 계산 함수 타입
export type ConversionFunction = (
  value: number,
  fromUnit: Unit,
  toUnit: Unit
) => ConversionResult

// 특별한 변환이 필요한 카테고리들의 변환 함수
export type SpecialConversionFunction = (
  value: number,
  fromUnitId: string,
  toUnitId: string
) => ConversionResult

// 숫자 포맷팅 옵션
export interface NumberFormatOptions {
  precision: number
  useThousandsSeparator: boolean
  locale: string
}

// 유효성 검사 결과
export interface ValidationResult {
  isValid: boolean
  error?: string
}

// 입력 값 검증 함수 타입
export type InputValidator = (input: string) => ValidationResult

// 단위 검색 옵션
export interface SearchOptions {
  category?: CategoryType
  fuzzy?: boolean
  limit?: number
}

// 변환 히스토리 필터 옵션
export interface HistoryFilterOptions {
  category?: CategoryType
  dateFrom?: Date
  dateTo?: Date
  limit?: number
}

// 로컬 스토리지 키 타입
export type StorageKey = 
  | 'conversion-history'
  | 'favorite-conversions'
  | 'app-settings'
  | 'recent-categories'

// API 응답 타입 (미래 확장용)
export interface ApiResponse<T> {
  data: T
  status: 'success' | 'error'
  message?: string
}

// 에러 타입
export interface ConversionError {
  type: 'invalid_input' | 'conversion_failed' | 'unit_not_found' | 'network_error'
  message: string
  details?: unknown
} 