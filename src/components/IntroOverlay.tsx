'use client'

import { useEffect, useRef, useState } from 'react'
import SpiralAnimation from './SpiralAnimation'

interface IntroOverlayProps {
  onDismiss: () => void
}

export default function IntroOverlay({ onDismiss }: IntroOverlayProps) {
  const [phase, setPhase]     = useState<'loading' | 'logo' | 'done'>('loading')
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const autoRef     = useRef<ReturnType<typeof setTimeout>  | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const logoTimer = setTimeout(() => setPhase('logo'), 2200)

    const start = Date.now()
    const duration = 7000
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct >= 100 && intervalRef.current) clearInterval(intervalRef.current)
    }, 50)

    autoRef.current = setTimeout(() => dismiss(), 7400)

    return () => {
      clearTimeout(logoTimer)
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (autoRef.current)    clearTimeout(autoRef.current)
      document.body.style.overflow = ''
    }
  }, [])

  const dismiss = () => {
    if (exiting) return
    setExiting(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (autoRef.current)    clearTimeout(autoRef.current)
    setTimeout(() => {
      document.body.style.overflow = ''
      onDismiss()
    }, 900)
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-900 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ background: 'var(--obsidian)' }}
    >
      {/* Spiral — mouse-interactive */}
      <div className="absolute inset-0">
        <SpiralAnimation seed={5678} starCount={3500} mouseInfluence={0.8} />
      </div>

      {/* Refined gold center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 text-center px-8">

        {/* Wordmark */}
        <div
          className={`flex flex-col items-center gap-6 transition-all duration-1200 ${
            phase !== 'loading' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="relative">
            <div
              className="font-display font-black gold-text"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                letterSpacing: '0.2em',
                lineHeight: 1,
              }}
            >
              VEXVOR
            </div>
            {/* Glow layer */}
            <div
              className="absolute inset-0 font-display font-black"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                letterSpacing: '0.2em',
                lineHeight: 1,
                color: 'var(--gold)',
                opacity: 0.15,
                filter: 'blur(20px)',
              }}
            >
              VEXVOR
            </div>
          </div>

          <div className="gold-divider" style={{ width: '80px' }} />

          <p
            className="font-display uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.45em', color: 'var(--bone-dim)' }}
          >
            The Civilizational Forge
          </p>
        </div>

        {/* Loading phase text */}
        {phase === 'loading' && (
          <p
            className="font-body animate-pulse"
            style={{ fontSize: '0.8rem', color: 'var(--steel)', letterSpacing: '0.15em' }}
          >
            Forging the path…
          </p>
        )}

        {/* Enter button */}
        {phase === 'logo' && (
          <button
            onClick={dismiss}
            className="btn-primary animate-fade-up animate-pulse-gold"
            style={{ animationDelay: '0.4s', marginTop: '0.5rem' }}
          >
            Enter the Forge
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Progress bar — refined gold */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(212,175,55,0.1)' }}>
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${progress}%`, background: 'var(--gold)' }}
        />
      </div>

      {/* Skip */}
      <button
        onClick={dismiss}
        className="absolute top-6 right-8 font-display uppercase transition-colors duration-300"
        style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--steel)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--steel)')}
      >
        Skip ›
      </button>
    </div>
  )
}
