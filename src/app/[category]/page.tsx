import { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryById } from '@/data/units'
import { ConverterPanel } from '@/components/converter/ConverterPanel'
import { AutoConverter } from '@/components/converter/AutoConverter'
import { Suspense } from 'react'
import { CategoryPageContent } from '@/components/CategoryPageContent'

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

  return (
    <>
      <CategoryPageContent category={category} categoryId={categoryId} />
      <div className="container mx-auto px-4 py-8">
        {/* 변환기 패널 */}
        <Suspense fallback={null}>
          <AutoConverter category={category} />
        </Suspense>
        <ConverterPanel initialCategory={category} />
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