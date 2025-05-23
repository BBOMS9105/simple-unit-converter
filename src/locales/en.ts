export const en = {
  // 사이트 정보
  site: {
    title: 'Simple Unit Converter',
    description: 'Convert all kinds of units easily and quickly',
    tagline: 'We help your daily life and work with a clean interface and accurate calculations.'
  },

  // 헤더
  header: {
    title: 'Simple Unit Converter',
    mobileTitle: 'Unit Converter',
    more: 'More'
  },

  // 빠른 변환 바로가기
  quickConverters: {
    title: 'Quick Convert',
    cmToInch: 'cm → inch',
    kgToLb: 'kg → pound',
    celsiusToFahrenheit: '°C → °F',
    literToGallon: 'liter → gallon',
    kmToMile: 'km → mile',
    meterToFoot: 'meter → foot',
    viewAll: 'View All Converters'
  },

  // 카테고리
  categories: {
    title: 'Conversion Categories',
    length: {
      name: 'Length',
      description: 'meters, centimeters, inches, feet, etc.'
    },
    weight: {
      name: 'Weight',
      description: 'kilograms, grams, pounds, ounces, etc.'
    },
    volume: {
      name: 'Volume',
      description: 'liters, gallons, milliliters, etc.'
    },
    temperature: {
      name: 'Temperature',
      description: 'Celsius, Fahrenheit, Kelvin, etc.'
    },
    time: {
      name: 'Time',
      description: 'seconds, minutes, hours, days, weeks, etc.'
    },
    data: {
      name: 'Data',
      description: 'bytes, KB, MB, GB, etc.'
    },
    speed: {
      name: 'Speed',
      description: 'm/s, km/h, mph, etc.'
    },
    area: {
      name: 'Area',
      description: 'square meters, square kilometers, etc.'
    },
    pressure: {
      name: 'Pressure',
      description: 'Pascal, bar, atmosphere, etc.'
    },
    energy: {
      name: 'Energy',
      description: 'joules, calories, BTU, etc.'
    },
    convert: 'Convert'
  },

  // 변환기
  converter: {
    from: 'From',
    to: 'To',
    swap: 'Swap units',
    result: 'Result',
    copy: 'Copy number',
    copyWithUnit: 'Copy with unit',
    copied: 'Copied',
    share: 'Share',
    enterValue: 'Enter a value',
    selectFromUnit: 'Select unit to convert from',
    selectToUnit: 'Select unit to convert to',
    // Category page translations
    title: 'Converter',
    forAccurate: ' - accurate and fast unit converter.',
    unitConversionInfo: 'Unit Conversion Information',
    thisConverterSupports: 'This converter supports {count} {category} units. ',
    providesReliableResults: 'It provides reliable results using accurate conversion formulas.',
    more: ' more',
    // NumberInput component translations
    enterValidNumber: 'Please enter a valid number',
    selectUnitsFirst: 'Please select units first',
    convert: 'convert',
    readyToConvert: 'Ready to convert',
    quickInput: 'Quick Input',
    // ConversionResult component translations
    conversionError: 'An error occurred during conversion',
    selectValueAndUnits: 'Please select value and units',
    converting: 'Converting...',
    precision: 'Precision',
    digits: ' digits',
    rawValue: 'Raw value',
    // ConverterPanel component translations
    keyboardTip: '💡 Tip: Use keyboard shortcuts for faster conversion',
    // UnitSelector component translations
    selectCategoryFirst: 'Please select a category first',
    noUnitsAvailable: 'No units available for the selected category',
    selectUnits: 'Select Units',
    selectUnit: 'Select a unit'
  },

  // 공통 UI
  common: {
    search: 'Search',
    clear: 'Clear',
    close: 'Close',
    loading: 'Loading...',
    error: 'An error occurred',
    notFound: 'Page not found',
    goHome: 'Go home'
  },

  // 특징
  features: {
    title: 'Key Features',
    realtime: {
      title: 'Real-time Conversion',
      description: 'See results instantly as you type.'
    },
    darkMode: {
      title: 'Dark Mode',
      description: 'Supports eye-friendly dark mode.'
    },
    mobile: {
      title: 'Mobile Optimized',
      description: 'Works perfectly on all devices.'
    }
  },

  // 푸터
  footer: {
    madeWith: 'Made with ❤️',
    openSource: 'View source on GitHub',
    disclaimer: 'This converter is for informational purposes only and accuracy is not guaranteed. Please use professional tools for critical calculations.'
  },

  // 재밌는 사실
  funFacts: {
    clickToConvert: 'Click to convert →',
    facts: [
      {
        fact: "Eminem's movie '8 Mile' is",
        value: "12.87 km",
        description: "🎬",
        category: "length",
        fromUnit: "mile",
        fromValue: "8",
        toUnit: "kilometer"
      },
      {
        fact: "Empire State Building's height is",
        value: "381 m",
        description: "🏢",
        category: "length",
        fromUnit: "meter",
        fromValue: "381",
        toUnit: "foot"
      },
      {
        fact: "Soccer field length is usually",
        value: "100-110 m",
        description: "⚽",
        category: "length",
        fromUnit: "meter",
        fromValue: "105",
        toUnit: "yard"
      },
      {
        fact: "Average human walking speed is",
        value: "5 km/h",
        description: "🚶",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "5",
        toUnit: "mile_per_hour"
      },
      {
        fact: "Speed of light is",
        value: "299,792,458 m/s",
        description: "⚡",
        category: "speed",
        fromUnit: "meter_per_second",
        fromValue: "299792458",
        toUnit: "kilometer_per_hour"
      },
      {
        fact: "Mount Everest's height is",
        value: "8,848.86 m",
        description: "🏔️",
        category: "length",
        fromUnit: "meter",
        fromValue: "8848.86",
        toUnit: "foot"
      },
      {
        fact: "Titanic's length was",
        value: "269 m",
        description: "🚢",
        category: "length",
        fromUnit: "meter",
        fromValue: "269",
        toUnit: "foot"
      },
      {
        fact: "Average book weight is",
        value: "200-400 g",
        description: "📚",
        category: "weight",
        fromUnit: "gram",
        fromValue: "300",
        toUnit: "ounce"
      },
      {
        fact: "Average adult male weight is",
        value: "70 kg",
        description: "👨",
        category: "weight",
        fromUnit: "kilogram",
        fromValue: "70",
        toUnit: "pound"
      },
      {
        fact: "1 liter of water weighs",
        value: "1 kg",
        description: "💧",
        category: "weight",
        fromUnit: "kilogram",
        fromValue: "1",
        toUnit: "pound"
      },
      {
        fact: "iPhone 15 Pro weighs",
        value: "187 g",
        description: "📱",
        category: "weight",
        fromUnit: "gram",
        fromValue: "187",
        toUnit: "ounce"
      },
      {
        fact: "Statue of Liberty's height is",
        value: "93 m",
        description: "🗽",
        category: "length",
        fromUnit: "meter",
        fromValue: "93",
        toUnit: "foot"
      },
      {
        fact: "Eiffel Tower's height is",
        value: "330 m",
        description: "🗼",
        category: "length",
        fromUnit: "meter",
        fromValue: "330",
        toUnit: "foot"
      },
      {
        fact: "Tennis ball weighs",
        value: "57-58 g",
        description: "🎾",
        category: "weight",
        fromUnit: "gram",
        fromValue: "57.5",
        toUnit: "ounce"
      },
      {
        fact: "Normal human body temperature is",
        value: "36.5°C",
        description: "🌡️",
        category: "temperature",
        fromUnit: "celsius",
        fromValue: "36.5",
        toUnit: "fahrenheit"
      },
      {
        fact: "Water boiling point is",
        value: "100°C",
        description: "🔥",
        category: "temperature",
        fromUnit: "celsius",
        fromValue: "100",
        toUnit: "fahrenheit"
      },
      {
        fact: "Absolute zero is",
        value: "-273.15°C",
        description: "🧊",
        category: "temperature",
        fromUnit: "celsius",
        fromValue: "-273.15",
        toUnit: "kelvin"
      },
      {
        fact: "One day is",
        value: "1,440 minutes",
        description: "📅",
        category: "time",
        fromUnit: "day",
        fromValue: "1",
        toUnit: "minute"
      },
      {
        fact: "One year is",
        value: "8,760 hours",
        description: "🗓️",
        category: "time",
        fromUnit: "year",
        fromValue: "1",
        toUnit: "hour"
      },
      {
        fact: "One hour is",
        value: "3,600 seconds",
        description: "⏱️",
        category: "time",
        fromUnit: "hour",
        fromValue: "1",
        toUnit: "second"
      },
      {
        fact: "DVD capacity is",
        value: "4.7 GB",
        description: "💿",
        category: "data",
        fromUnit: "gigabyte",
        fromValue: "4.7",
        toUnit: "megabyte"
      },
      {
        fact: "Blu-ray disc capacity is",
        value: "25-50 GB",
        description: "💽",
        category: "data",
        fromUnit: "gigabyte",
        fromValue: "25",
        toUnit: "gibibyte"
      },
      {
        fact: "4K movie file is usually",
        value: "25-100 GB",
        description: "🎬",
        category: "data",
        fromUnit: "gigabyte",
        fromValue: "50",
        toUnit: "terabyte"
      },
      {
        fact: "Marathon distance is",
        value: "42.195 km",
        description: "🏃‍♂️",
        category: "length",
        fromUnit: "kilometer",
        fromValue: "42.195",
        toUnit: "mile"
      },
      {
        fact: "Earth's circumference is",
        value: "40,075 km",
        description: "🌍",
        category: "length",
        fromUnit: "kilometer",
        fromValue: "40075",
        toUnit: "mile"
      },
      {
        fact: "Distance to the moon is",
        value: "384,400 km",
        description: "🌙",
        category: "length",
        fromUnit: "kilometer",
        fromValue: "384400",
        toUnit: "mile"
      },
      {
        fact: "Atmospheric pressure is",
        value: "101.325 kPa",
        description: "🌪️",
        category: "pressure",
        fromUnit: "kilopascal",
        fromValue: "101.325",
        toUnit: "atmosphere"
      },
      {
        fact: "One banana contains",
        value: "89 kcal",
        description: "🍌",
        category: "energy",
        fromUnit: "kilocalorie",
        fromValue: "89",
        toUnit: "joule"
      },
      {
        fact: "Cheetah's top speed is",
        value: "120 km/h",
        description: "🐆",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "120",
        toUnit: "mile_per_hour"
      },
      {
        fact: "Speed of sound is",
        value: "343 m/s",
        description: "🔊",
        category: "speed",
        fromUnit: "meter_per_second",
        fromValue: "343",
        toUnit: "kilometer_per_hour"
      },
      {
        fact: "F1 car's top speed is",
        value: "372 km/h",
        description: "🏎️",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "372",
        toUnit: "mile_per_hour"
      }
    ]
  },

  // 단위 이름 번역
  units: {
    // 길이 단위
    millimeter: 'Millimeter',
    centimeter: 'Centimeter',
    meter: 'Meter',
    kilometer: 'Kilometer',
    inch: 'Inch',
    foot: 'Foot',
    yard: 'Yard',
    mile: 'Mile',
    
    // 무게 단위
    milligram: 'Milligram',
    gram: 'Gram',
    kilogram: 'Kilogram',
    pound: 'Pound',
    ounce: 'Ounce',
    ton: 'Ton',
    stone: 'Stone',
    
    // 부피 단위
    milliliter: 'Milliliter',
    liter: 'Liter',
    gallon: 'Gallon',
    quart: 'Quart',
    pint: 'Pint',
    cup: 'Cup',
    fluid_ounce: 'Fluid Ounce',
    tablespoon: 'Tablespoon',
    teaspoon: 'Teaspoon',
    
    // 온도 단위
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    kelvin: 'Kelvin',
    rankine: 'Rankine',
    
    // 시간 단위
    millisecond: 'Millisecond',
    second: 'Second',
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    
    // 데이터 단위
    bit: 'Bit',
    byte: 'Byte',
    kilobyte: 'Kilobyte',
    megabyte: 'Megabyte',
    gigabyte: 'Gigabyte',
    terabyte: 'Terabyte',
    petabyte: 'Petabyte',
    kibibyte: 'Kibibyte',
    mebibyte: 'Mebibyte',
    gibibyte: 'Gibibyte',
    tebibyte: 'Tebibyte',
    pebibyte: 'Pebibyte',
    
    // 속도 단위
    meter_per_second: 'Meter per second',
    kilometer_per_hour: 'Kilometer per hour',
    mile_per_hour: 'Mile per hour',
    foot_per_second: 'Foot per second',
    knot: 'Knot',
    mach: 'Mach',
    
    // 면적 단위
    square_millimeter: 'Square millimeter',
    square_centimeter: 'Square centimeter',
    square_meter: 'Square meter',
    square_kilometer: 'Square kilometer',
    square_inch: 'Square inch',
    square_foot: 'Square foot',
    acre: 'Acre',
    hectare: 'Hectare',
    
    // 압력 단위
    pascal: 'Pascal',
    kilopascal: 'Kilopascal',
    bar: 'Bar',
    atmosphere: 'Atmosphere',
    psi: 'PSI',
    torr: 'Torr',
    mmhg: 'Millimeter of mercury',
    
    // 에너지 단위
    joule: 'Joule',
    kilojoule: 'Kilojoule',
    calorie: 'Calorie',
    kilocalorie: 'Kilocalorie',
    watt_hour: 'Watt hour',
    kilowatt_hour: 'Kilowatt hour',
    btu: 'BTU'
  },

  // 공유 기능
  share: {
    title: 'Simple Unit Converter',
    share: 'Share',
    copyResult: 'Copy result',
    copyLink: 'Copy link',
    copied: 'Copied',
    shareResult: 'Share result'
  }
} as const

// Category name simple mapping (separate export)
export const categoryNames = {
  length: 'Length',
  weight: 'Weight',
  volume: 'Volume', 
  temperature: 'Temperature',
  time: 'Time',
  data: 'Data',
  speed: 'Speed',
  area: 'Area',
  pressure: 'Pressure',
  energy: 'Energy'
} 