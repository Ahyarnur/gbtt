import { FloatingThemeToggle } from '@/components/floating-theme-toggle'
import { HorizontalNavigation } from '@/components/horizontal-navigation'
import { HeroSection } from '@/components/hero-section'
import { AnimatedText } from '@/components/animated-text'
import { AboutSection } from '@/components/about-section'
import { StackSection } from '@/components/stack-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-custom-black transition-colors duration-300">
      <FloatingThemeToggle />
      <HorizontalNavigation />
      
      <HeroSection />
      
      {/* Animated Text Section - positioned in the middle */}
      <section className="relative">
        <AnimatedText />
      </section>
      
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-custom-black/80 backdrop-blur-sm transition-colors duration-300 border-t border-primary-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 md:space-x-4 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center border border-primary-400/30">
                <span className="text-white font-bold text-lg md:text-xl font-mono">A</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white font-mono">Ahyar Nur Ichwan</h3>
                <p className="text-gray-400 text-sm md:text-base font-mono">Cybersecurity & Frontend Developer</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
              <a 
                href="https://github.com/Ahyarnur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm md:text-base font-mono"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/hyrichwan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm md:text-base font-mono"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/ahyarrrrrrrrrr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm md:text-base font-mono"
              >
                Instagram
              </a>
            </div>
            
            <div className="border-t border-primary-400/20 pt-4 md:pt-6">
              <p className="text-xs md:text-sm text-gray-500 font-mono">
                © 2025 Ahyar Nur Ichwan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}