'use client'

import Link from "next/link"
import { ArrowRight, Calculator, Ruler, Weight, Thermometer, Clock, HardDrive } from "lucide-react"
import { FunFacts } from "@/components/FunFacts"
import { useLanguage } from "@/contexts/LanguageContext"

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
      icon: HardDrive,
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
      icon: HardDrive,
      href: "/speed",
      color: "text-yellow-500",
    },
    {
      name: t.categories.area.name,
      description: t.categories.area.description,
      icon: HardDrive,
      href: "/area",
      color: "text-pink-500",
    },
    {
      name: t.categories.pressure.name,
      description: t.categories.pressure.description,
      icon: HardDrive,
      href: "/pressure",
      color: "text-indigo-500",
    },
    {
      name: t.categories.energy.name,
      description: t.categories.energy.description,
      icon: HardDrive,
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

        {/* Features Section */}
        <section className="py-12 bg-muted/50 rounded-lg">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-8">{t.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.features.realtime.title}</h3>
                <p className="text-muted-foreground">
                  {t.features.realtime.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.features.darkMode.title}</h3>
                <p className="text-muted-foreground">
                  {t.features.darkMode.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.features.mobile.title}</h3>
                <p className="text-muted-foreground">
                  {t.features.mobile.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 