'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Field Work Practice at PT CAZH',
      period: '2024',
      location: 'Purwokerto, Indonesia',
      description: 'Mobile application development internship focusing on web technologies and UI/UX design',
      details: [
        'Involved in mobile application development using PHP, HTML, CSS and specific frameworks',
        'Assisted and designed user interfaces (UI) and implementing new features',
        'Gained hands-on experience in the software development lifecycle from planning to implementation',
        'Created a web-based application called DESAKU for village administration'
      ]
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'SMK Ma\'arif NU 1 Ajibarang',
      period: '2022 - 2025',
      location: 'Ajibarang, Indonesia',
      description: 'Vocational high school focusing on web development and software engineering',
      details: [
        'Specialized in web development and programming',
        'Learned modern web technologies including Laravel, PHP, and frontend frameworks',
        'Completed multiple web development projects',
        'Graduated with expertise in full-stack web development'
      ]
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Politeknik Negeri Cilacap',
      period: '2025 - Present',
      location: 'Cilacap, Indonesia',
      description: 'Currently pursuing Cybersecurity Engineering degree',
      details: [
        'Studying Cybersecurity Engineering program',
        'Learning network security, ethical hacking, and security protocols',
        'Combining cybersecurity knowledge with web development skills',
        'Expected graduation: 2028'
      ]
    }
  ]

  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 bg-background transition-colors duration-300 texture-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-mono">
            Experience & Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            My journey through education and professional experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - Monochrome gradient */}
          <div className="absolute left-6 md:left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white via-gray-500 to-transparent opacity-30"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-background rounded-full border-4 border-white z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-16 lg:ml-0 w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 border-glow"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-3 md:space-x-4 mb-4">
                      <div className={`p-2 md:p-3 rounded-lg bg-white/10 border border-white/10`}>
                        <exp.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-mono">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs md:text-sm text-gray-400 mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="font-mono">{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 text-sm md:text-base font-mono">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          className="flex items-start space-x-2 text-xs md:text-sm text-gray-300 font-mono"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + detailIndex * 0.1 }}
                        >
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}