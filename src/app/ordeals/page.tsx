'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { useScrollReveal } from '@/components/ScrollReveal'

const ORDEALS = [
  {
    id: 'sleep-sovereignty',
    title: 'Sleep Sovereignty',
    domain: 'Physical',
    difficulty: 2,
    vmu: 47,
    duration: '21 days',
    participants: 312,
    desc: 'Achieve consistent, high-quality sleep for 21 consecutive days. Track, verify, and reflect on the transformation. The body is the first fortress.',
    requirements: ['Sleep tracker data', 'Daily reflection log', 'Community verification'],
  },
  {
    id: 'ascendant-body',
    title: 'Ascendant Body Protocol',
    domain: 'Physical',
    difficulty: 3,
    vmu: 312,
    duration: '90 days',
    participants: 87,
    desc: 'Three months of structured physical training with progressive overload. Document every session. Present your transformation to the Forge.',
    requirements: ['Training log', 'Before/after documentation', 'Forge presentation'],
  },
  {
    id: 'master-and-teach',
    title: 'Master & Teach',
    domain: 'Intellectual',
    difficulty: 3,
    vmu: 156,
    duration: '60 days',
    participants: 143,
    desc: 'Learn a skill from zero to functional mastery, then teach it to at least three others. Knowledge hoarded is knowledge wasted.',
    requirements: ['Learning log', 'Teaching documentation', 'Student testimonials'],
  },
  {
    id: 'read-5-texts',
    title: 'Read 5 Founding Texts',
    domain: 'Intellectual',
    difficulty: 2,
    vmu: 89,
    duration: '45 days',
    participants: 428,
    desc: 'Read five foundational texts from the VexVor Canon. Produce a synthesis essay connecting their core ideas to civilizational building.',
    requirements: ['Reading notes', 'Synthesis essay (min. 2000 words)', 'Council review'],
  },
  {
    id: 'build-a-thing',
    title: 'Build a Thing',
    domain: 'Creative',
    difficulty: 2,
    vmu: 94,
    duration: '30 days',
    participants: 201,
    desc: 'Build something from nothing — software, art, writing, craft. The medium is yours. The commitment is non-negotiable. Ship it.',
    requirements: ['Public artifact', 'Build journal', 'Community showcase'],
  },
  {
    id: 'gratitude-manifesto',
    title: 'Gratitude Manifesto',
    domain: 'Creative',
    difficulty: 1,
    vmu: 38,
    duration: '7 days',
    participants: 634,
    desc: 'Write a personal manifesto on what you are grateful for and why. Not performance — truth. The first step in seeing clearly.',
    requirements: ['Written manifesto (min. 500 words)', 'Public declaration'],
  },
  {
    id: 'integrity-audit',
    title: 'Integrity Audit',
    domain: 'Ethical',
    difficulty: 3,
    vmu: 63,
    duration: '14 days',
    participants: 176,
    desc: 'Conduct a full audit of your word vs. your actions. Document every instance where you said one thing and did another. Then close the gap.',
    requirements: ['Audit log', 'Gap analysis', 'Accountability partner'],
  },
  {
    id: 'meridian-phase-ii',
    title: 'Meridian Phase II',
    domain: 'Collective',
    difficulty: 4,
    vmu: 520,
    duration: '120 days',
    participants: 32,
    desc: 'A collective ordeal for established Forges. Map and solve a real-world civilizational problem in your community. Document the impact.',
    requirements: ['Forge team (min. 5 members)', 'Problem statement', 'Impact documentation'],
  },
  {
    id: 'chronicle-civilization',
    title: 'Chronicle of Civilization',
    domain: 'Intellectual',
    difficulty: 4,
    vmu: 847,
    duration: '90 days',
    participants: 41,
    featured: true,
    desc: 'A 90-day immersive ordeal. Read, study, and document the rise and fall of three civilizations. Extract the principles. Write the lessons for those who come after.',
    requirements: ['Three civilization studies', 'Comparative analysis', 'Future-facing synthesis', 'Council presentation'],
  },
] as const

