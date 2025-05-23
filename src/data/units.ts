import { ConversionCategory, Unit } from '@/types'

// 길이 단위 (미터를 기준으로)
const lengthUnits: Unit[] = [
  { id: 'millimeter', name: '밀리미터', symbol: 'mm', toBase: 0.001, category: 'length', aliases: ['mm', '밀리미터'] },
  { id: 'centimeter', name: '센티미터', symbol: 'cm', toBase: 0.01, category: 'length', aliases: ['cm', '센티미터'] },
  { id: 'meter', name: '미터', symbol: 'm', toBase: 1, category: 'length', aliases: ['m', '미터', '메터'] },
  { id: 'kilometer', name: '킬로미터', symbol: 'km', toBase: 1000, category: 'length', aliases: ['km', '킬로미터'] },
  { id: 'inch', name: '인치', symbol: 'in', toBase: 0.0254, category: 'length', aliases: ['in', '인치', '"'] },
  { id: 'foot', name: '피트', symbol: 'ft', toBase: 0.3048, category: 'length', aliases: ['ft', '피트', "'"] },
  { id: 'yard', name: '야드', symbol: 'yd', toBase: 0.9144, category: 'length', aliases: ['yd', '야드'] },
  { id: 'mile', name: '마일', symbol: 'mi', toBase: 1609.34, category: 'length', aliases: ['mi', '마일'] },
]

// 무게 단위 (킬로그램을 기준으로)
const weightUnits: Unit[] = [
  { id: 'milligram', name: '밀리그램', symbol: 'mg', toBase: 0.000001, category: 'weight', aliases: ['mg', '밀리그램'] },
  { id: 'gram', name: '그램', symbol: 'g', toBase: 0.001, category: 'weight', aliases: ['g', '그램'] },
  { id: 'kilogram', name: '킬로그램', symbol: 'kg', toBase: 1, category: 'weight', aliases: ['kg', '킬로그램'] },
  { id: 'pound', name: '파운드', symbol: 'lb', toBase: 0.453592, category: 'weight', aliases: ['lb', '파운드', 'lbs'] },
  { id: 'ounce', name: '온스', symbol: 'oz', toBase: 0.0283495, category: 'weight', aliases: ['oz', '온스'] },
  { id: 'ton', name: '톤', symbol: 't', toBase: 1000, category: 'weight', aliases: ['t', '톤', 'ton'] },
  { id: 'stone', name: '스톤', symbol: 'st', toBase: 6.35029, category: 'weight', aliases: ['st', '스톤'] },
]

// 부피 단위 (리터를 기준으로)
const volumeUnits: Unit[] = [
  { id: 'milliliter', name: '밀리리터', symbol: 'ml', toBase: 0.001, category: 'volume', aliases: ['ml', '밀리리터'] },
  { id: 'liter', name: '리터', symbol: 'L', toBase: 1, category: 'volume', aliases: ['L', '리터', 'l'] },
  { id: 'gallon', name: '갤런', symbol: 'gal', toBase: 3.78541, category: 'volume', aliases: ['gal', '갤런'] },
  { id: 'quart', name: '쿼트', symbol: 'qt', toBase: 0.946353, category: 'volume', aliases: ['qt', '쿼트'] },
  { id: 'pint', name: '파인트', symbol: 'pt', toBase: 0.473176, category: 'volume', aliases: ['pt', '파인트'] },
  { id: 'cup', name: '컵', symbol: 'cup', toBase: 0.236588, category: 'volume', aliases: ['cup', '컵'] },
  { id: 'fluid_ounce', name: '액량온스', symbol: 'fl oz', toBase: 0.0295735, category: 'volume', aliases: ['fl oz', '액량온스'] },
  { id: 'tablespoon', name: '테이블스푼', symbol: 'tbsp', toBase: 0.0147868, category: 'volume', aliases: ['tbsp', '테이블스푼'] },
  { id: 'teaspoon', name: '티스푼', symbol: 'tsp', toBase: 0.00492892, category: 'volume', aliases: ['tsp', '티스푼'] },
]

