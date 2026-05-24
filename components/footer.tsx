"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Facebook, Mail, Phone, ArrowUp } from "lucide-react"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SimbaThukuta", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/simba-thukuta-615689286", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com/simbathukuta", icon: Facebook },
  { name: "Email", href: "mailto:simbathukuta@gmail.com", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/265990353587", icon: Phone },
]

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-foreground mb-4 inline-block">
              <span className="text-primary">S</span>imba
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Full Stack Software Developer creating modern, scalable web applications 
              that drive business growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Backend Development</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">UI/UX Design</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">API Development</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Database Design</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:simbathukuta@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  simbathukuta@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/265990353587"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +265 990 353 587
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Lilongwe, Malawi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Simbarashe Thukuta. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion and code
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg glow-primary hover:scale-110 transition-transform z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
