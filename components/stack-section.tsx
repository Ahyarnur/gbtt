'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Palette, Shield, Server, Smartphone } from 'lucide-react'

export function StackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'Express.js', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Protocols', 'Risk Assessment'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Lightroom', 'Canva', 'User Research', 'Prototyping'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Docker', 'Linux'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Others',
      skills: ['Responsive Design', 'PWA', 'Mobile-First', 'Cross-Platform', 'Performance Optimization'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  return (
    <section id="stack" className="py-12 md:py-16 lg:py-20 bg-dark-900/30 transition-colors duration-300 texture-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-mono">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-400/20 group-hover:border-primary-400/40 border-glow h-full">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-primary-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full group-hover/skill:scale-125 transition-transform duration-300"></div>
                      <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-mono">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'Programming Languages', count: '8+' },
            { label: 'Frameworks & Libraries', count: '12+' },
            { label: 'Tools & Technologies', count: '15+' },
            { label: 'Years of Experience', count: '3+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-primary-400/20 border-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-400 font-mono mb-2">
                {stat.count}
              </div>
              <div className="text-sm text-gray-300 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
