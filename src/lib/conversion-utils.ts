import { Unit, ConversionResult, ValidationResult, NumberFormatOptions } from '@/types'

/**
 * 기본 단위 변환 함수
 * 대부분의 카테고리에서 사용할 수 있는 선형 변환
 */
export function convertUnit(
  value: number,
  fromUnit: Unit,
  toUnit: Unit
): ConversionResult {
  try {
    // 같은 단위인 경우
    if (fromUnit.id === toUnit.id) {
      return {
        value,
        formatted: formatNumber(value),
      }
    }

    // 기준 단위로 변환 후 목표 단위로 변환
    const baseValue = value * fromUnit.toBase
    const result = baseValue / toUnit.toBase

    return {
      value: result,
      formatted: formatNumber(result),
    }
  } catch {
    return {
      value: 0,
      formatted: '0',
      error: '변환 중 오류가 발생했습니다.',
    }
  }
}

/**
 * 온도 변환 함수 (특별한 계산이 필요)
 */
export function convertTemperature(
  value: number,
  fromUnitId: string,
  toUnitId: string
): ConversionResult {
  try {
    if (fromUnitId === toUnitId) {
      return {
        value,
        formatted: formatNumber(value),
      }
    }

    let celsius: number

    // 입력 온도를 섭씨로 변환
    switch (fromUnitId) {
      case 'celsius':
        celsius = value
        break
      case 'fahrenheit':
        celsius = (value - 32) * 5/9
        break
      case 'kelvin':
        celsius = value - 273.15
        break
      case 'rankine':
        celsius = (value - 491.67) * 5/9
        break
      case 'reaumur':
        celsius = value * 5/4
        break
      case 'romer':
        celsius = (value - 7.5) * 40/21
        break
      case 'newton_scale':
        celsius = value * 100/33
        break
      case 'delisle':
        celsius = 100 - (value * 2/3)
        break
      default:
        throw new Error(`알 수 없는 온도 단위: ${fromUnitId}`)
    }

    let result: number

    // 섭씨에서 목표 온도로 변환
    switch (toUnitId) {
      case 'celsius':
        result = celsius
        break
      case 'fahrenheit':
        result = celsius * 9/5 + 32
        break
      case 'kelvin':
        result = celsius + 273.15
        break
      case 'rankine':
        result = celsius * 9/5 + 491.67
        break
      case 'reaumur':
        result = celsius * 4/5
        break
      case 'romer':
        result = (celsius * 21/40) + 7.5
        break
      case 'newton_scale':
        result = celsius * 33/100
        break
      case 'delisle':
        result = (100 - celsius) * 3/2
        break
      default:
        throw new Error(`알 수 없는 온도 단위: ${toUnitId}`)
    }

    return {
      value: result,
      formatted: formatNumber(result),
    }
  } catch (error) {
    return {
      value: 0,
      formatted: '0',
      error: error instanceof Error ? error.message : '온도 변환 중 오류가 발생했습니다.',
    }
  }
}

/**
 * 숫자 포맷팅 함수
 */
export function formatNumber(
  value: number,
  options: Partial<NumberFormatOptions> = {}
): string {
  const {
    precision = 6,
    useThousandsSeparator = true,
    locale = 'ko-KR'
  } = options

  // 0이거나 매우 작은 수인 경우
  if (value === 0) return '0'
  if (Math.abs(value) < 1e-15) return '0'

  // 매우 큰 수나 작은 수는 과학적 표기법 사용
  if (Math.abs(value) >= 1e15 || (Math.abs(value) < 1e-6 && value !== 0)) {
    return value.toExponential(precision)
  }

  // 일반적인 경우
  const fixed = parseFloat(value.toPrecision(precision))
  
  if (useThousandsSeparator) {
    return new Intl.NumberFormat(locale, {
      maximumFractionDigits: precision,
    }).format(fixed)
  }

  return fixed.toString()
}

/**
 * 입력 값 검증 함수
 */
export function validateInput(input: string): ValidationResult {
  if (!input || input.trim() === '') {
    return {
      isValid: false,
      error: '값을 입력해주세요.',
    }
  }

  const numericValue = parseFloat(input.replace(/,/g, ''))
  
  if (isNaN(numericValue)) {
    return {
      isValid: false,
      error: '유효한 숫자를 입력해주세요.',
    }
  }

  if (!isFinite(numericValue)) {
    return {
      isValid: false,
      error: '유한한 숫자를 입력해주세요.',
    }
  }

  return {
    isValid: true,
  }
}

/**
 * 문자열을 숫자로 변환
 */
export function parseInputValue(input: string): number {
  return parseFloat(input.replace(/,/g, ''))
}

/**
 * 단위 검색 함수
 */
export function searchUnits(query: string, units: Unit[]): Unit[] {
  if (!query.trim()) return units

  const lowerQuery = query.toLowerCase()
  
  return units.filter(unit => 
    unit.name.toLowerCase().includes(lowerQuery) ||
    unit.symbol.toLowerCase().includes(lowerQuery) ||
    unit.aliases?.some(alias => alias.toLowerCase().includes(lowerQuery))
  )
}

/**
 * ID로 고유한 변환 생성
 */
export function generateConversionId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 정밀도에 따른 반올림
 */
export function roundToPrecision(value: number, precision: number): number {
  const factor = Math.pow(10, precision)
  return Math.round(value * factor) / factor
} 