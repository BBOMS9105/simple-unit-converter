'use client'

import { useState, useEffect } from 'react'
import { useConverterStore } from '@/store'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calculator, X } from 'lucide-react'
import { validateInput } from '@/lib/conversion-utils'
import { useLanguage } from '@/contexts/LanguageContext'

export function NumberInput() {
  const { inputValue, setInputValue, fromUnit, toUnit } = useConverterStore()
  const { t } = useLanguage()
  const [localValue, setLocalValue] = useState(inputValue)
  const [error, setError] = useState<string | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  // 스토어의 inputValue가 변경될 때 로컬 상태 동기화
  useEffect(() => {
    setLocalValue(inputValue)
  }, [inputValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalValue(value)

    // 빈 값은 허용
    if (value === '') {
      setInputValue('')
      setError(null)
      return
    }

    // 숫자 유효성 검사
    const validation = validateInput(value)
    if (validation.isValid) {
      setInputValue(value)
      setError(null)
    } else {
      setError(validation.error || t.converter.enterValidNumber)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enter 키 처리
    if (e.key === 'Enter') {
      e.preventDefault()
      if (localValue && !error) {
        setInputValue(localValue)
      }
    }
    
    // Escape 키로 초기화
    if (e.key === 'Escape') {
      e.preventDefault()
      handleClear()
    }
  }

  const handleClear = () => {
    setLocalValue('')
    setInputValue('')
    setError(null)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    // 포커스를 잃을 때 유효한 값이면 스토어에 저장
    if (localValue && !error) {
      setInputValue(localValue)
    }
  }

  const canConvert = fromUnit && toUnit && localValue && !error

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          {t.converter.enterValue}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1">
        <div className="space-y-2">
          <label htmlFor="number-input" className="text-sm font-medium text-foreground">
            {t.converter.from}
            {fromUnit && (
              <span className="text-muted-foreground ml-1">
                ({fromUnit.symbol})
              </span>
            )}
          </label>
          
          <div className="relative">
            <Input
              id="number-input"
              type="text"
              value={localValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={t.converter.enterValue}
              className={`pr-10 ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              aria-invalid={!!error}
              aria-describedby={error ? 'input-error' : undefined}
              autoComplete="off"
              inputMode="decimal"
            />
            
            {/* 클리어 버튼 */}
            {localValue && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={handleClear}
                aria-label={t.common.clear}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* 오류 메시지 */}
          {error && (
            <p id="input-error" className="text-sm text-destructive">
              {error}
            </p>
          )}

          {/* 도움말 텍스트 */}
          {!fromUnit || !toUnit ? (
            <p className="text-sm text-muted-foreground">
              {t.converter.selectUnitsFirst}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              {isFocused ? (
                <>
                  <kbd className="px-1 py-0.5 text-xs bg-muted rounded">Enter</kbd> {t.converter.convert},{' '}
                  <kbd className="px-1 py-0.5 text-xs bg-muted rounded">Esc</kbd> {t.common.clear}
                </>
              ) : (
                canConvert ? t.converter.readyToConvert : t.converter.enterValue
              )}
            </p>
          )}
        </div>

        {/* 빠른 입력 버튼들 */}
        {fromUnit && toUnit && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">{t.converter.quickInput}</p>
            <div className="flex flex-wrap gap-2">
              {['1', '10', '100', '1000'].map((value) => (
                <Button
                  key={value}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setLocalValue(value)
                    setInputValue(value)
                    setError(null)
                  }}
                  className="text-xs"
                >
                  {value}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 