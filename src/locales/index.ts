import { ko } from './ko'
import { en } from './en'
import { ja } from './ja'
import { es } from './es'
import type { Locale } from '@/lib/i18n'

export type Translation = {
  site: {
    title: string
    description: string
    tagline: string
  }
  header: {
    title: string
    mobileTitle: string
    more: string
  }
  categories: {
    title: string
    length: { name: string; description: string }
    weight: { name: string; description: string }
    volume: { name: string; description: string }
    temperature: { name: string; description: string }
    time: { name: string; description: string }
    data: { name: string; description: string }
    speed: { name: string; description: string }
    area: { name: string; description: string }
    pressure: { name: string; description: string }
    energy: { name: string; description: string }
    convert: string
    // 카테고리별 이름을 위한 간단한 매핑
    [key: string]: string | { name: string; description: string }
  }
  converter: {
    from: string
    to: string
    swap: string
    result: string
    copy: string
    copyWithUnit: string
    copied: string
    share: string
    enterValue: string
    selectFromUnit: string
    selectToUnit: string
    // 카테고리 페이지용 번역
    title: string
    forAccurate: string
    unitConversionInfo: string
    thisConverterSupports: string
    providesReliableResults: string
    more: string
    // NumberInput 컴포넌트용 번역
    enterValidNumber: string
    selectUnitsFirst: string
    convert: string
    readyToConvert: string
    quickInput: string
    // ConversionResult 컴포넌트용 번역
    conversionError: string
    selectValueAndUnits: string
    converting: string
    precision: string
    digits: string
    rawValue: string
    // ConverterPanel 컴포넌트용 번역
    keyboardTip: string
    // UnitSelector 컴포넌트용 번역
    selectCategoryFirst: string
    noUnitsAvailable: string
    selectUnits: string
    selectUnit: string
  }
  common: {
    search: string
    clear: string
    close: string
    loading: string
    error: string
    notFound: string
    goHome: string
  }
  features: {
    title: string
    realtime: { title: string; description: string }
    darkMode: { title: string; description: string }
    mobile: { title: string; description: string }
  }
  footer: {
    madeWith: string
    openSource: string
  }
  funFacts: {
    clickToConvert: string
  }
  units: {
    // Length units
    millimeter: string
    centimeter: string
    meter: string
    kilometer: string
    inch: string
    foot: string
    yard: string
    mile: string
    
    // Weight units
    milligram: string
    gram: string
    kilogram: string
    pound: string
    ounce: string
    ton: string
    stone: string
    
    // Volume units
    milliliter: string
    liter: string
    gallon: string
    quart: string
    pint: string
    cup: string
    fluid_ounce: string
    tablespoon: string
    teaspoon: string
    
    // Temperature units
    celsius: string
    fahrenheit: string
    kelvin: string
    rankine: string
    
    // Time units
    millisecond: string
    second: string
    minute: string
    hour: string
    day: string
    week: string
    month: string
    year: string
    
    // Data units
    bit: string
    byte: string
    kilobyte: string
    megabyte: string
    gigabyte: string
    terabyte: string
    petabyte: string
    kibibyte: string
    mebibyte: string
    gibibyte: string
    tebibyte: string
    pebibyte: string
    
    // Speed units
    meter_per_second: string
    kilometer_per_hour: string
    mile_per_hour: string
    foot_per_second: string
    knot: string
    mach: string
    
    // Area units
    square_millimeter: string
    square_centimeter: string
    square_meter: string
    square_kilometer: string
    square_inch: string
    square_foot: string
    acre: string
    hectare: string
    
    // Pressure units
    pascal: string
    kilopascal: string
    bar: string
    atmosphere: string
    psi: string
    torr: string
    mmhg: string
    
    // Energy units
    joule: string
    kilojoule: string
    calorie: string
    kilocalorie: string
    watt_hour: string
    kilowatt_hour: string
    btu: string
  }
  share: {
    title: string
    share: string
    copyResult: string
    copyLink: string
    copied: string
    shareResult: string
  }
}

export const translations: Record<Locale, Translation> = {
  ko: ko as Translation,
  en: en as Translation,
  ja: ja as Translation,
  es: es as Translation
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations.ko
} 