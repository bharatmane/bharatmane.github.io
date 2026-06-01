'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Writing', href: '#writing' },
  { label: 'Books', href: '#books' },
  { label: 'Poetry', href: '#manapakharu' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'Calendars', href: '#calendars' },
]

const sectionIds = ['writing', 'books', 'manapakharu', 'quotes', 'calendars', 'photography', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver — highlight the nav link for whichever section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.35 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="content-width flex items-center justify-between h-16">
          <a
            href="#"
            className={`font-serif text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
          >
            BM
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm tracking-wide transition-colors duration-200 relative pb-0.5 ${
                    scrolled
                      ? isActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
                      : isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </a>
              )
            })}
            <a
              href="https://github.com/bharatmane"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-sm tracking-wide border px-4 py-1.5 transition-colors duration-200 ${
                scrolled
                  ? 'text-text-primary border-border hover:border-accent hover:text-accent'
                  : 'text-white border-white/40 hover:border-white hover:text-white'
              }`}
            >
              GitHub ↗
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? '' : 'text-white'}`}
            aria-label="Open menu"
          >
            <span className={`w-5 h-px block ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
            <span className={`w-5 h-px block ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
            <span className={`w-3 h-px block ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-cream flex flex-col"
          >
            <div className="content-width flex items-center justify-between h-16">
              <a href="#" className="font-serif text-xl text-text-primary">BM</a>
              <button onClick={() => setOpen(false)} className="text-text-secondary text-2xl leading-none p-2">✕</button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-5xl text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-accent mt-4"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
