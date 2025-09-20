'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function AnimatedText() {
  const texts = [
    'Ahyar Nur Ichwan',
    'Cybersecurity',
    'Frontend Developer',
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900/20 via-primary-900/30 to-purple-900/20 py-6 md:py-8 texture-lines">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap text-lg md:text-xl lg:text-2xl font-bold text-white"
          animate={{
            x: [0, -100 * texts.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {[...texts, ...texts, ...texts].map((text, index) => (
            <motion.div
              key={index}
              className="flex items-center mr-16 md:mr-24 lg:mr-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mr-4 md:mr-6 text-primary-400 neon-glow">•</span>
              <span className="gradient-text font-mono tracking-wide">{text}</span>
              <span className="ml-4 md:ml-6 text-primary-400 neon-glow">•</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-purple-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-purple-900/20 to-transparent pointer-events-none"></div>
    </section>
  )
}