import { HorizontalNavigation } from '@/components/horizontal-navigation'
import { HeroSection } from '@/components/hero-section'
import { AnimatedText } from '@/components/animated-text'
import { AboutSection } from '@/components/about-section'
import { StackSection } from '@/components/stack-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'
import { WelcomeIntro } from '@/components/welcome-intro'

export default function Home() {
  return (
    <>
      <WelcomeIntro />
      <main className="min-h-screen bg-background transition-colors duration-300">
        <HorizontalNavigation />

        <HeroSection />

        {/* Animated Text Section */}
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
        <footer className="bg-background/80 backdrop-blur-sm transition-colors duration-300 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-3 md:space-x-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center border border-border">
                  <span className="text-foreground font-bold text-lg md:text-xl font-mono">A</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground font-mono">Ahyar Nur Ichwan</h3>
                  <p className="text-muted-foreground text-sm md:text-base font-mono">Cybersecurity & Frontend Developer</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
                <a
                  href="https://github.com/Ahyarnur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm md:text-base font-mono"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hyrichwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm md:text-base font-mono"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/ahyarrrrrrrrrr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm md:text-base font-mono"
                >
                  Instagram
                </a>
              </div>

              <div className="border-t border-border pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-muted-foreground font-mono">
                  © 2025 Ahyar Nur Ichwan. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}