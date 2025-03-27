"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Cosmic Explorer",
      description: "An interactive visualization of our solar system with real-time data.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Satellite Tracker",
      description: "A web application that tracks and displays satellite positions in real-time.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Mars Rover",
      description: "A virtual reality experience of Mars exploration based on NASA data.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <motion.section
      className="w-full max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className="bg-[#170a29]/80 backdrop-blur-md p-8 rounded-xl border border-[#ff9900]/50 shadow-xl"
        style={{ boxShadow: "0 0 20px rgba(255, 153, 0, 0.5), 0 0 40px rgba(255, 153, 0, 0.3)" }}
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#ff9900] via-[#ffcc00] to-[#ff6600] bg-clip-text text-transparent uppercase tracking-wider"
          style={{ textShadow: "0 0 15px rgba(255, 153, 0, 0.7)" }}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0f0a1e]/80 backdrop-blur-md rounded-lg overflow-hidden border border-[#ff9900]/30 hover:border-[#ff9900]/70 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(255, 153, 0, 0.5), 0 0 40px rgba(255, 153, 0, 0.3)",
              }}
            >
              <div className="relative h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2 text-[#ff9900] uppercase tracking-wide"
                  style={{ textShadow: "0 0 10px rgba(255, 153, 0, 0.7)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#e0e0ff]">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            className="px-8 py-6 text-lg font-semibold rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ff6600] hover:from-[#ffaa00] hover:to-[#ff7700] transition-all transform hover:scale-105 uppercase tracking-wider border border-[#ff9900]/50"
            style={{
              boxShadow: "0 0 15px rgba(255, 153, 0, 0.7), 0 0 30px rgba(255, 153, 0, 0.5)",
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

