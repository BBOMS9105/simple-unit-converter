'use client'

import { useEffect, useState } from 'react'
import { initializeStores, useConverterStore, useSettingsStore } from '@/store'
import { useCategoriesStore } from '@/store'

export function StoreInitializer() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // 마운트 후 즉시 실행
    if (typeof window !== 'undefined' && !isInitialized) {
      if (process.env.NODE_ENV === 'development') {
        console.log('StoreInitializer: 스토어 초기화 시작')
      }
      
      // 스토어 초기화
      initializeStores()
      
      // persist 상태 복원 (skipHydration: true이므로 수동으로 실행)
      useConverterStore.persist.rehydrate()
      useSettingsStore.persist.rehydrate()
      
      setIsInitialized(true)
      if (process.env.NODE_ENV === 'development') {
        console.log('StoreInitializer: 스토어 초기화 완료')
      }
    }
  }, [isInitialized])

  return null
} 