'use client'

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Calculator, Ruler, Weight, Thermometer, Clock, HardDrive, Zap, Square, Gauge, Flame, Beaker } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const FunFacts = dynamic(() => import("@/components/FunFacts").then(mod => ({ default: mod.FunFacts })), {
  ssr: false,
  loading: () => (
    <div className="text-center py-4">
      <div className="bg-muted/30 rounded-lg p-4 max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  )
})

export default function Home() {
  const { t, locale } = useLanguage()

  const categories = [
    {
      name: t.categories.length.name,
      description: t.categories.length.description,
      icon: Ruler,
      href: "/length",
      color: "text-blue-500",
    },
    {
      name: t.categories.weight.name,
      description: t.categories.weight.description,
      icon: Weight,
      href: "/weight",
      color: "text-green-500",
    },
    {
      name: t.categories.volume.name,
      description: t.categories.volume.description,
      icon: Beaker,
      href: "/volume",
      color: "text-cyan-500",
    },
    {
      name: t.categories.temperature.name,
      description: t.categories.temperature.description,
      icon: Thermometer,
      href: "/temperature", 
      color: "text-red-500",
    },
    {
      name: t.categories.time.name,
      description: t.categories.time.description,
      icon: Clock,
      href: "/time",
      color: "text-purple-500",
    },
    {
      name: t.categories.data.name,
      description: t.categories.data.description,
      icon: HardDrive,
      href: "/data",
      color: "text-orange-500",
    },
    {
      name: t.categories.speed.name,
      description: t.categories.speed.description,
      icon: Zap,
      href: "/speed",
      color: "text-yellow-500",
    },
    {
      name: t.categories.area.name,
      description: t.categories.area.description,
      icon: Square,
      href: "/area",
      color: "text-pink-500",
    },
    {
      name: t.categories.pressure.name,
      description: t.categories.pressure.description,
      icon: Gauge,
      href: "/pressure",
      color: "text-indigo-500",
    },
    {
      name: t.categories.energy.name,
      description: t.categories.energy.description,
      icon: Flame,
      href: "/energy",
      color: "text-emerald-500",
    },
  ]

  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': t.site.title,
    'description': t.site.description,
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'url': 'https://simple-unit-converter.vercel.app',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': categories.map(cat => cat.name),
    'inLanguage': locale === 'ko' ? 'ko-KR' : 
                 locale === 'ja' ? 'ja-JP' :
                 locale === 'es' ? 'es-ES' : 'en-US',
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
            {t.site.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {t.site.description}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.site.tagline}
          </p>
        </section>

        {/* Fun Facts Section */}
        <section className="py-4 mb-6">
          <FunFacts />
        </section>

        {/* Categories Section */}
        <section className="py-6">
          <h2 className="text-3xl font-bold text-center mb-8">{t.categories.title}</h2>
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
                    {t.categories.convert} <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>


      </div>
    </>
  )
} 