import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Transparency',
  description: 'Public checksums, signed minutes, reserves snapshots, AIA, status, and Stiftung registration. Transparency beats spin.',
  alternates: { canonical: 'https://www.vexvor.com/transparency' },
}

export default function TransparencyPage() {
  return (
    <>
      <Nav />
      <main id="main">

        <section className="pt-40 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">Transparency Endpoints</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '22ch' }}>
              Transparency beats spin.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              VexVor publishes its public checksums, signed governance minutes, reserves
              snapshots, and incident records. This page is the single canonical entry
              point. As Phase I matures, each endpoint links to a live feed.
            </p>
          </div>
        </section>

        {/* Stiftung */}
        <section id="stiftung" className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <span className="section-num">01 — Foundation Status</span>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="h-display mb-4" style={{ fontSize: '1.8rem', color: 'var(--field-white)' }}>
                  Stiftung in formation
                </h2>
                <p style={{ color: 'var(--field-dim)', lineHeight: 1.8 }}>
                  VexVor will be operated by a Swiss federal foundation (Stiftung)
                  established under Art. 80 ZGB. The foundation acts as legal and
                  ethical guardian of the project — independent from the Operating
                  Company and the DAO.
                </p>
              </div>
              <div className="aethel-card">
                <dl className="space-y-3 text-sm">
                  <div><dt className="h-eyebrow">Structure</dt><dd style={{ color: 'var(--field-white)' }}>Swiss federal foundation (Stiftung)</dd></div>
                  <div><dt className="h-eyebrow">Legal basis</dt><dd style={{ color: 'var(--field-white)' }}>Art. 80 ZGB · ESA-supervised</dd></div>
                  <div><dt className="h-eyebrow">Canton</dt><dd style={{ color: 'var(--ash-soft)' }}>To be announced upon registration</dd></div>
                  <div><dt className="h-eyebrow">Founding act</dt><dd style={{ color: 'var(--ash-soft)' }}>In drafting · publication on registration</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoints registry */}
        <section className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <span className="section-num">02 — Endpoint Registry</span>
            <h2 className="h-display mb-12" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
              What is published, where, and how often.
            </h2>

            <div className="space-y-px" style={{ background: 'var(--ash-line)' }}>
              {[
                { id: 'blueprint', name: 'Master Blueprint', cadence: 'On version', status: 'v1.0 · 2025-08-19', desc: 'Single source of truth. Marketing copy yields to it.' },
                { id: 'policy', name: 'Policy checksum family', cadence: 'On change', status: 'hash_policy_v6', desc: 'All scoring receipts reference this checksum.' },
                { id: 'minutes', name: 'Governance minutes', cadence: 'Per session', status: 'Phase II onward', desc: 'Signed minutes (minutes.v1) with decisions, votes, dissent.' },
                { id: 'reserves', name: 'Reserves snapshots', cadence: 'Monthly', status: 'Phase II onward', desc: 'Operating-days runway, liquidity tier breakdown.' },
                { id: 'incidents', name: 'Incident reports', cadence: 'Per incident', status: 'Live from Phase I', desc: 'First update ≤60min · hourly until mitigated · post-mortem.' },
                { id: 'aia', name: 'Algorithmic Impact Assessment', cadence: 'Per scoring change', status: 'Live from Phase I', desc: 'Shadow run · fairness diff · 5% canary with rollback triggers.' },
                { id: 'fairness', name: 'Fairness pulse', cadence: 'Monthly', status: 'Phase II onward', desc: 'ΔA-Score parity ≤3pp across cohorts; appeal-adjust rate parity.' },
                { id: 'sub', name: 'Sub-processor list', cadence: 'On change', status: 'Live from Phase I', desc: 'Vendor purpose, region, last review date.' },
                { id: 'status', name: 'Status page', cadence: 'Real-time', status: 'Live from Phase I', desc: 'Components, incidents, next update times.' },
              ].map((e) => (
                <div key={e.id} id={e.id} className="phase-cell grid lg:grid-cols-12 gap-4" style={{ padding: '1.5rem 1.75rem' }}>
                  <div className="lg:col-span-3">
                    <div className="h-eyebrow" style={{ fontSize: '0.55rem' }}>Endpoint</div>
                    <div style={{ color: 'var(--field-white)', fontSize: '1rem', marginTop: '0.25rem' }}>{e.name}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="h-eyebrow" style={{ fontSize: '0.55rem' }}>Cadence</div>
                    <div className="font-mono" style={{ color: 'var(--ash-soft)', fontSize: '0.88rem', marginTop: '0.25rem' }}>{e.cadence}</div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="h-eyebrow" style={{ fontSize: '0.55rem' }}>Status</div>
                    <div className="font-mono" style={{ color: 'var(--field-white)', fontSize: '0.88rem', marginTop: '0.25rem' }}>{e.status}</div>
                  </div>
                  <div className="lg:col-span-4">
                    <p style={{ color: 'var(--ash-soft)', fontSize: '0.88rem', lineHeight: 1.65 }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering excellence */}
        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <span className="section-num">03 — Engineering Posture</span>
            <h2 className="h-display mb-12" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
              How the system protects your data and your receipts.
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--ash-line)' }}>
              {[
                ['Auth', 'OAuth2 (PKCE), JWT (EdDSA, 30m), passkeys for staff'],
                ['Receipts', 'ed25519 signed · canonical JSON · yearly key rotation'],
                ['DR', 'PITR · RPO ≤15m · RTO ≤2h · quarterly drill'],
                ['SLOs', 'Attempts write p95 <600ms · Receipt lag p95 <120s · Escrow 99.9%'],
                ['Headers', 'CSP strict-dynamic · COOP same-origin · COEP require-corp'],
                ['Egress', 'Proxy allowlist · no user-supplied URLs without signed allow'],
                ['Privacy', 'GDPR · CCPA · CNIL · DSAR ≤30d · consent receipts'],
                ['A11y', 'WCAG 2.2 AA gate · Playwright + axe · 0 violations to GA'],
                ['Bug Bounty', 'Critical €5,000+ · safe-harbor terms'],
              ].map(([k, v]) => (
                <div key={k} className="phase-cell" style={{ padding: '1.5rem' }}>
                  <div className="h-eyebrow mb-2" style={{ fontSize: '0.55rem' }}>{k}</div>
                  <div className="font-mono text-sm" style={{ color: 'var(--field-white)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy + Legal anchors */}
        <section id="privacy" className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <span className="section-num">04 — Privacy & Legal</span>
            <h2 className="h-display mb-8" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
              The pillars, briefly.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="aethel-card">
                <h3 className="h-display mb-3" style={{ fontSize: '1.2rem', color: 'var(--field-white)' }}>Collection</h3>
                <p style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Account basics. App events (PII-free). Optional proofs (time log,
                  text, geohint). Payments and escrow. Optional loan artifacts.
                </p>
              </div>
              <div className="aethel-card">
                <h3 className="h-display mb-3" style={{ fontSize: '1.2rem', color: 'var(--field-white)' }}>Retention</h3>
                <p style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Proofs: 7/30/180 days or per project (user-selectable). Receipts and
                  invoices: 10 years. Analytics: 12–18 months. Logs: 30–90 days hot,
                  audit WORM 12 months.
                </p>
              </div>
              <div id="terms" className="aethel-card">
                <h3 className="h-display mb-3" style={{ fontSize: '1.2rem', color: 'var(--field-white)' }}>Rights</h3>
                <p style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Access, export, delete, restrict, object. 30-day SLA (45 days if
                  complex, with notice). Consent is reversible. Exports redact
                  third-party PII.
                </p>
              </div>
              <div id="aup" className="aethel-card">
                <h3 className="h-display mb-3" style={{ fontSize: '1.2rem', color: 'var(--field-white)' }}>Acceptable Use</h3>
                <p style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Allowed: keep small promises, collaborate, deliver scoped milestones,
                  appeal scores. Not allowed: harassment, doxxing, fraud, buying or
                  selling reputation, spam, exploitation, malware. Enforcement ladder:
                  coach → cool → quarantine → ban.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="press" className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container text-center">
            <h3 className="h-display mb-6" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--field-white)' }}>
              Press & research inquiries
            </h3>
            <p className="mb-6 mx-auto" style={{ color: 'var(--field-dim)', maxWidth: '52ch' }}>
              For journalist or academic access to the Master Blueprint, scoring AIA,
              or governance documents, request via the Foundation.
            </p>
            <a href="mailto:transparency@vexvor.com" className="btn-outline">
              transparency@vexvor.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
