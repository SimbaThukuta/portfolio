"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Rocket, Users, Lightbulb } from "lucide-react"

const stats = [
  { label: "Years Experience", value: 5, icon: Rocket },
  { label: "Completed Projects", value: 50, icon: Code2 },
  { label: "Technologies Used", value: 20, icon: Lightbulb },
  { label: "Happy Clients", value: 30, icon: Users },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile image container */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              <div className="relative glass rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">ST</span>
                    </div>
                    <img 
                      src="/profile.jpg" 
                      alt="Simbarashe Thukuta" 
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Simbarashe Thukuta</h3>
                  <p className="text-primary text-sm">Full Stack Developer</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-accent/30 rounded-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I am a passionate Full Stack Software Developer based in Lilongwe, Malawi, 
              with over 5 years of experience building modern web applications. I specialize 
              in crafting scalable, high-performance systems using Laravel, React, and 
              cutting-edge technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              My journey in software development started with a curiosity about how 
              technology can solve real-world problems. Today, I work with businesses 
              and organizations to build solutions that drive growth and efficiency. 
              From complex business management systems to intuitive user interfaces, 
              I bring ideas to life with clean, maintainable code.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers. I believe in 
              continuous learning and staying at the forefront of web development trends.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-primary hover:scale-105"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glow-primary transition-all group"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} />+
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
