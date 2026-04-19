'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

interface Redeemer {
  name: string
  email: string
  imageUrl: string
  joinedAt: string
}

const TABS = ['Profile', 'Ordeals', 'Forge', 'Governance', 'Settings'] as const
type Tab = typeof TABS[number]

export default function DashboardClient({ redeemer }: { redeemer: Redeemer }) {
  const [activeTab, setActiveTab] = useState<Tab>('Profile')
  const [ringOffset, setRingOffset] = useState(408)

  const prestance = 347
  const maxPrestance = 500
  const circumference = 408

  useEffect(() => {
    const target = circumference * (1 - prestance / maxPrestance)
    setTimeout(() => setRingOffset(target), 300)
  }, [])

  const sideLinks: { tab: Tab; icon: string }[] = [
    { tab: 'Profile',    icon: '◈' },
    { tab: 'Ordeals',    icon: '⚡' },
    { tab: 'Forge',      icon: '🔥' },
    { tab: 'Governance', icon: '⚔' },
    { tab: 'Settings',   icon: '⚙' },
  ]

  return (
    <div className="flex min-h-screen bg-obsidian">
      {/* ── Sidebar ─────────────────────────────────── */}
      <aside
        className="fixed left-0 top-0 bottom-0 w-64 flex flex-col z-40"
        style={{ background: 'var(--charcoal2)', borderRight: '1px solid rgba(212,175,55,0.08)' }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 px-6 h-16"
          style={{ borderBottom: '1px solid rgba(212,175,55,0.08)' }}
        >
          <Link href="/" className="font-display text-lg font-black text-gold tracking-widest">
            VEXVOR
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 px-4 flex flex-col gap-1">
          {sideLinks.map(({ tab, icon }) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gold/10 text-gold border-l-2 border-gold'
                  : 'text-bone-dim hover:text-bone hover:bg-white/3'
              }`}
            >
              <span className="text-lg w-6 text-center">{icon}</span>
              <span className="font-display text-xs tracking-widest uppercase">{tab}</span>
            </button>
          ))}

          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}>
            <Link
              href="/ordeals"
              className="flex items-center gap-3 px-4 py-3 text-bone-dim hover:text-gold transition-colors"
            >
              <span className="text-lg w-6 text-center">🗺</span>
              <span className="font-display text-xs tracking-widest uppercase">Gauntlet</span>
            </Link>
          </div>
        </nav>

        {/* User */}
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
        >
          <UserButton />
          <div className="min-w-0">
            <div className="font-display text-xs text-bone truncate">{redeemer.name}</div>
            <div className="font-body text-xs text-steel truncate">{redeemer.email}</div>
          </div>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────── */}
      <main className="ml-64 flex-1 min-h-screen">
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-8 h-16 sticky top-0 z-30"
          style={{ background: 'rgba(11,12,14,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(212,175,55,0.08)' }}
        >
          <div>
            <span className="font-display text-xs tracking-widest text-gold uppercase">{activeTab}</span>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="font-display text-xs px-3 py-1"
              style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', color: 'var(--gold)' }}
            >
              Rank I — Initiate
            </span>
          </div>
        </div>

        <div className="px-8 py-8">
          {/* ── Profile Tab ─────────────────────────── */}
          {activeTab === 'Profile' && (
            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Prestance ring */}
                <div className="relative w-40 h-40 shrink-0">
                  <svg width="160" height="160" viewBox="0 0 160 160">
                    <circle className="progress-ring-track" cx="80" cy="80" r="65" strokeWidth="8" />
                    <circle
                      className="progress-ring-fill"
                      cx="80" cy="80" r="65" strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={ringOffset}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1.2s ease' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-3xl font-black text-gold">{prestance}</span>
                    <span className="font-body text-xs text-steel">/ {maxPrestance} VMU</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-display text-3xl font-black text-bone mb-1">{redeemer.name}</div>
                  <div className="font-body text-bone-dim mb-1">{redeemer.email}</div>
                  <div className="font-display text-xs tracking-widest text-steel uppercase mb-6">
                    Redeemer since {redeemer.joinedAt}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Prestance', value: prestance.toString() },
                      { label: 'Ordeals', value: '12' },
                      { label: 'Rank', value: 'I' },
                      { label: 'Forge', value: 'Aether' },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="vex-card p-4 text-center"
                      >
                        <div className="font-display text-2xl font-black text-gold">{m.value}</div>
                        <div className="font-body text-xs text-steel uppercase mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="vex-card p-6">
                <h3 className="font-display text-sm tracking-widest text-gold uppercase mb-6">
                  Domain Progress
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { domain: 'Physical',    pct: 72, color: 'var(--gold)' },
                    { domain: 'Intellectual', pct: 58, color: '#E01814' },
                    { domain: 'Creative',    pct: 41, color: '#44474F' },
                    { domain: 'Ethical',     pct: 85, color: 'var(--gold)' },
                    { domain: 'Collective',  pct: 33, color: '#B8960A' },
                  ].map((d) => (
                    <div key={d.domain}>
                      <div className="flex justify-between mb-1">
                        <span className="font-display text-xs tracking-wide text-bone-dim uppercase">{d.domain}</span>
                        <span className="font-display text-xs text-gold">{d.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${d.pct}%`, background: d.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="vex-card p-6">
                <h3 className="font-display text-sm tracking-widest text-gold uppercase mb-6">
                  Recent Activity
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { dot: 'var(--gold)', text: 'Completed Sleep Sovereignty Ordeal', time: '2 days ago', vmu: '+47 VMU' },
                    { dot: '#E01814', text: 'Joined Forge: Project Aether',        time: '5 days ago', vmu: null },
                    { dot: 'var(--gold)', text: 'Completed Integrity Audit',           time: '1 week ago',  vmu: '+63 VMU' },
                    { dot: '#44474F', text: 'Governance vote cast: Proposal #003', time: '2 weeks ago', vmu: null },
                    { dot: 'var(--gold)', text: 'Completed Read 5 Founding Texts',     time: '3 weeks ago', vmu: '+89 VMU' },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-2 h-2 rounded-full mt-2 shrink-0"
                        style={{ background: a.dot }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-body text-sm text-bone-dim">{a.text}</div>
                        <div className="font-body text-xs text-steel mt-0.5">{a.time}</div>
                      </div>
                      {a.vmu && (
                        <div className="font-display text-xs text-gold shrink-0">{a.vmu}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Ordeals Tab ─────────────────────────── */}
          {activeTab === 'Ordeals' && (
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-black text-bone">Active Ordeals</h2>
                <Link href="/ordeals" className="btn-outline text-xs py-2 px-4">
                  Browse Gauntlet
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Chronicle of Civilization', domain: 'Intellectual', progress: 34, vmu: 847, days: 67 },
                  { name: 'Ascendant Body Protocol',   domain: 'Physical',     progress: 71, vmu: 312, days: 12 },
                ].map((o) => (
                  <div key={o.name} className="vex-card p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-display text-base font-bold text-bone">{o.name}</h3>
                        <span className="font-display text-xs text-gold tracking-wide">{o.domain}</span>
                      </div>
                      <span className="font-display text-xs px-2 py-1 text-gold" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                        {o.vmu} VMU
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-full rounded-full bg-gold" style={{ width: `${o.progress}%` }} />
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-xs text-steel">{o.progress}% complete</span>
                      <span className="font-body text-xs text-steel">{o.days} days remaining</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-display text-xl font-black text-bone mb-6">Completed</h2>
                <div className="vex-card overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(212,175,55,0.08)' }}>
                        {['Ordeal', 'Domain', 'VMU Earned', 'Completed'].map((h) => (
                          <th key={h} className="font-display text-xs tracking-widest text-steel uppercase text-left px-6 py-4">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Sleep Sovereignty',   domain: 'Physical',     vmu: 47,  date: '17 Apr 2026' },
                        { name: 'Integrity Audit',     domain: 'Ethical',      vmu: 63,  date: '10 Apr 2026' },
                        { name: 'Read 5 Founding Texts', domain: 'Intellectual', vmu: 89, date: '3 Apr 2026' },
                        { name: 'Gratitude Manifesto', domain: 'Creative',     vmu: 38,  date: '25 Mar 2026' },
                      ].map((row) => (
                        <tr
                          key={row.name}
                          style={{ borderBottom: '1px solid rgba(212,175,55,0.05)' }}
                          className="hover:bg-white/2 transition-colors"
                        >
                          <td className="font-body text-sm text-bone px-6 py-4">{row.name}</td>
                          <td className="font-display text-xs text-gold tracking-wide px-6 py-4">{row.domain}</td>
                          <td className="font-display text-sm text-gold px-6 py-4">+{row.vmu}</td>
                          <td className="font-body text-xs text-steel px-6 py-4">{row.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Forge Tab ───────────────────────────── */}
          {activeTab === 'Forge' && (
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-2xl font-black text-bone">Your Forge</h2>

              <div className="vex-card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="font-display text-xs tracking-widest text-gold uppercase mb-1">Active Forge</div>
                    <h3 className="font-display text-2xl font-black text-bone">Project Aether</h3>
                  </div>
                  <span
                    className="font-display text-xs px-3 py-1"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', color: 'var(--gold)' }}
                  >
                    8 Redeemers
                  </span>
                </div>
                <p className="font-body text-bone-dim leading-relaxed mb-6">
                  A collective forge focused on long-form intellectual work and civilizational thinking.
                  Currently tackling the Chronicle of Civilization collective ordeal.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Collective VMU', value: '4,820' },
                    { label: 'Active Ordeals', value: '3' },
                    { label: 'Forge Rank', value: 'II' },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-4" style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.1)' }}>
                      <div className="font-display text-xl font-black text-gold">{s.value}</div>
                      <div className="font-body text-xs text-steel uppercase mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="vex-card p-8 border-dashed" style={{ borderStyle: 'dashed', borderColor: 'rgba(212,175,55,0.15)', opacity: 0.6 }}>
                <div className="text-center">
                  <div className="font-display text-4xl text-steel mb-4">+</div>
                  <div className="font-display text-sm text-steel tracking-widest uppercase mb-2">Form New Forge</div>
                  <div className="font-body text-xs text-steel">Requires Rank II or higher</div>
                </div>
              </div>
            </div>
          )}

          {/* ── Governance Tab ──────────────────────── */}
          {activeTab === 'Governance' && (
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-2xl font-black text-bone">Governance</h2>

              <div className="flex flex-col gap-6">
                {[
                  {
                    id: '003',
                    title: 'Implement 7% VMU decay floor for active ordeals',
                    status: 'active',
                    ends: '3 days',
                    for: 67, against: 23, abstain: 10,
                  },
                  {
                    id: '002',
                    title: 'Open Physical domain to remote verification',
                    status: 'passed',
                    ends: null,
                    for: 78, against: 14, abstain: 8,
                  },
                  {
                    id: '001',
                    title: 'Establish Forge Council quorum requirements',
                    status: 'passed',
                    ends: null,
                    for: 91, against: 5, abstain: 4,
                  },
                ].map((p) => (
                  <div key={p.id} className="vex-card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="font-display text-xs text-steel uppercase mr-3">#{p.id}</span>
                        <span
                          className="font-display text-xs px-2 py-0.5"
                          style={{
                            background: p.status === 'active' ? 'rgba(212,175,55,0.1)' : 'rgba(68,71,79,0.3)',
                            border: `1px solid ${p.status === 'active' ? 'rgba(212,175,55,0.3)' : 'rgba(68,71,79,0.4)'}`,
                            color: p.status === 'active' ? 'var(--gold)' : '#44474F',
                          }}
                        >
                          {p.status.toUpperCase()}
                        </span>
                      </div>
                      {p.ends && (
                        <span className="font-body text-xs text-steel">Ends in {p.ends}</span>
                      )}
                    </div>
                    <h3 className="font-body text-bone mb-4">{p.title}</h3>
                    <div className="flex gap-2 h-2 rounded-full overflow-hidden mb-2">
                      <div className="bg-gold" style={{ width: `${p.for}%` }} />
                      <div className="bg-ember" style={{ width: `${p.against}%` }} />
                      <div className="bg-steel" style={{ width: `${p.abstain}%` }} />
                    </div>
                    <div className="flex gap-6 text-xs font-display">
                      <span className="text-gold">For {p.for}%</span>
                      <span className="text-ember">Against {p.against}%</span>
                      <span className="text-steel">Abstain {p.abstain}%</span>
                    </div>
                    {p.status === 'active' && (
                      <div className="flex gap-3 mt-4">
                        {(['For', 'Against', 'Abstain'] as const).map((v) => (
                          <button
                            key={v}
                            className="font-display text-xs tracking-widest uppercase px-4 py-2 border border-gold/20 text-bone-dim hover:text-gold hover:border-gold/40 transition-colors"
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Settings Tab ────────────────────────── */}
          {activeTab === 'Settings' && (
            <div className="flex flex-col gap-8 max-w-2xl">
              <h2 className="font-display text-2xl font-black text-bone">Settings</h2>

              <div className="vex-card p-6 flex flex-col gap-6">
                <h3 className="font-display text-sm tracking-widest text-gold uppercase">Notifications</h3>
                {[
                  { label: 'Ordeal reminders', sub: 'Receive reminders when Ordeals are due', on: true },
                  { label: 'Forge activity',   sub: 'Updates from your active Forge',         on: true },
                  { label: 'Governance votes', sub: 'Alerts for new governance proposals',     on: false },
                  { label: 'VMU decay alerts', sub: 'Notify when monthly decay approaches',   on: true },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between">
                    <div>
                      <div className="font-body text-sm text-bone">{n.label}</div>
                      <div className="font-body text-xs text-steel">{n.sub}</div>
                    </div>
                    <div
                      className={`w-10 h-5 rounded-full cursor-pointer transition-colors relative ${
                        n.on ? 'bg-gold' : 'bg-steel/30'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-4 h-4 rounded-full bg-obsidian transition-all ${
                          n.on ? 'left-5' : 'left-0.5'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="vex-card p-6 flex flex-col gap-4">
                <h3 className="font-display text-sm tracking-widest text-gold uppercase">Account</h3>
                <div>
                  <label className="font-display text-xs tracking-widest text-bone-dim uppercase block mb-2">
                    Display Name
                  </label>
                  <input
                    className="vex-input"
                    defaultValue={redeemer.name}
                    placeholder="Your display name"
                  />
                </div>
                <button className="btn-outline self-start text-xs py-2 px-6">
                  Update Profile
                </button>
              </div>

              <div
                className="vex-card p-6"
                style={{ borderColor: 'rgba(224,24,20,0.2)' }}
              >
                <h3 className="font-display text-sm tracking-widest text-ember uppercase mb-4">
                  Danger Zone
                </h3>
                <p className="font-body text-sm text-bone-dim mb-4">
                  Requesting exit from VexVor will forfeit all VMU and permanently end your Redeemer status.
                  This action is irreversible.
                </p>
                <button
                  className="font-display text-xs tracking-widest uppercase px-6 py-2 border border-ember/30 text-ember hover:bg-ember/10 transition-colors"
                >
                  Request Exit
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
