'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

const funFacts = [
  // 길이 관련
  {
    factKey: "eightMile",
    category: "length",
    fromUnit: "mile",
    fromValue: "8",
    toUnit: "kilometer"
  },
  {
    factKey: "empireState",
    category: "length",
    fromUnit: "meter",
    fromValue: "381",
    toUnit: "foot"
  },
  {
    factKey: "soccerField",
    category: "length",
    fromUnit: "meter",
    fromValue: "105",
    toUnit: "yard"
  },
  {
    factKey: "everest",
    category: "length",
    fromUnit: "meter",
    fromValue: "8848.86",
    toUnit: "foot"
  },
  {
    factKey: "titanic",
    category: "length",
    fromUnit: "meter",
    fromValue: "269",
    toUnit: "foot"
  },
  {
    factKey: "marathon",
    category: "length",
    fromUnit: "kilometer",
    fromValue: "42.195",
    toUnit: "mile"
  },
  {
    factKey: "earthCircumference",
    category: "length",
    fromUnit: "kilometer",
    fromValue: "40075",
    toUnit: "mile"
  },
  {
    factKey: "greatWall",
    category: "length",
    fromUnit: "kilometer",
    fromValue: "21196",
    toUnit: "mile"
  },
  {
    factKey: "burjKhalifa",
    category: "length",
    fromUnit: "meter",
    fromValue: "828",
    toUnit: "foot"
  },
  {
    factKey: "goldenGate",
    category: "length",
    fromUnit: "meter",
    fromValue: "2737",
    toUnit: "foot"
  },
  {
    factKey: "basketballCourt",
    category: "length",
    fromUnit: "meter",
    fromValue: "28",
    toUnit: "foot"
  },
  {
    factKey: "tennisNet",
    category: "length",
    fromUnit: "meter",
    fromValue: "0.914",
    toUnit: "foot"
  },
  
  // 무게 관련
  {
    factKey: "book",
    category: "weight",
    fromUnit: "gram",
    fromValue: "300",
    toUnit: "ounce"
  },
  {
    factKey: "averageMale",
    category: "weight",
    fromUnit: "kilogram",
    fromValue: "70",
    toUnit: "pound"
  },
  {
    factKey: "waterLiter",
    category: "weight",
    fromUnit: "kilogram",
    fromValue: "1",
    toUnit: "pound"
  },
  {
    factKey: "elephant",
    category: "weight",
    fromUnit: "kilogram",
    fromValue: "6000",
    toUnit: "pound"
  },
  {
    factKey: "blueWhale",
    category: "weight",
    fromUnit: "kilogram",
    fromValue: "150000",
    toUnit: "pound"
  },
  {
    factKey: "smartphone",
    category: "weight",
    fromUnit: "gram",
    fromValue: "200",
    toUnit: "ounce"
  },
  {
    factKey: "penny",
    category: "weight",
    fromUnit: "gram",
    fromValue: "2.5",
    toUnit: "ounce"
  },
  {
    factKey: "car",
    category: "weight",
    fromUnit: "kilogram",
    fromValue: "1500",
    toUnit: "pound"
  },
  {
    factKey: "feather",
    category: "weight",
    fromUnit: "gram",
    fromValue: "0.62",
    toUnit: "ounce"
  },
  
  // 속도 관련
  {
    factKey: "walkingSpeed",
    category: "speed",
    fromUnit: "kilometer_per_hour",
    fromValue: "5",
    toUnit: "mile_per_hour"
  },
  {
    factKey: "lightSpeed",
    category: "speed",
    fromUnit: "meter_per_second",
    fromValue: "299792458",
    toUnit: "kilometer_per_hour"
  },
  {
    factKey: "cheetah",
    category: "speed",
    fromUnit: "kilometer_per_hour",
    fromValue: "120",
    toUnit: "mile_per_hour"
  },
  {
    factKey: "soundSpeed",
    category: "speed",
    fromUnit: "meter_per_second",
    fromValue: "343",
    toUnit: "kilometer_per_hour"
  },
  {
    factKey: "usainBolt",
    category: "speed",
    fromUnit: "kilometer_per_hour",
    fromValue: "37.58",
    toUnit: "mile_per_hour"
  },
  {
    factKey: "airplane",
    category: "speed",
    fromUnit: "kilometer_per_hour",
    fromValue: "900",
    toUnit: "mile_per_hour"
  },
  
  // 온도 관련
  {
    factKey: "bodyTemp",
    category: "temperature",
    fromUnit: "celsius",
    fromValue: "36.5",
    toUnit: "fahrenheit"
  },
  {
    factKey: "boilingPoint",
    category: "temperature",
    fromUnit: "celsius",
    fromValue: "100",
    toUnit: "fahrenheit"
  },
  {
    factKey: "freezingPoint",
    category: "temperature",
    fromUnit: "celsius",
    fromValue: "0",
    toUnit: "fahrenheit"
  },
  {
    factKey: "sunSurface",
    category: "temperature",
    fromUnit: "celsius",
    fromValue: "5778",
    toUnit: "fahrenheit"
  },
  {
    factKey: "absoluteZero",
    category: "temperature",
    fromUnit: "celsius",
    fromValue: "-273.15",
    toUnit: "fahrenheit"
  },
  
  // 시간 관련
  {
    factKey: "day",
    category: "time",
    fromUnit: "day",
    fromValue: "1",
    toUnit: "minute"
  },
  {
    factKey: "year",
    category: "time",
    fromUnit: "year",
    fromValue: "1",
    toUnit: "hour"
  },
  {
    factKey: "heartbeat",
    category: "time",
    fromUnit: "second",
    fromValue: "1",
    toUnit: "millisecond"
  },
  {
    factKey: "blink",
    category: "time",
    fromUnit: "millisecond",
    fromValue: "300",
    toUnit: "second"
  },
  
  // 데이터 관련
  {
    factKey: "dvd",
    category: "data",
    fromUnit: "gigabyte",
    fromValue: "4.7",
    toUnit: "megabyte"
  },
  {
    factKey: "bluray",
    category: "data",
    fromUnit: "gigabyte",
    fromValue: "25",
    toUnit: "gibibyte"
  },
  {
    factKey: "floppy",
    category: "data",
    fromUnit: "kilobyte",
    fromValue: "1440",
    toUnit: "megabyte"
  },
  {
    factKey: "humanBrain",
    category: "data",
    fromUnit: "terabyte",
    fromValue: "2.5",
    toUnit: "gigabyte"
  },
  {
    factKey: "internetMinute",
    category: "data",
    fromUnit: "petabyte",
    fromValue: "2.9",
    toUnit: "terabyte"
  },
  
  // 압력 관련
  {
    factKey: "atmosphere",
    category: "pressure",
    fromUnit: "kilopascal",
    fromValue: "101.325",
    toUnit: "atmosphere"
  },
  {
    factKey: "carTire",
    category: "pressure",
    fromUnit: "psi",
    fromValue: "32",
    toUnit: "bar"
  },
  
  // 에너지 관련
  {
    factKey: "banana",
    category: "energy",
    fromUnit: "kilocalorie",
    fromValue: "89",
    toUnit: "joule"
  },
  {
    factKey: "lightning",
    category: "energy",
    fromUnit: "kilowatt_hour",
    fromValue: "1.4",
    toUnit: "joule"
  },
  {
    factKey: "household",
    category: "energy",
    fromUnit: "kilowatt_hour",
    fromValue: "30",
    toUnit: "joule"
  },
  
  // 면적 관련
  {
    factKey: "creditCard",
    category: "area",
    fromUnit: "square_centimeter",
    fromValue: "46",
    toUnit: "square_inch"
  },
  {
    factKey: "footballField",
    category: "area",
    fromUnit: "hectare",
    fromValue: "0.714",
    toUnit: "acre"
  },
  {
    factKey: "centralPark",
    category: "area",
    fromUnit: "hectare",
    fromValue: "341",
    toUnit: "acre"
  }
]

