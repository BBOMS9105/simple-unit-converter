'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Share2, Check, Copy, ExternalLink } from 'lucide-react'
import { useConverterStore } from '@/store'
import { convertUnit, convertTemperature, parseInputValue } from '@/lib/conversion-utils'
import { useLanguage } from '@/contexts/LanguageContext'

export function ShareResult() {
  const [copied, setCopied] = useState(false)
  const { inputValue, fromUnit, toUnit } = useConverterStore()
  const { t } = useLanguage()
  
  // 변환 결과 생성
  const getConversionResult = () => {
    if (!inputValue || !fromUnit || !toUnit) return null
    
    try {
      const numericValue = parseInputValue(inputValue)
      
      if (fromUnit.category === 'temperature') {
        return convertTemperature(numericValue, fromUnit.id, toUnit.id)
      } else {
        return convertUnit(numericValue, fromUnit, toUnit)
      }
    } catch {
      return null
    }
  }
  
  // 공유 가능한 텍스트 생성
  const getShareText = () => {
    const result = getConversionResult()
    if (!result || !fromUnit || !toUnit) return ''
    
    return `${inputValue} ${fromUnit.symbol} = ${result.formatted} ${toUnit.symbol}`
  }
  
  // 공유 가능한 URL 생성 (카테고리 페이지 기반)
  const getShareUrl = () => {
    if (!fromUnit || !toUnit || !inputValue) return window.location.href
    
    const baseUrl = window.location.origin
    const categoryUrl = `${baseUrl}/${fromUnit.category}`
    const url = new URL(categoryUrl)
    
    url.searchParams.set('from', fromUnit.id)
    url.searchParams.set('to', toUnit.id)
    url.searchParams.set('value', inputValue)
    
    return url.toString()
  }
  
  // Web Share API 또는 클립보드로 공유
  const handleShare = async () => {
    const shareText = getShareText()
    const shareUrl = getShareUrl()
    
    if (!shareText) return
    
    const shareData = {
      title: t.share.title,
      text: `${shareText} | Simple Unit Converter`,
      url: shareUrl,
    }
    
    try {
      if (typeof navigator !== 'undefined' && 'share' in navigator && /mobile/i.test(navigator.userAgent)) {
        await navigator.share(shareData)
      } else {
        // 데스크톱에서는 클립보드로 복사
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error('공유 실패:', error)
      // 공유 실패 시 클립보드로 대체
      try {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (clipboardError) {
        console.error('클립보드 복사 실패:', clipboardError)
      }
    }
  }
  
  // 결과만 클립보드에 복사
  const handleCopyResult = async () => {
    const shareText = getShareText()
    if (!shareText) return
    
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('클립보드 복사 실패:', error)
    }
  }
  
  // URL만 클립보드에 복사
  const handleCopyUrl = async () => {
    const shareUrl = getShareUrl()
    
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('URL 복사 실패:', error)
    }
  }
  
  const isReady = inputValue && fromUnit && toUnit && getConversionResult()
  const supportsWebShare = typeof navigator !== 'undefined' && 'share' in navigator && /mobile/i.test(navigator.userAgent)
  
  if (!isReady) return null
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* 메인 공유 버튼 */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleShare}
        className="gap-2"
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            {t.share.copied}
          </>
        ) : supportsWebShare ? (
          <>
            <Share2 className="h-4 w-4" />
            {t.share.share}
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            {t.share.shareResult}
          </>
        )}
      </Button>
      
      {/* 결과만 복사 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopyResult}
        className="gap-2"
        disabled={copied}
      >
        <Copy className="h-4 w-4" />
        {t.share.copyResult}
      </Button>
      
      {/* URL만 복사 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopyUrl}
        className="gap-2"
        disabled={copied}
      >
        <ExternalLink className="h-4 w-4" />
        {t.share.copyLink}
      </Button>
    </div>
  )
} 