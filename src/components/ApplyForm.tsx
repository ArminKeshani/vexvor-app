'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  location: string
  motivation: string
  ordeal: string
  referral: string
}

export default function ApplyForm() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', location: '', motivation: '', ordeal: '', referral: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Submission failed')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="vex-card p-12 text-center animate-fade-in">
        <div className="text-5xl mb-6">⚔</div>
        <h3 className="font-display text-2xl font-black text-gold mb-4 tracking-widest">
          Declaration Received
        </h3>
        <div className="gold-divider mb-8" />
        <p className="font-body text-bone-dim text-lg leading-relaxed">
          Your application has been submitted to the Council of Forgers.
          You will receive a response within 72 hours. Prepare yourself.
        </p>
        <p className="font-display text-xs tracking-widest text-steel uppercase mt-8">
          Being Before Having
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="vex-card p-10 flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
            Full Name *
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="vex-input"
            placeholder="Your name"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
            Email Address *
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="vex-input"
            placeholder="your@email.com"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div>
        <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
          Location
        </label>
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          className="vex-input"
          placeholder="City, Country"
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
          Why do you seek entry? *
        </label>
        <textarea
          required
          name="motivation"
          value={form.motivation}
          onChange={handleChange}
          rows={4}
          className="vex-input resize-none"
          placeholder="What drives you to the Forge? What do you intend to build — within yourself?"
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
          Which Ordeal domain calls to you most? *
        </label>
        <select
          required
          name="ordeal"
          value={form.ordeal}
          onChange={handleChange}
          className="vex-input"
          disabled={status === 'submitting'}
        >
          <option value="">Select a domain</option>
          <option value="physical">Physical — Body as instrument</option>
          <option value="intellectual">Intellectual — Mind as weapon</option>
          <option value="creative">Creative — Art as declaration</option>
          <option value="ethical">Ethical — Character as foundation</option>
          <option value="collective">Collective — Forge as purpose</option>
        </select>
      </div>

      <div>
        <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
          Referred by a Redeemer?
        </label>
        <input
          name="referral"
          value={form.referral}
          onChange={handleChange}
          className="vex-input"
          placeholder="Redeemer name or code (optional)"
          disabled={status === 'submitting'}
        />
      </div>

      {status === 'error' && (
        <div
          className="font-body text-sm p-4 border"
          style={{ background: 'rgba(224,24,20,0.08)', borderColor: 'rgba(224,24,20,0.3)', color: '#E01814' }}
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Submit Declaration
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p className="font-body text-xs text-steel text-center">
        By submitting, you acknowledge the VexVor Entry Terms and Prestance Covenant.
        Entry is not guaranteed.
      </p>
    </form>
  )
}
