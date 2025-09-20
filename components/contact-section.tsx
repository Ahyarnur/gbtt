'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahyarnurichwan@gmail.com',
      href: 'mailto:ahyarnurichwan@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Purwokerto, Indonesia',
      href: null
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Ahyarnur',
      href: 'https://github.com/Ahyarnur'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ahyar Nur Ichwan',
      href: 'https://www.linkedin.com/in/hyrichwan/'
    }
  ]

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-dark-900/50 transition-colors duration-300 texture-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-mono">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Let's connect and discuss opportunities or collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-mono">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-white/10 transition-all duration-300 border-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="p-3 rounded-lg bg-primary-600/20 text-primary-400 border border-primary-400/30">
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-400 font-mono">{info.label}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-white hover:text-primary-400 transition-colors duration-300 font-mono"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-mono">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-mono">
              Connect With Me
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://github.com/Ahyarnur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-white/10 transition-all duration-300 border-glow group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-8 h-8 mx-auto mb-3 text-white group-hover:text-primary-400 transition-colors duration-300" />
                <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 font-mono">GitHub</h4>
                <p className="text-sm text-gray-400 font-mono">@Ahyarnur</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hyrichwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-white/10 transition-all duration-300 border-glow group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-8 h-8 mx-auto mb-3 text-white group-hover:text-primary-400 transition-colors duration-300" />
                <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 font-mono">LinkedIn</h4>
                <p className="text-sm text-gray-400 font-mono">Professional</p>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/ahyarrrrrrrrrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-white/10 transition-all duration-300 border-glow group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-8 h-8 mx-auto mb-3 text-white group-hover:text-primary-400 transition-colors duration-300" />
                <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 font-mono">Instagram</h4>
                <p className="text-sm text-gray-400 font-mono">@ahyarrrrrrrrrr</p>
              </motion.a>

              <motion.a
                href="mailto:ahyarnurichwan@gmail.com"
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-white/10 transition-all duration-300 border-glow group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-8 h-8 mx-auto mb-3 text-white group-hover:text-primary-400 transition-colors duration-300" />
                <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 font-mono">Email</h4>
                <p className="text-sm text-gray-400 font-mono">Direct Contact</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
