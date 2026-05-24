"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "James Phiri",
    role: "CEO, TechStart Malawi",
    content:
      "Simbarashe delivered an exceptional e-commerce platform for our business. His attention to detail and commitment to quality is unmatched. The system has significantly improved our operations.",
    avatar: "JP",
  },
  {
    id: 2,
    name: "Grace Banda",
    role: "Director, Youth Empowerment NGO",
    content:
      "Working with Simba on our management system was a great experience. He understood our needs perfectly and delivered a solution that has transformed how we manage our programs.",
    avatar: "GB",
  },
  {
    id: 3,
    name: "Michael Tembo",
    role: "IT Manager, Government Ministry",
    content:
      "The event management system Simbarashe built for us has streamlined our coordination across departments. His technical expertise and professionalism are truly commendable.",
    avatar: "MT",
  },
  {
    id: 4,
    name: "Sarah Mwale",
    role: "Founder, Digital Agency",
    content:
      "Simbarashe is a talented developer who consistently delivers high-quality work. His understanding of both frontend and backend makes him an invaluable partner for complex projects.",
    avatar: "SM",
  },
  {
    id: 5,
    name: "David Chirwa",
    role: "Operations Manager, Logistics Co.",
    content:
      "The inventory system Simba developed has saved us countless hours. His ability to translate business requirements into technical solutions is impressive.",
    avatar: "DC",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Client Feedback</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <Quote className="absolute bottom-6 right-6 w-12 h-12 text-primary/20 rotate-180" />

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 text-pretty">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-lg glass text-muted-foreground hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-lg glass text-muted-foreground hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
