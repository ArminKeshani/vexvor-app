import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Honest answers to the questions every serious project must invite. Including the skeptical ones.',
  alternates: { canonical: 'https://www.vexvor.com/faq' },
}

const faqs = [
  {
    g: 'The Skeptical Questions',
    items: [
      ['Is VexVor a cult?', 'It is structured to resist becoming one. The Codex hard-codes Anti-Cult Safeguards: no messianic language, a Critic-in-Residence funded from Phase II onward, no founder photo, decentralized iconography, and a kill-switch (Read-Only Mode). Cults discourage criticism. We pay for it.'],
      ['What happens if VexVor fails?', 'Several outcomes are possible. The most likely is that we miss a gate metric and pause Phase I. Receipts remain accessible. Members can export their data and exit. The kill-switch documents how a graceful pause works. We have engineered the system to fail safely — that is the point of having a Codex rule that says “Safety > growth.”'],
      ['How is this not just another crypto project?', 'VMU is a soulbound token: non-transferable, unbuyable. The Merit Firewall prevents any privileged path from capital to merit. There is no ICO, no airdrop, no public sale. GPC exists, but its release is gated to verified contribution and audited reserves. We are building economics, not speculation.'],
      ['What stops a charismatic person from capturing this?', 'Quadratic voting (Vote_Power = √VMU_Balance) makes single-actor dominance mathematically expensive. The Twin-Chamber DAO splits power between Council of Forgers (active members) and Assembly of Patrons (capital), bound by mission alignment. The Foundation acts as ultimate ethical guardian, independent from the Operating Company.'],
      ['Why a Swiss Stiftung?', 'Swiss federal foundation law (Art. 80 ZGB) is one of the strongest legal frameworks in the world for mission-locked entities. A Stiftung cannot easily be sold, redirected, or dissolved without supervisory approval. It exists as long as its mission persists.'],
      ['Can I criticize VexVor publicly?', 'Yes. The Codex&apos;s rule 9 — “Appeals stay open” — extends to public criticism. Phase II onward, the Critic-in-Residence is publicly named. Anti-cult safeguards include explicit invitation of skepticism. Healthy criticism strengthens the system; the FAQ exists in part to invite it.'],
    ],
  },
  {
    g: 'How It Works',
    items: [
      ['What is an Ordeal?', 'A discrete, verifiable challenge that demands real-world effort and produces a tangible outcome. A 20-minute attempt is sometimes enough. Examples: complete a copywriting brief, deliver a translation, learn a procedure, restore an outdoor space. Personal Ordeals (self-mastery) and Collective Ordeals (community work) both qualify.'],
      ['How is proof verified without photos?', 'Time logs, text attestations, and peer checks are first-class. Photos are optional. The QLTY factor in the scoring formula rewards consistency across multiple proof types — not the dramatic single image.'],
      ['What is a Pod, and what is a Team?', 'A Pod is a small group bound by a shared “why” — light rituals, no shaming. After 2–3 scoped wins, a Pod can promote into a Team with a charter (scope, norms) and a Team Reliability Score (TRS).'],
      ['What is a Score Receipt?', 'A canonical, ed25519-signed JSON document that records the factors and result of a scored attempt. Sorted keys. ISO 8601 timestamps. Cached privately for 5 minutes. Appealable within 72 hours. The schema is published.'],
    ],
  },
  {
    g: 'Money & Privacy',
    items: [
      ['Is VMU money?', 'No. VMU is a soulbound, non-transferable token recording verified Prestance. It cannot be bought, sold, or sent. It is the measure of what you have become — your Being. GPC is the spendable instrument — your Having.'],
      ['What data does VexVor collect?', 'Account basics. App events (PII-free). Optional proofs (time log, text, geohint). Payments and escrow data. Optional loan artifacts. Privacy policy details retention windows (7/30/180 days for proofs, user-selectable). DSAR is fulfilled within 30 days.'],
      ['Can I delete my data?', 'Yes. Consent is reversible. Exports and deletions are honored. DSAR ack ≤ 72h, complete ≤ 30d (45d if complex, with notice). Some data has legal retention (receipts and invoices: 10 years).'],
      ['Where is data stored?', 'Hosted in regions documented in the sub-processor list (published on /transparency). Transfers covered by SCCs/IDTA. Backups: PITR, hourly snapshots, RPO ≤ 15m, RTO ≤ 2h.'],
    ],
  },
  {
    g: 'Phase I Specifics',
    items: [
      ['Who can apply for Phase I?', 'Anyone willing to commit to the Prestance Vow and propose a first Ordeal. We screen for Codex alignment, not credentials. Phase I admits 1,000 Founding Members.'],
      ['How long does the application take?', 'About 10 minutes. The form asks for name, locale, why now, and your first proposed Ordeal. Decisions arrive within 14 days.'],
      ['What does Phase I cost?', 'Phase I is invitation-only. There is no entry fee. Optional services (loans, sponsored missions) appear in later phases under transparent terms.'],
      ['What if I get rejected?', 'You can re-apply after 90 days. Most rejections at Phase I reflect timing, not judgment. The system is small; we admit narrowly.'],
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main id="main">

        <section className="pt-40 pb-20" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">Frequently Asked Questions</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '24ch' }}>
              Skepticism is welcome here.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              Any project this ambitious owes its readers honest answers. We have
              tried to anticipate the hardest questions — including the ones we
              would rather not face.
            </p>
          </div>
        </section>

        {faqs.map((group, gi) => (
          <section key={group.g} className="py-20" style={{ background: gi % 2 === 0 ? 'var(--void-deep)' : 'var(--void-black)' }}>
            <div className="section-container">
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3">
                  <span className="section-num">{String(gi + 1).padStart(2, '0')}</span>
                  <h2 className="h-display" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--field-white)' }}>
                    {group.g}
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <div className="space-y-px" style={{ background: 'var(--ash-line)' }}>
                    {group.items.map(([q, a], i) => (
                      <details
                        key={i}
                        className="phase-cell"
                        style={{ padding: '1.4rem 1.75rem' }}
                      >
                        <summary
                          className="cursor-pointer h-display flex items-baseline justify-between gap-4"
                          style={{ fontSize: '1.1rem', color: 'var(--field-white)', listStyle: 'none' }}
                        >
                          <span>{q}</span>
                          <span style={{ color: 'var(--ash-soft)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>+</span>
                        </summary>
                        <p
                          className="mt-4 pt-4"
                          style={{
                            color: 'var(--ash-soft)',
                            fontSize: '0.95rem',
                            lineHeight: 1.8,
                            borderTop: '1px solid var(--ash-mute)',
                          }}
                          dangerouslySetInnerHTML={{ __html: a }}
                        />
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-24" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container text-center">
            <p className="mb-8 mx-auto" style={{ color: 'var(--field-dim)', fontSize: '1rem', maxWidth: '54ch' }}>
              Question we did not answer? Write to us — published candor is better
              than private confusion.
            </p>
            <a href="mailto:critic@vexvor.com" className="btn-outline">
              critic@vexvor.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
