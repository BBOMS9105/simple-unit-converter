export const ja = {
  // 사이트 정보
  site: {
    title: 'Simple Unit Converter',
    description: 'あらゆる種類の単位を簡単かつ迅速に変換',
    tagline: 'きれいなインターフェースと正確な計算で日常生活と仕事をサポートします。'
  },

  // 헤더
  header: {
    title: 'Simple Unit Converter',
    mobileTitle: '単位変換器',
    more: 'もっと見る'
  },

  // 빠른 변환 바로가기
  quickConverters: {
    title: 'クイック変換',
    cmToInch: 'cm → インチ',
    kgToLb: 'kg → ポンド',
    celsiusToFahrenheit: '°C → °F',
    literToGallon: 'リットル → ガロン',
    kmToMile: 'km → マイル',
    meterToFoot: 'メートル → フィート',
    viewAll: 'すべての変換器を見る'
  },

  // 카테고리
  categories: {
    title: '変換カテゴリ',
    length: {
      name: '長さ',
      description: 'メートル、センチメートル、インチ、フィートなど'
    },
    weight: {
      name: '重量',
      description: 'キログラム、グラム、ポンド、オンスなど'
    },
    volume: {
      name: '体積',
      description: 'リットル、ガロン、ミリリットルなど'
    },
    temperature: {
      name: '温度',
      description: '摂氏、華氏、ケルビンなど'
    },
    time: {
      name: '時間',
      description: '秒、分、時間、日、週など'
    },
    data: {
      name: 'データ',
      description: 'バイト、KB、MB、GBなど'
    },
    speed: {
      name: '速度',
      description: 'm/s、km/h、mphなど'
    },
    area: {
      name: '面積',
      description: '平方メートル、平方キロメートルなど'
    },
    pressure: {
      name: '圧力',
      description: 'パスカル、バール、気圧など'
    },
    energy: {
      name: 'エネルギー',
      description: 'ジュール、カロリー、BTUなど'
    },
    convert: '変換'
  },

  // 변환기
  converter: {
    from: '変換元',
    to: '変換先',
    swap: '単位を交換',
    result: '結果',
    copy: '数値をコピー',
    copyWithUnit: '単位付きでコピー',
    copied: 'コピーしました',
    share: '共有',
    enterValue: '値を入力してください',
    selectFromUnit: '変換元の単位を選択',
    selectToUnit: '変換先の単位を選択',
    // カテゴリページ用翻訳
    title: 'コンバーター',
    forAccurate: ' - 正確で高速な単位変換器です。',
    unitConversionInfo: '単位変換情報',
    thisConverterSupports: 'このコンバーターは{count}個の{category}単位をサポートしています。',
    providesReliableResults: '正確な変換式を使用して信頼できる結果を提供します。',
    more: 'もっと',
    // NumberInput コンポーネント用翻訳
    enterValidNumber: '正しい数値を入力してください',
    selectUnitsFirst: '先に単位を選択してください',
    convert: '変換',
    readyToConvert: '変換準備完了',
    quickInput: 'クイック入力',
    // ConversionResult コンポーネント用翻訳
    conversionError: '変換中にエラーが発生しました',
    selectValueAndUnits: '値と単位を選択してください',
    converting: '変換中...',
    precision: '精度',
    digits: '桁',
    rawValue: '生の値',
    // ConverterPanel コンポーネント用翻訳
    keyboardTip: '💡 ヒント: キーボードショートカットでより速く変換できます',
    // UnitSelector コンポーネント用翻訳
    selectCategoryFirst: 'まずカテゴリを選択してください',
    noUnitsAvailable: '選択されたカテゴリに利用可能な単位がありません',
    selectUnits: '単位選択',
    selectUnit: '単位を選択してください'
  },

  // 공통 UI
  common: {
    search: '検索',
    clear: 'クリア',
    close: '閉じる',
    loading: '読み込み中...',
    error: 'エラーが発生しました',
    notFound: 'ページが見つかりません',
    goHome: 'ホームに戻る'
  },

  // 특징
  features: {
    title: '主な特徴',
    realtime: {
      title: 'リアルタイム変換',
      description: '入力と同時に結果を確認できます。'
    },
    darkMode: {
      title: 'ダークモード',
      description: '目に優しいダークモードをサポート。'
    },
    mobile: {
      title: 'モバイル最適化',
      description: 'すべてのデバイスで完璧に動作します。'
    }
  },

  // 푸터
  footer: {
    madeWith: '❤️で作成',
    openSource: 'GitHubでソースを見る',
    disclaimer: 'このコンバーターは情報提供のみを目的としており、正確性を保証するものではありません。重要な計算には専門ツールをご使用ください。'
  },

  // 재밌는 사실
  funFacts: {
    clickToConvert: 'クリックして変換 →',
    facts: [
      {
        fact: "エミネム主演映画「8マイル」は",
        value: "12.87 km",
        description: "です 🎬",
        category: "length",
        fromUnit: "mile",
        fromValue: "8",
        toUnit: "kilometer"
      },
      {
        fact: "エンパイアステートビルの高さは",
        value: "381 m",
        description: "です 🏢",
        category: "length",
        fromUnit: "meter",
        fromValue: "381",
        toUnit: "foot"
      },
      {
        fact: "サッカー場の長さは通常",
        value: "100-110 m",
        description: "です ⚽",
        category: "length",
        fromUnit: "meter",
        fromValue: "105",
        toUnit: "yard"
      },
      {
        fact: "人間の平均歩行速度は",
        value: "5 km/h",
        description: "です 🚶",
        category: "speed",
        fromUnit: "kilometer_per_hour",
        fromValue: "5",
        toUnit: "mile_per_hour"
      },
      {
        fact: "光の速度は",
        value: "299,792,458 m/s",
        description: "です ⚡",
        category: "speed",
        fromUnit: "meter_per_second",
        fromValue: "299792458",
        toUnit: "kilometer_per_hour"
      }
    ]
  },

  // 単位名翻訳
  units: {
    // 長さ単位
    millimeter: 'ミリメートル',
    centimeter: 'センチメートル',
    meter: 'メートル',
    kilometer: 'キロメートル',
    inch: 'インチ',
    foot: 'フィート',
    yard: 'ヤード',
    mile: 'マイル',
    
    // 重量単位
    milligram: 'ミリグラム',
    gram: 'グラム',
    kilogram: 'キログラム',
    pound: 'ポンド',
    ounce: 'オンス',
    ton: 'トン',
    stone: 'ストーン',
    
    // 体積単位
    milliliter: 'ミリリットル',
    liter: 'リットル',
    gallon: 'ガロン',
    quart: 'クォート',
    pint: 'パイント',
    cup: 'カップ',
    fluid_ounce: '液量オンス',
    tablespoon: '大さじ',
    teaspoon: '小さじ',
    
    // 温度単位
    celsius: '摂氏',
    fahrenheit: '華氏',
    kelvin: 'ケルビン',
    rankine: 'ランキン',
    
    // 時間単位
    millisecond: 'ミリ秒',
    second: '秒',
    minute: '分',
    hour: '時間',
    day: '日',
    week: '週',
    month: '月',
    year: '年',
    
    // データ単位
    bit: 'ビット',
    byte: 'バイト',
    kilobyte: 'キロバイト',
    megabyte: 'メガバイト',
    gigabyte: 'ギガバイト',
    terabyte: 'テラバイト',
    petabyte: 'ペタバイト',
    kibibyte: 'キビバイト',
    mebibyte: 'メビバイト',
    gibibyte: 'ギビバイト',
    tebibyte: 'テビバイト',
    pebibyte: 'ペビバイト',
    
    // 速度単位
    meter_per_second: 'メートル毎秒',
    kilometer_per_hour: 'キロメートル毎時',
    mile_per_hour: 'マイル毎時',
    foot_per_second: 'フィート毎秒',
    knot: 'ノット',
    mach: 'マッハ',
    
    // 面積単位
    square_millimeter: '平方ミリメートル',
    square_centimeter: '平方センチメートル',
    square_meter: '平方メートル',
    square_kilometer: '平方キロメートル',
    square_inch: '平方インチ',
    square_foot: '平方フィート',
    acre: 'エーカー',
    hectare: 'ヘクタール',
    
    // 圧力単位
    pascal: 'パスカル',
    kilopascal: 'キロパスカル',
    bar: 'バール',
    atmosphere: '気圧',
    psi: 'PSI',
    torr: 'トール',
    mmhg: '水銀柱ミリメートル',
    
    // エネルギー単位
    joule: 'ジュール',
    kilojoule: 'キロジュール',
    calorie: 'カロリー',
    kilocalorie: 'キロカロリー',
    watt_hour: 'ワット時',
    kilowatt_hour: 'キロワット時',
    btu: 'BTU'
  },

  // 共有機能
  share: {
    title: 'Simple Unit Converter',
    share: '共有',
    copyResult: '結果をコピー',
    copyLink: 'リンクをコピー',
    copied: 'コピーしました',
    shareResult: '結果を共有'
  }
} as const

// カテゴリ名の簡単なマッピング（別途エクスポート）
export const categoryNames = {
  length: '長さ',
  weight: '重量',
  volume: '体積',
  temperature: '温度', 
  time: '時間',
  data: 'データ',
  speed: '速度',
  area: '面積',
  pressure: '圧力',
  energy: 'エネルギー'
} 