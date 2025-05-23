'use client'

import Link from "next/link"
import { Calculator, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSelector } from "./LanguageSelector"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const categories = [
  { id: 'length', name: '길이', icon: '📏', href: '/length' },
  { id: 'weight', name: '무게', icon: '⚖️', href: '/weight' },
  { id: 'volume', name: '부피', icon: '🥛', href: '/volume' },
  { id: 'temperature', name: '온도', icon: '🌡️', href: '/temperature' },
  { id: 'time', name: '시간', icon: '⏰', href: '/time' },
  { id: 'data', name: '데이터', icon: '💾', href: '/data' },
  { id: 'speed', name: '속도', icon: '🏃', href: '/speed' },
  { id: 'area', name: '면적', icon: '📐', href: '/area' },
  { id: 'pressure', name: '압력', icon: '💨', href: '/pressure' },
  { id: 'energy', name: '에너지', icon: '⚡', href: '/energy' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Calculator className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Simple Unit Converter
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="/length"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              길이
            </Link>
            <Link
              href="/weight"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              무게
            </Link>
            <Link
              href="/volume"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              부피
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm text-foreground/60 hover:text-foreground/80">
                  더보기
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
            <span className="font-bold">단위변환기</span>
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