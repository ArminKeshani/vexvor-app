import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Patrons',
  description: 'Mission-aligned strategic capital for VexVor. The Prestance Vow, the Assembly of Patrons, the Reserves Policy, and the long-horizon framework.',
  alternates: { canonical: 'https://www.vexvor.com/patrons' },
}

export default function PatronsPage() {
  return (
    <>
      <Nav />
      <main id="main">

        <section className="pt-40 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">Patrons · Strategic Capital</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '22ch' }}>
              Capital, bound by the same Codex.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              VexVor accepts strategic capital only from mission-aligned partners.
              Patrons sit in the Assembly of Patrons — one of the two governance
              chambers — and are bound by the Prestance Vow: a binding commitment
              to uphold &ldquo;Being Before Having&rdquo; before the profit motive.
            </p>
          </div>
        </section>

        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <span className="section-num">01 — The Prestance Vow</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                  Mission alignment, formalized.
                </h2>
              </div>
              <div className="lg:col-span-7" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
                <p className="mb-5">
                  Every Patron co-signs a binding instrument that:
                </p>
                <ul className="space-y-3" style={{ color: 'var(--ash-soft)' }}>
                  <li>· Affirms the Prime Directive (L&rsquo;être avant l&rsquo;avoir) in capital deployment</li>
                  <li>· Accepts that Merit Firewall separation is non-negotiable: no privileged path from capital to VMU</li>
                  <li>· Recognizes Quadratic Voting and the Council of Forgers as co-equal governance</li>
                  <li>· Commits to a long-horizon stake; quarterly thinking is incompatible</li>
                  <li>· Allows public listing in the Patron registry</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="section-num">02 — Reserves & IPS</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                Capital integrity, by policy.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'var(--ash-line)' }}>
              {[
                { v: '≥ 180', l: 'Operating days reserved (target 210–240)' },
                { v: 'T+0 / T+1', l: 'Liquidity tier · government MM / insured deposits' },
                { v: '> €25k', l: 'Dual-signature required for any reallocation' },
                { v: '10%', l: 'Of every euro reserved for runway before distribution' },
              ].map((s) => (
                <div key={s.l} className="phase-cell" style={{ padding: '2rem 1.5rem' }}>
                  <div className="inv-stat-value">{s.v}</div>
                  <span className="inv-stat-label">{s.l}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 disclosure-block" style={{ maxWidth: '70ch' }}>
              <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>What we do not do.</strong>{' '}
              We do not chase venture timelines. We do not promise non-existent IRR
              numbers. We do not auction governance. The Stiftung structure exists
              precisely to prevent capture by any single class of contributor.
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container text-center">
            <h3 className="h-display mb-6" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--field-white)' }}>
              Data-room access by introduction.
            </h3>
            <p className="mb-8 mx-auto" style={{ color: 'var(--field-dim)', maxWidth: '52ch' }}>
              Patron conversations begin via warm introduction or written brief
              demonstrating Codex alignment. Reach out via the Foundation contact.
            </p>
            <a
              href="mailto:patrons@vexvor.com"
              className="btn-primary"
            >
              Contact the Foundation
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
