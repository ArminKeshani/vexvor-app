import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="main">

        {/* ══════════════════════════════════════════════════════════
            HERO — A Standard Against the Vortex
            ══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex items-center pt-32 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="noise-overlay" />

          <div className="hero-content section-container w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              {/* Left: statement */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-8">
                  <div className="aethel-rule" />
                  <span className="h-eyebrow">Stiftung in formation · Switzerland</span>
                </div>

                <h1
                  className="h-display mb-8"
                  style={{
                    fontSize: 'clamp(2.6rem, 6vw, 5.4rem)',
                    color: 'var(--field-white)',
                    fontWeight: 500,
                  }}
                >
                  A standard against the&nbsp;
                  <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Vortex.</em>
                </h1>

                <p
                  className="mb-6"
                  style={{
                    fontSize: '1.12rem',
                    lineHeight: 1.75,
                    color: 'var(--field-dim)',
                    maxWidth: '54ch',
                    fontWeight: 300,
                  }}
                >
                  In a system that profits from your distraction, we are building one
                  that profits from your <em>becoming</em>.
                </p>

                <p
                  className="mb-12"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: 'var(--ash-grey)',
                    maxWidth: '54ch',
                  }}
                >
                  VexVor is a sovereign civilization project — a structured, voluntary
                  community where verifiable character generates economic value through
                  a protocol called <Link href="/economy" className="glossary-pin" style={{ color: 'var(--field-white)' }}>Proof-of-Prestance</Link>.
                  We do not sell hustle or spectacle. We help people keep small promises
                  and turn them into real, inspectable outcomes.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/codex" className="btn-primary">
                    Open the Codex
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/apply" className="btn-outline">
                    Apply for Phase I
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: 'var(--ash-grey)' }}>
                  <span>Phase I open · 1,000 Founding Members</span>
                  <span style={{ color: 'var(--ash-deep)' }}>·</span>
                  <span>Policy: hash_policy_v6</span>
                  <span style={{ color: 'var(--ash-deep)' }}>·</span>
                  <span>WCAG 2.2 AA</span>
                </div>
              </div>

              {/* Right: receipt-style proof card */}
              <div className="lg:col-span-5">
                <div className="receipt-card">
                  <div className="text-xs mb-3" style={{ color: 'var(--ash-soft)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    Score Receipt · v1
                  </div>
                  <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
{`{
  `}<span className="key">"schema"</span>{`: `}<span className="value-string">"score_receipt.v1"</span>{`,
  `}<span className="key">"receipt_id"</span>{`: `}<span className="value-string">"rcpt_8c7f3a..."</span>{`,
  `}<span className="key">"factors"</span>{`: {
    `}<span className="key">"BASE"</span>{`: `}<span className="value-number">1.00</span>{`,
    `}<span className="key">"DIF"</span>{`:  `}<span className="value-number">1.20</span>{`,
    `}<span className="key">"TIM"</span>{`:  `}<span className="value-number">1.00</span>{`,
    `}<span className="key">"QLTY"</span>{`: `}<span className="value-number">1.05</span>{`,
    `}<span className="key">"INT"</span>{`:  `}<span className="value-number">1.00</span>{`,
    `}<span className="key">"SAF"</span>{`:  `}<span className="value-number">1</span>{`,
    `}<span className="key">"A"</span>{`:    `}<span className="ember-mark">1.26</span>{`
  },
  `}<span className="key">"policy_checksum"</span>{`: `}<span className="value-string">"hash_policy_v6"</span>{`,
  `}<span className="key">"signatures"</span>{`: [{
    `}<span className="key">"kid"</span>{`: `}<span className="value-string">"vex_2025_q3"</span>{`,
    `}<span className="key">"alg"</span>{`: `}<span className="value-string">"ed25519"</span>{`
  }]
}`}
                  </pre>
                  <div
                    className="mt-4 pt-4"
                    style={{
                      borderTop: '1px solid var(--ash-mute)',
                      fontSize: '0.7rem',
                      color: 'var(--ash-grey)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Every meaningful action emits a signed, canonical receipt.<br />
                    Reputation is earned through receipts, not performance.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
            <span style={{ fontSize: '0.5rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--ash-grey)' }}>
              Scroll
            </span>
            <div className="w-px h-10 overflow-hidden" style={{ background: 'var(--ash-mute)' }}>
              <div className="w-full h-full animate-scroll-line" style={{ background: 'var(--field-white)' }} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            01 — THE HONEST CONVERSATION
            ══════════════════════════════════════════════════════════ */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="section-num">01 — The Diagnosis</span>
                <h2
                  className="h-display"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}
                >
                  Let&rsquo;s be honest with each other for a moment.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-6" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--field-dim)', maxWidth: '64ch' }}>
                  <p>
                    Do you feel it too? That a certain kind of magic has faded from
                    the world. A depth, a substance, that we can&rsquo;t quite name but
                    deeply miss.
                  </p>
                  <p>
                    Everything has become a performance. We scroll through polished
                    lives, we present curated versions of ourselves, and we work for
                    metrics that feel hollow. Quietly, something essential began to
                    fray.
                  </p>
                  <p style={{ color: 'var(--ash-soft)', fontStyle: 'italic' }}>
                    Why did trust become so expensive? Why does a real conversation
                    feel rare? Why do we stand next to each other and yet feel miles
                    apart?
                  </p>
                  <p>
                    This isn&rsquo;t a personal failure. We didn&rsquo;t &ldquo;get lost.&rdquo;
                    We woke up inside a system that profits from our distraction
                    and rewards performance over substance.
                  </p>
                  <p style={{ color: 'var(--field-white)' }}>
                    VexVor is a deliberate, engineered alternative. Not a utopia. Not
                    a movement. A <em>civilization-scale experiment</em> with an honest
                    hypothesis: <strong>what if the most authentic version of you
                    was also the most economically valuable?</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            02 — THE THREE PILLARS (Trident of Ascent)
            ══════════════════════════════════════════════════════════ */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="text-center mb-20">
              <span className="section-num">02 — The Trident of Ascent</span>
              <h2
                className="h-display mx-auto"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)', maxWidth: '24ch' }}
              >
                Three pillars hold the structure together.
              </h2>
              <p className="mt-6 mx-auto" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', maxWidth: '52ch' }}>
                The VexVor sigil — Σ, the Trident — encodes three triads. Together
                they form one coherent answer to the Sovereign Void.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--ash-line)' }}>
              {[
                {
                  num: 'I',
                  title: 'Vision',
                  body:
                    'A 100-year horizon. Phase I is for 1,000. Phase IV is a global civilization with governance handed to its citizens. We are not building a quarterly product.',
                },
                {
                  num: 'II',
                  title: 'Virtue',
                  body:
                    'Three foundational virtues — Truth, Courage, Sovereignty — codified into thirteen principles, enforced by a Codex that can be questioned and amended.',
                },
                {
                  num: 'III',
                  title: 'Value',
                  body:
                    'Two assets, one firewall. VMU records what you have become (soulbound, unbuyable). GPC settles what you have built. Money never crosses into merit.',
                },
              ].map((p) => (
                <div key={p.num} className="phase-cell">
                  <div
                    className="font-display mb-4"
                    style={{ fontSize: '3rem', color: 'var(--ash-deep)', lineHeight: 1 }}
                  >
                    {p.num}
                  </div>
                  <h3
                    className="h-display mb-4"
                    style={{ fontSize: '1.6rem', color: 'var(--field-white)' }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/codex"
                className="inline-flex items-center gap-2 group"
                style={{
                  color: 'var(--field-white)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--ash-line)',
                  paddingBottom: '0.4rem',
                }}
              >
                Read the Codex
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            03 — PROOF OF PRESTANCE (the engine)
            ══════════════════════════════════════════════════════════ */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="section-num">03 — The Engine</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                  Action is the only oracle.
                </h2>
                <p className="mt-8" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
                  Bitcoin runs on Proof-of-Work — burning electricity. Ethereum runs
                  on Proof-of-Stake — staking capital. Both reward what you
                  <em> have</em>.
                </p>
                <p className="mt-4" style={{ color: 'var(--field-white)', fontSize: '1rem', lineHeight: 1.8 }}>
                  VexVor runs on Proof-of-Prestance — verified character under
                  pressure. It rewards what you have <em>become</em>.
                </p>
                <Link
                  href="/economy"
                  className="inline-block mt-8"
                  style={{
                    color: 'var(--field-white)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid var(--ash-line)',
                    paddingBottom: '0.3rem',
                  }}
                >
                  See the Prestance Economy →
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div className="aethel-card">
                  <div className="h-eyebrow mb-5">Scoring formula</div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                      color: 'var(--field-white)',
                      lineHeight: 1.8,
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid var(--ash-mute)',
                    }}
                  >
                    A = BASE · DIF · TIM · QLTY · INT · SAF
                  </div>
                  <ul className="mt-5 space-y-3" style={{ fontSize: '0.88rem', color: 'var(--ash-soft)' }}>
                    <li><strong style={{ color: 'var(--field-white)' }}>BASE</strong> — the underlying contribution unit</li>
                    <li><strong style={{ color: 'var(--field-white)' }}>DIF</strong> (0.8–1.6) — calibrated difficulty</li>
                    <li><strong style={{ color: 'var(--field-white)' }}>TIM</strong> (0.2–1.05) — on-time delivery; restitution recovers some lateness</li>
                    <li><strong style={{ color: 'var(--field-white)' }}>QLTY</strong> (0.85–1.15) — diversity & consistency of proof signals</li>
                    <li><strong style={{ color: 'var(--field-white)' }}>INT</strong> (0.7–1.1) — integrity & stability over time</li>
                    <li><strong style={{ color: 'var(--field-white)' }}>SAF</strong> (binary 0 / 1) — safety & policy compliance gate</li>
                  </ul>
                  <div
                    className="mt-6 pt-5 text-sm"
                    style={{
                      borderTop: '1px solid var(--ash-mute)',
                      color: 'var(--ash-grey)',
                      fontSize: '0.82rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Typical A range: 0.7 – 1.6. Every score emits an ed25519-signed
                    receipt. Every receipt is appealable within a 72-hour window
                    by anonymous jurors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            04 — GENESIS PHASING (4-phase plan)
            ══════════════════════════════════════════════════════════ */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="mb-16">
              <span className="section-num">04 — Genesis Phasing</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)', maxWidth: '24ch' }}>
                You do not ignite a star all at once.
              </h2>
              <p className="mt-6" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', maxWidth: '52ch' }}>
                A controlled burn across four sequenced phases. Each phase has gate
                metrics that must be met before the next begins.
              </p>
            </div>

            <div className="phase-quadrant">
              {[
                {
                  num: 'I',
                  title: 'Ignition',
                  subtitle: 'The First Crucible',
                  members: '1,000 Founding Members',
                  scope: 'Private invitation-only MVP',
                  gates: 'Retention >80% · Zero critical incident',
                  active: true,
                },
                {
                  num: 'II',
                  title: 'Expansion',
                  subtitle: 'The Forging',
                  members: '10,000 Architects',
                  scope: 'Closed beta · Twin-Chamber DAO live',
                  gates: 'Stable GPC velocity · Fraud <1%',
                },
                {
                  num: 'III',
                  title: 'Adoption',
                  subtitle: 'The Gathering',
                  members: '100,000+ Citizens',
                  scope: 'Open beta · First Patron Challenges',
                  gates: 'FII >80 · 3 physical Embassies',
                },
                {
                  num: 'IV',
                  title: 'Legacy',
                  subtitle: 'Genesis',
                  members: 'Global civilization',
                  scope: 'Full public · Governance handed to DAO · Open-source',
                  gates: 'Self-sustaining · Long-term FII stability',
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="phase-cell"
                  style={p.active ? { borderLeft: '2px solid var(--forge-red)' } : {}}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="font-display" style={{ fontSize: '2.4rem', color: 'var(--ash-deep)' }}>
                      Phase {p.num}
                    </div>
                    {p.active && (
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.32em',
                          textTransform: 'uppercase',
                          color: 'var(--forge-red)',
                          padding: '0.3rem 0.6rem',
                          border: '1px solid var(--forge-red)',
                        }}
                      >
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="h-display" style={{ fontSize: '1.8rem', color: 'var(--field-white)' }}>
                    {p.title}
                  </h3>
                  <p className="mt-1 mb-5" style={{ color: 'var(--ash-soft)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                    {p.subtitle}
                  </p>
                  <dl className="space-y-3 text-sm" style={{ color: 'var(--ash-soft)' }}>
                    <div>
                      <dt className="h-eyebrow" style={{ fontSize: '0.58rem' }}>Members</dt>
                      <dd style={{ color: 'var(--field-white)', marginTop: '0.25rem' }}>{p.members}</dd>
                    </div>
                    <div>
                      <dt className="h-eyebrow" style={{ fontSize: '0.58rem' }}>Scope</dt>
                      <dd style={{ marginTop: '0.25rem' }}>{p.scope}</dd>
                    </div>
                    <div>
                      <dt className="h-eyebrow" style={{ fontSize: '0.58rem' }}>Gate Metrics</dt>
                      <dd style={{ marginTop: '0.25rem' }}>{p.gates}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/genesis"
                className="inline-flex items-center gap-2"
                style={{
                  color: 'var(--field-white)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--ash-line)',
                  paddingBottom: '0.3rem',
                }}
              >
                Full Genesis Roadmap
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            05 — ENGINEERING DEPTH
            ══════════════════════════════════════════════════════════ */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <span className="section-num">05 — Engineering</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                  The blueprint is not a manifesto.
                </h2>
                <p className="mt-6" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.85 }}>
                  Master Blueprint v1.0 is 51 sections across 13 parts —
                  philosophy, governance, signed receipts, threat models,
                  reserves policy, accessibility, multi-jurisdiction compliance.
                </p>
                <p className="mt-4" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                  Every meaningful action emits a canonical, ed25519-signed receipt.
                  Every receipt is appealable. Every policy version has a public
                  checksum.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-px" style={{ background: 'var(--ash-line)' }}>
                {[
                  { k: 'Master Blueprint', v: '51 sections' },
                  { k: 'SQL DDL tables', v: '18' },
                  { k: 'Policy checksum', v: 'hash_policy_v6' },
                  { k: 'Receipt signing', v: 'ed25519' },
                  { k: 'Accessibility gate', v: 'WCAG 2.2 AA' },
                  { k: 'Privacy', v: 'GDPR · CCPA · CNIL' },
                  { k: 'SLO (write p95)', v: '< 600ms' },
                  { k: 'DR (RPO / RTO)', v: '15m / 2h' },
                  { k: 'Reserves target', v: '≥ 180 days' },
                  { k: 'Bug bounty (Critical)', v: '€5,000+' },
                ].map((row) => (
                  <div
                    key={row.k}
                    style={{ background: 'var(--void-black)', padding: '1.4rem 1.5rem' }}
                  >
                    <div className="h-eyebrow mb-2" style={{ fontSize: '0.55rem' }}>{row.k}</div>
                    <div style={{ color: 'var(--field-white)', fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>
                      {row.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            06 — ANTI-CULT DISCLOSURE
            ══════════════════════════════════════════════════════════ */}
        <section className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="section-num">06 — Anti-Cult Safeguards</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                  Skepticism is a feature.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-6" style={{ fontSize: '0.98rem', lineHeight: 1.85, color: 'var(--field-dim)' }}>
                  <div className="disclosure-block">
                    <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>No messianic language.</strong>{' '}
                    We are not the world&rsquo;s first anything. Other people have tried
                    civilization-scale design before. Our claim is rigor, not
                    revelation.
                  </div>
                  <div className="disclosure-block">
                    <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>Critic-in-Residence.</strong>{' '}
                    Beginning Phase II we will fund a publicly named critic whose
                    job is to find what is wrong with VexVor and publish it. Their
                    salary is a budget line, not a favor.
                  </div>
                  <div className="disclosure-block">
                    <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>No idol culture.</strong>{' '}
                    We amplify teams and outcomes, not personalities. There is no
                    founder photo in this site. There will be one only when it
                    becomes operationally necessary.
                  </div>
                  <div className="disclosure-block">
                    <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>Kill-Switch.</strong>{' '}
                    The system has a documented Read-Only Mode (Sev1/Sev2 trigger).
                    Login, receipts, exports, and refunds remain available. New
                    activity halts. Status updates ship within 60 minutes.
                  </div>
                  <div className="disclosure-block">
                    <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>Honest about uncertainty.</strong>{' '}
                    Phase I aims for 1,000 Founding Members. We do not know if it
                    scales. We have built kill-switches and an open Codex precisely
                    because we expect to be wrong, sometimes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            07 — INVITATION (CTA)
            ══════════════════════════════════════════════════════════ */}
        <section className="py-32" style={{ background: 'var(--void-deep)', borderTop: '1px solid var(--ash-line)' }}>
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <span className="section-num">07 — Invitation</span>
              <h2
                className="h-display mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--field-white)' }}
              >
                If any of this resonates, the door is small and open.
              </h2>
              <p className="mb-12 mx-auto" style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '54ch' }}>
                Phase I admits 1,000 Founding Members. Application is direct,
                short, and honest. There is no waitlist marketing here — only a
                form, a Vow, and the first Ordeal you propose for yourself.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/apply" className="btn-forge">
                  Apply for Phase I
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/faq" className="btn-outline">
                  Read the FAQ first
                </Link>
              </div>
              <div className="mt-10 text-sm" style={{ color: 'var(--ash-grey)' }}>
                You can also <Link href="/transparency" style={{ color: 'var(--field-white)', borderBottom: '1px solid var(--ash-line)' }}>read the transparency endpoints</Link>{' '}
                or <Link href="/codex" style={{ color: 'var(--field-white)', borderBottom: '1px solid var(--ash-line)' }}>study the Codex</Link>.
              </div>
            </div>
          </div>
        </section>

        {/* ── Anti-cult ticker ── */}
        <div
          className="py-3 overflow-hidden"
          style={{
            borderTop: '1px solid var(--ash-mute)',
            borderBottom: '1px solid var(--ash-mute)',
            background: 'var(--void-black)',
          }}
        >
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ['Being Before Having', '·', 'Action is the only oracle', '·', 'Repair over shame', '·', 'Evidence over hype', '·', 'Plain language', '·', 'Transparency beats spin', '·'].map((t, j) => (
                <span
                  key={`${i}-${j}`}
                  className="font-body uppercase whitespace-nowrap"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.32em', color: t === '·' ? 'var(--ash-deep)' : 'var(--ash-soft)' }}
                >
                  {t}
                </span>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
