import { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryById } from '@/data/units'
import { ConverterPanel } from '@/components/converter/ConverterPanel'
import { AutoConverter } from '@/components/converter/AutoConverter'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ category: string }>
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId } = await params
  const category = getCategoryById(categoryId)
  
  if (!category) {
    return {
      title: 'Unit Converter - Not Found',
      description: 'The requested unit category was not found.'
    }
  }
  
  return {
    title: `${category.name} 변환기 - Simple Unit Converter`,
    description: `${category.description}을 위한 정확하고 빠른 단위 변환기입니다. ${category.name} 단위들을 쉽게 변환해보세요.`,
    keywords: `${category.name}, 단위변환, ${category.name} 변환기, unit converter, ${category.id} converter`,
    openGraph: {
      title: `${category.name} 변환기 - Simple Unit Converter`,
      description: `${category.description}을 위한 정확하고 빠른 단위 변환기`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} 변환기 - Simple Unit Converter`,
      description: `${category.description}을 위한 정확하고 빠른 단위 변환기`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: categoryId } = await params
  const category = getCategoryById(categoryId)
  
  if (!category) {
    notFound()
  }

  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': `${category.name} 변환기`,
    'description': `${category.description}을 위한 정확하고 빠른 단위 변환기`,
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'url': `https://simple-unit-converter.vercel.app/${categoryId}`,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': category.units.map(unit => `${unit.name} (${unit.symbol})`),
    'inLanguage': 'ko-KR'
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
            <span className="text-4xl" role="img" aria-label={category.name}>
              {category.icon}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {category.name} 변환기
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description}을 위한 정확하고 빠른 단위 변환기입니다.
          </p>
        </div>

        {/* 변환기 패널 */}
        <Suspense fallback={null}>
          <AutoConverter category={category} />
        </Suspense>
        <ConverterPanel initialCategory={category} />
        
        {/* 카테고리 정보 */}
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {category.name} 단위 변환 정보
            </h2>
            <p className="text-muted-foreground">
              이 변환기는 {category.units.length}개의 {category.name} 단위를 지원합니다. 
              정확한 변환 공식을 사용하여 신뢰할 수 있는 결과를 제공합니다.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {category.units.slice(0, 8).map((unit) => (
                <span
                  key={unit.id}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-background border text-xs"
                >
                  {unit.symbol}
                </span>
              ))}
              {category.units.length > 8 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-background border text-xs">
                  +{category.units.length - 8}개 더
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// 정적 생성을 위한 경로 생성
export async function generateStaticParams() {
  const categories = ['length', 'weight', 'volume', 'temperature', 'time', 'data', 'speed', 'area', 'pressure', 'energy']
  
  return categories.map((category) => ({
    category,
  }))
} 