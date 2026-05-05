'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Nav />
      <main id="main">

        <section className="pt-40 pb-20" style={{ background: 'var(--void-black)' }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="aethel-rule" />
              <span className="h-eyebrow">Phase I — Founding Members</span>
            </div>
            <h1 className="h-display mb-8" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', color: 'var(--field-white)', maxWidth: '20ch' }}>
              The door is small and open.
            </h1>
            <p style={{ color: 'var(--field-dim)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '60ch' }}>
              Phase I admits 1,000 Founding Members. The application is short and
              honest. There is no waitlist marketing here — only a Vow, a form,
              and the first Ordeal you propose for yourself.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: 'var(--void-deep)' }}>
          <div className="section-container max-w-3xl">
            <span className="section-num">01 — The Prestance Vow</span>
            <h2 className="h-display mb-8" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--field-white)' }}>
              What you commit to, before the form.
            </h2>
            <ul className="space-y-3 mb-12" style={{ color: 'var(--field-dim)', fontSize: '0.98rem', lineHeight: 1.7 }}>
              <li>· I will keep small promises and let receipts speak louder than performance.</li>
              <li>· I will repair when I miss; I will not shame others when they miss.</li>
              <li>· I will use plain language and accept that ordeals are real.</li>
              <li>· I will not buy or sell reputation. Merit is earned.</li>
              <li>· I will keep appeals open and accept that I may be wrong.</li>
              <li>· I understand that VexVor may pause (Read-Only Mode) to prevent harm, and I respect this design.</li>
            </ul>

            <div className="disclosure-block mb-12">
              <strong style={{ color: 'var(--field-white)', fontStyle: 'normal' }}>Honest about risks.</strong>{' '}
              VexVor is in Phase I. The system may have bugs. The economy is small.
              You may not earn meaningful GPC for some time. Your VMU is real but
              non-transferable. You can leave, export your receipts, and erase your
              account at any time.
            </div>

            <span className="section-num">02 — Apply</span>
            <h2 className="h-display mb-8" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--field-white)' }}>
              The form.
            </h2>

            {!submitted ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-6"
              >
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'How you would like to be addressed' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'For receipt of decision and onboarding' },
                  { id: 'locale', label: 'Locale & timezone', type: 'text', placeholder: 'e.g. Paris · UTC+1/+2' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="h-eyebrow block mb-2" style={{ fontSize: '0.6rem' }}>
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      style={{
                        width: '100%',
                        background: 'var(--void-black)',
                        border: '1px solid var(--ash-line)',
                        color: 'var(--field-white)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="why" className="h-eyebrow block mb-2" style={{ fontSize: '0.6rem' }}>
                    Why now?
                  </label>
                  <textarea
                    id="why"
                    required
                    rows={3}
                    placeholder="Briefly: what about this moment in your life makes Phase I worthwhile?"
                    style={{
                      width: '100%',
                      background: 'var(--void-black)',
                      border: '1px solid var(--ash-line)',
                      color: 'var(--field-white)',
                      padding: '0.85rem 1rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="ordeal" className="h-eyebrow block mb-2" style={{ fontSize: '0.6rem' }}>
                    Your first proposed Ordeal
                  </label>
                  <textarea
                    id="ordeal"
                    required
                    rows={3}
                    placeholder="A 20-minute, verifiable challenge you could begin tomorrow. Personal or service. Plain language."
                    style={{
                      width: '100%',
                      background: 'var(--void-black)',
                      border: '1px solid var(--ash-line)',
                      color: 'var(--field-white)',
                      padding: '0.85rem 1rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div className="flex items-start gap-3 py-3">
                  <input
                    type="checkbox"
                    id="vow"
                    required
                    style={{ marginTop: '0.25rem', accentColor: 'var(--field-white)' }}
                  />
                  <label htmlFor="vow" style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    I have read the Prestance Vow above and commit to it. I understand
                    it is binding while I am a member, and reversible upon exit.
                  </label>
                </div>

                <button type="submit" className="btn-forge">
                  Submit Application
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p style={{ color: 'var(--ash-grey)', fontSize: '0.82rem', marginTop: '1rem' }}>
                  Submission produces a signed consent receipt (kantara-style). You
                  will receive a copy by email. Decisions arrive within 14 days.
                </p>
              </form>
            ) : (
              <div className="aethel-card text-center" style={{ padding: '3rem 2rem' }}>
                <div className="ember-mark mb-4" style={{ fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
                  ✓
                </div>
                <h3 className="h-display mb-3" style={{ fontSize: '1.4rem', color: 'var(--field-white)' }}>
                  Application received.
                </h3>
                <p style={{ color: 'var(--ash-soft)', maxWidth: '44ch', margin: '0 auto 1.5rem' }}>
                  Your consent receipt has been minted (canonical, signed, kantara-style).
                  A copy will arrive by email. Decisions are issued within 14 days.
                </p>
                <Link href="/codex" className="btn-outline">Read the Codex while you wait</Link>
              </div>
            )}
          </div>
        </section>

        <section className="py-24" style={{ background: 'var(--void-black)' }}>
          <div className="section-container text-center">
            <p style={{ color: 'var(--ash-soft)', fontSize: '0.9rem', maxWidth: '52ch', margin: '0 auto' }}>
              Not ready? Read the <Link href="/faq" style={{ color: 'var(--field-white)', borderBottom: '1px solid var(--ash-line)' }}>FAQ</Link>{' '}
              first or study the <Link href="/codex" style={{ color: 'var(--field-white)', borderBottom: '1px solid var(--ash-line)' }}>Codex</Link>.
              Phase I closes when full or when gate metrics direct it.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
