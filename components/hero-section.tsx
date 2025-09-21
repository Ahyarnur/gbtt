'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-custom-black via-dark-950 to-primary-900/20 texture-lines dark:from-custom-black dark:via-dark-950 dark:to-primary-900/20 light:from-slate-50 light:via-slate-100 light:to-primary-100/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">Ahyar Nur Ichwan</span>
            </motion.h1>

            <motion.div
              className="space-y-3 md:space-y-4 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light font-mono">
                Cybersecurity Engineering Student
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-400 font-medium font-mono">
                Frontend Developer & UI/UX Designer
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-mono leading-relaxed">
                Passionate about creating secure, beautiful, and functional web experiences. 
                Currently studying Cybersecurity Engineering at Politeknik Negeri Cilacap.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4 md:space-x-6 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/Ahyarnur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-primary-500/10 transition-all duration-300 border-glow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hyrichwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-primary-500/10 transition-all duration-300 border-glow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ahyarrrrrrrrrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-primary-400/20 hover:bg-primary-500/10 transition-all duration-300 border-glow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToAbout}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-mono border border-primary-400/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
              <ArrowDown className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-400/30 backdrop-blur-sm bg-white/5">
                  <Image
                    src="/git.png"
                    alt="Ahyar Nur Ichwan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-primary-500 rounded-full flex items-center justify-center border border-primary-400/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-xs md:text-sm">💻</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full flex items-center justify-center border border-purple-400/30"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-white text-xs md:text-sm">🔒</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary-400/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 md:h-3 bg-primary-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}