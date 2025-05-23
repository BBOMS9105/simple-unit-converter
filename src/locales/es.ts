export const es = {
  // 사이트 정보
  site: {
    title: 'Simple Unit Converter',
    description: 'Convierte todo tipo de unidades fácil y rápidamente',
    tagline: 'Ayudando tu vida diaria y trabajo con interfaz limpia y cálculos precisos.'
  },

  // 헤더
  header: {
    title: 'Simple Unit Converter',
    mobileTitle: 'Convertidor',
    more: 'Más'
  },

  // 카테고리
  categories: {
    title: 'Categorías de Conversión',
    length: {
      name: 'Longitud',
      description: 'Metros, centímetros, pulgadas, pies, etc.'
    },
    weight: {
      name: 'Peso',
      description: 'Kilogramos, gramos, libras, onzas, etc.'
    },
    volume: {
      name: 'Volumen',
      description: 'Litros, galones, mililitros, etc.'
    },
    temperature: {
      name: 'Temperatura',
      description: 'Celsius, Fahrenheit, Kelvin, etc.'
    },
    time: {
      name: 'Tiempo',
      description: 'Segundos, minutos, horas, días, semanas, etc.'
    },
    data: {
      name: 'Datos',
      description: 'Bytes, KB, MB, GB, etc.'
    },
    speed: {
      name: 'Velocidad',
      description: 'm/s, km/h, mph, etc.'
    },
    area: {
      name: 'Área',
      description: 'Metros cuadrados, kilómetros cuadrados, etc.'
    },
    pressure: {
      name: 'Presión',
      description: 'Pascal, bar, atmósfera, etc.'
    },
    energy: {
      name: 'Energía',
      description: 'Julios, calorías, BTU, etc.'
    },
    convert: 'Convertir'
  },

  // 변환기
  converter: {
    from: 'De',
    to: 'A',
    swap: 'Intercambiar unidades',
    result: 'Resultado',
    copy: 'Copiar número',
    copyWithUnit: 'Copiar con unidad',
    copied: 'Copiado',
    share: 'Compartir',
    enterValue: 'Ingrese un valor',
    selectFromUnit: 'Seleccionar unidad origen',
    selectToUnit: 'Seleccionar unidad destino',
    title: 'Conversor',
    forAccurate: ' - conversor de unidades preciso y rápido.',
    unitConversionInfo: 'Información de Conversión de Unidades',
    thisConverterSupports: 'Este conversor soporta {count} unidades de {category}. ',
    providesReliableResults: 'Proporciona resultados confiables usando fórmulas de conversión precisas.',
    more: ' más',
    enterValidNumber: 'Por favor ingresa un número válido',
    selectUnitsFirst: 'Por favor selecciona las unidades primero',
    convert: 'convertir',
    readyToConvert: 'Listo para convertir',
    quickInput: 'Entrada Rápida',
    conversionError: 'Ocurrió un error durante la conversión',
    selectValueAndUnits: 'Por favor selecciona valor y unidades',
    converting: 'Convirtiendo...',
    precision: 'Precisión',
    digits: ' dígitos',
    rawValue: 'Valor en bruto',
    keyboardTip: '💡 Consejo: Usa atajos de teclado para conversión más rápida',
    selectCategoryFirst: 'Por favor selecciona una categoría primero',
    noUnitsAvailable: 'No hay unidades disponibles para la categoría seleccionada',
    selectUnits: 'Seleccionar Unidades',
    selectUnit: 'Selecciona una unidad'
  },

  // 공통 UI
  common: {
    search: 'Buscar',
    clear: 'Limpiar',
    close: 'Cerrar',
    loading: 'Cargando...',
    error: 'Ocurrió un error',
    notFound: 'Página no encontrada',
    goHome: 'Volver al inicio'
  },

  // 특징
  features: {
    title: 'Características Principales',
    realtime: {
      title: 'Conversión en Tiempo Real',
      description: 'Ve los resultados instantáneamente mientras escribes.'
    },
    darkMode: {
      title: 'Modo Oscuro',
      description: 'Soporte para modo oscuro amigable con la vista.'
    },
    mobile: {
      title: 'Optimizado para Móviles',
      description: 'Funciona perfectamente en todos los dispositivos.'
    }
  },

  // 푸터
  footer: {
    madeWith: 'Hecho con ❤️',
    openSource: 'Ver código en GitHub',
    disclaimer: 'Este convertidor es solo para fines informativos y no se garantiza la precisión. Por favor, use herramientas profesionales para cálculos críticos.'
  },

  // 재밌는 사실
  funFacts: {
    clickToConvert: 'Haz clic para convertir →',
    facts: [
      {
        fact: "La película '8 Millas' de Eminem es",
        value: "12.87 km",
        description: "🎬",
        category: "length",
        fromUnit: "mile",
        fromValue: "8",
        toUnit: "kilometer"
      },
      {
        fact: "La altura del Empire State Building es",
        value: "381 m",
        description: "🏢",
        category: "length",
        fromUnit: "meter",
        fromValue: "381",
        toUnit: "foot"
      },
      {
        fact: "La longitud del campo de fútbol es usualmente",
        value: "100-110 m",
        description: "⚽",
        category: "length",
        fromUnit: "meter",
        fromValue: "105",
        toUnit: "yard"
      },
      {
        fact: "La velocidad promedio de caminar es",
        value: "5 km/h",
        description: "🚶",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "5",
        toUnit: "mile_per_hour"
      },
      {
        fact: "La velocidad de la luz es",
        value: "299,792,458 m/s",
        description: "⚡",
        category: "speed",
        fromUnit: "meter_per_second",
        fromValue: "299792458",
        toUnit: "kilometer_per_hour"
      }
    ]
  },

  // 단위 이름 번역
  units: {
    // 길이 단위
    millimeter: 'Milímetro',
    centimeter: 'Centímetro',
    meter: 'Metro',
    kilometer: 'Kilómetro',
    inch: 'Pulgada',
    foot: 'Pie',
    yard: 'Yarda',
    mile: 'Milla',
    
    // 무게 단위
    milligram: 'Miligramo',
    gram: 'Gramo',
    kilogram: 'Kilogramo',
    pound: 'Libra',
    ounce: 'Onza',
    ton: 'Tonelada',
    stone: 'Piedra',
    
    // 부피 단위
    milliliter: 'Mililitro',
    liter: 'Litro',
    gallon: 'Galón',
    quart: 'Cuarto',
    pint: 'Pinta',
    cup: 'Taza',
    fluid_ounce: 'Onza líquida',
    tablespoon: 'Cucharada',
    teaspoon: 'Cucharadita',
    
    // 온도 단위
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    kelvin: 'Kelvin',
    rankine: 'Rankine',
    
    // 시간 단위
    millisecond: 'Milisegundo',
    second: 'Segundo',
    minute: 'Minuto',
    hour: 'Hora',
    day: 'Día',
    week: 'Semana',
    month: 'Mes',
    year: 'Año',
    
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
    meter_per_second: 'Metro por segundo',
    kilometer_per_hour: 'Kilómetro por hora',
    mile_per_hour: 'Milla por hora',
    foot_per_second: 'Pie por segundo',
    knot: 'Nudo',
    mach: 'Mach',
    
    // 면적 단위
    square_millimeter: 'Milímetro cuadrado',
    square_centimeter: 'Centímetro cuadrado',
    square_meter: 'Metro cuadrado',
    square_kilometer: 'Kilómetro cuadrado',
    square_inch: 'Pulgada cuadrada',
    square_foot: 'Pie cuadrado',
    acre: 'Acre',
    hectare: 'Hectárea',
    
    // 압력 단위
    pascal: 'Pascal',
    kilopascal: 'Kilopascal',
    bar: 'Bar',
    atmosphere: 'Atmósfera',
    psi: 'PSI',
    torr: 'Torr',
    mmhg: 'Milímetro de mercurio',
    
    // 에너지 단위
    joule: 'Julio',
    kilojoule: 'Kilojulio',
    calorie: 'Caloría',
    kilocalorie: 'Kilocaloría',
    watt_hour: 'Vatio hora',
    kilowatt_hour: 'Kilovatio hora',
    btu: 'BTU'
  },

  // 공유 기능
  share: {
    title: 'Simple Unit Converter',
    share: 'Compartir',
    copyResult: 'Copiar resultado',
    copyLink: 'Copiar enlace',
    copied: 'Copiado',
    shareResult: 'Compartir resultado'
  },

  // 빠른 변환 바로가기
  quickConverters: {
    title: 'Conversión Rápida',
    cmToInch: 'cm → pulgada',
    kgToLb: 'kg → libra',
    celsiusToFahrenheit: '°C → °F',
    literToGallon: 'litro → galón',
    kmToMile: 'km → milla',
    meterToFoot: 'metro → pie',
    viewAll: 'Ver Todos los Convertidores'
  }
} as const

// Mapeo simple de nombres de categorías (exportación separada)
export const categoryNames = {
  length: 'Longitud',
  weight: 'Peso',
  volume: 'Volumen',
  temperature: 'Temperatura',
  time: 'Tiempo',
  data: 'Datos',
  speed: 'Velocidad',
  area: 'Área',
  pressure: 'Presión',
  energy: 'Energía'
} 