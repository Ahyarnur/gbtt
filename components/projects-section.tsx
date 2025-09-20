'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Code, Globe, Database } from 'lucide-react'

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E Commerce Website',
      description: 'A small e-commerce with full features made with Laravel 11. Complete with user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS'],
      githubUrl: 'https://github.com/Ahyarnur/Happy-Shop',
      liveUrl: null,
      features: [
        'User Authentication & Authorization',
        'Product Management System',
        'Shopping Cart & Checkout',
        'Payment Integration',
        'Admin Dashboard'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Portfolio Website',
      description: 'Portfolio website for a cleric with modern design and responsive layout. Built with clean HTML, CSS, and JavaScript.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/Ahyarnur/portfolio-ustad',
      liveUrl: 'https://kyai-fathurrohman.my.id/',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Interactive Elements',
        'Contact Form',
        'SEO Optimized'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Desa Kranggan Website',
      description: 'The Kranggan village government website equipped with CRUD news and statistics. Built with Laravel framework for efficient content management.',
      image: '/api/placeholder/600/400',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/Ahyarnur/desa-kranggan',
      liveUrl: null,
      features: [
        'News Management System',
        'Statistics Dashboard',
        'CRUD Operations',
        'Responsive Design',
        'Admin Panel'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Warung Ngapak',
      description: 'A website that displays menus at a food stall. Simple and clean design for easy menu browsing and ordering.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Ahyarnur/warung-ngapak',
      liveUrl: 'https://ahyarnur.github.io/warung-ngapak/',
      features: [
        'Menu Display',
        'Food Categories',
        'Contact Information',
        'Responsive Layout',
        'Local Cuisine Focus'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-custom-black transition-colors duration-300 texture-lines">
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
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-400/20 group-hover:border-primary-400/40 border-glow">
                {/* Project Image */}
                <div className="relative h-40 md:h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center border border-white/20`}>
                        <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm font-mono">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3 md:space-x-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300 border border-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300 border border-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 font-mono">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed font-mono">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs font-medium border border-primary-400/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs md:text-sm font-semibold text-white mb-2 font-mono">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300 font-mono">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-primary-400 font-medium font-mono">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 md:space-x-3 mt-4 md:mt-6">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 md:px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors duration-300 text-xs md:text-sm font-medium font-mono border border-white/20"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 md:px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:from-primary-700 hover:to-purple-700 transition-all duration-300 text-xs md:text-sm font-medium font-mono border border-primary-400/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/Ahyarnur?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-mono border border-primary-400/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}