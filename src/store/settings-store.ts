import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AppSettings, DEFAULT_SETTINGS } from '@/types'

interface SettingsStoreState extends AppSettings {
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  setPrecision: (precision: number) => void
  toggleFavoriteCategory: (category: string) => void
  setShowHistory: (show: boolean) => void
  setMaxHistoryItems: (max: number) => void
  resetSettings: () => void
}

export const useSettingsStore = create<SettingsStoreState>()(
  persist(
    (set) => ({
      // 초기 상태 (DEFAULT_SETTINGS에서 가져옴)
      ...DEFAULT_SETTINGS,
      
      // Actions
      setTheme: (theme) => {
        set({ theme })
      },
      
      setPrecision: (precision) => {
        // 정밀도는 0-15 사이로 제한
        const validPrecision = Math.max(0, Math.min(15, precision))
        set({ precision: validPrecision })
      },
      
      toggleFavoriteCategory: (category) => {
        set(state => {
          const exists = state.favoriteCategories.includes(category)
          const favoriteCategories = exists
            ? state.favoriteCategories.filter(cat => cat !== category)
            : [...state.favoriteCategories, category]
          
          return { favoriteCategories }
        })
      },
      
      setShowHistory: (show) => {
        set({ showHistory: show })
      },
      
      setMaxHistoryItems: (max) => {
        // 최대 히스토리 아이템은 10-500 사이로 제한
        const validMax = Math.max(10, Math.min(500, max))
        set({ maxHistoryItems: validMax })
      },
      
      resetSettings: () => {
        set({ ...DEFAULT_SETTINGS })
      }
    }),
    {
      name: 'unit-converter-settings',
      skipHydration: true, // SSR에서 hydration 스킵
      // 오류 처리 추가
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.warn('Zustand persist: Failed to rehydrate settings, using defaults:', error)
          // localStorage를 클리어하고 기본값 사용
          if (typeof window !== 'undefined') {
            try {
              localStorage.removeItem('unit-converter-settings')
            } catch (e) {
              console.warn('Failed to clear localStorage:', e)
            }
          }
        }
      },
      // 커스텀 storage로 오류 처리 강화
      storage: {
        getItem: (name) => {
          // 클라이언트 사이드에서만 실행
          if (typeof window === 'undefined') {
            return null
          }
          
          try {
            const item = localStorage.getItem(name)
            return item ? JSON.parse(item) : null
          } catch (error) {
            console.warn(`Failed to parse localStorage item "${name}":`, error)
            // 손상된 데이터 제거
            try {
              localStorage.removeItem(name)
            } catch (e) {
              console.warn('Failed to remove corrupted localStorage item:', e)
            }
            return null
          }
        },
        setItem: (name, value) => {
          // 클라이언트 사이드에서만 실행
          if (typeof window === 'undefined') {
            return
          }
          
          try {
            localStorage.setItem(name, JSON.stringify(value))
          } catch (error) {
            console.warn(`Failed to save to localStorage "${name}":`, error)
          }
        },
        removeItem: (name) => {
          // 클라이언트 사이드에서만 실행
          if (typeof window === 'undefined') {
            return
          }
          
          try {
            localStorage.removeItem(name)
          } catch (error) {
            console.warn(`Failed to remove localStorage item "${name}":`, error)
          }
        },
      },
    }
  )
) 