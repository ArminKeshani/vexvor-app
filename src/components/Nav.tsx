'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/codex',        label: 'Codex' },
    { href: '/economy',      label: 'Economy' },
    { href: '/forge',        label: 'Forge' },
    { href: '/genesis',      label: 'Genesis' },
    { href: '/patrons',      label: 'Patrons' },
  ]

  const linkBase: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          background: scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--ash-mute)' : '1px solid transparent',
        }}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo wordmark — Aethel: ash, not gold */}
          <Link
            href="/"
            className="flex items-center gap-3"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="font-display"
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--field-white)',
              }}
            >
              VEXVOR
            </span>
            <span
              className="hidden sm:inline-block"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.5rem',
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: 'var(--ash-soft)',
              }}
            >
              Being Before Having
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = pathname === l.href || pathname?.startsWith(l.href + '/')
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    ...linkBase,
                    color: active ? 'var(--field-white)' : 'var(--ash-soft)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--field-white)')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = active ? 'var(--field-white)' : 'var(--ash-soft)')
                  }
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className="btn-outline"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.66rem', letterSpacing: '0.22em' }}
            >
              Apply
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--field-white)',
                padding: '0.5rem',
                cursor: 'pointer',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {menuOpen ? (
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
                ) : (
                  <>
                    <path d="M3 6h14" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 14h14" stroke="currentColor" strokeWidth="1.5" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              background: 'rgba(6,6,8,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--ash-mute)',
            }}
          >
            <div className="section-container py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ ...linkBase, color: 'var(--field-white)', fontSize: '0.85rem' }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-rule my-2" />
              <Link
                href="/transparency"
                onClick={() => setMenuOpen(false)}
                style={{ ...linkBase, color: 'var(--ash-soft)', fontSize: '0.78rem' }}
              >
                Transparency
              </Link>
              <Link
                href="/faq"
                onClick={() => setMenuOpen(false)}
                style={{ ...linkBase, color: 'var(--ash-soft)', fontSize: '0.78rem' }}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
