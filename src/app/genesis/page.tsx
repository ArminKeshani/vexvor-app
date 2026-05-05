import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Genesis Phasing',
  description: 'A controlled four-phase roadmap. Phase I targets 1,000 Founding Members. Each phase has explicit gate metrics. The 100-year horizon.',
  alternates: { canonical: 'https://www.vexvor.com/genesis' },
}

const phases = [
  {
    n: 'I',
    name: 'Ignition',
    sub: 'The First Crucible',
    target: '1,000 Founding Members',
    scope: 'Private invitation-only MVP. Feature-light. Philosophically pure. Focus on the integrity of the core loop: Challenge → Proof → Validation → Reward.',
    gates: [
      'Retention >80% among active members',
      'Successful validation of core psychological rituals',
      'Zero critical security or psychological-safety incidents',
      'Qualitative confirmation: experience generates pride and meaning',
    ],
    active: true,
  },
  {
    n: 'II',
    name: 'Expansion',
    sub: 'The Forging',
    target: '10,000 Architects',
    scope: 'Closed beta. First iteration of the Twin-Chamber DAO governance, GPC token economy, and the Constellation Role Framework (Mentors, Witnesses).',
    gates: [
      'Stable GPC token value and healthy economic velocity',
      'DAO proposals passed and implemented',
      'Fraud / collusion rate < 1% in validation',
      'Emergence of community-led projects and initiatives',
    ],
  },
  {
    n: 'III',
    name: 'Adoption',
    sub: 'The Gathering',
    target: '100,000+ Citizens',
    scope: 'Open beta. Public access through a rigorous onboarding Vow. First Patron Challenges (mission-aligned brand sponsorships, clearly labeled).',
    gates: [
      'System uptime meets or exceeds SLOs',
      'Successful integration of at least three external Patrons',
      'Forge Integrity Index (FII) consistently above 80',
      'First three physical VexVor Embassies established',
    ],
  },
  {
    n: 'IV',
    name: 'Legacy',
    sub: 'Genesis',
    target: 'A global civilization',
    scope: 'Full public launch. Governance fully handed to the DAO. The Foundation acts purely as legal and ethical guardian. Protocol open-source.',
    gates: [
      'Civilization funds and executes large-scale real-world projects',
      'Long-term FII health and stability',
      'Continued Codex evolution by the community',
    ],
  },
]

export default function GenesisPage() {
  return (
    <>
      <Nav />
      <main id="main">

        {/* Hero */}
        <section className="pt-40 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">Genesis Phasing Protocol</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '22ch' }}>
              You do not ignite a star all at once.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              VexVor&rsquo;s rollout is a meticulously sequenced, four-phase protocol
              designed to manage risk, enforce mission alignment, and build sustainable
              momentum. Each phase has gate metrics that must be met before the next
              begins. This is a controlled burn — not a launch.
            </p>
          </div>
        </section>

        {/* Phase quadrant */}
        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="space-y-px" style={{ background: 'var(--ash-line)' }}>
              {phases.map((p) => (
                <div
                  key={p.n}
                  className="phase-cell grid lg:grid-cols-12 gap-8"
                  style={p.active ? { borderLeft: '3px solid var(--forge-red)', padding: '3rem 2.5rem' } : { padding: '3rem 2.5rem' }}
                >
                  <div className="lg:col-span-3">
                    <div className="font-display mb-2" style={{ fontSize: '4rem', color: 'var(--ash-deep)', lineHeight: 1 }}>
                      {p.n}
                    </div>
                    {p.active && (
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.32em',
                        textTransform: 'uppercase',
                        color: 'var(--forge-red)',
                        padding: '0.3rem 0.6rem',
                        border: '1px solid var(--forge-red)',
                      }}>
                        Phase Active
                      </span>
                    )}
                  </div>
                  <div className="lg:col-span-4">
                    <div className="h-eyebrow mb-2">Phase {p.n}</div>
                    <h2 className="h-display mb-1" style={{ fontSize: '2.4rem', color: 'var(--field-white)' }}>
                      {p.name}
                    </h2>
                    <p className="italic mb-4" style={{ color: 'var(--ash-soft)', fontSize: '0.92rem' }}>
                      {p.sub}
                    </p>
                    <div className="h-eyebrow" style={{ fontSize: '0.55rem' }}>Target</div>
                    <div className="mt-1" style={{ color: 'var(--field-white)', fontSize: '1.05rem', fontFamily: 'var(--font-mono)' }}>
                      {p.target}
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="h-eyebrow mb-2" style={{ fontSize: '0.55rem' }}>Scope</div>
                    <p className="mb-6" style={{ color: 'var(--field-dim)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                      {p.scope}
                    </p>
                    <div className="h-eyebrow mb-3" style={{ fontSize: '0.55rem' }}>Gate Metrics</div>
                    <ul className="space-y-2 text-sm" style={{ color: 'var(--ash-soft)' }}>
                      {p.gates.map((g) => <li key={g}>· {g}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest disclosure */}
        <section className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="disclosure-block" style={{ maxWidth: '70ch' }}>
              <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>An honest note about timing.</strong>{' '}
              We do not commit to dates we cannot keep. Phase I aims to lock when the
              gate metrics are met — not when a calendar says. We expect Phase I to
              run on the order of 6–12 months. We expect to be wrong about that, in
              one direction or another. The kill-switch is documented because we
              expect to use it at least once.
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container text-center">
            <p className="mb-8 mx-auto" style={{ color: 'var(--field-dim)', fontSize: '1rem', maxWidth: '54ch' }}>
              Phase I is open. The door is small. The Vow is short.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply" className="btn-forge">Apply for Phase I</Link>
              <Link href="/transparency" className="btn-outline">Read Transparency</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