type Domain = 'All' | 'Physical' | 'Intellectual' | 'Creative' | 'Ethical' | 'Collective'

const DOMAIN_COLORS: Record<string, string> = {
  Physical:     'var(--gold)',
  Intellectual: 'var(--ember)',
  Creative:     'var(--gold-dim)',
  Ethical:      'var(--steel)',
  Collective:   'var(--bone)',
}

export default function OrdealsPage() {
  const [domain, setDomain] = useState<Domain>('All')
  const [search, setSearch]   = useState('')
  const mainRef = useRef<HTMLDivElement>(null)
  const { initReveal, cleanup } = useScrollReveal()

  useEffect(() => {
    if (!mainRef.current) return
    const id = setTimeout(() => { if (mainRef.current) initReveal(mainRef.current) }, 80)
    return () => { clearTimeout(id); cleanup() }
  }, [])

  const filtered = ORDEALS.filter((o) => {
    const matchDomain = domain === 'All' || o.domain === domain
    const matchSearch = search === '' || o.title.toLowerCase().includes(search.toLowerCase()) || o.desc.toLowerCase().includes(search.toLowerCase())
    return matchDomain && matchSearch
  })

  const featured = ORDEALS.find((o) => (o as { featured?: boolean }).featured)

  return (
    <>
      <Nav />
      <div ref={mainRef}>

        {/* ── Hero ── */}
        <section
          className="pt-36 pb-24 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, var(--charcoal2) 0%, var(--obsidian) 100%)' }}
        >
          <div className="noise-overlay" />
          <div className="section-container">
            <p className="section-label mb-10 reveal-fade">The Gauntlet</p>
            <h1
              className="font-display font-black text-bone word-reveal mb-8"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
            >
              Available <span style={{ color: 'var(--gold)' }}>Ordeals</span>
            </h1>
            <div className="gold-divider mb-10" style={{ margin: '0 0 2.5rem 0' }} />
            <p
              className="font-body text-bone-dim max-w-2xl leading-loose mb-14 reveal-up"
              style={{ fontWeight: 300, fontSize: '1.05rem' }}
            >
              Every Ordeal is a gauntlet. Verifiable. Witnessed. Recorded on-chain.
              Completion earns VMU — the only currency that cannot be bought,
              only earned.
            </p>

            <div className="flex gap-16 stagger-cards">
              {[
                { val: ORDEALS.length.toString(), label: 'Active Ordeals' },
                { val: '1,854', label: 'Redeemers Competing' },
                { val: '3,402', label: 'Ordeals Completed' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-black gold-text"
                    style={{ fontSize: '2rem', lineHeight: 1 }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="font-display uppercase mt-2"
                    style={{ fontSize: '0.56rem', letterSpacing: '0.3em', color: 'var(--steel)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured ── */}
        {featured && (
          <section
            className="py-14 reveal-up"
            style={{
              background: 'rgba(212,175,55,0.03)',
              borderTop: '1px solid rgba(212,175,55,0.1)',
              borderBottom: '1px solid rgba(212,175,55,0.1)',
            }}
          >
            <div className="section-container">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="font-display uppercase px-3 py-1"
                      style={{
                        fontSize: '0.58rem',
                        letterSpacing: '0.25em',
                        color: 'var(--gold)',
                        border: '1px solid rgba(212,175,55,0.3)',
                        background: 'rgba(212,175,55,0.06)',
                      }}
                    >
                      Featured Ordeal
                    </span>
                    <span
                      className="font-display uppercase"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--bone-dim)' }}
                    >
                      {featured.duration} · {featured.vmu} VMU
                    </span>
                  </div>
                  <h2
                    className="font-display font-black text-bone mb-5"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.02em' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="font-body text-bone-dim leading-loose mb-8" style={{ fontWeight: 300 }}>
                    {featured.desc}
                  </p>
                  <button className="btn-primary">
                    Accept the Ordeal
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div
                  className="p-8 shrink-0 md:w-72"
                  style={{
                    border: '1px solid rgba(212,175,55,0.1)',
                    borderTop: '2px solid var(--gold)',
                    background: 'var(--charcoal)',
                  }}
                >
                  <div
                    className="font-display uppercase mb-5"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.35em', color: 'var(--gold)' }}
                  >
                    Requirements
                  </div>
                  <ul className="flex flex-col gap-4">
                    {featured.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span style={{ color: 'var(--gold)', fontSize: '8px', marginTop: '4px', flexShrink: 0 }}>◆</span>
                        <span className="font-body text-sm text-bone-dim" style={{ fontWeight: 300 }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-6 pt-4"
                    style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
                  >
                    <div className="font-body text-xs text-steel">{featured.participants} Redeemers competing</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Filter + Grid ── */}
        <section className="py-20">
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-6 mb-14 reveal-up">
              <div className="flex flex-wrap gap-2">
                {(['All', 'Physical', 'Intellectual', 'Creative', 'Ethical', 'Collective'] as Domain[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDomain(d)}
                    className="font-display uppercase transition-all duration-300"
                    style={{
                      fontSize: '0.58rem',
                      letterSpacing: '0.25em',
                      padding: '0.5rem 1rem',
                      border: domain === d ? '1px solid var(--gold)' : '1px solid rgba(212,175,55,0.18)',
                      color: domain === d ? 'var(--gold)' : 'var(--bone-dim)',
                      background: domain === d ? 'rgba(212,175,55,0.06)' : 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <input
                className="vex-input md:max-w-xs md:ml-auto"
                placeholder="Search ordeals…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 reveal-fade">
                <div className="font-display text-bone-dim" style={{ fontSize: '1.1rem', letterSpacing: '0.1em' }}>
                  No ordeals found.
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px stagger-cards" style={{ background: 'rgba(212,175,55,0.06)' }}>
                {filtered.map((o) => (
                  <div
                    key={o.id}
                    className="flex flex-col gap-5 p-8 group transition-all duration-500"
                    style={{ background: 'var(--obsidian)', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--charcoal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--obsidian)')}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="font-display uppercase"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          padding: '0.3rem 0.75rem',
                          background: `${DOMAIN_COLORS[o.domain]}1A`,
                          border: `1px solid ${DOMAIN_COLORS[o.domain]}30`,
                          color: DOMAIN_COLORS[o.domain],
                        }}
                      >
                        {o.domain}
                      </span>
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4].map((pip) => (
                          <div
                            key={pip}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: pip <= o.difficulty ? 'var(--gold)' : 'rgba(212,175,55,0.15)' }}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3
                        className="font-display font-black text-bone mb-3"
                        style={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}
                      >
                        {o.title}
                      </h3>
                      <p className="font-body text-bone-dim text-sm leading-loose line-clamp-3" style={{ fontWeight: 300 }}>
                        {o.desc}
                      </p>
                    </div>

                    <div
                      className="flex justify-between items-end mt-auto pt-5"
                      style={{ borderTop: '1px solid rgba(212,175,55,0.06)' }}
                    >
                      <div>
                        <div
                          className="font-display font-black gold-text"
                          style={{ fontSize: '1.4rem', lineHeight: 1 }}
                        >
                          {o.vmu} VMU
                        </div>
                        <div className="font-body text-xs mt-1" style={{ color: 'var(--steel)', fontWeight: 300 }}>
                          {o.duration} · {o.participants} competing
                        </div>
                      </div>
                      <button
                        className="btn-outline"
                        style={{ fontSize: '0.55rem', padding: '0.55rem 1.2rem' }}
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-24 text-center reveal-up"
          style={{ background: 'var(--charcoal2)', borderTop: '1px solid rgba(212,175,55,0.06)' }}
        >
          <div className="section-container max-w-xl">
            <h2
              className="font-display font-black text-bone mb-5"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.02em' }}
            >
              Not a <span style={{ color: 'var(--gold)' }}>Redeemer</span> yet?
            </h2>
            <p className="font-body text-bone-dim mb-10" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Ordeals require Redeemer status. Apply for entry to the Forge.
            </p>
            <Link href="/#apply" className="btn-primary">
              Request Entry
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
