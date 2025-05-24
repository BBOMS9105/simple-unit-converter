'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/locales'
import { categoryNames as koCategoryNames } from '@/locales/ko'
import { categoryNames as enCategoryNames } from '@/locales/en'
import { categoryNames as jaCategoryNames } from '@/locales/ja'
import { categoryNames as esCategoryNames } from '@/locales/es'
import type { Locale } from '@/lib/i18n'

interface Unit {
  id: string
  name: string
  symbol: string
}

interface Category {
  id: string
  name: string
  description: string
  icon: string
  units: Unit[]
}

interface CategoryPageContentProps {
  category: Category
  categoryId: string
}

export function CategoryPageContent({ category, categoryId }: CategoryPageContentProps) {
  const { locale } = useLanguage()
  const t = getTranslation(locale)

  // 카테고리 이름과 설명을 번역에서 가져오기
  const categoryNameMappings: Record<Locale, Record<string, string>> = {
    ko: koCategoryNames,
    en: enCategoryNames,
    ja: jaCategoryNames,
    es: esCategoryNames
  }
  
  const categoryName = categoryNameMappings[locale]?.[categoryId] || category.name
  const categoryData = t.categories[categoryId as keyof typeof t.categories]
  const categoryDescription = typeof categoryData === 'object' && 'description' in categoryData 
    ? categoryData.description 
    : category.description

  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': `${categoryName} ${t.converter.title}`,
    'description': `${categoryDescription}${t.converter.forAccurate}`,
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'url': `https://simple-unit-converter.vercel.app/${categoryId}`,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': category.units.map((unit: Unit) => `${unit.name} (${unit.symbol})`),
    'inLanguage': locale === 'ko' ? 'ko-KR' : locale === 'ja' ? 'ja-JP' : locale === 'es' ? 'es-ES' : 'en-US'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        {/* 카테고리 헤더 */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-4xl" role="img" aria-label={categoryName}>
              {category.icon}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {categoryName} {t.converter.title}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {categoryDescription}{t.converter.forAccurate}
          </p>
        </div>
        
        {/* 카테고리 정보 */}
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {categoryName} {t.converter.unitConversionInfo}
            </h2>
            <p className="text-muted-foreground">
              {t.converter.thisConverterSupports.replace('{count}', category.units.length.toString()).replace('{category}', categoryName)}
              {t.converter.providesReliableResults}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {category.units.slice(0, 8).map((unit: Unit) => (
                <span
                  key={unit.id}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-background border text-xs"
                >
                  {unit.symbol}
                </span>
              ))}
              {category.units.length > 8 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-background border text-xs">
                  +{category.units.length - 8}{t.converter.more}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 