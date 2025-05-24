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
    facts: {
      eightMile: { fact: "La película '8 Millas' de Eminem es", value: "12.87 km", description: "🎬" },
      empireState: { fact: "La altura del Empire State Building es", value: "381 m", description: "🏢" },
      soccerField: { fact: "La longitud del campo de fútbol es usualmente", value: "100-110 m", description: "⚽" },
      everest: { fact: "La altura del Monte Everest es", value: "8,848.86 m", description: "🏔️" },
      titanic: { fact: "La longitud del Titanic era", value: "269 m", description: "🚢" },
      marathon: { fact: "La distancia del maratón es", value: "42.195 km", description: "🏃‍♂️" },
      earthCircumference: { fact: "La circunferencia de la Tierra es", value: "40,075 km", description: "🌍" },
      greatWall: { fact: "La longitud total de la Gran Muralla es", value: "21,196 km", description: "🏯" },
      burjKhalifa: { fact: "La altura del Burj Khalifa es", value: "828 m", description: "🏗️" },
      goldenGate: { fact: "La longitud del Golden Gate es", value: "2,737 m", description: "🌉" },
      basketballCourt: { fact: "La longitud de una cancha de baloncesto es", value: "28 m", description: "🏀" },
      tennisNet: { fact: "La altura de la red de tenis es", value: "0.914 m", description: "🎾" },
      
      book: { fact: "El peso promedio de un libro es", value: "200-400 g", description: "📚" },
      averageMale: { fact: "El peso promedio de un hombre adulto es", value: "70 kg", description: "👨" },
      waterLiter: { fact: "Un litro de agua pesa", value: "1 kg", description: "💧" },
      elephant: { fact: "Un elefante africano pesa", value: "6,000 kg", description: "🐘" },
      blueWhale: { fact: "Una ballena azul pesa", value: "150,000 kg", description: "🐋" },
      smartphone: { fact: "Un smartphone promedio pesa", value: "200 g", description: "📱" },
      penny: { fact: "Una moneda de centavo de EE.UU. pesa", value: "2.5 g", description: "🪙" },
      car: { fact: "Un automóvil promedio pesa", value: "1,500 kg", description: "🚗" },
      feather: { fact: "Una pluma pesa", value: "0.62 g", description: "🪶" },
      
      walkingSpeed: { fact: "La velocidad promedio de caminar es", value: "5 km/h", description: "🚶" },
      lightSpeed: { fact: "La velocidad de la luz es", value: "299,792,458 m/s", description: "⚡" },
      cheetah: { fact: "La velocidad máxima de un guepardo es", value: "120 km/h", description: "🐆" },
      soundSpeed: { fact: "La velocidad del sonido es", value: "343 m/s", description: "🔊" },
      usainBolt: { fact: "La velocidad máxima de Usain Bolt fue", value: "37.58 km/h", description: "🏃‍♂️" },
      airplane: { fact: "La velocidad de un avión comercial es", value: "900 km/h", description: "✈️" },
      
      bodyTemp: { fact: "La temperatura corporal normal es", value: "36.5°C", description: "🌡️" },
      boilingPoint: { fact: "El punto de ebullición del agua es", value: "100°C", description: "🔥" },
      freezingPoint: { fact: "El punto de congelación del agua es", value: "0°C", description: "🧊" },
      sunSurface: { fact: "La temperatura de la superficie del Sol es", value: "5,778°C", description: "☀️" },
      absoluteZero: { fact: "El cero absoluto es", value: "-273.15°C", description: "🥶" },
      
      day: { fact: "Un día tiene", value: "1,440 minutos", description: "📅" },
      year: { fact: "Un año tiene", value: "8,760 horas", description: "🗓️" },
      heartbeat: { fact: "Un latido del corazón dura", value: "1 segundo", description: "💓" },
      blink: { fact: "Un parpadeo dura", value: "300 ms", description: "👁️" },
      
      dvd: { fact: "La capacidad de un DVD es", value: "4.7 GB", description: "💿" },
      bluray: { fact: "La capacidad de un Blu-ray es", value: "25-50 GB", description: "💽" },
      floppy: { fact: "La capacidad de un disquete era", value: "1.44 MB", description: "💾" },
      humanBrain: { fact: "La capacidad de almacenamiento del cerebro humano es", value: "2.5 TB", description: "🧠" },
      internetMinute: { fact: "Los datos generados por minuto en Internet son", value: "2.9 PB", description: "🌐" },
      
      atmosphere: { fact: "La presión atmosférica es", value: "101.325 kPa", description: "🌪️" },
      carTire: { fact: "La presión de un neumático de automóvil es", value: "32 psi", description: "🚗" },
      
      banana: { fact: "Una banana tiene", value: "89 kcal", description: "🍌" },
      lightning: { fact: "La energía de un rayo es", value: "1.4 kWh", description: "⚡" },
      household: { fact: "El consumo diario de energía doméstica es", value: "30 kWh", description: "🏠" },
      
      creditCard: { fact: "El área de una tarjeta de crédito es", value: "46 cm²", description: "💳" },
      footballField: { fact: "El área de un campo de fútbol americano es", value: "0.714 hectáreas", description: "🏈" },
      centralPark: { fact: "El área de Central Park es", value: "341 hectáreas", description: "🌳" }
    }
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