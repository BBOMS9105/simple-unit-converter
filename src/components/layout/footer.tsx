'use client'

import Link from "next/link"
import { Github, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t.footer.madeWith}{" "}
            <Heart className="inline h-4 w-4 text-red-500" />
          </p>
        </div>
        
        <div className="flex items-center space-x-1">
          <Link
            href="https://github.com/BBOMS9105/simple-unit-converter"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
            title={t.footer.openSource}
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
      
      <div className="border-t border-border/40">
        <div className="container flex flex-col items-center justify-center py-4 gap-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Simple Unit Converter. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
} 