// 온도 단위 (특별 처리 - 기준값은 의미없음)
const temperatureUnits: Unit[] = [
  { id: 'celsius', name: '섭씨', symbol: '°C', toBase: 1, category: 'temperature', aliases: ['°C', '섭씨', 'C'] },
  { id: 'fahrenheit', name: '화씨', symbol: '°F', toBase: 1, category: 'temperature', aliases: ['°F', '화씨', 'F'] },
  { id: 'kelvin', name: '켈빈', symbol: 'K', toBase: 1, category: 'temperature', aliases: ['K', '켈빈'] },
  { id: 'rankine', name: '랭킨', symbol: '°R', toBase: 1, category: 'temperature', aliases: ['°R', '랭킨', 'R'] },
]

// 시간 단위 (초를 기준으로)
const timeUnits: Unit[] = [
  { id: 'millisecond', name: '밀리초', symbol: 'ms', toBase: 0.001, category: 'time', aliases: ['ms', '밀리초'] },
  { id: 'second', name: '초', symbol: 's', toBase: 1, category: 'time', aliases: ['s', '초', 'sec'] },
  { id: 'minute', name: '분', symbol: 'min', toBase: 60, category: 'time', aliases: ['min', '분'] },
  { id: 'hour', name: '시간', symbol: 'h', toBase: 3600, category: 'time', aliases: ['h', '시간', 'hr'] },
  { id: 'day', name: '일', symbol: 'd', toBase: 86400, category: 'time', aliases: ['d', '일', 'day'] },
  { id: 'week', name: '주', symbol: 'wk', toBase: 604800, category: 'time', aliases: ['wk', '주', 'week'] },
  { id: 'month', name: '월', symbol: 'mo', toBase: 2629746, category: 'time', aliases: ['mo', '월', 'month'] },
  { id: 'year', name: '년', symbol: 'yr', toBase: 31556952, category: 'time', aliases: ['yr', '년', 'year'] },
]

// 데이터 단위 (바이트를 기준으로)
const dataUnits: Unit[] = [
  { id: 'bit', name: '비트', symbol: 'bit', toBase: 0.125, category: 'data', aliases: ['bit', '비트'] },
  { id: 'byte', name: '바이트', symbol: 'B', toBase: 1, category: 'data', aliases: ['B', '바이트'] },
  
  // 십진 단위 (1000의 배수)
  { id: 'kilobyte', name: '킬로바이트', symbol: 'KB', toBase: 1000, category: 'data', aliases: ['KB', '킬로바이트'] },
  { id: 'megabyte', name: '메가바이트', symbol: 'MB', toBase: 1000000, category: 'data', aliases: ['MB', '메가바이트'] },
  { id: 'gigabyte', name: '기가바이트', symbol: 'GB', toBase: 1000000000, category: 'data', aliases: ['GB', '기가바이트'] },
  { id: 'terabyte', name: '테라바이트', symbol: 'TB', toBase: 1000000000000, category: 'data', aliases: ['TB', '테라바이트'] },
  { id: 'petabyte', name: '페타바이트', symbol: 'PB', toBase: 1000000000000000, category: 'data', aliases: ['PB', '페타바이트'] },
  
  // 이진 단위 (1024의 배수)
  { id: 'kibibyte', name: '키비바이트', symbol: 'KiB', toBase: 1024, category: 'data', aliases: ['KiB', '키비바이트'] },
  { id: 'mebibyte', name: '메비바이트', symbol: 'MiB', toBase: 1048576, category: 'data', aliases: ['MiB', '메비바이트'] },
  { id: 'gibibyte', name: '기비바이트', symbol: 'GiB', toBase: 1073741824, category: 'data', aliases: ['GiB', '기비바이트'] },
  { id: 'tebibyte', name: '테비바이트', symbol: 'TiB', toBase: 1099511627776, category: 'data', aliases: ['TiB', '테비바이트'] },
  { id: 'pebibyte', name: '페비바이트', symbol: 'PiB', toBase: 1125899906842624, category: 'data', aliases: ['PiB', '페비바이트'] },
]

