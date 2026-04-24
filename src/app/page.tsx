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
    if (introShown) return
    if (!mainRef.current) return
    const id = setTimeout(() => {
      if (mainRef.current) initReveal(mainRef.current)
    }, 300)
    return () => { clearTimeout(id); cleanup() }
  }, [introShown])

  return (
    <>
      {introShown && <IntroOverlay onDismiss={() => setIntroShown(false)} />}
      <Nav />

      <div ref={mainRef}>

        {/* ══════════════════════════════════════════════════════════
            HERO — split layout: statement left / investor stats right
        ══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-end pb-20 md:pb-0 md:items-center overflow-hidden">
          <SpiralAnimation seed={1234} starCount={3800} mouseInfluence={0.6} />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: [
              'radial-gradient(ellipse 80% 60% at 40% 40%, transparent 10%, rgba(6,6,8,0.55) 100%)',
              'linear-gradient(to bottom, rgba(6,6,8,0.3) 0%, transparent 20%, transparent 50%, rgba(6,6,8,0.95) 100%)',
            ].join(', '),
          }} />

          <div className="hero-content relative z-10 section-container w-full">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center py-20 md:py-0">

              {/* ── Left: statement ── */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-px" style={{ background: 'var(--ember)' }} />
                  <span className="font-display uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.44em', color: 'var(--bronze)' }}>
                    Est. 2025 · Being Before Having
                  </span>
                </div>

                <h1
                  className="font-display font-black leading-none mb-8"
                  style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 0.92 }}
                >
                  <span style={{ color: 'var(--white)' }}>THE WORLD&rsquo;S</span>
                  <br />
                  <span style={{ color: 'var(--white)' }}>FIRST</span>
                  <br />
                  <span className="gold-text">CHARACTER</span>
                  <br />
                  <span style={{ color: 'var(--white)' }}>ECONOMY.</span>
                </h1>

                <p className="font-body mb-10 max-w-lg" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                  VexVor is a structured civilizational ecosystem where personal development
                  generates verifiable economic value. Members called Redeemers complete
                  structured Ordeals — and their virtue, proven and recorded, becomes the
                  primary currency of the system.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#apply" className="btn-primary">
                    Request Entry
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#patrons" className="btn-outline">
                    Investor Prospectus →
                  </a>
                </div>
              </div>

              {/* ── Right: key investor numbers ── */}
              <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
                {[
                  { value: '€1.8M',   label: 'Year 1 ARR Target' },
                  { value: '42%',     label: 'Projected IRR' },
                  { value: 'Mo. 11',  label: 'Break-even Point' },
                  { value: '100 Yr',  label: 'Vision Horizon' },
                ].map((s) => (
                  <div key={s.label} className="p-8 md:p-10 reveal-scale" style={{ background: 'rgba(6,6,8,0.75)', backdropFilter: 'blur(8px)' }}>
                    <div className="inv-stat-value" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                      {s.value}
                    </div>
                    <span className="inv-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="font-display uppercase" style={{ fontSize: '0.48rem', letterSpacing: '0.4em', color: 'var(--steel)' }}>Scroll</span>
            <div className="w-px h-10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="w-full h-full animate-scroll-line" style={{ background: 'var(--white)' }} />
            </div>
          </div>
        </section>

        {/* ── Ticker bar ── */}
        <div className="py-4 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'var(--charcoal2)' }}>
          <div className="marquee-track">
            {['BEING BEFORE HAVING', '·', 'THE CIVILIZATIONAL FORGE', '·', 'CHARACTER IS CAPITAL', '·', 'PROOF OF PRESTANCE', '·', 'BEING BEFORE HAVING', '·', 'THE CIVILIZATIONAL FORGE', '·', 'CHARACTER IS CAPITAL', '·', 'PROOF OF PRESTANCE', '·'].map((t, i) => (
              <span key={i} className="font-display uppercase whitespace-nowrap" style={{ fontSize: '0.52rem', letterSpacing: '0.3em', color: t === '·' ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.35)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            01 — THE CRISIS (The Problem We Solve)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-36 relative" style={{ background: 'var(--charcoal2)' }}>
          <div className="noise-overlay" />
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div>
                <span className="section-num reveal-fade">01 — The Crisis</span>
                <h2 className="word-reveal font-display font-black text-bone mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                  The attention economy extracted two billion hours a day from humanity.
                  <span style={{ color: 'var(--ember)' }}> What it gave back was not worth keeping.</span>
                </h2>
                <div className="gold-divider mb-10" />
                <p className="reveal-up font-body" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                  Modern platforms optimized for engagement — the cheapest form of human attention.
                  In doing so, they created what we call the Sovereign Void: a mass crisis of
                  identity and purpose in which billions of people perform for algorithms rather
                  than develop themselves. The result is a civilization that is highly productive
                  and deeply hollow.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { stat: '2.5B', desc: 'Hours per day lost to passive algorithm-driven consumption globally', border: 'var(--ember)' },
                  { stat: '87%', desc: 'Of adults in knowledge economies report a persistent sense of unfulfilled potential — Gallup 2024', border: 'var(--bronze)' },
                  { stat: '$0',  desc: 'Economic value returned to individuals from the attention economy after extraction', border: 'rgba(255,255,255,0.15)' },
                ].map((s) => (
                  <div key={s.stat} className="p-8 scrub-left" style={{ background: 'var(--charcoal)', borderLeft: `2px solid ${s.border}` }}>
                    <div className="font-display font-black mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--white)' }}>
                      {s.stat}
                    </div>
                    <p className="font-body" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--off-white)' }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            02 — WHAT IS VEXVOR
        ══════════════════════════════════════════════════════════ */}
        <section id="what-is-vexvor" className="py-36" style={{ background: 'var(--black)' }}>
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade">02 — What is VexVor</span>
              <h2 className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '780px' }}>
                Not a social network. Not a crypto project. Not a coaching platform.
              </h2>
              <p className="reveal-up font-body max-w-2xl" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                VexVor is a structured sovereign ecosystem — a Forge — where membership is earned
                through verifiable personal development, and where the depth of your character
                determines your economic and governance power. It is the first system ever built
                on this principle at scale, with the infrastructure to sustain it permanently.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px stagger-cards" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {[
                {
                  num: '01',
                  title: 'The Forge Community',
                  body: 'Redeemers are organized into Forge groups — small, accountable communities that complete collective Ordeals together. The Forge is not a social feed. It is a crucible. Members know each other, witness each other, and hold each other permanently accountable through on-chain records.',
                },
                {
                  num: '02',
                  title: 'The Prestance Economy',
                  body: 'Every verified Ordeal completion mints VMU — Virtue Measurement Units. VMU are non-transferable and decay 5% monthly without new action. This is not a reward. It is a continuous measurement of who you are actively becoming. GPC (Growth Participation Certificates) form the tradeable monetary layer, anchored to ecosystem Prestance.',
                },
                {
                  num: '03',
                  title: 'Merit-Based Governance',
                  body: 'VexVor is governed by its most Prestant members — not its wealthiest. The Council of Forgers holds voting power proportional to VMU balance. Capital enters through the Assembly of Patrons but holds zero governance authority. The Merit Firewall is constitutional, not aspirational.',
                },
              ].map((c) => (
                <div key={c.title} className="p-10 md:p-12" style={{ background: 'var(--charcoal)' }}>
                  <div className="font-display font-black mb-6" style={{ fontSize: '0.52rem', letterSpacing: '0.4em', color: 'var(--bronze)' }}>
                    {c.num}
                  </div>
                  <h3 className="font-display font-black text-bone mb-5" style={{ fontSize: '0.9rem', letterSpacing: '0.07em' }}>
                    {c.title}
                  </h3>
                  <p className="font-body" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            03 — THE ORDEAL SYSTEM
        ══════════════════════════════════════════════════════════ */}
        <section className="py-36 relative overflow-hidden" style={{ background: 'var(--charcoal2)' }}>
          <div className="noise-overlay" />

          {/* Faint background number */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none parallax-slow"
            data-depth="0.12"
            style={{ fontSize: 'clamp(12rem, 25vw, 20rem)', lineHeight: 1, color: 'rgba(255,255,255,0.018)', letterSpacing: '-0.05em' }}>
            03
          </div>

          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div>
                <span className="section-num scrub-right">03 — The Ordeal System</span>
                <h2 className="word-reveal font-display font-black text-bone mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                  Fire is the only forge that works.
                </h2>
                <div className="gold-divider mb-10" />
                <p className="scrub-up font-body mb-8" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                  An Ordeal is a structured, time-bounded challenge with defined parameters,
                  a multi-peer witness protocol, and permanent cryptographic recording. Ordeals
                  span five domains because genuine human excellence is never one-dimensional.
                  Every completion is immutable. Every failure is instructive. Nothing is hidden.
                </p>
                <p className="scrub-up font-body" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                  The Ordeal system is what makes VexVor structurally impossible to game.
                  You cannot buy VMU. You cannot inherit it. You cannot fake Prestance in
                  front of people who have watched you for months. The protocol sees everything.
                  The Forge remembers everything.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { domain: 'Physical', icon: '◈', desc: 'Endurance, strength, and physical discipline as verifiable proof that you can override biological comfort when principle demands it.' },
                  { domain: 'Intellectual', icon: '◈', desc: 'Original thought, rigorous synthesis, and the willingness to hold and publicly defend ideas under structured examination by peers.' },
                  { domain: 'Creative', icon: '◈', desc: 'The production of original work — something the world did not have before you made it. Expression as an act of civilizational contribution.' },
                  { domain: 'Ethical', icon: '◈', desc: 'Choices made at genuine personal cost, integrity confirmed by observable outcome rather than self-reported statement. Ethics under pressure.' },
                  { domain: 'Collective', icon: '◈', desc: 'Coordinated effort within a Forge toward a shared challenge that no individual could complete alone. Excellence in community, not merely in isolation.' },
                ].map((d, i) => (
                  <div key={d.domain} className="flex gap-5 p-6 scrub-left" style={{ background: 'var(--charcoal)', transitionDelay: `${i * 0.04}s` }}>
                    <span style={{ color: 'var(--ember)', fontSize: '0.55rem', marginTop: '4px', flexShrink: 0 }}>{d.icon}</span>
                    <div>
                      <div className="font-display font-black mb-1" style={{ fontSize: '0.6rem', letterSpacing: '0.28em', color: 'var(--white)', textTransform: 'uppercase' }}>
                        {d.domain}
                      </div>
                      <p className="font-body" style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--off-white)' }}>
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            04 — ECONOMY & REVENUE MODEL
        ══════════════════════════════════════════════════════════ */}
        <section id="economy" className="py-36" style={{ background: 'var(--black)' }}>
          <div className="section-container">
            <div className="mb-20">
              <span className="section-num reveal-fade">04 — The Economy</span>
              <h2 className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '780px' }}>
                Character as capital. Virtue as value. This is the Prestance Economy.
              </h2>
              <p className="reveal-up font-body max-w-2xl" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                Every economic system encodes a value system. When capital is money, what you
                accumulate is your worth. When capital is Prestance — continuously earned, verified,
                and decaying without action — what you are actively becoming is your worth.
                VexVor is the first architecture built entirely on this principle.
              </p>
            </div>

            {/* Revenue model callout */}
            <div className="mb-12 p-8 md:p-12 reveal-up" style={{ background: 'var(--charcoal)', borderLeft: '2px solid var(--ember)' }}>
              <div className="font-display uppercase mb-4" style={{ fontSize: '0.52rem', letterSpacing: '0.4em', color: 'var(--ember)' }}>
                Revenue Model
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { stream: 'Foundry Dues', amount: '€15', period: '/member/month', note: 'Core subscription' },
                  { stream: 'Forge Certifications', amount: '€500–€10k', period: '/cert', note: 'Verified excellence' },
                  { stream: 'GPC Issuance', amount: 'Variable', period: 'Protocol fees', note: 'Phase II' },
                  { stream: 'Patron Contracts', amount: 'Structured', period: 'Mission-aligned', note: 'Assembly of Patrons' },
                ].map((r) => (
                  <div key={r.stream}>
                    <div className="font-display font-black text-bone mb-1" style={{ fontSize: '1rem' }}>
                      {r.amount}
                    </div>
                    <div className="font-display uppercase mb-2" style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--steel)' }}>
                      {r.period}
                    </div>
                    <div className="font-display font-black text-bone mb-1" style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                      {r.stream}
                    </div>
                    <div className="font-body" style={{ fontSize: '0.8rem', color: 'var(--off-white)', fontWeight: 300 }}>
                      {r.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 tokens */}
            <div className="grid md:grid-cols-3 gap-6 stagger-cards">
              {[
                {
                  token: 'VMU',
                  name: 'Virtue Measurement Unit',
                  accent: 'rgba(255,255,255,0.7)',
                  accentBorder: 'rgba(255,255,255,0.15)',
                  desc: 'Soul-bound. Non-transferable. Earned exclusively by completing verified Ordeals. Decays 5% per month without new action. Your VMU balance is a live, public record of who you are actively becoming — not what you once did.',
                  tags: ['Soul-bound', 'Non-transferable', '5%/mo decay', 'Ordeal-minted'],
                },
                {
                  token: 'GPC',
                  name: 'Growth Participation Certificate',
                  accent: 'var(--ember)',
                  accentBorder: 'rgba(184,58,44,0.25)',
                  desc: 'The monetary settlement layer. KYC-gated. Supply cap algorithmically tied to ecosystem Prestance — it can only grow as the collective virtue of Redeemers grows. Tradeable between verified members. Capital that serves character.',
                  tags: ['KYC-gated', 'Capped supply', 'Prestance-anchored', 'Tradeable'],
                },
                {
                  token: 'PoP',
                  name: 'Proof-of-Prestance',
                  accent: 'var(--bronze)',
                  accentBorder: 'rgba(122,96,64,0.25)',
                  desc: 'The validation protocol. Value is generated by overcoming verifiable challenges — not computation or capital staking. Every Ordeal completion is witnessed, signed by peers, and written immutably on-chain. No one can grant you Prestance. No one can take it.',
                  tags: ['Peer-witnessed', 'Cryptographically signed', 'Immutable record', 'Merit-weighted'],
                },
              ].map((t) => (
                <div key={t.token} className="flex flex-col gap-6 p-10" style={{ background: 'var(--charcoal)', borderTop: `2px solid ${t.accent}` }}>
                  <div className="font-display font-black" style={{ fontSize: '2.4rem', color: t.accent, lineHeight: 1 }}>
                    {t.token}
                  </div>
                  <div>
                    <h3 className="font-display text-bone mb-4" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', fontWeight: 600 }}>
                      {t.name}
                    </h3>
                    <p className="font-body" style={{ fontSize: '0.86rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                      {t.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {t.tags.map((tag) => (
                      <span key={tag} className="font-display px-3 py-1" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', background: t.accentBorder, color: t.accent, border: `1px solid ${t.accentBorder}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            05 — GOVERNANCE
        ══════════════════════════════════════════════════════════ */}
        <section id="governance" className="py-36 relative" style={{ background: 'var(--charcoal2)' }}>
          <div className="noise-overlay" />
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade">05 — Governance</span>
              <h2 className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '780px' }}>
                Power flows from Prestance. Capital may enter. It does not rule.
              </h2>
              <p className="reveal-up font-body max-w-2xl" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                VexVor&rsquo;s governance answers a single question differently than every organization
                before it: who has the right to decide? In VexVor, that right belongs exclusively
                to those who have demonstrated continuous Prestance. Not the earliest investors.
                Not the largest wallets. The most actively becoming members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px mb-px stagger-cards" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {[
                {
                  chamber: 'Council of Forgers',
                  subtitle: 'Active Redeemers',
                  accent: 'var(--white)',
                  desc: 'All governance authority resides in the Council — composed entirely of active Redeemers with verified Prestance scores. Votes are weighted by VMU balance. Forgers shape Ordeal design, protocol upgrades, admission criteria, GPC issuance policy, and the long-term civilizational direction. No investor may join the Council without first becoming a Redeemer and earning their Prestance.',
                },
                {
                  chamber: 'Assembly of Patrons',
                  subtitle: 'Investors & Benefactors',
                  accent: 'var(--ember)',
                  desc: 'Investors participate as Patrons through the Assembly — a structured body with defined, bounded rights. Patrons may propose initiatives, commission audits, and observe all governance. They do not vote. Every Patron enters under the Prestance Vow — a binding constitutional commitment that capital will never be used to subvert merit. This protection is structural, not merely stated.',
                },
              ].map((c) => (
                <div key={c.chamber} className="p-12 md:p-16" style={{ background: 'var(--charcoal)', borderTop: `2px solid ${c.accent}` }}>
                  <div className="font-display uppercase mb-3" style={{ fontSize: '0.52rem', letterSpacing: '0.35em', color: c.accent }}>
                    {c.subtitle}
                  </div>
                  <h3 className="font-display font-black text-bone mb-6" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', letterSpacing: '0.03em' }}>
                    {c.chamber}
                  </h3>
                  <p className="font-body" style={{ fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Shield-wall */}
            <div className="p-10 md:p-14 reveal-up" style={{ background: 'var(--charcoal)', border: '1px solid rgba(255,255,255,0.04)', borderTop: 'none' }}>
              <div className="font-display font-black text-center mb-12" style={{ fontSize: '0.52rem', letterSpacing: '0.44em', color: 'var(--steel)', textTransform: 'uppercase' }}>
                Shield-Wall Protocol — Constitutional Safeguards
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  { name: 'Merit Firewall', desc: 'Blocks capital from converting to governance power. GPC holdings grant zero voting rights in the Council of Forgers.' },
                  { name: 'Aegis Protocol', desc: 'Emergency intervention mechanism. Activated by supermajority Forger vote to protect against coordinated constitutional attacks.' },
                  { name: 'EMBER Protocol', desc: 'Detects and processes bad-faith actors attempting to fraudulently mine VMU. The Forge eliminates dross — structurally, not morally.' },
                  { name: 'Atlas Query Mesh', desc: 'Distributed verification network for Ordeal completion. Truth is consensus across nodes — no single authority can corrupt the record.' },
                ].map((s) => (
                  <div key={s.name}>
                    <div className="font-display mb-4 pb-4" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--white)', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {s.name}
                    </div>
                    <p className="font-body" style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--off-white)' }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            06 — FOR INVESTORS (Assembly of Patrons) — LIGHT SECTION
        ══════════════════════════════════════════════════════════ */}
        <section id="patrons" className="py-36 section-light">
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade" style={{ color: '#7A6040' }}>06 — Assembly of Patrons</span>
              <h2 className="word-reveal font-display font-black mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '780px', color: 'var(--black)' }}>
                Invest in the first economy built on human character.
              </h2>
              <p className="reveal-up font-body max-w-2xl" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: '#3A3A40' }}>
                VexVor accepts capital exclusively through the Assembly of Patrons — a structured
                investment body for individuals and institutions who believe that the next major
                value frontier is not artificial intelligence or digital assets, but the systematic
                development of genuine human character at civilizational scale.
              </p>
            </div>

            {/* Financial projections grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 reveal-up" style={{ background: 'rgba(0,0,0,0.08)' }}>
              {[
                { value: '€1.8M',  label: 'Year 1 ARR',      note: 'Phase I target' },
                { value: '42%',    label: 'Projected IRR',    note: 'Long-term return' },
                { value: 'Mo. 11', label: 'Break-even',       note: 'At 2,350 Redeemers' },
                { value: '€354k',  label: 'Total CAPEX',      note: 'Phase I capital requirement' },
              ].map((s) => (
                <div key={s.label} className="p-8 md:p-10" style={{ background: '#E8E8E4' }}>
                  <div className="font-display font-black mb-1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--black)' }}>
                    {s.value}
                  </div>
                  <div className="font-display uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.25em', color: '#7A6040', marginBottom: '0.25rem' }}>
                    {s.label}
                  </div>
                  <div className="font-body" style={{ fontSize: '0.78rem', color: '#5A5A62', fontWeight: 300 }}>
                    {s.note}
                  </div>
                </div>
              ))}
            </div>

            {/* What Patrons receive */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="font-display font-black mb-8" style={{ fontSize: '0.88rem', letterSpacing: '0.08em', color: 'var(--black)' }}>
                  WHAT PATRONS RECEIVE
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    'Full transparency access to protocol metrics and Redeemer activity data',
                    'Structured reporting on ecosystem Prestance growth and revenue performance',
                    'The right to propose initiatives to the Council of Forgers for consideration',
                    'Annual Patron Conclave — direct engagement with the Council of Forgers',
                    'GPC allocation proportional to investment, governed by Patron Vow structure',
                    'Constitutional protection of mission integrity for the life of the Stiftung',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span style={{ color: '#B83A2C', fontSize: '7px', marginTop: '5px', flexShrink: 0 }}>◆</span>
                      <p className="font-body" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.7, color: '#3A3A40' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-black mb-8" style={{ fontSize: '0.88rem', letterSpacing: '0.08em', color: 'var(--black)' }}>
                  LEGAL STRUCTURE
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { entity: 'Swiss Stiftung', desc: 'Holds the civilizational mission irrevocably. Governed by Swiss Code of Obligations. Cannot be sold, modified, or dissolved without supermajority Forger consensus.' },
                    { entity: 'GmbH', desc: 'Operates commercial functions — subscriptions, certifications, GPC issuance, Patron contracts. Structured for compliance and tax efficiency at scale.' },
                    { entity: 'DAO', desc: 'On-chain governance layer. Smart-contract-enforced voting rules ensure no outcome can override the Stiftung\'s constitutional foundations.' },
                  ].map((e) => (
                    <div key={e.entity} className="p-5" style={{ background: 'rgba(0,0,0,0.05)', borderLeft: '2px solid rgba(184,58,44,0.3)' }}>
                      <div className="font-display font-black mb-2" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--black)' }}>
                        {e.entity}
                      </div>
                      <p className="font-body" style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.7, color: '#5A5A62' }}>
                        {e.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA for investors */}
            <div className="p-10 md:p-14 text-center reveal-scale" style={{ background: 'var(--black)', color: 'var(--white)' }}>
              <div className="font-display font-black mb-4" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', letterSpacing: '-0.01em' }}>
                Begin the Patron conversation.
              </div>
              <p className="font-body mb-10 max-w-xl mx-auto" style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                The Assembly of Patrons does not have an open application. Prospective Patrons
                engage by direct introduction through the Forger network or by submitting
                a declaration of intent through the entry form below. All Patron inquiries
                are reviewed by the Council within 14 working days.
              </p>
              <a href="#apply" className="btn-ember">
                Submit Declaration of Intent
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            07 — THE REDEEMER'S JOURNEY
        ══════════════════════════════════════════════════════════ */}
        <section className="py-36 relative overflow-hidden" style={{ background: 'var(--charcoal2)' }}>
          <div className="noise-overlay" />
          <div className="section-container">
            <div className="mb-20">
              <span className="section-num reveal-fade">07 — The Path</span>
              <h2 className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '600px' }}>
                Five stages. No shortcuts.
              </h2>
              <p className="reveal-up font-body max-w-xl" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                Entry into VexVor is not a transaction. It is a declaration of intent
                followed by a succession of choices — each harder than the last,
                each building what the next requires.
              </p>
            </div>

            <div className="max-w-3xl">
              {[
                { step: '01', title: 'Application', desc: 'Submit your declaration of intent and demonstrate that you understand what you are entering. Applications are reviewed by the Council of Forgers. Entry is earned — it is not granted on request. The question is not whether you want to join. The question is whether you are willing to become what joining requires of you.' },
                { step: '02', title: 'Initiation', desc: 'Complete your first Ordeal. This is not orientation. It is proof — proof that your declaration was not performance. Your Prestance score opens here and your permanent record begins. What you complete today will still be part of your verified record in twenty years. Choose your first Ordeal accordingly.' },
                { step: '03', title: 'Integration', desc: 'Join a Forge — your assigned community of Redeemers working toward the same transformation. You will complete collective Ordeals alongside people who are serious about character development. Your growth compounds with theirs. The Forge holds you accountable in ways no algorithm or social feed can replicate.' },
                { step: '04', title: 'Ascension', desc: 'Rise through the Ranks as your VMU balance and Ordeal record grow. Earn governance rights within the Council of Forgers. Your Prestance score becomes your reputation — fully transparent, fully verifiable, and impossible to fabricate. At this stage, you begin to shape VexVor itself, not merely participate in it.' },
                { step: '05', title: 'Sovereignty', desc: 'Become a Forger. Lead other Redeemers through their own fire. Design the Ordeals that will forge the next generation of Redeemers. The highest expression of Prestance is not personal excellence — it is the capacity to create conditions in which others can discover theirs. This is what it means to be civilizational.' },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-10 reveal-up">
                  <div className="flex flex-col items-center" style={{ minWidth: '52px' }}>
                    <div className="font-display font-black flex items-center justify-center flex-shrink-0"
                      style={{ width: '44px', height: '44px', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--off-white)', fontSize: '0.58rem', letterSpacing: '0.1em' }}>
                      {s.step}
                    </div>
                    {i < 4 && (
                      <div className="w-px flex-1 my-2" style={{ background: 'rgba(255,255,255,0.06)', minHeight: '36px' }} />
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="font-display font-black text-bone mb-4" style={{ fontSize: '0.9rem', letterSpacing: '0.06em' }}>
                      {s.title}
                    </h3>
                    <p className="font-body" style={{ fontSize: '0.86rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            08 — ROADMAP
        ══════════════════════════════════════════════════════════ */}
        <section id="roadmap" className="py-36" style={{ background: 'var(--black)' }}>
          <div className="section-container">
            <div className="mb-20">
              <span className="section-num reveal-fade">08 — Roadmap</span>
              <h2 className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '600px' }}>
                Three phases. One hundred years.
              </h2>
              <p className="reveal-up font-body max-w-xl" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                VexVor is not a startup with a five-year exit strategy. It is a 100-year
                civilizational project. Phase I builds proof of concept. Phase II scales
                the network and deploys the full economy. Phase III achieves full structural
                independence — a self-sustaining civilization that no external force can dismantle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-cards">
              {[
                {
                  phase: 'Phase I',
                  title: 'Ignition',
                  period: 'Months 0 – 12',
                  accentTop: 'var(--white)',
                  accentText: 'rgba(255,255,255,0.5)',
                  narrative: 'Prove the model. Build the core Redeemer base. Demonstrate that the Prestance Economy generates real, verifiable human and economic value.',
                  goals: ['2,350 active Redeemers at break-even', 'Foundry Dues live at €15/month', 'Break-even by Month 11', 'First Forge Councils constituted', 'VMU on-chain deployment', '€73k/month OPEX threshold cleared'],
                },
                {
                  phase: 'Phase II',
                  title: 'Expansion',
                  period: 'Years 1 – 5',
                  accentTop: 'var(--ember)',
                  accentText: 'rgba(184,58,44,0.6)',
                  narrative: 'Scale the network. Deploy the full Prestance Economy. Establish VexVor as the global standard for character-based value creation.',
                  goals: ['GPC token public issuance', '50,000+ Redeemers across geographies', 'Cross-border Forge network active', 'Assembly of Patrons formally constituted', '€1.8M ARR in Year 1', '42% IRR trajectory confirmed'],
                },
                {
                  phase: 'Phase III',
                  title: 'Sovereignty',
                  period: 'Years 5 – 100',
                  accentTop: 'var(--bronze)',
                  accentText: 'rgba(122,96,64,0.6)',
                  narrative: 'Full structural independence. A self-sustaining civilization with its own economy, legal jurisdiction, governance, and cultural gravity.',
                  goals: ['Swiss Stiftung + GmbH + DAO fully operational', 'Prestance Economy globally recognized', 'Independent legal jurisdiction established', 'Self-sustaining without external capital', '42% projected IRR delivered', 'First post-attention civilization'],
                },
              ].map((p) => (
                <div key={p.phase} className="p-10 flex flex-col gap-8" style={{ background: 'var(--charcoal)', borderTop: `2px solid ${p.accentTop}` }}>
                  <div>
                    <div className="font-display uppercase mb-2" style={{ fontSize: '0.52rem', letterSpacing: '0.35em', color: p.accentTop }}>
                      {p.phase}
                    </div>
                    <h3 className="font-display font-black text-bone" style={{ fontSize: '1.6rem', letterSpacing: '0.04em', lineHeight: 1 }}>
                      {p.title}
                    </h3>
                    <div className="font-body mt-2 mb-5" style={{ fontSize: '0.76rem', color: 'var(--steel)' }}>
                      {p.period}
                    </div>
                    <p className="font-body" style={{ fontSize: '0.86rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--off-white)' }}>
                      {p.narrative}
                    </p>
                  </div>
                  <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                  <ul className="flex flex-col gap-3">
                    {p.goals.map((g) => (
                      <li key={g} className="flex items-start gap-3">
                        <span style={{ color: p.accentTop, marginTop: '4px', fontSize: '6px', flexShrink: 0 }}>◆</span>
                        <span className="font-body" style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.6, color: 'var(--off-white)' }}>
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

        {/* ══════════════════════════════════════════════════════════
            09 — APPLY
        ══════════════════════════════════════════════════════════ */}
        <section id="apply" className="py-36 relative overflow-hidden" style={{ background: 'var(--charcoal2)' }}>
          <div className="noise-overlay" />

          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div>
                <span className="section-num reveal-fade">09 — Entry Protocol</span>
                <h2 className="word-reveal font-display font-black text-bone mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                  Are you ready to be forged?
                </h2>
                <div className="gold-divider mb-10" />
                <p className="reveal-up font-body mb-8" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                  VexVor does not recruit. It selects. The question we are asking is not
                  whether you want to be here — the question is whether you are ready to
                  commit to becoming something the world no longer knows how to produce.
                </p>
                <p className="reveal-up font-body mb-12" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95, color: 'var(--off-white)' }}>
                  If your answer is yes, submit your declaration below. Applications are
                  reviewed by the Council of Forgers within 72 hours. Investor inquiries
                  follow the same form — indicate your intent in the message field.
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    'No algorithm decides your progress',
                    'No leaderboard. No gamification.',
                    'Your record is permanent and public',
                    'What you build here cannot be taken',
                  ].map((item) => (
                    <div key={item} className="flex gap-4 items-center">
                      <div className="w-4 h-px flex-shrink-0" style={{ background: 'var(--ember)' }} />
                      <span className="font-display uppercase" style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: 'var(--off-white)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-scale">
                <ApplyForm />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════ */}
        <footer className="py-20" style={{ background: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
              <div className="max-w-sm">
                <div className="font-display font-black mb-5 gold-text" style={{ fontSize: '1.2rem', letterSpacing: '0.25em' }}>
                  VEXVOR
                </div>
                <p className="font-body mb-4" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--off-white)' }}>
                  The Civilizational Forge. The world&rsquo;s first character economy —
                  where virtue generates verifiable value and character is the primary asset class.
                </p>
                <p className="font-body mb-8" style={{ fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--steel)' }}>
                  Vex (vexare — to challenge, to awaken) +<br />Vor (vorare — to devour, to transform).<br />
                  To awaken by devouring the void.
                </p>
                <div className="font-display uppercase" style={{ fontSize: '0.5rem', letterSpacing: '0.38em', color: 'var(--bronze)' }}>
                  Being Before Having
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10">
                {[
                  { title: 'The Forge',   links: ['What is VexVor', 'The Economy', 'Governance', 'Roadmap', 'Ordeals'] },
                  { title: 'Participate', links: ['Apply as Redeemer', 'Investor Inquiry', 'Dashboard', 'Forge Groups'] },
                  { title: 'Legal',       links: ['Privacy Policy', 'Terms of Entry', 'Cookie Policy', 'Swiss Stiftung'] },
                ].map((col) => (
                  <div key={col.title}>
                    <div className="font-display uppercase mb-6" style={{ fontSize: '0.52rem', letterSpacing: '0.35em', color: 'var(--bronze)' }}>
                      {col.title}
                    </div>
                    <ul className="flex flex-col gap-3">
                      {col.links.map((l) => (
                        <li key={l}>
                          <a href="#" className="font-body transition-colors duration-200"
                            style={{ fontSize: '0.86rem', fontWeight: 300, color: 'var(--steel)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--steel)')}>
                            {l}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="font-body" style={{ fontSize: '0.78rem', color: 'var(--steel)', fontWeight: 300 }}>
                © {new Date().getFullYear()} VexVor. All rights reserved. Swiss Stiftung structure in registration.
              </p>
              <p className="font-display uppercase" style={{ fontSize: '0.5rem', letterSpacing: '0.3em', color: 'rgba(122,96,64,0.4)' }}>
                Being Before Having
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
