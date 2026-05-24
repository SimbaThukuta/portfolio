"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail, Facebook, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const roles = [
  "Laravel Developer",
  "Backend Engineer",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SimbaThukuta", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/simba-thukuta-615689286", icon: Linkedin },
  { name: "WhatsApp", href: "https://wa.me/265990353587", icon: Phone },
  { name: "Facebook", href: "https://facebook.com/simbathukuta", icon: Facebook },
  { name: "Email", href: "mailto:simbathukuta@gmail.com", icon: Mail },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            <span className="text-primary">S</span>imba
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function TypewriterEffect() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < role.length) {
            setCurrentText(role.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentRoleIndex])

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function ParticleBackground() {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; duration: number }[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance"
            >
              Simbarashe{" "}
              <span className="text-primary text-glow">Thukuta</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
            >
              Full Stack Software Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg h-8 mb-6"
            >
              <TypewriterEffect />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 text-pretty"
            >
              I craft scalable web applications and elegant solutions that transform ideas 
              into powerful digital experiences. Passionate about clean code, modern 
              technologies, and delivering exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="/cv.pdf"
                download
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:scale-105"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-primary/50 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Avatar glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 rounded-full bg-background" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-secondary to-card overflow-hidden">
                {/* Fallback initials behind the image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-bold text-primary">ST</span>
                </div>
                {/* Profile Image (will cover initials if present) */}
                <img 
                  src="/profile.jpg" 
                  alt="Simbarashe Thukuta" 
                  className="absolute inset-0 w-full h-full object-cover z-10 bg-transparent"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 glass rounded-lg px-4 py-2"
            >
              <span className="text-sm text-primary font-medium">5+ Years Exp</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-20 left-0 glass rounded-lg px-4 py-2"
            >
              <span className="text-sm text-accent font-medium">50+ Projects</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-muted-foreground" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
