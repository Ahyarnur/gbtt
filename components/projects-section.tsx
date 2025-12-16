'use client'

import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { HoverEffect } from '@/components/ui/hover-effect'

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E Commerce Website',
      description: 'A small e-commerce with full features made with Laravel 11. Complete with user authentication, product management, shopping cart, and payment integration.',
      link: 'https://github.com/Ahyarnur/Happy-Shop',
    },
    {
      title: 'Portfolio Website',
      description: 'Portfolio website for a cleric with modern design and responsive layout. Built with clean HTML, CSS, and JavaScript.',
      link: 'https://kyai-fathurrohman.my.id/',
    },
    {
      title: 'Desa Kranggan Website',
      description: 'The Kranggan village government website equipped with CRUD news and statistics. Built with Laravel framework for efficient content management.',
      link: 'https://github.com/Ahyarnur/desa-kranggan',
    },
    {
      title: 'Warung Ngapak',
      description: 'A website that displays menus at a food stall. Simple and clean design for easy menu browsing and ordering.',
      link: 'https://ahyarnur.github.io/warung-ngapak/',
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-mono">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  )
}