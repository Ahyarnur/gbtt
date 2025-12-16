'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Code, Database, Palette, Wrench, Shield, Zap } from 'lucide-react'
import { FeatureCard } from '@/components/ui/grid-feature-cards'

export function StackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const features = [
    {
      title: 'Frontend Development',
      icon: Code,
      description: 'React, Next.js, TypeScript, TailwindCSS for building modern web applications.',
    },
    {
      title: 'Backend Development',
      icon: Database,
      description: 'Laravel, PHP, MySQL for robust server-side solutions.',
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Figma, Adobe Creative Suite for creating beautiful interfaces.',
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      description: 'Git, VS Code, npm for efficient development workflow.',
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Network security, ethical hacking, and security protocols.',
    },
    {
      title: 'Performance',
      icon: Zap,
      description: 'Optimized code and best practices for fast applications.',
    },
  ]

  const AnimatedContainer = ({ className, delay = 0.1, children }: any) => {
    if (shouldReduceMotion) {
      return children
    }

    return (
      <motion.div
        initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <section id="stack" className="py-16 md:py-32 bg-background">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold gradient-text font-mono">
            Power. Speed. Control.
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base font-mono">
            Everything you need to build fast, secure, scalable apps.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  )
}
