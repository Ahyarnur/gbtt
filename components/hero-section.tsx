'use client'

import React from 'react'
import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>

      <a
        href="/api/cv"
        download
        aria-label="Download CV"
        className="absolute top-6 right-6 inline-flex items-center justify-center w-11 h-11 rounded-full neon-border bg-black/40 hover:bg-black/60 transition"
      >
        <Download className="w-4 h-4 text-white/80" />
      </a>

      <div className="relative z-10 text-center px-4">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-white/70 mb-4">
          Secure • Build • Defend
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white whitespace-normal md:whitespace-nowrap pointer-events-none mb-6 leading-tight">
          MY DIGITAL PORTFOLIO
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-center text-white/80 max-w-2xl mx-auto leading-relaxed pointer-events-none">
          Threat-aware web experiences with a security-first mindset.
        </p>
        <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full neon-border bg-black/40">
          <span className="neon-text text-xs sm:text-sm">$</span>
          <span className="text-xs sm:text-sm text-white/80">root@ahyar: whoami</span>
        </div>
      </div>
    </section>
  )
}