'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white/80 backdrop-blur-sm text-gray-900 transition-all hover:bg-gray-50 dark:border-primary-800 dark:bg-dark-900/80 dark:text-gray-100 dark:hover:bg-dark-800 shadow-lg hover:shadow-xl"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
    </div>
  )
}
