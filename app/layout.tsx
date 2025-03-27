import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Audiowide } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
})

export const metadata: Metadata = {
  title: "Synthwave Portfolio",
  description: "A retro-futuristic journey through my work and experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${audiowide.variable} font-orbitron`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'