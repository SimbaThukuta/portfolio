"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Code, Briefcase, Building, Rocket } from "lucide-react"

const experiences = [
  {
    year: "2019",
    title: "Started Learning Web Development",
    description:
      "Began my journey into web development, learning HTML, CSS, and JavaScript through online courses and self-study.",
    icon: BookOpen,
  },
  {
    year: "2020",
    title: "First Laravel Project",
    description:
      "Built my first Laravel application - a small inventory management system. This sparked my passion for backend development.",
    icon: Code,
  },
  {
    year: "2021",
    title: "Freelance Developer",
    description:
      "Started taking freelance projects, building websites and web applications for local businesses and startups.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Enterprise Projects",
    description:
      "Worked with government organizations and NGOs, developing complex management systems and data-driven applications.",
    icon: Building,
  },
  {
    year: "2023 - Present",
    title: "Full Stack Excellence",
    description:
      "Expanding into full-stack development with React and Next.js, building comprehensive solutions for clients worldwide.",
    icon: Rocket,
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-4">My Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-pretty">
            A timeline of my growth as a software developer, from learning the basics 
            to building enterprise-grade applications.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary -translate-x-1/2 mt-1.5 z-10" />

              {/* Content */}
              <div className={`flex-1 pl-16 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                <div className={`inline-flex items-center gap-3 mb-2 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="p-2 rounded-lg bg-primary/10">
                    <exp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-sm">{exp.year}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
