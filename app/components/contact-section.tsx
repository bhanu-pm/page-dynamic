"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <motion.section
      className="w-full max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className="bg-[#170a29]/70 backdrop-blur-md p-8 rounded-xl border border-[#39FF14]/30 shadow-xl"
        style={{
          boxShadow: "0 0 10px rgba(57, 255, 20, 0.3), 0 0 20px rgba(57, 255, 20, 0.2)",
        }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#39FF14] via-[#80ff66] to-[#00cc00] bg-clip-text text-transparent uppercase tracking-wider">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#39FF14] uppercase tracking-wide">Get In Touch</h3>
            <p className="mb-6 text-[#e0e0ff]">
              Ready to embark on a cosmic journey together? Reach out through any of these channels and I'll respond
              faster than light!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#39FF14]" />
                <span className="text-[#e0e0ff]">contact@synthportfolio.com</span>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#39FF14]/50 hover:bg-[#39FF14]/10 hover:border-[#39FF14]"
                  style={{
                    boxShadow: "0 0 5px rgba(57, 255, 20, 0.3)",
                  }}
                >
                  <Github className="h-5 w-5 text-[#39FF14]" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#39FF14]/50 hover:bg-[#39FF14]/10 hover:border-[#39FF14]"
                  style={{
                    boxShadow: "0 0 5px rgba(57, 255, 20, 0.3)",
                  }}
                >
                  <Linkedin className="h-5 w-5 text-[#39FF14]" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#39FF14]/50 hover:bg-[#39FF14]/10 hover:border-[#39FF14]"
                  style={{
                    boxShadow: "0 0 5px rgba(57, 255, 20, 0.3)",
                  }}
                >
                  <Twitter className="h-5 w-5 text-[#39FF14]" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0a1e]/80 backdrop-blur-md rounded-lg p-6 border border-[#39FF14]/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#39FF14] uppercase tracking-wide">Contact Details</h3>
                <p className="text-[#e0e0ff] mb-4">Feel free to contact me through these alternate channels:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    <span className="text-[#e0e0ff]">Phone: +1 (234) 567-8901</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    <span className="text-[#e0e0ff]">Office: Cosmic Tower, Suite 42</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    <span className="text-[#e0e0ff]">Hours: 9am - 5pm Earth Time</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#39FF14] uppercase tracking-wide">Availability</h3>
                <p className="text-[#e0e0ff]">
                  Currently available for freelance work and interesting collaborations across the galaxy.
                </p>
              </div>

              <motion.div
                className="p-3 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-md text-center"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(57, 255, 20, 0.4)",
                }}
              >
                <p className="text-[#39FF14] font-semibold">Open to new opportunities</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

