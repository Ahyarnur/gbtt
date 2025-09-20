'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Code, Palette, Lightbulb } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { icon: Shield, name: 'Cybersecurity', description: 'Network security, ethical hacking, and security protocols' },
    { icon: Code, name: 'Frontend Development', description: 'React, Next.js, TypeScript, and modern web technologies' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Adobe Creative Suite, and user-centered design' },
    { icon: Lightbulb, name: 'Problem Solving', description: 'Creative solutions and analytical thinking' },
  ]

  const technologies = [
    'Laravel', 'PHP', 'React', 'Next.js', 'TypeScript', 'TailwindCSS', 
    'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Git', 'MySQL'
  ]

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-custom-black transition-colors duration-300 texture-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-mono">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            A passionate student combining cybersecurity knowledge with modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-mono">
              My Journey
            </h3>
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed font-mono text-sm md:text-base">
              <p>
                I am a student of the Cyber Security Engineering program at Politeknik Negeri Cilacap, 
                with a strong passion for technology—especially in web development and cybersecurity.
              </p>
              <p>
                Previously, I studied at SMK Ma'arif NU 1 Ajibarang in Purwokerto, where I focused on 
                web development and gained hands-on experience working with Laravel, TailwindCSS, and PHP 
                to build responsive and efficient web applications.
              </p>
              <p>
                In addition to my technical skills, I'm also exploring UI/UX design using tools like 
                Figma, Adobe Photoshop, Adobe Lightroom, and Canva. I am highly enthusiastic about 
                learning new technologies and always stay up-to-date with the latest trends in the tech world.
              </p>
              <p>
                I see every advancement as an opportunity to grow, adapt, and contribute meaningfully 
                in today's digital era.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group border border-primary-400/20 border-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 md:p-3 rounded-lg bg-primary-600/20 text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300 border border-primary-400/30">
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-semibold text-white text-sm md:text-base font-mono">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-gray-300 font-mono leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-mono">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-primary-600/20 text-primary-300 rounded-full text-xs md:text-sm font-medium border border-primary-400/30 hover:border-primary-400/50 transition-all duration-300 font-mono"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}