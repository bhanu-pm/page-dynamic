"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

export default function CompetitionsSection() {
  const competitions = [
    {
      name: "International Space Hackathon",
      position: "1st Place",
      year: "2023",
      description: "Developed an AI-powered asteroid mining simulation that optimizes resource extraction.",
    },
    {
      name: "Global Mars Colonization Challenge",
      position: "Finalist",
      year: "2022",
      description: "Designed a sustainable habitat system for long-term human presence on Mars.",
    },
    {
      name: "Space Visualization Competition",
      position: "2nd Place",
      year: "2021",
      description: "Created an interactive 3D model of the solar system with educational components.",
    },
  ]

  return (
    <motion.section
      className="w-full max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#170a29]/70 backdrop-blur-md p-8 rounded-xl border border-[#9d00ff]/30 shadow-xl neon-purple-border">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#9d00ff] via-[#c066ff] to-[#8800cc] bg-clip-text text-transparent uppercase tracking-wider">
          Competitions
        </h2>
        <div className="space-y-8">
          {competitions.map((comp, index) => (
            <motion.div
              key={index}
              className="bg-[#0f0a1e]/80 backdrop-blur-md rounded-lg p-6 border border-[#9d00ff]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 15px rgba(157, 0, 255, 0.3), 0 0 30px rgba(157, 0, 255, 0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="bg-gradient-to-br from-[#9d00ff] to-[#6600cc] p-3 rounded-lg"
                  style={{
                    boxShadow: "0 0 10px rgba(157, 0, 255, 0.5), 0 0 20px rgba(157, 0, 255, 0.3)",
                  }}
                >
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold text-[#9d00ff] uppercase tracking-wide">{comp.name}</h3>
                    <span className="text-[#e0e0ff]/70">{comp.year}</span>
                  </div>
                  <div className="text-[#c066ff] font-semibold mb-2 neon-purple-text">{comp.position}</div>
                  <p className="text-[#e0e0ff]">{comp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

