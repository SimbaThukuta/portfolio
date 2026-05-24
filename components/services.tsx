"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Server,
  Palette,
  Database,
  Globe,
  Smartphone,
  LayoutDashboard,
  Building2,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development using modern technologies and best practices for scalable, maintainable solutions.",
  },
  {
    icon: Server,
    title: "Laravel Backend Development",
    description:
      "Robust backend systems with Laravel, featuring RESTful APIs, authentication, and complex business logic implementation.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized database architecture and schema design for efficient data management and high-performance queries.",
  },
  {
    icon: Globe,
    title: "API Development",
    description:
      "Secure and scalable RESTful API development with proper documentation, versioning, and authentication.",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description:
      "Mobile-first responsive websites that provide seamless experiences across all devices and screen sizes.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard Systems",
    description:
      "Custom admin panels with data visualization, user management, and comprehensive reporting capabilities.",
  },
  {
    icon: Building2,
    title: "Business Management Systems",
    description:
      "Enterprise-grade solutions for inventory, CRM, HR, and workflow automation tailored to your business needs.",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-4">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-pretty">
            I provide comprehensive software development services to help businesses 
            achieve their digital goals with modern, efficient solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group glass rounded-2xl p-6 hover:glow-primary transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
