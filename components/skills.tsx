"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const frontendSkills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Responsive Design", level: 95 },
]

const backendSkills = [
  { name: "PHP", level: 92 },
  { name: "Laravel", level: 95 },
  { name: "MySQL", level: 88 },
  { name: "REST APIs", level: 90 },
  { name: "Authentication", level: 92 },
  { name: "Database Design", level: 88 },
]

const otherSkills = [
  { name: "Git & GitHub", level: 90 },
  { name: "Firebase", level: 80 },
  { name: "API Integration", level: 88 },
  { name: "UI/UX Design", level: 78 },
  { name: "Hosting & Deploy", level: 85 },
  { name: "Next.js", level: 82 },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  )
}

function SkillCard({
  title,
  skills,
  delayStart,
  accentColor,
}: {
  title: string
  skills: { name: string; level: number }[]
  delayStart: number
  accentColor: "primary" | "accent"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delayStart }}
      className="glass rounded-2xl p-6 lg:p-8 hover:glow-primary transition-all group"
    >
      <h3 className={`text-xl font-semibold mb-6 ${accentColor === "primary" ? "text-primary" : "text-accent"}`}>
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={delayStart + 0.1 + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-4">My Expertise</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-pretty">
            I continuously expand my skill set to deliver modern, efficient solutions. 
            Here are the technologies I work with daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} delayStart={0.2} accentColor="primary" />
          <SkillCard title="Backend Development" skills={backendSkills} delayStart={0.3} accentColor="accent" />
          <SkillCard title="Tools & Technologies" skills={otherSkills} delayStart={0.4} accentColor="primary" />
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Laravel", "PHP", "React", "Next.js", "Tailwind", "MySQL", "JavaScript", "TypeScript", "Git", "Firebase", "REST API", "Node.js"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  className="px-4 py-2 glass rounded-lg text-sm text-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
