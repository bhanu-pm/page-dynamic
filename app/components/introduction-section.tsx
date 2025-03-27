"use client"

import { motion } from "framer-motion"

export default function IntroductionSection() {
  return (
    <motion.section
      className="w-full max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className="bg-[#170a29]/80 backdrop-blur-md p-8 rounded-xl border border-[#ffff00]/50 shadow-xl"
        style={{ boxShadow: "0 0 20px rgba(255, 255, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.3)" }}
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#ffff00] via-[#ffdd00] to-[#ffaa00] bg-clip-text text-transparent uppercase tracking-wider"
          style={{ textShadow: "0 0 15px rgba(255, 255, 0, 0.7)" }}
        >
          Introduction
        </h2>
        <div className="space-y-6 text-lg text-white">
          <p className="text-[#e0e0ff]">
            Welcome to my cosmic portfolio! I'm a digital explorer navigating the vast universe of technology and
            creativity.
          </p>

          <p className="text-[#e0e0ff]">
            This journey through my professional galaxy will showcase the constellations of projects I've built, the
            orbital paths of my career, and the nebulae of ideas I've brought to life.
          </p>

          <div className="flex items-center justify-center my-8">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ffff00] to-[#ffaa00] p-1"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 255, 0, 0.5)",
                  "0 0 40px rgba(255, 255, 0, 0.7)",
                  "0 0 20px rgba(255, 255, 0, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-full h-full rounded-full bg-[#170a29] flex items-center justify-center">
                <span className="text-[#ffff00] text-4xl font-bold">✨</span>
              </div>
            </motion.div>
          </div>

          <p className="text-[#e0e0ff] text-center italic">
            "The universe is full of magical things patiently waiting for our wits to grow sharper."
          </p>
          <p className="text-[#ffff00] text-center text-sm">— Eden Phillpotts</p>
        </div>
      </div>
    </motion.section>
  )
}

