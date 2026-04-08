'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

// Custom GitHub icon SVG
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-1.5 1.5-1.23-1.25-2.75-1.25-4 0-1.5 1.5-1.5 1.5-1.5 0 0-.72 0-1.1.25-1.02-1.25-2.48-1.25-3.5 0-.73.72-1 1.5-1 1.5 0 0 1 0 1.5 1 2.5-.73 2.25-1 3.5-.27 2.75 2 5.5 6 5.5-.42.37-1.15 1.25-1 3.5h4z"/>
    <path d="M9 18c-4.51 2-5-2-5-2"/>
  </svg>
)

// Custom LinkedIn icon SVG  
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const titles = [
  'Senior Business Development Executive',
  'AI Creator'
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentIndex])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,95,70,0.06),transparent_50%)]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />
      
      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10 text-center">
        {/* Hello I'm line - immediate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2"
        >
          <p className="text-emerald-400 font-medium tracking-wider uppercase text-sm">
            Hello, I&apos;m
          </p>
        </motion.div>

        {/* Name - big bold - adapts to light/dark mode */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-foreground dark:text-white">Adham </span>
          <span className="text-emerald-500 dark:text-emerald-400">Ayoub</span>
        </motion.h1>

        {/* Typewriter title - adapts to light/dark mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 md:h-12 mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            <span className="text-foreground dark:text-white">{displayText}</span>
            <motion.span 
              animate={{ opacity: showCursor ? 1 : 0 }}
              className="inline-block w-[3px] h-6 md:h-8 bg-emerald-500 dark:bg-emerald-400 ml-1 align-middle"
            />
          </h2>
        </motion.div>

        {/* Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed text-lg"
        >
          Results-driven Senior Business Development Executive with extensive global experience across North America, Europe, Africa, GCC, Australia, and APAC. Passionate about using data analytics and AI tools to uncover growth opportunities, build meaningful client relationships, and accelerate revenue. Proven ability to consistently exceed sales targets, develop effective go-to-market strategies, and implement AI-powered workflows that significantly boost efficiency and performance.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-emerald-500/20 hover:border-emerald-500/50 border border-slate-700 hover:text-emerald-400 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-emerald-500/20 hover:border-emerald-500/50 border border-slate-700 hover:text-emerald-400 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-3 rounded-full bg-slate-800/50 hover:bg-emerald-500/20 hover:border-emerald-500/50 border border-slate-700 hover:text-emerald-400 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
        >
          Get In Touch
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
