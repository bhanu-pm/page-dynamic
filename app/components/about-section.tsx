"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <motion.section
      className="w-full max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className="bg-[#170a29]/80 backdrop-blur-md p-8 rounded-xl border border-[#ff00ff]/50 shadow-xl"
        style={{ boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)" }}
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#ff00ff] via-[#ff66ff] to-[#cc00ff] bg-clip-text text-transparent uppercase tracking-wider"
          style={{ textShadow: "0 0 15px rgba(255, 0, 255, 0.7)" }}
        >
          About Me
        </h2>
        <div className="space-y-6 text-lg text-white">
          <p className="text-[#e0e0ff]">
            Greetings, Earth dweller! I'm a cosmic explorer in the digital universe, navigating through the vast expanse
            of code and design.
          </p>

          <p className="text-[#e0e0ff]">
            With a passion for creating stellar experiences and launching innovative solutions, I've been orbiting the
            tech industry for several light-years.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[#e0e0ff]">
            <li>Game Design (Circa 2010)</li>
            <li>Astronomy</li>
            <li>Physics</li>
            <li>Quantum Physics</li>
            <li>Android Rooting (2014)</li>
            <li>Scripting</li>
            <li>Astrophysics</li>
            <li>Youtube Content Creation</li>
            <li>Video Editing</li>
            <li>Machine Learning (2018)</li>
            <li>Computer Science</li>
            <li>Computer Vision (2020)</li>
            <li>LLMs</li>
            <li>Website Development</li>
            <li>Internet of Things</li>
            <li>GPU Architecture</li>
            <li>Coding for Quantum Computers</li>
            <li>Perceptual reasoning for Computers</li>
          </ul>

          <p className="text-[#e0e0ff]">
            My mission is to push the boundaries of what's possible and venture into uncharted territories of creativity
            and technology.
          </p>

          <p className="text-[#e0e0ff]">
            When I'm not traversing the digital cosmos, you can find me stargazing with my telescope, collecting vintage
            synthesizers, or designing my own tabletop space exploration games. My philosophy is that technology should
            feel like magic, and I strive to bring that sense of wonder to every project I undertake.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