// 속도 단위 (미터/초를 기준으로)
const speedUnits: Unit[] = [
  { id: 'meter_per_second', name: '미터/초', symbol: 'm/s', toBase: 1, category: 'speed', aliases: ['m/s', '미터/초'] },
  { id: 'kilometer_per_hour', name: '킬로미터/시', symbol: 'km/h', toBase: 0.277778, category: 'speed', aliases: ['km/h', '킬로미터/시', 'kph'] },
  { id: 'mile_per_hour', name: '마일/시', symbol: 'mph', toBase: 0.44704, category: 'speed', aliases: ['mph', '마일/시'] },
  { id: 'foot_per_second', name: '피트/초', symbol: 'ft/s', toBase: 0.3048, category: 'speed', aliases: ['ft/s', '피트/초'] },
  { id: 'knot', name: '노트', symbol: 'kn', toBase: 0.514444, category: 'speed', aliases: ['kn', '노트', 'knot'] },
  { id: 'mach', name: '마하', symbol: 'M', toBase: 343, category: 'speed', aliases: ['M', '마하', 'mach'] },
]

// 면적 단위 (제곱미터를 기준으로)
const areaUnits: Unit[] = [
  { id: 'square_millimeter', name: '제곱밀리미터', symbol: 'mm²', toBase: 0.000001, category: 'area', aliases: ['mm²', 'mm2', '제곱밀리미터'] },
  { id: 'square_centimeter', name: '제곱센티미터', symbol: 'cm²', toBase: 0.0001, category: 'area', aliases: ['cm²', 'cm2', '제곱센티미터'] },
  { id: 'square_meter', name: '제곱미터', symbol: 'm²', toBase: 1, category: 'area', aliases: ['m²', 'm2', '제곱미터'] },
  { id: 'square_kilometer', name: '제곱킬로미터', symbol: 'km²', toBase: 1000000, category: 'area', aliases: ['km²', 'km2', '제곱킬로미터'] },
  { id: 'square_inch', name: '제곱인치', symbol: 'in²', toBase: 0.00064516, category: 'area', aliases: ['in²', 'in2', '제곱인치'] },
  { id: 'square_foot', name: '제곱피트', symbol: 'ft²', toBase: 0.092903, category: 'area', aliases: ['ft²', 'ft2', '제곱피트'] },
  { id: 'acre', name: '에이커', symbol: 'ac', toBase: 4046.86, category: 'area', aliases: ['ac', '에이커', 'acre'] },
  { id: 'hectare', name: '헥타르', symbol: 'ha', toBase: 10000, category: 'area', aliases: ['ha', '헥타르'] },
]

// 압력 단위 (파스칼을 기준으로)
const pressureUnits: Unit[] = [
  { id: 'pascal', name: '파스칼', symbol: 'Pa', toBase: 1, category: 'pressure', aliases: ['Pa', '파스칼'] },
  { id: 'kilopascal', name: '킬로파스칼', symbol: 'kPa', toBase: 1000, category: 'pressure', aliases: ['kPa', '킬로파스칼'] },
  { id: 'bar', name: '바', symbol: 'bar', toBase: 100000, category: 'pressure', aliases: ['bar', '바'] },
  { id: 'atmosphere', name: '기압', symbol: 'atm', toBase: 101325, category: 'pressure', aliases: ['atm', '기압'] },
  { id: 'psi', name: 'PSI', symbol: 'psi', toBase: 6894.76, category: 'pressure', aliases: ['psi', 'PSI'] },
  { id: 'torr', name: '토르', symbol: 'Torr', toBase: 133.322, category: 'pressure', aliases: ['Torr', '토르', 'torr'] },
  { id: 'mmhg', name: '수은주밀리미터', symbol: 'mmHg', toBase: 133.322, category: 'pressure', aliases: ['mmHg', '수은주밀리미터'] },
]

