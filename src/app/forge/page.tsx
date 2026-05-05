import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Forge',
  description: 'Today Path, Pods to Teams, Service Rail with escrow, signed receipts, and the appeals process. The product mechanics of VexVor.',
  alternates: { canonical: 'https://www.vexvor.com/forge' },
}

export default function ForgePage() {
  return (
    <>
      <Nav />
      <main id="main">

        {/* Hero */}
        <section className="pt-40 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">The Forge — Product Mechanics</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '20ch' }}>
              We help people keep small promises.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              VexVor does not sell hustle or spectacle. A single 20-minute win beats
              a thousand aspirations. Proof does not require photos: time logs,
              text attestations, and peer checks are first-class. Reputation is
              earned through receipts, not performance.
            </p>
          </div>
        </section>

        {/* Today Path */}
        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="section-num">01 — The Today Path</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                The daily loop.
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-px" style={{ background: 'var(--ash-line)' }}>
              {[
                { n: '01', t: 'Choose', b: 'A 20-minute challenge calibrated to your reliability band.' },
                { n: '02', t: 'Start', b: 'Attempt opens with a due window in your local zone.' },
                { n: '03', t: 'Submit', b: 'Time log + text + optional peer check. No photos required.' },
                { n: '04', t: 'Receipt', b: 'A canonical, ed25519-signed Score Receipt is minted.' },
                { n: '05', t: 'Pod', b: 'Suggestions for repair, restitution, or the next attempt.' },
              ].map((s) => (
                <div key={s.n} className="phase-cell" style={{ padding: '1.6rem 1.4rem' }}>
                  <div className="font-mono mb-3" style={{ color: 'var(--ash-deep)', fontSize: '0.9rem' }}>{s.n}</div>
                  <h3 className="h-display mb-2" style={{ fontSize: '1.2rem', color: 'var(--field-white)' }}>{s.t}</h3>
                  <p style={{ color: 'var(--ash-soft)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.b}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 disclosure-block" style={{ maxWidth: '64ch' }}>
              <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>Restitution is built in.</strong>{' '}
              A miss can be repaired via a small action chosen upfront. Restitution
              widens your INT factor (+0.03 typical). Misses invite repair, not
              ridicule. This is engineered, not optional.
            </div>
          </div>
        </section>

        {/* Pods to Teams */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <span className="section-num">02 — Pods → Teams</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                  Small groups. Real charters.
                </h2>
                <p className="mt-6" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.85 }}>
                  Pods are small groups bound by a shared <em>why</em>. Rituals are
                  light: check-ins, repair after misses, no shaming. After 2–3 scoped
                  wins, a Pod can promote into a Team — a charter with explicit scope,
                  norms, and a Team Reliability Score (TRS).
                </p>
              </div>

              <div className="lg:col-span-7 space-y-px" style={{ background: 'var(--ash-line)' }}>
                {[
                  { t: 'Member', b: 'A Redeemer in a Pod. Equal voice. No idol.' },
                  { t: 'Scribe', b: 'Records intent, decisions, and dissent. Rotating role.' },
                  { t: 'Lead', b: 'Coordinates rhythms and acceptance. Earned, not granted.' },
                  { t: 'Steward', b: 'Staff or trained partner. Mediates with objective examples. SLA: first response ≤ 48h.' },
                ].map((r) => (
                  <div key={r.t} className="phase-cell" style={{ padding: '1.5rem 1.75rem' }}>
                    <h3 className="h-display" style={{ fontSize: '1.15rem', color: 'var(--field-white)', display: 'inline-block' }}>{r.t}</h3>
                    <span className="ml-3" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem' }}>{r.b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Rail */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="section-num">03 — Service Rail</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)', maxWidth: '24ch' }}>
                Contracts. Escrow. Disputes.
              </h2>
              <p className="mt-6" style={{ color: 'var(--ash-soft)', maxWidth: '60ch', lineHeight: 1.75 }}>
                Real economic activity flows through a structured Service Rail —
                clients meet teams under explicit acceptance criteria, funds are
                held in escrow, and disputes are mediated.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--ash-line)' }}>
              {[
                { t: 'Contracts', b: 'Client ↔ team SoW with explicit, public acceptance criteria. Six SoW templates: web/a11y, copy, translation, data, tutoring, A11y remediation.' },
                { t: 'Escrow', b: 'Funds reserved at contract start. Released on acceptance or decision. Recorded as a signed Value Receipt.' },
                { t: 'Disputes', b: 'Open from any milestone. Steward mediates with objective examples. SLA first response ≤ 48h. Randomized juror panel if escalated.' },
              ].map((s) => (
                <div key={s.t} className="phase-cell">
                  <h3 className="h-display mb-3" style={{ fontSize: '1.4rem', color: 'var(--field-white)' }}>{s.t}</h3>
                  <p style={{ color: 'var(--ash-soft)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Score Receipt anatomy */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <span className="section-num">04 — Score Receipt Anatomy</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                  Every meaningful action emits a signed receipt.
                </h2>
                <p className="mt-6" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
                  Canonical JSON. Sorted keys. ISO 8601 timestamps. Signed with
                  ed25519. Key rotation yearly with a 14-day overlap. Cached
                  privately for 5 minutes. Appealable within 72 hours.
                </p>
                <p className="mt-4" style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  This is not theatre. The schema is published in the Master
                  Blueprint. The signing keys are documented. The verification path
                  is open.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="receipt-card">
                  <div className="text-xs mb-4" style={{ color: 'var(--ash-soft)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    score_receipt.v1 · sample
                  </div>
                  <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
{`{
  `}<span className="key">"schema"</span>{`: `}<span className="value-string">"score_receipt.v1"</span>{`,
  `}<span className="key">"receipt_id"</span>{`:    `}<span className="value-string">"rcpt_8c7f3a91..."</span>{`,
  `}<span className="key">"attempt_id"</span>{`:    `}<span className="value-string">"att_2025q4_0042"</span>{`,
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
  `}<span className="key">"scorer_version"</span>{`:  `}<span className="value-string">"v1.0.4"</span>{`,
  `}<span className="key">"issued_at"</span>{`:        `}<span className="value-string">"2026-05-05T12:34:56Z"</span>{`,
  `}<span className="key">"appeal_window_h"</span>{`:  `}<span className="value-number">72</span>{`,
  `}<span className="key">"signatures"</span>{`: [{
    `}<span className="key">"kid"</span>{`: `}<span className="value-string">"vex_2026_q2"</span>{`,
    `}<span className="key">"alg"</span>{`: `}<span className="value-string">"ed25519"</span>{`,
    `}<span className="key">"sig"</span>{`: `}<span className="value-string">"7f3a91e2c..."</span>{`
  }]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appeals + Kill-Switch */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ash-line)' }}>
              <div className="phase-cell">
                <span className="section-num">Appeals</span>
                <h3 className="h-display mb-4" style={{ fontSize: '1.6rem', color: 'var(--field-white)' }}>
                  Anonymous jurors · ≤ 72h SLA
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--ash-soft)' }}>
                  <li>· Any scored attempt is appealable within the visible window</li>
                  <li>· Randomized juror panel; identities hidden</li>
                  <li>· Steward coordinates; decision ≤ 72h target</li>
                  <li>· Decision template: ≤ 120 words rationale, policy refs, factors changed (if any), dissent note</li>
                  <li>· Dissent is captured and logged</li>
                </ul>
              </div>

              <div className="phase-cell">
                <span className="section-num">Kill-Switch</span>
                <h3 className="h-display mb-4" style={{ fontSize: '1.6rem', color: 'var(--field-white)' }}>
                  Read-Only Mode · documented
                </h3>
                <p className="mb-4" style={{ color: 'var(--ash-soft)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  Triggers: Sev1/Sev2 security or safety spike, PSP outage with risk to
                  funds, scoring error affecting receipts.
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--ash-soft)' }}>
                  <li>✓ Login, view/download receipts, exports, withdrawals/refunds remain available</li>
                  <li>✗ New attempts, proof uploads, contract mutations halt</li>
                  <li>· First update ≤ 60 minutes; hourly until mitigated</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container text-center">
            <p className="mb-8 mx-auto" style={{ color: 'var(--field-dim)', fontSize: '1rem', maxWidth: '54ch' }}>
              Mechanics serve the principle. The principle serves the people.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/genesis" className="btn-primary">Genesis Roadmap</Link>
              <Link href="/transparency" className="btn-outline">Transparency Endpoints</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
