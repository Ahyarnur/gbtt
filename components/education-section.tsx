'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react'

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const educationData = [
    {
      institution: 'Politeknik Negeri Cilacap',
      degree: 'Cyber Security Engineering',
      period: '2025 - Present',
      location: 'Cilacap, Indonesia',
      status: 'Currently Enrolled',
      description: 'Currently pursuing Cybersecurity Engineering degree with focus on network security, ethical hacking, and security protocols.',
      achievements: [
        'Studying comprehensive cybersecurity curriculum',
        'Learning network security and ethical hacking',
        'Combining cybersecurity knowledge with web development',
        'Expected graduation: 2028'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      institution: 'SMK Ma\'arif NU 1 Ajibarang',
      degree: 'Software Engineering',
      period: '2022 - 2025',
      location: 'Ajibarang, Indonesia',
      status: 'Graduated',
      description: 'Vocational high school specializing in software engineering and web development with hands-on practical experience.',
      achievements: [
        'Specialized in web development and programming',
        'Learned modern web technologies including Laravel, PHP',
        'Completed multiple web development projects',
        'Graduated with expertise in full-stack development'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="education" className="py-12 md:py-16 lg:py-20 bg-dark-50 dark:bg-custom-black transition-colors duration-300 texture-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-mono">
            Education
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            My educational journey in technology and cybersecurity
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-400/20 border-glow">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white font-mono">
                        {edu.institution}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium font-mono ${edu.status === 'Currently Enrolled'
                          ? 'bg-primary-600/20 text-primary-400 border border-primary-400/30'
                          : 'bg-green-600/20 text-green-400 border border-green-400/30'
                        }`}>
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="text-lg text-primary-400 font-mono mb-4">
                      {edu.degree}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 font-mono leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-white font-mono flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary-400" />
                    <span>Key Achievements & Learning</span>
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-primary-400/10 hover:border-primary-400/20 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + achievementIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300 font-mono">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection Line (except for last item) */}
              {index < educationData.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 p-4 rounded-xl bg-primary-600/20 border border-primary-400/30">
            <BookOpen className="w-6 h-6 text-primary-400" />
            <div className="text-left">
              <h4 className="text-white font-mono font-semibold">Continuous Learning</h4>
              <p className="text-sm text-gray-300 font-mono">
                Always exploring new technologies and staying updated with industry trends
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
