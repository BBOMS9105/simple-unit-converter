import Link from "next/link"
import { ArrowRight, Calculator, Ruler, Weight, Thermometer, Clock, HardDrive } from "lucide-react"
import { FunFacts } from "@/components/FunFacts"

const categories = [
  {
    name: "길이",
    description: "미터, 센티미터, 인치, 피트 등",
    icon: Ruler,
    href: "/length",
    color: "text-blue-500",
  },
  {
    name: "무게",
    description: "킬로그램, 그램, 파운드, 온스 등",
    icon: Weight,
    href: "/weight",
    color: "text-green-500",
  },
  {
    name: "부피",
    description: "리터, 갤런, 밀리리터 등",
    icon: HardDrive,
    href: "/volume",
    color: "text-cyan-500",
  },
  {
    name: "온도",
    description: "섭씨, 화씨, 켈빈 등",
    icon: Thermometer,
    href: "/temperature", 
    color: "text-red-500",
  },
  {
    name: "시간",
    description: "초, 분, 시간, 일, 주 등",
    icon: Clock,
    href: "/time",
    color: "text-purple-500",
  },
  {
    name: "데이터",
    description: "바이트, KB, MB, GB 등",
    icon: HardDrive,
    href: "/data",
    color: "text-orange-500",
  },
  {
    name: "속도",
    description: "m/s, km/h, mph 등",
    icon: HardDrive,
    href: "/speed",
    color: "text-yellow-500",
  },
  {
    name: "면적",
    description: "제곱미터, 제곱킬로미터 등",
    icon: HardDrive,
    href: "/area",
    color: "text-pink-500",
  },
  {
    name: "압력",
    description: "파스칼, 바, 대기압 등",
    icon: HardDrive,
    href: "/pressure",
    color: "text-indigo-500",
  },
  {
    name: "에너지",
    description: "줄, 칼로리, BTU 등",
    icon: HardDrive,
    href: "/energy",
    color: "text-emerald-500",
  },
]

export default function Home() {
  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Simple Unit Converter',
    'description': '모든 종류의 단위를 쉽고 빠르게 변환하는 현대적인 웹 애플리케이션',
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'url': 'https://simple-unit-converter.vercel.app',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': [
      '길이 단위 변환',
      '무게 단위 변환', 
      '부피 단위 변환',
      '온도 단위 변환',
      '시간 단위 변환',
      '데이터 크기 변환',
      '속도 단위 변환',
      '면적 단위 변환',
      '압력 단위 변환',
      '에너지 단위 변환'
    ],
    'inLanguage': 'ko-KR',
    'author': {
      '@type': 'Organization',
      'name': 'Simple Unit Converter Team'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-6 md:py-12">
          <div className="flex justify-center mb-4">
            <Calculator className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            Simple Unit Converter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            모든 종류의 단위를 쉽고 빠르게 변환하세요. 
            깔끔한 인터페이스와 정확한 계산으로 일상생활과 업무를 도와드립니다.
          </p>
        </section>

        {/* Fun Facts Section */}
        <section className="py-4 mb-6">
          <FunFacts />
        </section>

        {/* Categories Section */}
        <section className="py-6">
          <h2 className="text-3xl font-bold text-center mb-8">변환 카테고리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center mb-4">
                    <Icon className={`h-8 w-8 ${category.color} mr-3`} />
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center text-sm text-primary">
                    변환하기 <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-muted/50 rounded-lg">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-8">주요 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">실시간 변환</h3>
                <p className="text-muted-foreground">
                  숫자를 입력하는 즉시 결과를 확인할 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">다크 모드</h3>
                <p className="text-muted-foreground">
                  눈이 편한 다크 모드를 지원합니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">모바일 최적화</h3>
                <p className="text-muted-foreground">
                  모든 기기에서 완벽하게 작동합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 