// 에너지 단위 (줄을 기준으로)
const energyUnits: Unit[] = [
  { id: 'joule', name: '줄', symbol: 'J', toBase: 1, category: 'energy', aliases: ['J', '줄', 'joule'] },
  { id: 'kilojoule', name: '킬로줄', symbol: 'kJ', toBase: 1000, category: 'energy', aliases: ['kJ', '킬로줄'] },
  { id: 'calorie', name: '칼로리', symbol: 'cal', toBase: 4.184, category: 'energy', aliases: ['cal', '칼로리'] },
  { id: 'kilocalorie', name: '킬로칼로리', symbol: 'kcal', toBase: 4184, category: 'energy', aliases: ['kcal', '킬로칼로리'] },
  { id: 'watt_hour', name: '와트시', symbol: 'Wh', toBase: 3600, category: 'energy', aliases: ['Wh', '와트시'] },
  { id: 'kilowatt_hour', name: '킬로와트시', symbol: 'kWh', toBase: 3600000, category: 'energy', aliases: ['kWh', '킬로와트시'] },
  { id: 'btu', name: 'BTU', symbol: 'BTU', toBase: 1055.06, category: 'energy', aliases: ['BTU', 'btu'] },
]

// 카테고리 정의
export const conversionCategories: ConversionCategory[] = [
  {
    id: 'length',
    name: '길이',
    description: '거리와 길이 측정',
    icon: '📏',
    units: lengthUnits
  },
  {
    id: 'weight',
    name: '무게',
    description: '질량과 무게 측정',
    icon: '⚖️',
    units: weightUnits
  },
  {
    id: 'volume',
    name: '부피',
    description: '용량과 부피 측정',
    icon: '🧪',
    units: volumeUnits
  },
  {
    id: 'temperature',
    name: '온도',
    description: '온도 측정',
    icon: '🌡️',
    units: temperatureUnits
  },
  {
    id: 'time',
    name: '시간',
    description: '시간과 기간 측정',
    icon: '⏰',
    units: timeUnits
  },
  {
    id: 'data',
    name: '데이터',
    description: '디지털 저장 용량',
    icon: '💾',
    units: dataUnits
  },
  {
    id: 'speed',
    name: '속도',
    description: '속력과 속도 측정',
    icon: '🚀',
    units: speedUnits
  },
  {
    id: 'area',
    name: '면적',
    description: '넓이와 면적 측정',
    icon: '📐',
    units: areaUnits
  },
  {
    id: 'pressure',
    name: '압력',
    description: '압력과 기압 측정',
    icon: '🌪️',
    units: pressureUnits
  },
  {
    id: 'energy',
    name: '에너지',
    description: '에너지와 일 측정',
    icon: '⚡',
    units: energyUnits
  }
]

// 헬퍼 함수들
export const getCategoryById = (id: string): ConversionCategory | undefined => {
  return conversionCategories.find(cat => cat.id === id)
}

export const getUnitById = (unitId: string): Unit | undefined => {
  for (const category of conversionCategories) {
    const unit = category.units.find(unit => unit.id === unitId)
    if (unit) return unit
  }
  return undefined
}

export const getUnitsByCategory = (categoryId: string): Unit[] => {
  const category = getCategoryById(categoryId)
  return category?.units || []
}

export const searchUnits = (query: string, categoryId?: string): Unit[] => {
  const lowerQuery = query.toLowerCase()
  let units: Unit[] = []
  
  if (categoryId) {
    units = getUnitsByCategory(categoryId)
  } else {
    units = conversionCategories.flatMap(cat => cat.units)
  }
  
  return units.filter(unit => 
    unit.name.toLowerCase().includes(lowerQuery) ||
    unit.symbol.toLowerCase().includes(lowerQuery) ||
    unit.aliases?.some(alias => alias.toLowerCase().includes(lowerQuery))
  )
} 