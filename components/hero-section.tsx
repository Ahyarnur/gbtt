'use client'

import React from 'react'
import { DotScreenShader } from '@/components/ui/dot-shader-background'

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mix-blend-exclusion text-white whitespace-normal md:whitespace-nowrap pointer-events-none mb-6 leading-tight">
          MY DIGITAL PORTFOLIO
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl mx-auto leading-relaxed pointer-events-none">
          A collection of work, ideas, and growth.
        </p>
      </div>
    </section>
  )
}