'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser, UserButton, SignInButton } from '@clerk/nextjs'

export default function Nav() {
  const { isSignedIn, isLoaded } = useUser()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/#what-is-vexvor', label: 'The Forge' },
    { href: '/#economy',        label: 'Economy' },
    { href: '/#governance',     label: 'Governance' },
    { href: '/#roadmap',        label: 'Roadmap' },
    { href: '/ordeals',         label: 'Ordeals' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b'
            : ''
        }`}
        style={
          scrolled
            ? {
                background: 'rgba(11,12,14,0.96)',
                backdropFilter: 'blur(16px)',
                borderColor: 'rgba(212,175,55,0.08)',
              }
            : {}
        }
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Real SVG logo with CSS filter to render gold on dark bg */}
            <div className="relative" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="VexVor"
                width={32}
                height={32}
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                  /* Convert white-bg PNG inside SVG to luxury gold on dark */
                  filter: 'invert(1) brightness(0.65) sepia(1) hue-rotate(5deg) saturate(3.5)',
                  transition: 'filter 0.3s ease',
                }}
              />
            </div>
            <span
              className="font-display font-black tracking-widest"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.3em',
                color: 'var(--gold)',
                transition: 'color 0.3s ease',
              }}
            >
              VEXVOR
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display uppercase transition-colors duration-300"
                style={{
                  fontSize: '0.58rem',
                  letterSpacing: '0.25em',
                  color: 'var(--bone-dim)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--bone-dim)')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* ── Auth / CTA ── */}
          <div className="hidden md:flex items-center gap-5">
            {isLoaded && isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="btn-outline"
                  style={{ fontSize: '0.58rem', padding: '0.65rem 1.6rem' }}
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8',
                      avatarImage: { border: '1px solid rgba(212,175,55,0.3)' },
                    },
                  }}
                />
              </>
            ) : (
              <>
                {isLoaded && (
                  <SignInButton mode="modal">
                    <button
                      className="font-display uppercase transition-colors duration-300"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'var(--bone-dim)', background: 'none', border: 'none', cursor: 'pointer' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--bone-dim)')}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                )}
                <a href="/#apply" className="btn-primary" style={{ fontSize: '0.58rem', padding: '0.7rem 1.6rem' }}>
                  Apply Now
                </a>
              </>
            )}
          </div>

          {/* ── Mobile burger ── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-px transition-all duration-400 ${
                  menuOpen
                    ? i === 0 ? 'rotate-45 translate-y-2'
                    : i === 1 ? 'opacity-0'
                    : '-rotate-45 -translate-y-2'
                    : ''
                }`}
                style={{ background: 'var(--gold)' }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
          style={
            menuOpen
              ? {
                  background: 'rgba(11,12,14,0.98)',
                  backdropFilter: 'blur(16px)',
                  borderBottom: '1px solid rgba(212,175,55,0.08)',
                }
              : {}
          }
        >
          <div className="section-container py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display uppercase py-1"
                style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--bone-dim)' }}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}>
              {isLoaded && isSignedIn ? (
                <Link
                  href="/dashboard"
                  className="btn-outline text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  {isLoaded && (
                    <SignInButton mode="modal">
                      <button
                        className="font-display uppercase text-left py-1"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--bone-dim)', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Sign In
                      </button>
                    </SignInButton>
                  )}
                  <a
                    href="/#apply"
                    className="btn-primary text-center"
                    onClick={() => setMenuOpen(false)}
                    style={{ justifyContent: 'center' }}
                  >
                    Apply Now
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
