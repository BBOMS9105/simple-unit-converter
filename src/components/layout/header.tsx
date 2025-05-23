'use client'

import Link from "next/link"
import { Calculator, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSelector } from "../LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Header() {
  const { t } = useLanguage()

  const categories = [
    { id: 'length', name: t.categories.length.name, icon: '📏', href: '/length' },
    { id: 'weight', name: t.categories.weight.name, icon: '⚖️', href: '/weight' },
    { id: 'volume', name: t.categories.volume.name, icon: '🥛', href: '/volume' },
    { id: 'temperature', name: t.categories.temperature.name, icon: '🌡️', href: '/temperature' },
    { id: 'time', name: t.categories.time.name, icon: '⏰', href: '/time' },
    { id: 'data', name: t.categories.data.name, icon: '💾', href: '/data' },
    { id: 'speed', name: t.categories.speed.name, icon: '🏃', href: '/speed' },
    { id: 'area', name: t.categories.area.name, icon: '📐', href: '/area' },
    { id: 'pressure', name: t.categories.pressure.name, icon: '💨', href: '/pressure' },
    { id: 'energy', name: t.categories.energy.name, icon: '⚡', href: '/energy' },
  ]

  // 자주 사용하는 단위변환 바로가기
  const quickConverters = [
    { name: t.quickConverters.cmToInch, href: '/length?from=centimeter&to=inch&value=1' },
    { name: t.quickConverters.kgToLb, href: '/weight?from=kilogram&to=pound&value=1' },
    { name: t.quickConverters.celsiusToFahrenheit, href: '/temperature?from=celsius&to=fahrenheit&value=20' },
    { name: t.quickConverters.literToGallon, href: '/volume?from=liter&to=gallon&value=1' },
    { name: t.quickConverters.kmToMile, href: '/length?from=kilometer&to=mile&value=1' },
    { name: t.quickConverters.meterToFoot, href: '/length?from=meter&to=foot&value=1' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Calculator className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {t.header.title}
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="/length"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t.categories.length.name}
            </Link>
            <Link
              href="/weight"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t.categories.weight.name}
            </Link>
            <Link
              href="/volume"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t.categories.volume.name}
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm text-foreground/60 hover:text-foreground/80">
                  {t.header.more}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link href={category.href} className="flex items-center gap-2 w-full">
                      <span className="text-base">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className="mr-6 flex items-center space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-6 w-6" />
            <span className="font-bold">{t.header.mobileTitle}</span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link href={category.href} className="flex items-center gap-2 w-full">
                    <span className="text-base">{category.icon}</span>
                    <span>{category.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Future: Search functionality */}
          </div>
          <nav className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
} 