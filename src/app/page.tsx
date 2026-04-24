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

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <SpiralAnimation seed={1234} starCount={4500} mouseInfluence={0.7} />

          {/* Radial vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 90% 55% at 50% 45%, transparent 10%, rgba(10,10,12,0.6) 100%)',
                'linear-gradient(to bottom, rgba(10,10,12,0.25) 0%, transparent 25%, transparent 55%, rgba(10,10,12,0.92) 100%)',
              ].join(', '),
            }}
          />

          {/* Hero content — GSAP fades this on scroll exit via .hero-content */}
          <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto">

            {/* Overline */}
            <div className="flex items-center justify-center gap-5 mb-14">
              <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(154,120,64,0.4))' }} />
              <p
                className="font-display uppercase"
                style={{ fontSize: '0.55rem', letterSpacing: '0.48em', color: 'rgba(154,120,64,0.65)' }}
              >
                Being Before Having
              </p>
              <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(154,120,64,0.4))' }} />
            </div>

            {/* Primary headline */}
            <div className="mb-6 overflow-hidden">
              <h1
                className="font-display font-black leading-none"
                style={{
                  fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="gold-text gold-glow block">THE</span>
                <span style={{ color: 'var(--bone)' }} className="block">CIVILIZATIONAL</span>
                <span className="gold-text gold-glow block">FORGE</span>
              </h1>
            </div>

            {/* Rule */}
            <div className="gold-divider my-10 mx-auto" />

            {/* Manifesto */}
            <p
              className="font-body max-w-2xl mx-auto leading-loose mb-14"
              style={{
                fontSize: 'clamp(0.9rem, 1.7vw, 1.1rem)',
                fontWeight: 300,
                letterSpacing: '0.02em',
                color: 'var(--bone-dim)',
              }}
            >
              VexVor is not an app. Not a platform. Not a network.
              <br />
              It is the world&apos;s first sovereign ecosystem where{' '}
              <em style={{ color: 'var(--bone)', fontStyle: 'normal', fontWeight: 500 }}>
                character is the primary asset class
              </em>
              {' '}— and proof of virtue is the engine of value.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#apply" className="btn-primary">
                Request Entry
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#doctrine" className="btn-outline">
                Discover the Forge
              </a>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span
              className="font-display uppercase"
              style={{ fontSize: '0.5rem', letterSpacing: '0.4em', color: 'var(--steel)' }}
            >
              Scroll
            </span>
            <div className="w-px h-12 overflow-hidden" style={{ background: 'rgba(154,120,64,0.1)' }}>
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
            borderTop: '1px solid rgba(154,120,64,0.08)',
            borderBottom: '1px solid rgba(154,120,64,0.08)',
            background: 'rgba(154,120,64,0.02)',
          }}
        >
          {/* Continuous horizontal marquee */}
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[
                "L'ÊTRE AVANT L'AVOIR",
                '·',
                'BEING BEFORE HAVING',
                '·',
                'THE CIVILIZATIONAL FORGE',
                '·',
                "L'ÊTRE AVANT L'AVOIR",
                '·',
                'BEING BEFORE HAVING',
                '·',
                'THE CIVILIZATIONAL FORGE',
                '·',
              ].map((text, i) => (
                <span
                  key={i}
                  className="font-display uppercase whitespace-nowrap"
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.32em',
                    color: text === '·' ? 'rgba(154,120,64,0.25)' : 'rgba(154,120,64,0.5)',
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
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
                { value: '3',   suffix: ' Phases', label: 'Civilizational Roadmap' },
                { value: '€1.8M', suffix: '', label: 'Year 1 Revenue Target' },
                { value: '42%', suffix: '', label: 'Projected IRR' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="text-center py-10 px-6"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(154,120,64,0.07)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(154,120,64,0.07)' : 'none',
                  }}
                >
                  <div
                    className="font-display font-black tracking-wide gold-text mb-2"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
                  >
                    {s.value}<span style={{ fontSize: '0.65em' }}>{s.suffix}</span>
                  </div>
                  <div
                    className="font-display uppercase"
                    style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: 'var(--steel)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            MANIFESTO STATEMENT (scrub text reveal)
        ══════════════════════════════════════════════ */}
        <section className="py-40 relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
          <div className="noise-overlay" />

          {/* Faint background number */}
          <div
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none"
            style={{
              fontSize: 'clamp(12rem, 28vw, 22rem)',
              lineHeight: 1,
              color: 'rgba(154,120,64,0.03)',
              letterSpacing: '-0.05em',
            }}
          >
            00
          </div>

          <div className="section-container max-w-4xl">
            <span className="section-num reveal-fade">Manifesto</span>
            <h2
              className="scrub-text vex-statement mb-16"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
            >
              The world built systems that reward output, compliance, and the accumulation of things.
            </h2>
            <h2
              className="scrub-text vex-statement mb-16"
              style={{
                fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)',
                color: 'var(--bone-dim)',
              }}
            >
              What they built was more productive —
            </h2>
            <h2
              className="scrub-text vex-statement"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
            >
              but far less <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>human.</em>
            </h2>

            <div className="gold-divider my-16" />

            <p
              className="scrub-up font-body leading-loose max-w-2xl"
              style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--bone-dim)', lineHeight: 2 }}
            >
              VexVor is the counterforce. A structured, sovereign ecosystem designed not to entertain,
              but to transform. Not to engage, but to forge. Every element — the economy, the governance,
              the social architecture — exists for one purpose: to produce people of genuine worth,
              in a world that has forgotten what worth truly means.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            01 — DOCTRINE
        ══════════════════════════════════════════════ */}
        <section id="doctrine" className="py-40 relative" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade">01 — The Doctrine</span>
              <h2
                className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em', maxWidth: '700px' }}
              >
                Not a Platform. <span style={{ color: 'var(--gold)' }}>A Forge.</span>
              </h2>
              <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
              <p
                className="reveal-up font-body text-bone-dim max-w-xl leading-loose"
                style={{ fontSize: '1.05rem', lineHeight: 1.95, fontWeight: 300 }}
              >
                Modern civilization produces two types of people: those who perform for systems,
                and those who comply with them. Both are shaped by incentives that have nothing
                to do with the development of genuine character. VexVor exists to end this.
                It is a Forge — a structured environment of voluntary ordeal, communal accountability,
                and permanent record. The product is not content. The product is the human being
                that emerges on the other side.
              </p>
            </div>

            {/* 3 doctrine cards */}
            <div className="grid md:grid-cols-3 gap-px stagger-cards" style={{ background: 'rgba(154,120,64,0.06)' }}>
              {[
                {
                  num: '01',
                  title: 'The Sovereign Void',
                  body: 'We are living through the first civilizational crisis of meaning. Attention-economy platforms extracted 2.5 billion hours per day from humanity — and gave back nothing lasting. The "Sovereign Void" is the identity collapse that results when a person\'s life is built on consumption rather than creation, on performance rather than character. VexVor is its antidote.',
                },
                {
                  num: '02',
                  title: 'The Forge Process',
                  body: 'Members called Redeemers complete structured Ordeals — voluntary challenges spanning the physical, intellectual, creative, ethical, and collective domains. Every Ordeal is defined in advance, witnessed by peers, verified by the protocol, and recorded permanently. There is no algorithm deciding what you see. There is only what you have done, and what you have yet to do.',
                },
                {
                  num: '03',
                  title: 'The Prestance Economy',
                  body: 'Completion mints VMU — Virtue Measurement Units. Soul-bound, non-transferable, and subject to 5% monthly decay. Character must be continuously earned; it cannot be merely held. This is not a reward system. It is a measurement system. The most Prestant individuals in the ecosystem are not the richest — they are the most actively becoming.',
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="card-3d-wrap"
                >
                  <div className="card-3d p-10 md:p-14 h-full" style={{ background: 'var(--obsidian)' }}>
                    <div
                      className="font-display font-black mb-8"
                      style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'rgba(154,120,64,0.4)' }}
                    >
                      {c.num}
                    </div>
                    <h3
                      className="font-display font-black text-bone mb-5"
                      style={{ fontSize: '0.95rem', letterSpacing: '0.07em' }}
                    >
                      {c.title}
                    </h3>
                    <p className="font-body text-bone-dim leading-loose" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85 }}>
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            02 — ORDEAL SYSTEM
        ══════════════════════════════════════════════ */}
        <section className="py-40 relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
          <div className="noise-overlay" />

          {/* Faint background number */}
          <div
            className="absolute left-[-1rem] top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none parallax-slow"
            data-depth="0.15"
            style={{
              fontSize: 'clamp(14rem, 30vw, 24rem)',
              lineHeight: 1,
              color: 'rgba(154,120,64,0.025)',
              letterSpacing: '-0.05em',
            }}
          >
            02
          </div>

          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-num scrub-right">02 — The Ordeal System</span>
                <h2
                  className="word-reveal font-display font-black text-bone mb-8"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                >
                  Fire is not a metaphor. <span style={{ color: 'var(--gold)' }}>It is the method.</span>
                </h2>
                <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
                <p
                  className="scrub-up font-body text-bone-dim leading-loose mb-8"
                  style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95 }}
                >
                  An Ordeal is a structured challenge with defined parameters, a witness protocol,
                  and a permanent on-chain record. They are not gamified. They are not optional
                  in the sense that character development is optional. Ordeals exist across five
                  domains because genuine human excellence is never one-dimensional.
                </p>
                <p
                  className="scrub-up font-body text-bone-dim leading-loose"
                  style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95 }}
                >
                  The Ordeal system is VexVor&apos;s core mechanism. It is what separates membership
                  from participation, presence from performance, a Redeemer from a user.
                  There are no shortcuts. The protocol sees everything.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { domain: 'Physical', desc: 'The body as the first instrument of will. Endurance, strength, and physical discipline as proof that you can override comfort.', icon: '◈' },
                  { domain: 'Intellectual', desc: 'Original thought, synthesis, and the courage to hold and defend ideas under examination. No regurgitation qualifies.', icon: '◈' },
                  { domain: 'Creative', desc: 'Production of original work — something that did not exist before you made it. Expression as a form of sovereignty.', icon: '◈' },
                  { domain: 'Ethical', desc: 'Choices made under pressure, sacrifice where it was costly, integrity verified by outcome rather than claimed by statement.', icon: '◈' },
                  { domain: 'Collective', desc: 'Contribution to a Forge — coordinated effort toward a shared challenge. Excellence in community, not merely in isolation.', icon: '◈' },
                ].map((d, i) => (
                  <div
                    key={d.domain}
                    className="flex gap-6 p-6 scrub-left"
                    style={{
                      background: 'var(--charcoal)',
                      borderLeft: '2px solid rgba(154,120,64,0.15)',
                      transitionDelay: `${i * 0.05}s`,
                    }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.6rem', marginTop: '3px', flexShrink: 0 }}>{d.icon}</span>
                    <div>
                      <div
                        className="font-display font-black mb-2"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--bone)', textTransform: 'uppercase' }}
                      >
                        {d.domain}
                      </div>
                      <p className="font-body text-bone-dim" style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.75 }}>
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            03 — ECONOMY
        ══════════════════════════════════════════════ */}
        <section id="economy" className="py-40" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade">03 — Prestance Economy</span>
              <h2
                className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em', maxWidth: '700px' }}
              >
                Character as <span style={{ color: 'var(--gold)' }}>Capital.</span>
              </h2>
              <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
              <p
                className="reveal-up font-body text-bone-dim max-w-xl leading-loose"
                style={{ fontSize: '1.05rem', lineHeight: 1.95, fontWeight: 300 }}
              >
                Every economic system encodes a value system. When capital is money, what you
                accumulate is what you are worth. When capital is Prestance — demonstrated,
                verified, decaying virtue — what you continuously become is what you are worth.
                VexVor is the first economic architecture built on this principle. Three instruments.
                One civilizational engine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-cards">
              {[
                {
                  token: 'VMU',
                  name: 'Virtue Measurement Unit',
                  accent: 'var(--gold)',
                  accentRgb: '154,120,64',
                  desc: 'The core measure of who you are in VexVor. Soul-bound and non-transferable — it cannot be bought, sold, or inherited. Minted exclusively by completing verified Ordeals. Decays at 5% per month without continued action. Your VMU balance is not your wealth. It is your proof of continuous becoming.',
                  props: ['Soul-bound', 'Non-transferable', '5% monthly decay', 'Ordeal-minted', 'On-chain permanent'],
                },
                {
                  token: 'GPC',
                  name: 'Growth Participation Certificate',
                  accent: 'var(--ember)',
                  accentRgb: '192,64,48',
                  desc: 'The monetary and settlement layer of the VexVor ecosystem. KYC-gated to prevent anonymous accumulation. Capped supply algorithmically tethered to ecosystem health metrics — it can only grow as the collective Prestance of the Redeemer base grows. Tradeable between verified members. Capital that serves character, not the reverse.',
                  props: ['KYC-gated', 'Capped supply', 'Ecosystem-tethered', 'Tradeable', 'Prestance-anchored'],
                },
                {
                  token: 'PoP',
                  name: 'Proof-of-Prestance',
                  accent: 'rgba(154,120,64,0.5)',
                  accentRgb: '154,120,64',
                  desc: 'The validation protocol underlying all VMU issuance. Value is generated by overcoming verifiable challenges — not computation (PoW) or capital staking (PoS). Prestance is the proof. Every Ordeal completion is witnessed by peers, cryptographically recorded, and immutably linked to the Redeemer who completed it. No one can take your Prestance. And no one can give it to you.',
                  props: ['Ordeal-verified', 'Peer-witnessed', 'On-chain recorded', 'Merit-weighted', 'Immutable record'],
                },
              ].map((t) => (
                <div
                  key={t.token}
                  className="flex flex-col gap-6 p-10 card-3d-wrap"
                  style={{
                    border: `1px solid rgba(${t.accentRgb},0.08)`,
                    borderTop: `2px solid ${t.accent}`,
                    background: 'var(--charcoal)',
                  }}
                >
                  <div className="card-3d flex flex-col gap-6 h-full">
                    <div
                      className="font-display font-black tracking-widest"
                      style={{ fontSize: '2.6rem', color: t.accent, lineHeight: 1 }}
                    >
                      {t.token}
                    </div>
                    <div>
                      <h3
                        className="font-display text-bone mb-4"
                        style={{ fontSize: '0.7rem', letterSpacing: '0.1em', fontWeight: 600 }}
                      >
                        {t.name}
                      </h3>
                      <p className="font-body text-bone-dim leading-loose" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85 }}>
                        {t.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {t.props.map((p) => (
                        <span
                          key={p}
                          className="font-display px-3 py-1"
                          style={{
                            fontSize: '0.52rem',
                            letterSpacing: '0.14em',
                            background: `rgba(${t.accentRgb},0.05)`,
                            border: `1px solid rgba(${t.accentRgb},0.15)`,
                            color: t.accent,
                            textTransform: 'uppercase',
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            04 — THE JOURNEY
        ══════════════════════════════════════════════ */}
        <section className="py-40 relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
          <div className="noise-overlay" />

          {/* Faint background number */}
          <div
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none parallax-slow"
            data-depth="0.12"
            style={{
              fontSize: 'clamp(14rem, 30vw, 24rem)',
              lineHeight: 1,
              color: 'rgba(154,120,64,0.025)',
              letterSpacing: '-0.05em',
            }}
          >
            04
          </div>

          <div className="section-container">
            <div className="mb-20">
              <span className="section-num reveal-fade">04 — The Path</span>
              <h2
                className="word-reveal font-display font-black text-bone mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em', maxWidth: '700px' }}
              >
                The Redeemer&apos;s <span style={{ color: 'var(--gold)' }}>Journey.</span>
              </h2>
              <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
              <p
                className="reveal-up font-body text-bone-dim max-w-xl"
                style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95 }}
              >
                Entry into VexVor is not a transaction. It is a declaration of intent,
                followed by a succession of choices. The path has five stages —
                each one harder than the last, each one building what comes next.
                There is no shortcut. There is no buyable rank. There is only the work.
              </p>
            </div>

            <div className="max-w-3xl">
              {[
                {
                  step: '01',
                  title: 'Application',
                  desc: 'Submit your declaration of intent. Demonstrate that you understand what you are entering — and what it will cost you. Applications are reviewed by the Council of Forgers within 72 hours. Entry is earned, never granted. The question is not whether you want to join. The question is whether you are willing to become what joining requires.',
                },
                {
                  step: '02',
                  title: 'Initiation',
                  desc: 'Complete your first Ordeal. This is not orientation — it is proof. Prove that your declaration was not performance. Your Prestance score begins here, and your permanent record is opened. What you complete now will still be on your record in twenty years. Make it worth being there.',
                },
                {
                  step: '03',
                  title: 'Integration',
                  desc: 'Join a Forge — your assigned community of Redeemers. You will take on collective Ordeals alongside people who are serious about the same transformation you are. Your growth compounds with theirs. The Forge holds you accountable in ways no algorithm can. It is a brotherhood and sisterhood of the genuinely committed.',
                },
                {
                  step: '04',
                  title: 'Ascension',
                  desc: 'Rise through the Ranks as your VMU balance and Ordeal record grow. Earn governance rights within the Council of Forgers. Your Prestance score becomes your reputation — fully transparent, fully verifiable, impossible to fake. At this stage, VexVor begins to shape the civilization around you, not merely yourself.',
                },
                {
                  step: '05',
                  title: 'Sovereignty',
                  desc: 'Become a Forger. Lead other Redeemers through their own fire. Design Ordeals. Shape the architecture of the ecosystem. The highest expression of Prestance is not personal excellence — it is the capacity to create conditions in which others can find theirs. This is what it means to be civilizational.',
                },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-10 mb-0 reveal-up">
                  <div className="flex flex-col items-center" style={{ minWidth: '60px' }}>
                    <div
                      className="font-display font-black flex items-center justify-center flex-shrink-0"
                      style={{
                        width: '48px', height: '48px',
                        border: '1px solid rgba(154,120,64,0.2)',
                        color: 'var(--gold)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {s.step}
                    </div>
                    {i < 4 && (
                      <div
                        className="w-px flex-1 my-2"
                        style={{ background: 'linear-gradient(to bottom, rgba(154,120,64,0.2), rgba(154,120,64,0.04))', minHeight: '40px' }}
                      />
                    )}
                  </div>
                  <div className="pb-14">
                    <h3
                      className="font-display font-black text-bone mb-4"
                      style={{ fontSize: '0.95rem', letterSpacing: '0.06em' }}
                    >
                      {s.title}
                    </h3>
                    <p className="font-body text-bone-dim leading-loose" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            INTERSTITIAL STATEMENT
        ══════════════════════════════════════════════ */}
        <section
          className="py-28 relative overflow-hidden"
          style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(154,120,64,0.06)', borderBottom: '1px solid rgba(154,120,64,0.06)' }}
        >
          <div className="section-container max-w-3xl text-center">
            <p
              className="scrub-text font-display font-black text-bone"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              &ldquo;Capital without Prestance holds zero governance power.
              The firewall between money and merit holds absolute.&rdquo;
            </p>
            <p
              className="reveal-fade font-display uppercase mt-8"
              style={{ fontSize: '0.55rem', letterSpacing: '0.35em', color: 'rgba(154,120,64,0.5)' }}
            >
              VexVor Constitutional Principle
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            05 — GOVERNANCE
        ══════════════════════════════════════════════ */}
        <section id="governance" className="py-40" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade">05 — The Architecture</span>
              <h2
                className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em', maxWidth: '700px' }}
              >
                Twin-Chamber <span style={{ color: 'var(--gold)' }}>Governance.</span>
              </h2>
              <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
              <p
                className="reveal-up font-body text-bone-dim max-w-xl leading-loose"
                style={{ fontSize: '1.05rem', lineHeight: 1.95, fontWeight: 300 }}
              >
                Every governance system encodes the answer to one question: who has the right
                to decide? In VexVor, the answer is unambiguous — those who have demonstrated
                Prestance. Not investors. Not early adopters. Not the largest wallets.
                The most actively becoming members hold the most weight.
                Capital may enter the ecosystem. It does not rule it.
              </p>
            </div>

            {/* Two chambers */}
            <div className="grid md:grid-cols-2 gap-px mb-px stagger-cards" style={{ background: 'rgba(154,120,64,0.05)' }}>
              {[
                {
                  chamber: 'Council of Forgers',
                  subtitle: 'Active Members',
                  accent: 'var(--gold)',
                  accentRgb: '154,120,64',
                  desc: 'The governing body of VexVor is composed entirely of active Redeemers with verified Prestance scores. Votes are weighted by VMU balance — not capital invested, not time in the ecosystem, not social influence. The engine of VexVor governance is merit and merit alone. Forgers shape Ordeal design, protocol upgrades, admission criteria, and the long-term civilizational direction of the ecosystem.',
                },
                {
                  chamber: 'Assembly of Patrons',
                  subtitle: 'Investors',
                  accent: 'var(--ember)',
                  accentRgb: '192,64,48',
                  desc: 'Investors who believe in the civilizational mission may participate as Patrons through the Assembly — a structured body with defined, bounded rights. Patrons may propose, audit, and observe. They may not govern. Every Patron enters under the Prestance Vow — a binding constitutional commitment that capital will never be used to subvert merit. The firewall between money and power is structural, not merely aspirational.',
                },
              ].map((c) => (
                <div
                  key={c.chamber}
                  className="p-12 md:p-16"
                  style={{ background: 'var(--charcoal)', borderTop: `2px solid ${c.accent}` }}
                >
                  <div
                    className="font-display uppercase mb-3"
                    style={{ fontSize: '0.56rem', letterSpacing: '0.35em', color: c.accent }}
                  >
                    {c.subtitle}
                  </div>
                  <h3
                    className="font-display font-black text-bone mb-6"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '0.03em' }}
                  >
                    {c.chamber}
                  </h3>
                  <p className="font-body text-bone-dim leading-loose" style={{ fontWeight: 300, lineHeight: 1.85 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Shield-Wall */}
            <div
              className="p-10 md:p-14 reveal-up"
              style={{
                background: 'var(--charcoal)',
                border: '1px solid rgba(154,120,64,0.06)',
                borderTop: 'none',
              }}
            >
              <div
                className="font-display font-black text-center mb-14"
                style={{ fontSize: '0.56rem', letterSpacing: '0.44em', color: 'rgba(154,120,64,0.45)', textTransform: 'uppercase' }}
              >
                Shield-Wall Protocol
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  {
                    name: 'Merit Firewall',
                    desc: 'The constitutional barrier that prevents capital from translating into governance power. Investors may have GPC. They do not vote in the Council of Forgers.',
                  },
                  {
                    name: 'Aegis Protocol',
                    desc: 'Emergency intervention mechanism activated by supermajority Forger vote. Shields the ecosystem from coordinated bad-faith attacks on its constitutional foundations.',
                  },
                  {
                    name: 'EMBER Protocol',
                    desc: 'Detects and processes bad-faith actors who attempt to game the Ordeal system or accumulate VMU through fraudulent verification. The forge eliminates dross — always.',
                  },
                  {
                    name: 'Atlas Query Mesh',
                    desc: 'The distributed verification network that processes and validates all Ordeal completion claims. Truth in VexVor is consensus, not authority — no single node can corrupt it.',
                  },
                ].map((s) => (
                  <div key={s.name}>
                    <div
                      className="font-display mb-4 pb-4"
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.2em',
                        color: 'var(--gold)',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(154,120,64,0.12)',
                      }}
                    >
                      {s.name}
                    </div>
                    <p className="font-body text-bone-dim text-sm leading-loose" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            06 — LEGAL STRUCTURE
        ══════════════════════════════════════════════ */}
        <section className="py-40 relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
          <div className="noise-overlay" />

          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-24 items-start">
              <div>
                <span className="section-num scrub-right">06 — Legal Architecture</span>
                <h2
                  className="word-reveal font-display font-black text-bone mb-8"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                >
                  Trinitarian Hybrid. <span style={{ color: 'var(--gold)' }}>By design.</span>
                </h2>
                <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
                <p
                  className="scrub-up font-body text-bone-dim leading-loose mb-8"
                  style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95 }}
                >
                  VexVor operates as a three-layer legal entity: a Swiss Stiftung (foundation)
                  for the civilizational mission, a GmbH for commercial operations, and a DAO
                  for on-chain governance. This structure was not designed for convenience —
                  it was designed for permanence.
                </p>
                <p
                  className="scrub-up font-body text-bone-dim leading-loose"
                  style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95 }}
                >
                  The Stiftung holds the mission irrevocably. No future investor, acquirer, or
                  regulator can change what VexVor fundamentally is — because the foundation
                  is designed to outlast all of them. The mission is constitutional, not optional.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    entity: 'Swiss Stiftung',
                    role: 'Foundation Layer',
                    desc: 'Holds the civilizational mission, the Prestance Protocol, and the constitutional documents of VexVor. Permanent and irrevocable. Cannot be sold, dissolved, or modified without supermajority Forger consensus. Governed by the Swiss Code of Obligations — among the strongest foundation law in the world.',
                  },
                  {
                    entity: 'GmbH',
                    role: 'Commercial Layer',
                    desc: 'Operates the commercial functions of VexVor — Foundry Dues, certification revenue, GPC issuance, and Patron investment contracts. Structured for regulatory compliance, tax efficiency, and the ability to operate at civilizational scale without legal exposure.',
                  },
                  {
                    entity: 'DAO',
                    role: 'Governance Layer',
                    desc: 'The on-chain governance structure through which Forgers exercise their VMU-weighted voting rights. Smart-contract-enforced rules ensure that no governance outcome can override the constitutional foundations held by the Stiftung.',
                  },
                ].map((e) => (
                  <div
                    key={e.entity}
                    className="p-8 scrub-left"
                    style={{ background: 'var(--charcoal)', borderLeft: '2px solid rgba(154,120,64,0.2)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div
                        className="font-display font-black text-bone"
                        style={{ fontSize: '0.9rem', letterSpacing: '0.06em' }}
                      >
                        {e.entity}
                      </div>
                      <div
                        className="font-display uppercase"
                        style={{ fontSize: '0.52rem', letterSpacing: '0.25em', color: 'rgba(154,120,64,0.55)' }}
                      >
                        {e.role}
                      </div>
                    </div>
                    <p className="font-body text-bone-dim" style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.8 }}>
                      {e.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            07 — ROADMAP
        ══════════════════════════════════════════════ */}
        <section id="roadmap" className="py-40 relative" style={{ background: 'var(--charcoal2)' }}>
          <div className="section-container">

            <div className="mb-20">
              <span className="section-num reveal-fade">07 — 100-Year Vision</span>
              <h2
                className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em', maxWidth: '700px' }}
              >
                Three Phases to <span style={{ color: 'var(--gold)' }}>Civilization.</span>
              </h2>
              <div className="gold-divider mb-10" style={{ marginLeft: 0, marginRight: 'auto' }} />
              <p
                className="reveal-up font-body text-bone-dim max-w-xl"
                style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.95 }}
              >
                VexVor is not a startup with a five-year exit strategy.
                It is a 100-year civilizational project with three distinct phases of emergence.
                Phase I builds the proof of concept and proves the model.
                Phase II scales the network and deploys the economy.
                Phase III achieves sovereign independence — a self-sustaining civilization
                that no external force can dismantle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 stagger-cards">
              {[
                {
                  phase: 'Phase I',
                  title: 'Ignition',
                  period: 'Months 0 – 12',
                  accent: 'var(--gold)',
                  accentRgb: '154,120,64',
                  narrative: 'Prove the model. Build the core Redeemer base. Demonstrate that the Prestance Economy creates real, verifiable human value.',
                  goals: [
                    '2,350 active Redeemers at break-even',
                    'Foundry Dues (€15/month) live',
                    'Break-even at Month 11',
                    'First Forge Councils formed',
                    'VMU protocol on-chain',
                    'First 50 Ordeal completions recorded',
                  ],
                },
                {
                  phase: 'Phase II',
                  title: 'Expansion',
                  period: 'Years 1 – 5',
                  accent: 'var(--ember)',
                  accentRgb: '192,64,48',
                  narrative: 'Scale the network. Deploy the full Prestance Economy. Establish VexVor as the global standard for character-based value creation.',
                  goals: [
                    'GPC token public issuance',
                    '50,000+ Redeemers across geographies',
                    'Cross-border Forge network active',
                    'Assembly of Patrons formally constituted',
                    '€1.8M ARR in Year 1',
                    'IRR trajectory at 42%+',
                  ],
                },
                {
                  phase: 'Phase III',
                  title: 'Sovereignty',
                  period: 'Years 5 – 100',
                  accent: 'rgba(239,239,235,0.25)',
                  accentRgb: '154,120,64',
                  narrative: 'Achieve full structural independence. Become a self-sustaining civilization with its own economy, governance, legal jurisdiction, and cultural gravity.',
                  goals: [
                    'Swiss Stiftung + GmbH + DAO fully operational',
                    'Prestance Economy recognized globally',
                    'Independent legal jurisdiction established',
                    'Self-sustaining without external capital',
                    '42% projected IRR delivered',
                    'The first post-attention civilization',
                  ],
                },
              ].map((p) => (
                <div
                  key={p.phase}
                  className="p-10 flex flex-col gap-8 card-3d-wrap"
                  style={{
                    border: `1px solid rgba(${p.accentRgb},0.07)`,
                    borderTop: `2px solid ${p.accent}`,
                    background: 'var(--charcoal)',
                  }}
                >
                  <div>
                    <div
                      className="font-display uppercase mb-2"
                      style={{ fontSize: '0.56rem', letterSpacing: '0.35em', color: p.accent }}
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
                      className="font-body mt-2 mb-5"
                      style={{ fontSize: '0.78rem', color: 'var(--steel)' }}
                    >
                      {p.period}
                    </div>
                    <p className="font-body text-bone-dim" style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.8 }}>
                      {p.narrative}
                    </p>
                  </div>
                  <div className="h-px w-full" style={{ background: 'rgba(154,120,64,0.08)' }} />
                  <ul className="flex flex-col gap-3">
                    {p.goals.map((g) => (
                      <li key={g} className="flex items-start gap-4">
                        <span style={{ color: p.accent, marginTop: '3px', fontSize: '7px', flexShrink: 0 }}>◆</span>
                        <span className="font-body text-bone-dim" style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>
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
        <section id="apply" className="py-40 relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
          <div className="noise-overlay" />

          {/* Faint background text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{ overflow: 'hidden' }}
          >
            <span
              className="font-display font-black"
              style={{
                fontSize: 'clamp(8rem, 20vw, 18rem)',
                color: 'rgba(154,120,64,0.02)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              ENTRY
            </span>
          </div>

          <div className="section-container max-w-3xl relative z-10">
            <div className="text-center mb-20">
              <span className="section-num reveal-fade">Entry Protocol</span>
              <h2
                className="word-reveal font-display font-black text-bone mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
              >
                Request <span style={{ color: 'var(--gold)' }}>Entry.</span>
              </h2>
              <div className="gold-divider my-10 mx-auto" />
              <p className="reveal-up font-body text-bone-dim max-w-xl mx-auto" style={{ fontWeight: 300, lineHeight: 1.95 }}>
                VexVor does not recruit. It selects. Admission is reviewed by the Council of Forgers.
                The question we are asking is not whether you want to be here.
                The question is whether you are ready to commit to becoming
                something the world no longer knows how to produce.
                If you are, submit your declaration below.
              </p>
            </div>
            <div className="reveal-scale">
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
            background: 'var(--charcoal2)',
            borderTop: '1px solid rgba(154,120,64,0.07)',
          }}
        >
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
              <div className="max-w-xs">
                <div
                  className="font-display font-black tracking-widest mb-5 gold-text"
                  style={{ fontSize: '1.3rem' }}
                >
                  VEXVOR
                </div>
                <p className="font-body text-bone-dim text-sm leading-loose mb-4" style={{ fontWeight: 300 }}>
                  The Civilizational Forge. Where character is the primary asset class
                  and proof of virtue is the engine of value.
                </p>
                <p className="font-body text-bone-dim text-sm leading-loose" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  Vex (vexare) + Vor (vorare) — to awaken by devouring the void.
                </p>
                <div
                  className="mt-8 font-display uppercase"
                  style={{ fontSize: '0.52rem', letterSpacing: '0.4em', color: 'rgba(154,120,64,0.35)' }}
                >
                  Being Before Having
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
                {[
                  { title: 'The Forge',   links: ['What is VexVor', 'The Economy', 'Governance', 'Roadmap'] },
                  { title: 'Redeemers',  links: ['Apply', 'Ordeals', 'Dashboard', 'Forge Groups'] },
                  { title: 'Legal',      links: ['Privacy Policy', 'Terms of Entry', 'Cookie Policy'] },
                ].map((col) => (
                  <div key={col.title}>
                    <div
                      className="font-display uppercase mb-6"
                      style={{ fontSize: '0.56rem', letterSpacing: '0.35em', color: 'rgba(154,120,64,0.5)' }}
                    >
                      {col.title}
                    </div>
                    <ul className="flex flex-col gap-3">
                      {col.links.map((l) => (
                        <li key={l}>
                          <a
                            href="#"
                            className="font-body text-sm transition-colors duration-300"
                            style={{ fontWeight: 300, color: 'var(--bone-dim)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--bone-dim)')}
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
              style={{ borderTop: '1px solid rgba(154,120,64,0.05)' }}
            >
              <p className="font-body text-xs" style={{ color: 'var(--steel)', fontWeight: 300 }}>
                © {new Date().getFullYear()} VexVor. All rights reserved.
              </p>
              <p
                className="font-display uppercase"
                style={{ fontSize: '0.52rem', letterSpacing: '0.32em', color: 'rgba(154,120,64,0.3)' }}
              >
                L&apos;être avant l&apos;avoir · Being Before Having
              </p>
            </div>
          </div>
        </footer>

      </div>{/* /mainRef */}
    </>
  )
}
