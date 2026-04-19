'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Utility: split text into individual character spans ──── */
export function splitChars(el: HTMLElement) {
  const text = el.textContent ?? ''
  el.innerHTML = text
    .split('')
    .map((ch) =>
      ch === ' '
        ? '<span class="char" style="display:inline-block;min-width:0.3em"> </span>'
        : `<span class="char" style="display:inline-block">${ch}</span>`
    )
    .join('')
  return Array.from(el.querySelectorAll<HTMLElement>('.char'))
}

/* ── Utility: split text into word spans ──────────────────── */
export function splitWords(el: HTMLElement) {
  const text = el.textContent ?? ''
  el.innerHTML = text
    .split(' ')
    .map((w) => `<span class="word" style="display:inline-block;overflow:hidden"><span class="word-inner" style="display:inline-block">${w}</span></span>`)
    .join('<span style="display:inline-block;min-width:0.3em"> </span>')
  return Array.from(el.querySelectorAll<HTMLElement>('.word-inner'))
}

/* ── Component: ScrollReveal ─────────────────────────────── */
interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number       // seconds
  duration?: number    // seconds
  y?: number           // vertical offset
  stagger?: number     // stagger between children
  once?: boolean       // only trigger once
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 1,
  y = 40,
  stagger = 0.1,
  once = true,
}: ScrollRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const targets = el.children.length > 1
      ? Array.from(el.children) as HTMLElement[]
      : [el]

    gsap.set(targets, { opacity: 0, y, })

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [delay, duration, once, stagger, y])

  return (
    <div ref={wrapRef} className={className}>
      {children}
    </div>
  )
}

/* ── Hook: useScrollReveal — for direct element control ───── */
export function useScrollReveal() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gsapRef = useRef<any>(null)

  const initReveal = (container: HTMLElement) => {
    gsapRef.current = gsap.context(() => {
      // Sections that fade up
      gsap.utils.toArray<HTMLElement>('.reveal-up', container).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Sections that fade in
      gsap.utils.toArray<HTMLElement>('.reveal-fade', container).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Elements that reveal from left
      gsap.utils.toArray<HTMLElement>('.reveal-left', container).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Elements that reveal from right
      gsap.utils.toArray<HTMLElement>('.reveal-right', container).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Scale reveals
      gsap.utils.toArray<HTMLElement>('.reveal-scale', container).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1, scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Character-by-character headline reveals
      gsap.utils.toArray<HTMLElement>('.char-reveal', container).forEach((el) => {
        const chars = splitChars(el)
        gsap.fromTo(chars,
          { opacity: 0, y: '60%', rotationX: -40 },
          {
            opacity: 1, y: '0%', rotationX: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.025,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Word-by-word reveals
      gsap.utils.toArray<HTMLElement>('.word-reveal', container).forEach((el) => {
        const words = splitWords(el)
        gsap.fromTo(words,
          { opacity: 0, y: '100%' },
          {
            opacity: 1, y: '0%',
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.07,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Staggered card groups
      gsap.utils.toArray<HTMLElement>('.stagger-cards', container).forEach((el) => {
        const cards = Array.from(el.children) as HTMLElement[]
        gsap.fromTo(cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

    }, container)
  }

  const cleanup = () => {
    if (gsapRef.current) {
      gsapRef.current.revert()
      gsapRef.current = null
    }
  }

  return { initReveal, cleanup }
}