export function FunFacts() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  // 클라이언트에서만 랜덤 시작 인덱스 설정
  useEffect(() => {
    setIsMounted(true)
    // 마운트 후 랜덤 시작점 설정
    setCurrentFactIndex(Math.floor(Math.random() * funFacts.length))
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)
    }, 6000) // 6초마다 변경

    return () => clearInterval(interval)
  }, [isMounted])

  // 마운트되지 않았으면 첫 번째 fact만 보여줌 (Hydration mismatch 방지)
  if (!isMounted) {
    const firstFact = funFacts[0]
    const factData = t.funFacts.facts[firstFact.factKey as keyof typeof t.funFacts.facts]
    
    return (
      <div className="text-center py-4">
        <div className="bg-muted/30 rounded-lg p-4 max-w-2xl mx-auto cursor-pointer hover:bg-muted/50 transition-colors">
          <p className="text-base">
            <span className="text-foreground">{factData?.fact} </span>
            <span className="text-xl font-bold text-primary">{factData?.value}</span>
            <span className="text-foreground">{factData?.description}</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t.funFacts.clickToConvert}
          </p>
        </div>
      </div>
    )
  }

  const currentFact = funFacts[currentFactIndex]
  const factData = t.funFacts.facts[currentFact.factKey as keyof typeof t.funFacts.facts]

  const handleFactClick = () => {
    const { category, fromUnit, fromValue, toUnit } = currentFact
    const params = new URLSearchParams({
      from: fromUnit,
      to: toUnit,
      value: fromValue
    })
    router.push(`/${category}?${params.toString()}`)
  }

  return (
    <div className="text-center py-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFactIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-muted/30 rounded-lg p-4 max-w-2xl mx-auto cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={handleFactClick}
        >
          <p className="text-base">
            <span className="text-foreground">{factData?.fact} </span>
            <span className="text-xl font-bold text-primary">{factData?.value}</span>
            <span className="text-foreground">{factData?.description}</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t.funFacts.clickToConvert}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 