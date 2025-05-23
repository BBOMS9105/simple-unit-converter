'use client'

import { useState, useEffect } from 'react'
import { useConverterStore, useSettingsStore } from '@/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, CheckCircle, Calculator, TrendingUp } from 'lucide-react'
import { convertUnit, convertTemperature, formatNumber, parseInputValue } from '@/lib/conversion-utils'
import { ShareResult } from '@/components/features/ShareResult'
import { useLanguage } from '@/contexts/LanguageContext'
import { getUnitName } from '@/lib/i18n'

export function ConversionResult() {
  const { inputValue, fromUnit, toUnit } = useConverterStore()
  const { precision } = useSettingsStore()
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [result, setResult] = useState<string>('')
  const [rawValue, setRawValue] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)

  // 변환 계산
  useEffect(() => {
    if (!inputValue || !fromUnit || !toUnit) {
      setResult('')
      setRawValue(0)
      setError(null)
      return
    }

    try {
      const numericValue = parseInputValue(inputValue)
      let conversionResult

      // 온도 변환은 특별한 처리가 필요
      if (fromUnit.category === 'temperature') {
        conversionResult = convertTemperature(numericValue, fromUnit.id, toUnit.id)
      } else {
        conversionResult = convertUnit(numericValue, fromUnit, toUnit)
      }

      if (conversionResult.error) {
        setError(conversionResult.error)
        setResult('')
        setRawValue(0)
      } else {
        setError(null)
        setRawValue(conversionResult.value)
        setResult(formatNumber(conversionResult.value, { precision }))
      }
    } catch {
      setError(t.converter.conversionError)
      setResult('')
      setRawValue(0)
    }
  }, [inputValue, fromUnit, toUnit, precision, t.converter.conversionError])

  const handleCopy = async () => {
    if (!result) return

    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('클립보드 복사 실패', error)
    }
  }

  const handleCopyWithUnit = async () => {
    if (!result || !toUnit) return

    const textToCopy = `${result} ${toUnit.symbol}`
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('클립보드 복사 실패', error)
    }
  }

  // 변환 준비 상태 확인
  const isReady = inputValue && fromUnit && toUnit && !error
  const hasResult = isReady && result

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          {t.converter.result}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1">
        {/* 결과 표시 영역 */}
        <div className="min-h-[120px] flex flex-col justify-center flex-1">
          {!isReady ? (
            <div className="text-center text-muted-foreground">
              <Calculator className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>{t.converter.selectValueAndUnits}</p>
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              <p className="font-medium">{t.common.error}</p>
              <p className="text-sm">{error}</p>
            </div>
          ) : hasResult ? (
            <div className="space-y-3">
              {/* 변환식 표시 */}
              <div className="text-center text-sm text-muted-foreground">
                {inputValue} {fromUnit.symbol} =
              </div>
              
              {/* 결과값 */}
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground break-all">
                  {result}
                </div>
                <div className="text-lg text-muted-foreground mt-1">
                  {toUnit.symbol}
                </div>
              </div>

              {/* 단위 정보 */}
              <div className="flex justify-center gap-2 text-xs">
                <Badge variant="outline">
                  {getUnitName(fromUnit.id, t)}
                </Badge>
                <span className="text-muted-foreground">→</span>
                <Badge variant="outline">
                  {getUnitName(toUnit.id, t)}
                </Badge>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>{t.converter.converting}</p>
            </div>
          )}
        </div>

        {/* 복사 버튼들 */}
        {hasResult && (
          <div className="flex gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="gap-2"
              disabled={copied}
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  {t.converter.copied}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  {t.converter.copy}
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyWithUnit}
              className="gap-2"
              disabled={copied}
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  {t.converter.copied}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  {t.converter.copyWithUnit}
                </>
              )}
            </Button>
          </div>
        )}

        {/* 공유 기능 */}
        {hasResult && (
          <div className="border-t pt-3">
            <ShareResult />
          </div>
        )}

        {/* 정밀도 정보 */}
        {hasResult && (
          <div className="text-center text-xs text-muted-foreground border-t pt-3">
            {t.converter.precision}: {precision}{t.converter.digits} | {t.converter.rawValue}: {rawValue.toExponential(3)}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 