export const ko = {
  // 사이트 정보
  site: {
    title: 'Simple Unit Converter',
    description: '모든 종류의 단위를 쉽고 빠르게 변환하세요',
    tagline: '깔끔한 인터페이스와 정확한 계산으로 일상생활과 업무를 도와드립니다.'
  },

  // 헤더
  header: {
    title: 'Simple Unit Converter',
    mobileTitle: '단위변환기',
    more: '더보기'
  },

  // 빠른 변환 바로가기
  quickConverters: {
    title: '빠른 변환',
    cmToInch: 'cm → 인치',
    kgToLb: 'kg → 파운드',
    celsiusToFahrenheit: '°C → °F',
    literToGallon: '리터 → 갤런',
    kmToMile: 'km → 마일',
    meterToFoot: '미터 → 피트',
    viewAll: '모든 변환기 보기'
  },

  // 카테고리
  categories: {
    title: '변환 카테고리',
    length: {
      name: '길이',
      description: '미터, 센티미터, 인치, 피트 등'
    },
    weight: {
      name: '무게',
      description: '킬로그램, 그램, 파운드, 온스 등'
    },
    volume: {
      name: '부피',
      description: '리터, 갤런, 밀리리터 등'
    },
    temperature: {
      name: '온도',
      description: '섭씨, 화씨, 켈빈 등'
    },
    time: {
      name: '시간',
      description: '초, 분, 시간, 일, 주 등'
    },
    data: {
      name: '데이터',
      description: '바이트, KB, MB, GB 등'
    },
    speed: {
      name: '속도',
      description: 'm/s, km/h, mph 등'
    },
    area: {
      name: '면적',
      description: '제곱미터, 제곱킬로미터 등'
    },
    pressure: {
      name: '압력',
      description: '파스칼, 바, 대기압 등'
    },
    energy: {
      name: '에너지',
      description: '줄, 칼로리, BTU 등'
    },
    convert: '변환하기'
  },

  // 변환기
  converter: {
    from: '변환할 값',
    to: '변환 결과',
    swap: '단위 바꾸기',
    result: '변환 결과',
    copy: '숫자 복사',
    copyWithUnit: '단위포함 복사',
    copied: '복사됨',
    share: '공유하기',
    enterValue: '값을 입력하세요',
    selectFromUnit: '변환할 단위를 선택하세요',
    selectToUnit: '변환될 단위를 선택하세요',
    // 카테고리 페이지용 번역
    title: '변환기',
    forAccurate: '을 위한 정확하고 빠른 단위 변환기입니다.',
    unitConversionInfo: '단위 변환 정보',
    thisConverterSupports: '이 변환기는 {count}개의 {category} 단위를 지원합니다. ',
    providesReliableResults: '정확한 변환 공식을 사용하여 신뢰할 수 있는 결과를 제공합니다.',
    more: '개 더',
    // NumberInput 컴포넌트용 번역
    enterValidNumber: '올바른 숫자를 입력해주세요',
    selectUnitsFirst: '변환할 단위를 먼저 선택해주세요',
    convert: '변환',
    readyToConvert: '변환이 준비되었습니다',
    quickInput: '빠른 입력',
    // ConversionResult 컴포넌트용 번역
    conversionError: '변환 중 오류가 발생했습니다',
    selectValueAndUnits: '변환할 값과 단위를 선택해주세요',
    converting: '변환 중...',
    precision: '정밀도',
    digits: '자리',
    rawValue: '원값',
    // ConverterPanel 컴포넌트용 번역
    keyboardTip: '💡 팁: 키보드 단축키를 사용하여 더 빠르게 변환할 수 있습니다',
    // UnitSelector 컴포넌트용 번역
    selectCategoryFirst: '먼저 변환할 단위의 카테고리를 선택해주세요',
    noUnitsAvailable: '선택된 카테고리에 사용 가능한 단위가 없습니다',
    selectUnits: '단위 선택',
    selectUnit: '단위를 선택하세요'
  },

  // 공통 UI
  common: {
    search: '검색',
    clear: '지우기',
    close: '닫기',
    loading: '로딩 중...',
    error: '오류가 발생했습니다',
    notFound: '페이지를 찾을 수 없습니다',
    goHome: '홈으로 돌아가기'
  },

  // 특징
  features: {
    title: '주요 특징',
    realtime: {
      title: '실시간 변환',
      description: '숫자를 입력하는 즉시 결과를 확인할 수 있습니다.'
    },
    darkMode: {
      title: '다크 모드',
      description: '눈이 편한 다크 모드를 지원합니다.'
    },
    mobile: {
      title: '모바일 최적화',
      description: '모든 기기에서 완벽하게 작동합니다.'
    }
  },

  // 푸터
  footer: {
    madeWith: '❤️로 제작',
    openSource: 'GitHub에서 소스 보기',
    disclaimer: '이 변환기는 정보 제공 목적으로만 사용되며, 정확성을 보장하지 않습니다. 중요한 계산은 전문 도구를 사용하시기 바랍니다.'
  },

  // 재밌는 사실
  funFacts: {
    clickToConvert: '클릭하여 변환해보기 →',
    facts: [
      {
        fact: "에미넘 주연 영화 '8마일'은",
        value: "12.87 km",
        description: "입니다 🎬",
        category: "length",
        fromUnit: "mile",
        fromValue: "8",
        toUnit: "kilometer"
      },
      {
        fact: "엠파이어 스테이트 빌딩의 높이는",
        value: "381 m",
        description: "입니다 🏢",
        category: "length",
        fromUnit: "meter",
        fromValue: "381",
        toUnit: "foot"
      },
      {
        fact: "축구장 길이는 보통",
        value: "100-110 m",
        description: "입니다 ⚽",
        category: "length",
        fromUnit: "meter",
        fromValue: "105",
        toUnit: "yard"
      },
      {
        fact: "인간의 평균 걸음속도는",
        value: "5 km/h",
        description: "입니다 🚶",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "5",
        toUnit: "mile_per_hour"
      },
      {
        fact: "빛의 속도는",
        value: "299,792,458 m/s",
        description: "입니다 ⚡",
        category: "speed",
        fromUnit: "meter_per_second",
        fromValue: "299792458",
        toUnit: "kilometer_per_hour"
      },
      {
        fact: "에베레스트 산의 높이는",
        value: "8,848.86 m",
        description: "입니다 🏔️",
        category: "length",
        fromUnit: "meter",
        fromValue: "8848.86",
        toUnit: "foot"
      },
      {
        fact: "타이타닉호의 길이는",
        value: "269 m",
        description: "였습니다 🚢",
        category: "length",
        fromUnit: "meter",
        fromValue: "269",
        toUnit: "foot"
      },
      {
        fact: "일반 책 한 권의 무게는",
        value: "200-400 g",
        description: "정도입니다 📚",
        category: "weight",
        fromUnit: "gram",
        fromValue: "300",
        toUnit: "ounce"
      },
      {
        fact: "성인 남성의 평균 체중은",
        value: "70 kg",
        description: "정도입니다 👨",
        category: "weight",
        fromUnit: "kilogram",
        fromValue: "70",
        toUnit: "pound"
      },
      {
        fact: "물 1리터의 무게는",
        value: "1 kg",
        description: "입니다 💧",
        category: "weight",
        fromUnit: "kilogram",
        fromValue: "1",
        toUnit: "pound"
      },
      {
        fact: "iPhone 15 Pro의 무게는",
        value: "187 g",
        description: "입니다 📱",
        category: "weight",
        fromUnit: "gram",
        fromValue: "187",
        toUnit: "ounce"
      },
      {
        fact: "자유의 여신상 높이는",
        value: "93 m",
        description: "입니다 🗽",
        category: "length",
        fromUnit: "meter",
        fromValue: "93",
        toUnit: "foot"
      },
      {
        fact: "파리 에펠탑의 높이는",
        value: "330 m",
        description: "입니다 🗼",
        category: "length",
        fromUnit: "meter",
        fromValue: "330",
        toUnit: "foot"
      },
      {
        fact: "테니스공의 무게는",
        value: "57-58 g",
        description: "입니다 🎾",
        category: "weight",
        fromUnit: "gram",
        fromValue: "57.5",
        toUnit: "ounce"
      },
      {
        fact: "인간의 정상 체온은",
        value: "36.5°C",
        description: "입니다 🌡️",
        category: "temperature",
        fromUnit: "celsius",
        fromValue: "36.5",
        toUnit: "fahrenheit"
      },
      {
        fact: "물의 끓는점은",
        value: "100°C",
        description: "입니다 🔥",
        category: "temperature",
        fromUnit: "celsius",
        fromValue: "100",
        toUnit: "fahrenheit"
      },
      {
        fact: "절대영도는",
        value: "-273.15°C",
        description: "입니다 🧊",
        category: "temperature",
        fromUnit: "celsius",
        fromValue: "-273.15",
        toUnit: "kelvin"
      },
      {
        fact: "하루는",
        value: "1,440분",
        description: "입니다 📅",
        category: "time",
        fromUnit: "day",
        fromValue: "1",
        toUnit: "minute"
      },
      {
        fact: "일 년은",
        value: "8,760시간",
        description: "입니다 🗓️",
        category: "time",
        fromUnit: "year",
        fromValue: "1",
        toUnit: "hour"
      },
      {
        fact: "한 시간은",
        value: "3,600초",
        description: "입니다 ⏱️",
        category: "time",
        fromUnit: "hour",
        fromValue: "1",
        toUnit: "second"
      },
      {
        fact: "DVD 한 장의 용량은",
        value: "4.7 GB",
        description: "입니다 💿",
        category: "data",
        fromUnit: "gigabyte",
        fromValue: "4.7",
        toUnit: "megabyte"
      },
      {
        fact: "블루레이 디스크의 용량은",
        value: "25-50 GB",
        description: "입니다 💽",
        category: "data",
        fromUnit: "gigabyte",
        fromValue: "25",
        toUnit: "gibibyte"
      },
      {
        fact: "4K 영화 파일은 보통",
        value: "25-100 GB",
        description: "입니다 🎬",
        category: "data",
        fromUnit: "gigabyte",
        fromValue: "50",
        toUnit: "terabyte"
      },
      {
        fact: "마라톤 풀코스 거리는",
        value: "42.195 km",
        description: "입니다 🏃‍♂️",
        category: "length",
        fromUnit: "kilometer",
        fromValue: "42.195",
        toUnit: "mile"
      },
      {
        fact: "지구의 둘레는",
        value: "40,075 km",
        description: "입니다 🌍",
        category: "length",
        fromUnit: "kilometer",
        fromValue: "40075",
        toUnit: "mile"
      },
      {
        fact: "달까지의 거리는",
        value: "384,400 km",
        description: "입니다 🌙",
        category: "length",
        fromUnit: "kilometer",
        fromValue: "384400",
        toUnit: "mile"
      },
      {
        fact: "대기압은",
        value: "101.325 kPa",
        description: "입니다 🌪️",
        category: "pressure",
        fromUnit: "kilopascal",
        fromValue: "101.325",
        toUnit: "atmosphere"
      },
      {
        fact: "바나나 한 개의 칼로리는",
        value: "89 kcal",
        description: "정도입니다 🍌",
        category: "energy",
        fromUnit: "kilocalorie",
        fromValue: "89",
        toUnit: "joule"
      },
      {
        fact: "치타의 최고 속도는",
        value: "120 km/h",
        description: "입니다 🐆",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "120",
        toUnit: "mile_per_hour"
      },
      {
        fact: "소리의 속도는",
        value: "343 m/s",
        description: "입니다 🔊",
        category: "speed",
        fromUnit: "meter_per_second",
        fromValue: "343",
        toUnit: "kilometer_per_hour"
      },
      {
        fact: "F1 경주차의 최고속도는",
        value: "372 km/h",
        description: "입니다 🏎️",
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
    millimeter: '밀리미터',
    centimeter: '센티미터',
    meter: '미터',
    kilometer: '킬로미터',
    inch: '인치',
    foot: '피트',
    yard: '야드',
    mile: '마일',
    
    // 무게 단위
    milligram: '밀리그램',
    gram: '그램',
    kilogram: '킬로그램',
    pound: '파운드',
    ounce: '온스',
    ton: '톤',
    stone: '스톤',
    
    // 부피 단위
    milliliter: '밀리리터',
    liter: '리터',
    gallon: '갤런',
    quart: '쿼트',
    pint: '파인트',
    cup: '컵',
    fluid_ounce: '액량온스',
    tablespoon: '테이블스푼',
    teaspoon: '티스푼',
    
    // 온도 단위
    celsius: '섭씨',
    fahrenheit: '화씨',
    kelvin: '켈빈',
    rankine: '랭킨',
    
    // 시간 단위
    millisecond: '밀리초',
    second: '초',
    minute: '분',
    hour: '시간',
    day: '일',
    week: '주',
    month: '월',
    year: '년',
    
    // 데이터 단위
    bit: '비트',
    byte: '바이트',
    kilobyte: '킬로바이트',
    megabyte: '메가바이트',
    gigabyte: '기가바이트',
    terabyte: '테라바이트',
    petabyte: '페타바이트',
    kibibyte: '키비바이트',
    mebibyte: '메비바이트',
    gibibyte: '기비바이트',
    tebibyte: '테비바이트',
    pebibyte: '페비바이트',
    
    // 속도 단위
    meter_per_second: '미터/초',
    kilometer_per_hour: '킬로미터/시',
    mile_per_hour: '마일/시',
    foot_per_second: '피트/초',
    knot: '노트',
    mach: '마하',
    
    // 면적 단위
    square_millimeter: '제곱밀리미터',
    square_centimeter: '제곱센티미터',
    square_meter: '제곱미터',
    square_kilometer: '제곱킬로미터',
    square_inch: '제곱인치',
    square_foot: '제곱피트',
    acre: '에이커',
    hectare: '헥타르',
    
    // 압력 단위
    pascal: '파스칼',
    kilopascal: '킬로파스칼',
    bar: '바',
    atmosphere: '기압',
    psi: 'PSI',
    torr: '토르',
    mmhg: '수은주밀리미터',
    
    // 에너지 단위
    joule: '줄',
    kilojoule: '킬로줄',
    calorie: '칼로리',
    kilocalorie: '킬로칼로리',
    watt_hour: '와트시',
    kilowatt_hour: '킬로와트시',
    btu: 'BTU'
  },

  // 공유 기능
  share: {
    title: 'Simple Unit Converter - 단위 변환기',
    share: '공유',
    copyResult: '결과 복사',
    copyLink: '링크 복사',
    copied: '복사됨',
    shareResult: '결과 공유'
  }
} as const

// 카테고리 이름 간단 매핑 (별도 export)
export const categoryNames = {
  length: '길이',
  weight: '무게', 
  volume: '부피',
  temperature: '온도',
  time: '시간',
  data: '데이터',
  speed: '속도',
  area: '면적',
  pressure: '압력',
  energy: '에너지'
} 