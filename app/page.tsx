import { Navbar, HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { SkillsSection } from "@/components/skills"
import { ServicesSection } from "@/components/services"
import { ProjectsSection } from "@/components/projects"
import { ExperienceSection } from "@/components/experience"
import { TestimonialsSection } from "@/components/testimonials"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
