'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { Theme } from '@/src/legacy/types'

import { Header } from '@/src/legacy/components/Header'
import Footer from '@/src/legacy/components/Footer'
import dynamic from 'next/dynamic'

const AnimatedOrbs = dynamic(() => import('@/src/legacy/components/AnimatedOrbs'), {
  ssr: false,
  loading: () => null,
})

const CookieConsentBanner = dynamic(() => import('@/src/legacy/components/CookieConsentBanner'), {
  ssr: false,
  loading: () => null,
})

const BackToTopButton = dynamic(() => import('@/src/legacy/components/BackToTopButton'), {
  ssr: false,
  loading: () => null,
})

const LoadingSpinner = dynamic(() => import('@/src/legacy/components/LoadingSpinner'), {
  ssr: false,
  loading: () => null,
})

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme) || 'dark' : 'dark'))
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  useEffect(() => {
    // Lightweight route transition indicator (keeps your current UX)
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="font-sans text-text_light dark:text-text_dark min-h-screen bg-400% bg-gradient-animated-light dark:bg-gradient-animated-dark animate-gradient-bg">
      <LoadingSpinner isLoading={isLoading} />
      <AnimatedOrbs theme={theme} />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header theme={theme} setTheme={setTheme} />
        <main className="flex-grow pt-24 overflow-x-hidden">{children}</main>
        <Footer />
      </div>

      <CookieConsentBanner />
      <BackToTopButton />
    </div>
  )
}
