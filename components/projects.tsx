"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const categories = ["All", "Laravel", "Full Stack", "UI/UX", "Business Systems"]

const projects = [
  {
    id: 1,
    title: "UniConnect Platform",
    description:
      "University career and job connection system connecting students and employers. Features job listings, application tracking, employer dashboards, and student profiles with resume builders.",
    image: "/projects/uniconnect.jpg",
    category: ["Laravel", "Full Stack", "Business Systems"],
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Government Event Management",
    description:
      "A system for ministry departments to coordinate events, submit updates, and generate comprehensive reports. Includes role-based access, event scheduling, and automated notifications.",
    image: "/projects/govevents.jpg",
    category: ["Laravel", "Business Systems"],
    tech: ["Laravel", "MySQL", "JavaScript", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "WhatsApp Business Automation",
    description:
      "A messaging automation platform for companies to send promotional and customer notifications. Features template management, scheduling, and analytics dashboards.",
    image: "/projects/whatsapp.jpg",
    category: ["Full Stack", "Business Systems"],
    tech: ["Laravel", "WhatsApp API", "MySQL", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Seeds of Promise Management",
    description:
      "Community management platform for youth empowerment, feeding programs, and entrepreneurship support. Tracks beneficiaries, programs, and generates impact reports.",
    image: "/projects/seeds.jpg",
    category: ["Laravel", "Full Stack"],
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Livewire"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "E-Commerce Dashboard",
    description:
      "Modern admin dashboard for e-commerce businesses with inventory management, order processing, customer analytics, and sales reporting.",
    image: "/projects/ecommerce.jpg",
    category: ["UI/UX", "Full Stack"],
    tech: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "School Management System",
    description:
      "Comprehensive school administration system with student enrollment, grade management, attendance tracking, and parent portals.",
    image: "/projects/school.jpg",
    category: ["Laravel", "Business Systems"],
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projects)[0]
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group glass rounded-2xl overflow-hidden cursor-pointer hover:glow-primary transition-all duration-300"
    >
      <div className="relative aspect-video bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary/50">{project.title.charAt(0)}</span>
        </div>
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            View Details
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-primary/90 text-xs text-primary-foreground font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.slice(0, 2).map((cat) => (
            <span key={cat} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative aspect-video bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
            <span className="text-6xl font-bold text-primary/50">{project.title.charAt(0)}</span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-background/50 text-foreground hover:bg-background transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((cat) => (
              <span key={cat} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:glow-primary transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-all"
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory))

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-4">My Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-pretty">
            A showcase of projects I&apos;ve built for clients and organizations, 
            demonstrating my expertise in full-stack development.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
