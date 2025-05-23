'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export function FunFacts() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  // 번역된 재밌는 사실들
  const funFacts = t.funFacts.facts

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
            {t.funFacts.clickToConvert}
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
            {t.funFacts.clickToConvert}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 