import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Codex',
  description: 'The ethical and philosophical constitution of VexVor. Three foundational virtues, thirteen principles of the Republic, and the Anti-Cult Safeguards built into governance.',
  alternates: { canonical: 'https://www.vexvor.com/codex' },
}

const virtues = [
  {
    num: 'I',
    name: 'Truth',
    sub: 'Clarity & Rigor',
    body: 'A radical commitment to seeing the world as it is, not as we wish it to be. Intellectual honesty, data-driven decision-making, and a cultural intolerance for euphemism and vagueness.',
  },
  {
    num: 'II',
    name: 'Courage',
    sub: 'Action & Ordeal',
    body: 'Character is not an idea but a muscle, built only through confronting meaningful challenges. The system encourages, not shields from, difficulty.',
  },
  {
    num: 'III',
    name: 'Sovereignty',
    sub: 'Responsibility & Ownership',
    body: 'Each individual is the ultimate author of their own life and is responsible for their choices and their impact on the collective.',
  },
]

const principles = [
  ['Safety > growth', 'We will pause features (read-only) to prevent harm.'],
  ['Evidence over hype', 'Every meaningful action emits a signed receipt.'],
  ['Repair over shame', 'Misses invite restitution, not ridicule.'],
  ['Pods first', 'Small groups with a shared "why" build momentum.'],
  ['No idols', 'We amplify teams and outcomes, not personalities.'],
  ['Plain language', 'No jargon. Exact dates. Clear acceptance criteria.'],
  ['Accessibility is a gate', 'WCAG 2.2 AA is a release criterion, not a footnote.'],
  ['Consent is reversible', 'Retention is user-selected. Exports and deletions are honored.'],
  ['Appeals stay open', 'Jurors are anonymized. Dissent is logged.'],
  ['Transparency beats spin', 'We publish checksums, minutes, reserves.'],
  ['Action is the only oracle', 'Truth is found in the crucible, not the debate.'],
  ['Restoration over punishment', 'Repair widens. Shame narrows. We choose repair.'],
  ['No idol culture', 'No founder cult. Stewards rotate. Power decentralizes by design.'],
]

export default function CodexPage() {
  return (
    <>
      <Nav />
      <main id="main">

        {/* Page Hero */}
        <section className="pt-40 pb-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">The Codex of Prestance</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', color: 'var(--field-white)', maxWidth: '20ch' }}>
              The ethical constitution of a civilization.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              The Codex is not a list of rigid rules. It is a set of guiding principles
              to be interpreted, debated, and embodied through action. It rests on three
              foundational virtues, expressed as thirteen principles of operation, and
              gated by an explicit set of anti-cult safeguards.
            </p>
          </div>
        </section>

        {/* Prime Directive */}
        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <span className="section-num">Prime Directive</span>
              <p className="h-display mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--field-white)' }}>
                <em>L&rsquo;être avant l&rsquo;avoir.</em>
              </p>
              <p style={{ color: 'var(--ash-soft)', fontSize: '1rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                Being &nbsp;·&nbsp; Before &nbsp;·&nbsp; Having
              </p>
              <p style={{ color: 'var(--field-dim)', lineHeight: 1.85, fontSize: '1rem' }}>
                This is the philosophical heart of VexVor — the axiom from which every
                other system is derived. Wealth and status are not goals to be pursued.
                They are the natural consequence of a well-forged character. This
                principle is not a suggestion; it is treated as a law of physics within
                the system, and every economic and governance protocol is engineered
                to enforce it.
              </p>
            </div>
          </div>
        </section>

        {/* Three Virtues */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="mb-16">
              <span className="section-num">Pillar I — The Three Foundational Virtues</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                Three virtues. One direction.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--ash-line)' }}>
              {virtues.map((v) => (
                <div key={v.num} className="phase-cell">
                  <div className="font-display mb-3" style={{ fontSize: '2.4rem', color: 'var(--ash-deep)' }}>
                    {v.num}
                  </div>
                  <h3 className="h-display mb-1" style={{ fontSize: '1.7rem', color: 'var(--field-white)' }}>
                    {v.name}
                  </h3>
                  <p className="mb-4 italic" style={{ color: 'var(--ash-soft)', fontSize: '0.85rem' }}>
                    {v.sub}
                  </p>
                  <p style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thirteen Principles */}
        <section className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="section-num">Pillar II — The Thirteen Principles of the Republic</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                The operating system of the Republic.
              </h2>
            </div>

            <ol className="space-y-4">
              {principles.map(([title, body], i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 gap-6 py-5"
                  style={{ borderTop: '1px solid var(--ash-mute)' }}
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono" style={{ color: 'var(--ash-deep)', fontSize: '1.05rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <strong className="h-display" style={{ color: 'var(--field-white)', fontSize: '1.15rem', fontWeight: 500 }}>
                      {title}
                    </strong>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <span style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                      {body}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Epistemology */}
        <section className="py-32" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="section-num">Pillar III — Epistemology</span>
                <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                  How we know what is true.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5" style={{ color: 'var(--field-dim)', fontSize: '1rem', lineHeight: 1.85 }}>
                <p>Truth is not found in debate, opinion, or belief. It is found in the crucible of a challenge.</p>
                <p>An idea has merit only when it survives contact with reality. Value is not speculative — it is the residue of a difficult task successfully completed.</p>
                <p style={{ color: 'var(--field-white)' }}>
                  The platform is therefore not a forum for discussion. It is a Forge —
                  a place where ideas are tested, skills are honed, and character is
                  made tangible through the fire of ordeal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Anti-Cult Safeguards (anchor: critic) */}
        <section id="critic" className="py-32" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="section-num">Anti-Cult Safeguards</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--field-white)' }}>
                The Codex must accept its critics.
              </h2>
              <p className="mt-6" style={{ color: 'var(--ash-soft)', fontSize: '0.95rem', maxWidth: '60ch', lineHeight: 1.75 }}>
                Any system this ambitious risks becoming a cult of itself. The Codex
                hard-codes safeguards against this risk. They are public, named, and
                operational.
              </p>
            </div>

            <div className="space-y-5">
              {[
                ['No Messianic Language', 'We do not save anyone. We do not awaken the chosen. We are an engineered institution running an experiment with a long horizon and a documented kill-switch.'],
                ['Critic-in-Residence', 'From Phase II onward, VexVor funds a publicly named critic whose stated role is to find what is wrong with VexVor — and publish it. Their salary is a budget line, not a favor.'],
                ['Decentralized Iconography', 'The core sigil is unified. Beyond that, each Embassy and Forge is encouraged to develop its own cultural identity. There is no monolithic visual culture.'],
                ['Skepticism welcomed', 'The FAQ contains the questions that should be asked of any project this ambitious. We attempt to answer them. We invite you to add to them.'],
                ['No idol culture', 'No founder photo. No biography on the home page. No "follow the leader." Stewards rotate. Power decentralizes by design as Phases progress.'],
              ].map(([t, b]) => (
                <div key={t} className="disclosure-block">
                  <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>{t}.</strong> {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container text-center">
            <p className="mb-8" style={{ color: 'var(--field-dim)', fontSize: '1rem', maxWidth: '52ch', margin: '0 auto 2rem' }}>
              The Codex is the law. The Forge is where it lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/forge" className="btn-primary">Visit the Forge</Link>
              <Link href="/economy" className="btn-outline">See the Economy</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
