'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const funFacts = [
  {
    fact: "에미넴 주연 영화 '8마일'은",
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
  }
]

export function FunFacts() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
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
    return (
      <div className="text-center py-4">
        <div className="bg-muted/30 rounded-lg p-4 max-w-2xl mx-auto cursor-pointer hover:bg-muted/50 transition-colors">
          <p className="text-base">
            <span className="text-foreground">{funFacts[0].fact} </span>
            <span className="text-xl font-bold text-primary">{funFacts[0].value}</span>
            <span className="text-foreground">{funFacts[0].description}</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            클릭하여 변환해보기 →
          </p>
        </div>
      </div>
    )
  }

  const currentFact = funFacts[currentFactIndex]

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
            <span className="text-foreground">{currentFact.fact} </span>
            <span className="text-xl font-bold text-primary">{currentFact.value}</span>
            <span className="text-foreground">{currentFact.description}</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            클릭하여 변환해보기 →
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 