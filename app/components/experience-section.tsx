"use client"

import { motion } from "framer-motion"

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Senior Space Engineer",
      company: "Galactic Innovations",
      period: "2021 - Present",
      description: "Leading a team of engineers to develop cutting-edge space technology solutions.",
    },
    {
      role: "Orbital Developer",
      company: "Lunar Technologies",
      period: "2018 - 2021",
      description: "Designed and implemented satellite communication systems and data visualization tools.",
    },
    {
      role: "Stellar Designer",
      company: "Cosmic Creations",
      period: "2015 - 2018",
      description: "Created immersive user experiences for space exploration applications and educational platforms.",
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
      <div className="bg-[#170a29]/70 backdrop-blur-md p-8 rounded-xl border border-[#00ffff]/30 shadow-xl neon-blue-border">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#00ffff] via-[#66ffff] to-[#00ccff] bg-clip-text text-transparent uppercase tracking-wider">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-[#00ffff]/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00ffff] animate-neon-pulse"
                style={{
                  boxShadow: "0 0 10px #00ffff, 0 0 15px #00ffff",
                }}
              />
              <h3 className="text-2xl font-bold uppercase tracking-wide text-[#00ffff] neon-blue-text">{exp.role}</h3>
              <div className="flex justify-between text-lg mb-2">
                <span className="text-[#66ffff]">{exp.company}</span>
                <span className="text-[#e0e0ff]/70">{exp.period}</span>
              </div>
              <p className="text-[#e0e0ff]">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

