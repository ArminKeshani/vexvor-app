import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Prestance Economy',
  description: 'Proof-of-Prestance, the dual-asset model (VMU + GPC), the Merit Firewall, and quadratic voting. The economic engine of VexVor.',
  alternates: { canonical: 'https://www.vexvor.com/economy' },
}

export default function EconomyPage() {
  return (
    <>
      <Nav />
      <main id="main">

        {/* Hero */}
        <section className="pt-40 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">The Prestance Economy</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '22ch' }}>
              Character as the primary asset class.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              VexVor introduces a new economic paradigm we call <em>Meritocratic
              Futurism</em>. It is engineered from first principles to maximize the
              production of human excellence — not the maximization of profit. Two
              instruments separate moral capital from financial capital. A firewall
              keeps them honest.
            </p>
          </div>
        </section>

        {/* Three-protocol comparison */}
        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="section-num">01 — Why a New Engine</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--field-white)' }}>
                Three economic protocols. One fundamental question.
              </h2>
              <p className="mt-4" style={{ color: 'var(--ash-soft)', maxWidth: '52ch' }}>
                What does the system reward, and at whose expense?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--ash-line)' }}>
              {[
                {
                  k: 'Proof-of-Work',
                  ex: 'Bitcoin',
                  rewards: 'Computation',
                  cost: 'Electricity',
                  meaning: 'You are paid for what your machine can solve.',
                },
                {
                  k: 'Proof-of-Stake',
                  ex: 'Ethereum',
                  rewards: 'Capital',
                  cost: 'Existing wealth',
                  meaning: 'You are paid for what you already have.',
                },
                {
                  k: 'Proof-of-Prestance',
                  ex: 'VexVor',
                  rewards: 'Verified character',
                  cost: 'Effort under pressure',
                  meaning: 'You are paid for what you have become.',
                  active: true,
                },
              ].map((p) => (
                <div key={p.k} className="phase-cell" style={p.active ? { borderLeft: '2px solid var(--forge-red)' } : {}}>
                  <div className="h-eyebrow mb-2" style={{ color: p.active ? 'var(--forge-red)' : 'var(--ash-soft)' }}>
                    {p.ex}
                  </div>
                  <h3 className="h-display mb-5" style={{ fontSize: '1.6rem', color: 'var(--field-white)' }}>
                    {p.k}
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="h-eyebrow" style={{ fontSize: '0.55rem' }}>Rewards</dt>
                      <dd style={{ color: 'var(--field-white)' }}>{p.rewards}</dd>
                    </div>
                    <div>
                      <dt className="h-eyebrow" style={{ fontSize: '0.55rem' }}>Cost</dt>
                      <dd style={{ color: 'var(--ash-soft)' }}>{p.cost}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 italic" style={{ color: 'var(--ash-soft)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                    {p.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Formula */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="section-num">02 — The Scoring Formula</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                  Six factors. One integer. Public formula.
                </h2>
                <p className="mt-6" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
                  Every Ordeal is scored by a transparent multiplicative formula. The
                  result is rounded to two decimals only at display time. Intermediate
                  factors are never rounded. The formula is published. The policy
                  checksum is signed.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="aethel-card">
                  <div
                    className="font-mono mb-6 pb-5"
                    style={{
                      fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                      color: 'var(--field-white)',
                      borderBottom: '1px solid var(--ash-mute)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    A = BASE · DIF · TIM · QLTY · INT · SAF
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--ash-mute)' }}>
                        <th className="text-left py-2 h-eyebrow" style={{ fontSize: '0.55rem' }}>Factor</th>
                        <th className="text-left py-2 h-eyebrow" style={{ fontSize: '0.55rem' }}>Range</th>
                        <th className="text-left py-2 h-eyebrow" style={{ fontSize: '0.55rem' }}>Meaning</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'var(--ash-soft)' }}>
                      {[
                        ['BASE', '1.00', 'Underlying contribution unit'],
                        ['DIF', '0.8 – 1.6', 'Calibrated difficulty'],
                        ['TIM', '0.2 – 1.05', 'On-time delivery; restitution recovers'],
                        ['QLTY', '0.85 – 1.15', 'Diversity & consistency of proof'],
                        ['INT', '0.7 – 1.1', 'Integrity & stability over time'],
                        ['SAF', '0 / 1', 'Safety & policy compliance gate'],
                      ].map(([f, r, m]) => (
                        <tr key={f} style={{ borderBottom: '1px solid var(--ash-mute)' }}>
                          <td className="py-3" style={{ color: 'var(--field-white)', fontFamily: 'var(--font-mono)' }}>{f}</td>
                          <td className="py-3 font-mono">{r}</td>
                          <td className="py-3">{m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-5 text-xs" style={{ color: 'var(--ash-grey)', lineHeight: 1.7 }}>
                    Typical A range: 0.7 – 1.6 · Display rounded to 2 decimals · Every
                    score emits an ed25519-signed receipt · Appeal window: 72 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual-Asset model + Merit Firewall */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="mb-16">
              <span className="section-num">03 — Dual-Asset Model · Merit Firewall</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)', maxWidth: '24ch' }}>
                Two instruments. One firewall.
              </h2>
              <p className="mt-6" style={{ color: 'var(--ash-soft)', maxWidth: '60ch', lineHeight: 1.75 }}>
                The fundamental flaw of every previous socio-economic system is the
                conflation of moral capital with financial capital. The Merit
                Firewall is a non-negotiable, system-level separation between the two.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--ash-line)' }}>
              <div className="phase-cell">
                <div className="h-eyebrow mb-3">Soulbound · Non-transferable</div>
                <h3 className="h-display mb-4" style={{ fontSize: '2rem', color: 'var(--field-white)' }}>
                  VMU
                  <span className="ml-3" style={{ fontSize: '0.78rem', color: 'var(--ash-soft)', letterSpacing: '0.18em' }}>
                    VexVor Merit Unit
                  </span>
                </h3>
                <p className="mb-5" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  The measure of Being. Earned only by completing verified Ordeals.
                  Non-transferable, non-purchasable, non-tradable. A Soulbound Token
                  on an L2 chain.
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--ash-grey)' }}>
                  <li>· Sole determinant of governance voting power</li>
                  <li>· Quadratic voting: Vote_Power = √VMU_Balance</li>
                  <li>· Higher VMU unlocks more impactful Ordeals</li>
                  <li>· Public, signed, auditable</li>
                </ul>
              </div>

              <div className="phase-cell">
                <div className="h-eyebrow mb-3">Treasury · Settlement asset</div>
                <h3 className="h-display mb-4" style={{ fontSize: '2rem', color: 'var(--field-white)' }}>
                  GPC
                  <span className="ml-3" style={{ fontSize: '0.78rem', color: 'var(--ash-soft)', letterSpacing: '0.18em' }}>
                    Global Prestance Coin
                  </span>
                </h3>
                <p className="mb-5" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  The measure of Having. The bridge between the internal VexVor economy
                  and the external world. Algorithmically tethered to ecosystem
                  health, not external markets.
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--ash-grey)' }}>
                  <li>· Spendable within the network economy</li>
                  <li>· Designed to resist speculation</li>
                  <li>· Reserve target ≥ 180 operating days</li>
                  <li>· Released only via verified contribution</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 disclosure-block" style={{ maxWidth: '70ch', margin: '3rem auto 0' }}>
              <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>Money never buys merit.</strong> {' '}
              Money never crosses the firewall. VMU is generated only by verified
              ordeals. GPC is paid only against contribution. The two assets exist in
              the same economy but never in the same equation.
            </div>
          </div>
        </section>

        {/* Quadratic Voting + Reserves */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="aethel-card">
                <span className="section-num">Governance</span>
                <h3 className="h-display mb-4" style={{ fontSize: '1.6rem', color: 'var(--field-white)' }}>
                  Quadratic voting
                </h3>
                <div className="font-mono mb-4" style={{ color: 'var(--field-white)', fontSize: '1.05rem' }}>
                  Vote_Power = √VMU_Balance
                </div>
                <p style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Voting power is sub-linear in VMU. A member with 100× the Prestance
                  of another has only 10× the voting power. The system explicitly
                  weighs against capture by single-actor dominance.
                </p>
              </div>

              <div className="aethel-card">
                <span className="section-num">Reserves Policy</span>
                <h3 className="h-display mb-4" style={{ fontSize: '1.6rem', color: 'var(--field-white)' }}>
                  ≥ 180 operating days
                </h3>
                <p style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Reserves target: ≥ 180 days, aim 210–240. T+0 / T+1 liquidity in
                  government money-market or insured deposits only. Dual-signature
                  required for reallocations &gt; €25,000. The first 10% of every euro
                  goes to runway before any distribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container text-center">
            <p className="mb-8 mx-auto" style={{ color: 'var(--field-dim)', fontSize: '1rem', maxWidth: '54ch' }}>
              The economy is a tool, not a goal. The Forge is where it produces
              outcomes you can name.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/forge" className="btn-primary">See the Forge</Link>
              <Link href="/genesis" className="btn-outline">Genesis Roadmap</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
