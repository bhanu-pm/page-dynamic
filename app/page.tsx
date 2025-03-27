"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

import IntroductionSection from "@/app/components/introduction-section"
import AboutSection from "@/app/components/about-section"
import ProjectsSection from "@/app/components/projects-section"
import ExperienceSection from "@/app/components/experience-section"
import CompetitionsSection from "@/app/components/competitions-section"
import ContactSection from "@/app/components/contact-section"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollToBottom, setScrollToBottom] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(true)
  const [isAtTop, setIsAtTop] = useState(false)

  // Scroll to bottom on initial load
  useEffect(() => {
    if (!scrollToBottom) {
      window.scrollTo(0, document.body.scrollHeight)
      setScrollToBottom(true)
      setIsAtBottom(true)
    }
  }, [scrollToBottom])

  // After your scrollToBottom effect
  useEffect(() => {
    if (scrollToBottom) {
      // Force update scrollYProgress value after scrolling to bottom
      window.dispatchEvent(new Event("scroll"))
    }
  }, [scrollToBottom])

  // Check scroll position to determine if at bottom or top section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const bottomThreshold = document.body.scrollHeight - window.innerHeight - 100
      const topThreshold = window.innerHeight * 0.5 // Top section threshold

      setIsAtBottom(scrollPosition >= bottomThreshold)
      setIsAtTop(scrollPosition <= topThreshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to scroll to bottom
  const scrollToBottomHandler = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"],
  })

  // Invert the scrollYProgress for the fill effect (starts empty at bottom, fills as scroll up)
  const scrollBarHeight = useTransform(scrollYProgress, [0, 1], ["2%", "99%"])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a0b3b] via-[#2d0a6d] to-[#3d0f7a] text-white font-orbitron"
    >
      {/* Vibrant background with animated gradient */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a0bff] via-[#2d0a6d] to-[#ff00ff] opacity-30 animate-gradient-shift"></div>

        {/* Synthwave grid with brighter colors */}
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 0, 255, 0.2) 1px, transparent 1px), linear-gradient(to right, rgba(0, 255, 255, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Vibrant horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#ff00aa] via-[#ff0066]/50 to-transparent opacity-40"></div>
      </div>

      {/* Custom scroll indicator - fills from bottom to top with brighter colors */}
      <div className="fixed right-8 top-[10%] bottom-[10%] w-2 bg-[#170a29]/70 z-50 rounded-full overflow-hidden border border-[#ff00ff]/50">
        <motion.div
          className="absolute bottom-0 w-full rounded-full animate-pulse"
          style={{
            height: scrollBarHeight,
            background: "linear-gradient(to top, #ff00ff, #00ffff)",
            boxShadow: "0 0 15px #ff00ff, 0 0 30px #00ffff",
          }}
        />
      </div>

      {/* Scroll to bottom button - only shows when at the top Contact section */}
      <AnimatePresence>
        {isAtTop && !isAtBottom && (
          <motion.button
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#170a29]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#00ffff]/70 flex items-center gap-2 hover:bg-[#170a29] transition-colors"
            style={{
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.4)",
            }}
            onClick={scrollToBottomHandler}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.9), 0 0 40px rgba(0, 255, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="w-4 h-4 text-[#00ffff]" />
            <span className="text-sm font-medium text-[#00ffff] neon-blue-text">BACK TO INTRODUCTION</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Content sections - using flex-col and min-h-screen for each section instead of fixed heights */}
      <div className="relative z-10 flex flex-col">
        <div className="min-h-screen flex items-center py-20">
          <ContactSection />
        </div>
        <div className="min-h-screen flex items-center py-20">
          <CompetitionsSection />
        </div>
        <div className="min-h-screen flex items-center py-20">
          <ExperienceSection />
        </div>
        <div className="min-h-screen flex items-center py-20">
          <ProjectsSection />
        </div>
        <div className="min-h-screen flex items-center py-20">
          <AboutSection />
        </div>
        <div className="min-h-screen flex items-center py-20">
          <IntroductionSection />
        </div>
      </div>

      {/* Scroll up indicator at the bottom with enhanced glow */}
      <AnimatePresence>
        {isAtBottom && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronUp className="w-6 h-6 text-[#ffff00]" style={{ filter: "drop-shadow(0 0 8px #ffff00)" }} />
            </motion.div>
            <span
              className="text-[#ffff00] text-sm mt-1 uppercase tracking-widest font-audiowide"
              style={{ textShadow: "0 0 10px #ffff00, 0 0 20px #ffff00" }}
            >
              Begin Journey
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

