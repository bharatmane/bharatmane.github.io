'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Only activate on pointer:fine (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    setVisible(true)

    let rafId: number
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.18)
      currentY = lerp(currentY, targetY, 0.18)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) setHovered(true)
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) setHovered(false)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 z-[999] pointer-events-none rounded-full border transition-[width,height,background-color,border-color] duration-200 ${
        hovered
          ? 'w-12 h-12 bg-accent/20 border-accent'
          : 'w-4 h-4 bg-transparent border-text-primary/60'
      }`}
    />
  )
}
