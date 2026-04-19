'use client'

import { useState, useEffect, useRef } from 'react'
import Nav from '@/components/Nav'
import IntroOverlay from '@/components/IntroOverlay'
import SpiralAnimation from '@/components/SpiralAnimation'
import ApplyForm from '@/components/ApplyForm'
import { useScrollReveal } from '@/components/ScrollReveal'

export default function HomePage() {
  const [introShown, setIntroShown] = useState(true)
  const mainRef = useRef<HTMLDivElement>(null)
  const { initReveal, cleanup } = useScrollReveal()

  useEffect(() => {
    if (introShown) return  // wait until intro is dismissed
    if (!mainRef.current) return
    const id = setTimeout(() => {
      if (mainRef.current) initReveal(mainRef.current)
    }, 300)
    return () => { clearTimeout(id); cleanup() }
  }, [introShown]) // re-init after intro dismisses

  return (
    <>
      {introShown && <IntroOverlay onDismiss={() => setIntroShown(false)} />}
      <Nav />

      <div ref={mainRef}>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <SpiralAnimation seed={1234} starCount={4500} mouseInfluence={0.7} />

          {/* Deep vignette — bottom-heavy for text legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 90% 55% at 50% 45%, transparent 15%, rgba(11,12,14,0.65) 100%)',
                'linear-gradient(to bottom, rgba(11,12,14,0.3) 0%, transparent 30%, transparent 60%, rgba(11,12,14,0.9) 100%)',
              ].join(', '),
            }}
          />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* Manifesto label */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <p
                className="font-display text-xs tracking-widest3 uppercase"
                style={{ color: 'var(--gold)', letterSpacing: '0.5em' }}
              >
                Being Before Having
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>

            {/* Primary headline — large editorial */}
            <div className="mb-4 overflow-hidden">
              <h1
                className="font-display font-black leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="gold-text gold-glow block">THE</span>
                <span className="text-bone block">CIVILIZATIONAL</span>
                <span className="gold-text gold-glow block">FORGE</span>
              </h1>
            </div>

            {/* Thin gold rule */}
            <div className="gold-divider my-10 mx-auto" />

            {/* Manifesto paragraph */}
            <p
              className="font-body text-bone-dim max-w-2xl mx-auto leading-loose mb-14"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', fontWeight: 300, letterSpacing: '0.02em' }}
            >
              VexVor is not an app. Not a platform. Not a network.
              <br />
              It is the world&apos;s first sovereign ecosystem where{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: 500 }}>character is the primary asset class</em>{' '}
              — and proof of virtue is the engine of value.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#apply" className="btn-primary">
                Request Entry
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#what-is-vexvor" className="btn-outline">
                Discover the Forge
              </a>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span
              className="font-display uppercase"
              style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--steel)' }}
            >
              Scroll
            </span>
            <div className="w-px h-14 overflow-hidden" style={{ background: 'rgba(212,175,55,0.12)' }}>
              <div className="w-full h-full animate-scroll-line" style={{ background: 'var(--gold)' }} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            MANIFESTO BAR
        ══════════════════════════════════════════════ */}
        <div
          className="py-5 overflow-hidden"
          style={{
            borderTop: '1px solid rgba(212,175,55,0.12)',
            borderBottom: '1px solid rgba(212,175,55,0.12)',
            background: 'rgba(212,175,55,0.04)',
          }}
        >
          <div className="section-container">
            <p
              className="font-display text-center tracking-widest2 reveal-fade"
              style={{ fontSize: '0.65rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.35em' }}
            >
              L&apos;ÊTRE AVANT L&apos;AVOIR &nbsp;·&nbsp; بودن پیش از داشتن &nbsp;·&nbsp; BEING BEFORE HAVING
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            STATS
        ══════════════════════════════════════════════ */}
        <section className="py-20" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 stagger-cards">
              {[
                { value: '100', suffix: '-Year', label: 'Vision Horizon' },
                { value: '3', suffix: ' Phases', label: 'Civilizational Roadmap' },
                { value: '€1.8M', suffix: '', label: 'Year 1 Revenue Target' },
                { value: '42%', suffix: '', label: 'Projected IRR' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="text-center py-8 px-6"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(212,175,55,0.1)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(212,175,55,0.1)' : 'none',
                  }}
                >
                  <div
                    className="font-display font-black tracking-wide gold-text mb-2"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                  >
                    {s.value}<span style={{ fontSize: '0.7em' }}>{s.suffix}</span>
                  </div>
                  <div
                    className="font-display uppercase"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(196,196,192,0.5)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            DOCTRINE
        ══════════════════════════════════════════════ */}
        <section id="what-is-vexvor" className="py-36 relative">
          <div className="noise-overlay" />
          <div className="section-container">
            <div className="text-center mb-24">
              <p className="section-label mb-10 reveal-fade">The Doctrine</p>
              <h2
                className="font-display font-black text-bone word-reveal"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                Not a Platform. <span style={{ color: 'var(--gold)' }}>A Forge.</span>
              </h2>
              <div className="gold-divider my-10 mx-auto" />
              <p
                className="font-body text-bone-dim max-w-2xl mx-auto reveal-up"
                style={{ fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300 }}
              >
                The civilized world built systems that reward performance, capital, and compliance.
                VexVor builds something different — a sovereign ecosystem where the only currency
                that truly matters is who you&apos;re becoming.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px stagger-cards" style={{ background: 'rgba(212,175,55,0.08)' }}>
              {[
                {
                  num: '01',
                  title: 'The Sovereign Void',
                  body: 'Modern systems produce capable performers and compliant laborers. VexVor produces Redeemers — sovereign individuals forged through voluntary, verifiable ordeal.',
                },
                {
                  num: '02',
                  title: 'The Forge Process',
                  body: 'Members complete structured Ordeals — challenges across the physical, intellectual, creative, ethical, and collective domains. Every ordeal is witnessed, verified, and recorded permanently.',
                },
                {
                  num: '03',
                  title: 'The Prestance Economy',
                  body: 'Completion mints VMU (Virtue Measurement Units) — soul-bound, non-transferable tokens that decay without action. Character must be continuously earned, never merely held.',
                },
              ].map((c) => (
                <div key={c.title} className="p-10 md:p-14" style={{ background: 'var(--obsidian)' }}>
                  <div
                    className="font-display font-black mb-8"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.4em', color: 'rgba(212,175,55,0.4)' }}
                  >
                    {c.num}
                  </div>
                  <h3
                    className="font-display font-black text-bone mb-5"
                    style={{ fontSize: '1rem', letterSpacing: '0.08em' }}
                  >
                    {c.title}
                  </h3>
                  <p className="font-body text-bone-dim leading-loose" style={{ fontSize: '0.9rem', fontWeight: 300 }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ECONOMY
        ══════════════════════════════════════════════ */}
        <section id="economy" className="py-36" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container">
            <div className="text-center mb-24">
              <p className="section-label mb-10 reveal-fade">Prestance Economy</p>
              <h2
                className="font-display font-black text-bone word-reveal"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                Character as <span style={{ color: 'var(--gold)' }}>Capital</span>
              </h2>
              <div className="gold-divider my-10 mx-auto" />
              <p className="font-body text-bone-dim max-w-2xl mx-auto reveal-up" style={{ fontWeight: 300, lineHeight: 1.9 }}>
                The world&apos;s first economic system where virtue generates verifiable, tradeable value.
                Three instruments. One civilizational engine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-cards">
              {[
                {
                  token: 'VMU',
                  name: 'Virtue Measurement Unit',
                  accent: 'var(--gold)',
                  desc: 'Soul-bound, non-transferable. Earned by completing Ordeals. Decays 5%/month without action. The measure of who you are — not what you own.',
                  props: ['Soul-bound', 'Non-transferable', '5% monthly decay', 'Ordeal-minted'],
                },
                {
                  token: 'GPC',
                  name: 'Growth Participation Certificate',
                  accent: 'var(--ember)',
                  desc: 'The monetary and settlement asset. KYC-gated. Capped supply algorithmically tethered to ecosystem health. Tradeable between Redeemers.',
                  props: ['KYC-gated', 'Capped supply', 'Ecosystem-tethered', 'Tradeable'],
                },
                {
                  token: 'PoP',
                  name: 'Proof-of-Prestance',
                  accent: 'var(--steel)',
                  desc: 'The validation protocol. Value is generated by overcoming verifiable challenges — not computation (PoW) or capital (PoS). Prestance is the proof.',
                  props: ['Ordeal-verified', 'Community-witnessed', 'On-chain recorded', 'Merit-weighted'],
                },
              ].map((t) => (
                <div
                  key={t.token}
                  className="flex flex-col gap-6 p-10"
                  style={{
                    border: `1px solid rgba(212,175,55,0.08)`,
                    borderTop: `2px solid ${t.accent}`,
                    background: 'var(--charcoal)',
                  }}
                >
                  <div
                    className="font-display font-black tracking-widest"
                    style={{ fontSize: '2.8rem', color: t.accent, lineHeight: 1 }}
                  >
                    {t.token}
                  </div>
                  <div>
                    <h3
                      className="font-display text-bone mb-3"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 600 }}
                    >
                      {t.name}
                    </h3>
                    <p className="font-body text-bone-dim text-sm leading-loose" style={{ fontWeight: 300 }}>
                      {t.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {t.props.map((p) => (
                      <span
                        key={p}
                        className="font-display text-xs px-3 py-1"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.15em',
                          background: `${t.accent === 'var(--gold)' ? 'rgba(212,175,55,0.06)' : t.accent === 'var(--ember)' ? 'rgba(224,24,20,0.06)' : 'rgba(68,71,79,0.2)'}`,
                          border: `1px solid ${t.accent === 'var(--gold)' ? 'rgba(212,175,55,0.2)' : t.accent === 'var(--ember)' ? 'rgba(224,24,20,0.2)' : 'rgba(68,71,79,0.4)'}`,
                          color: t.accent,
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            THE JOURNEY
        ══════════════════════════════════════════════ */}
        <section className="py-36 relative">
          <div className="noise-overlay" />
          <div className="section-container">
            <div className="text-center mb-24">
              <p className="section-label mb-10 reveal-fade">The Path</p>
              <h2
                className="font-display font-black text-bone word-reveal"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                The Redeemer&apos;s <span style={{ color: 'var(--gold)' }}>Journey</span>
              </h2>
              <div className="gold-divider mt-10 mx-auto" />
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                { step: '01', title: 'Application', desc: 'Submit your declaration of intent. Demonstrate you understand what you are entering. Entry is earned, not granted.' },
                { step: '02', title: 'Initiation', desc: 'Complete your first Ordeal. Prove you are ready. Your Prestance score begins. Your record is permanent.' },
                { step: '03', title: 'Integration', desc: 'Join a Forge — your community of Redeemers. Tackle collective Ordeals. Your growth compounds with others.' },
                { step: '04', title: 'Ascension', desc: 'Rise through the Ranks. Earn governance rights. Your VMU balance is your reputation — fully transparent.' },
                { step: '05', title: 'Sovereignty', desc: 'Become a Forger. Lead others through the fire. Shape the civilization you were built to create.' },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-10 mb-0 reveal-up" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="flex flex-col items-center" style={{ minWidth: '60px' }}>
                    <div
                      className="font-display font-black flex items-center justify-center"
                      style={{
                        width: '52px', height: '52px',
                        border: '1px solid rgba(212,175,55,0.25)',
                        color: 'var(--gold)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        flexShrink: 0,
                        clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                      }}
                    >
                      {s.step}
                    </div>
                    {i < 4 && (
                      <div
                        className="w-px flex-1 my-2"
                        style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.2), rgba(212,175,55,0.05))', minHeight: '48px' }}
                      />
                    )}
                  </div>
                  <div className="pb-14">
                    <h3
                      className="font-display font-black text-bone mb-3"
                      style={{ fontSize: '1rem', letterSpacing: '0.06em' }}
                    >
                      {s.title}
                    </h3>
                    <p className="font-body text-bone-dim leading-loose" style={{ fontSize: '0.9rem', fontWeight: 300 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            GOVERNANCE
        ══════════════════════════════════════════════ */}
        <section id="governance" className="py-36" style={{ background: 'var(--charcoal)' }}>
          <div className="section-container">
            <div className="text-center mb-24">
              <p className="section-label mb-10 reveal-fade">The Architecture</p>
              <h2
                className="font-display font-black text-bone word-reveal"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                Twin-Chamber <span style={{ color: 'var(--gold)' }}>Governance</span>
              </h2>
              <div className="gold-divider my-10 mx-auto" />
              <p className="font-body text-bone-dim max-w-2xl mx-auto reveal-up" style={{ fontWeight: 300, lineHeight: 1.9 }}>
                VexVor is governed by its members — not investors.
                Power flows from Prestance, not capital.
                Merit is the only mandate that counts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px mb-px stagger-cards" style={{ background: 'rgba(212,175,55,0.06)' }}>
              {[
                {
                  chamber: 'Council of Forgers',
                  subtitle: 'Active Members',
                  desc: 'Active Redeemers with verified Prestance scores. Votes are weighted by VMU balance. The engine of VexVor governance — merit, not money.',
                  accent: 'var(--gold)',
                },
                {
                  chamber: 'Assembly of Patrons',
                  subtitle: 'Investors',
                  desc: 'Financial backers bound by the Prestance Vow. Capital may enter; it does not rule. The firewall between money and merit holds absolute.',
                  accent: 'var(--ember)',
                },
              ].map((c) => (
                <div
                  key={c.chamber}
                  className="p-12 md:p-16"
                  style={{ background: 'var(--charcoal2)', borderTop: `2px solid ${c.accent}` }}
                >
                  <div
                    className="font-display uppercase mb-3"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: c.accent }}
                  >
                    {c.subtitle}
                  </div>
                  <h3
                    className="font-display font-black text-bone mb-6"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '0.04em' }}
                  >
                    {c.chamber}
                  </h3>
                  <p className="font-body text-bone-dim leading-loose" style={{ fontWeight: 300 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Shield-Wall */}
            <div
              className="p-10 md:p-14 reveal-up"
              style={{
                background: 'var(--charcoal2)',
                borderBottom: '1px solid rgba(212,175,55,0.08)',
                borderLeft: '1px solid rgba(212,175,55,0.08)',
                borderRight: '1px solid rgba(212,175,55,0.08)',
              }}
            >
              <div
                className="font-display font-black text-center mb-12"
                style={{ fontSize: '0.6rem', letterSpacing: '0.45em', color: 'rgba(212,175,55,0.5)', textTransform: 'uppercase' }}
              >
                Shield-Wall Protocol
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  { name: 'Merit Firewall', desc: 'Blocks plutocratic capture. Capital without Prestance holds zero governance power.' },
                  { name: 'Aegis Protocol', desc: 'Emergency intervention mechanism. Shields the ecosystem from coordinated attacks.' },
                  { name: 'EMBER Protocol', desc: 'Detects and purges bad-faith actors. The forge eliminates dross — always.' },
                  { name: 'Atlas Query Mesh', desc: 'Distributed verification network. Truth is consensus, not authority.' },
                ].map((s) => (
                  <div key={s.name}>
                    <div
                      className="font-display mb-4 pb-4"
                      style={{
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                        color: 'var(--gold)',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(212,175,55,0.15)',
                      }}
                    >
                      {s.name}
                    </div>
                    <p className="font-body text-bone-dim text-sm leading-loose" style={{ fontWeight: 300 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ROADMAP
        ══════════════════════════════════════════════ */}
        <section id="roadmap" className="py-36 relative">
          <div className="noise-overlay" />
          <div className="section-container">
            <div className="text-center mb-24">
              <p className="section-label mb-10 reveal-fade">100-Year Vision</p>
              <h2
                className="font-display font-black text-bone word-reveal"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                Three Phases to <span style={{ color: 'var(--gold)' }}>Civilization</span>
              </h2>
              <div className="gold-divider mt-10 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-cards">
              {[
                {
                  phase: 'Phase I',
                  title: 'Ignition',
                  period: 'Months 0–12',
                  accent: 'var(--gold)',
                  goals: [
                    '2,350 active Redeemers',
                    'Foundry Dues €15/month live',
                    'Break-even Month 11',
                    'First Forge Councils formed',
                    'VMU on-chain deployment',
                  ],
                },
                {
                  phase: 'Phase II',
                  title: 'Expansion',
                  period: 'Years 1–5',
                  accent: 'var(--ember)',
                  goals: [
                    'GPC token public issuance',
                    '50,000+ Redeemers',
                    'Cross-border Forge network',
                    'Assembly of Patrons active',
                    '€1.8M ARR Year 1',
                  ],
                },
                {
                  phase: 'Phase III',
                  title: 'Sovereignty',
                  period: 'Years 5–100',
                  accent: 'rgba(196,196,192,0.5)',
                  goals: [
                    'Swiss Stiftung + GmbH + DAO',
                    'Prestance Economy global',
                    'Self-sustaining civilization',
                    'Independent legal jurisdiction',
                    '42% projected IRR',
                  ],
                },
              ].map((p) => (
                <div
                  key={p.phase}
                  className="p-10 flex flex-col gap-6"
                  style={{
                    border: '1px solid rgba(212,175,55,0.08)',
                    borderTop: `2px solid ${p.accent}`,
                    background: 'var(--charcoal)',
                  }}
                >
                  <div>
                    <div
                      className="font-display uppercase mb-2"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: p.accent }}
                    >
                      {p.phase}
                    </div>
                    <h3
                      className="font-display font-black text-bone"
                      style={{ fontSize: '1.6rem', letterSpacing: '0.04em', lineHeight: 1 }}
                    >
                      {p.title}
                    </h3>
                    <div
                      className="font-body mt-2"
                      style={{ fontSize: '0.8rem', color: 'var(--steel)' }}
                    >
                      {p.period}
                    </div>
                  </div>
                  <div
                    className="h-px w-full"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  />
                  <ul className="flex flex-col gap-4">
                    {p.goals.map((g) => (
                      <li key={g} className="flex items-start gap-4">
                        <span style={{ color: p.accent, marginTop: '3px', fontSize: '8px', flexShrink: 0 }}>◆</span>
                        <span className="font-body text-bone-dim text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                          {g}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            APPLY
        ══════════════════════════════════════════════ */}
        <section id="apply" className="py-36" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container max-w-3xl">
            <div className="text-center mb-20">
              <p className="section-label mb-10 reveal-fade">Entry Protocol</p>
              <h2
                className="font-display font-black text-bone word-reveal"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                Request <span style={{ color: 'var(--gold)' }}>Entry</span>
              </h2>
              <div className="gold-divider my-10 mx-auto" />
              <p className="font-body text-bone-dim max-w-xl mx-auto reveal-up" style={{ fontWeight: 300, lineHeight: 1.9 }}>
                VexVor does not recruit. It selects. Submit your declaration below.
                Applications are reviewed by the Council of Forgers within 72 hours.
              </p>
            </div>
            <div className="reveal-up">
              <ApplyForm />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════ */}
        <footer
          className="py-20"
          style={{
            background: 'var(--obsidian)',
            borderTop: '1px solid rgba(212,175,55,0.08)',
          }}
        >
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
              <div className="max-w-xs">
                <div
                  className="font-display font-black tracking-widest mb-5 gold-text"
                  style={{ fontSize: '1.4rem' }}
                >
                  VEXVOR
                </div>
                <p className="font-body text-bone-dim text-sm leading-loose" style={{ fontWeight: 300 }}>
                  The Civilizational Forge. Where character is the primary asset class
                  and proof of virtue is the engine of value.
                </p>
                <div
                  className="mt-8 font-display uppercase"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'rgba(212,175,55,0.4)' }}
                >
                  Being Before Having
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
                {[
                  { title: 'The Forge', links: ['What is VexVor', 'The Economy', 'Governance', 'Roadmap'] },
                  { title: 'Redeemers',  links: ['Apply', 'Ordeals', 'Dashboard', 'Forge Groups'] },
                  { title: 'Legal',      links: ['Privacy Policy', 'Terms of Entry', 'Cookie Policy'] },
                ].map((col) => (
                  <div key={col.title}>
                    <div
                      className="font-display uppercase mb-6"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.35em', color: 'var(--gold)' }}
                    >
                      {col.title}
                    </div>
                    <ul className="flex flex-col gap-3">
                      {col.links.map((l) => (
                        <li key={l}>
                          <a
                            href="#"
                            className="font-body text-sm text-bone-dim transition-colors duration-300"
                            style={{ fontWeight: 300 }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                          >
                            {l}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
              style={{ borderTop: '1px solid rgba(212,175,55,0.06)' }}
            >
              <p className="font-body text-xs" style={{ color: 'var(--steel)', fontWeight: 300 }}>
                © {new Date().getFullYear()} VexVor. All rights reserved.
              </p>
              <p
                className="font-display uppercase"
                style={{ fontSize: '0.55rem', letterSpacing: '0.35em', color: 'rgba(212,175,55,0.35)' }}
              >
                L&apos;être avant l&apos;avoir · بودن پیش از داشتن
              </p>
            </div>
          </div>
        </footer>

      </div>{/* /mainRef */}
    </>
  )
}
