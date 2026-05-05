import Link from 'next/link'

export default function Footer() {
  const cols = [
    {
      title: 'The Project',
      links: [
        { label: 'The Codex', href: '/codex' },
        { label: 'The Prestance Economy', href: '/economy' },
        { label: 'The Forge', href: '/forge' },
        { label: 'Genesis Phasing', href: '/genesis' },
        { label: 'Apply (Phase I)', href: '/apply' },
      ],
    },
    {
      title: 'The Foundation',
      links: [
        { label: 'Stiftung Status', href: '/transparency#stiftung' },
        { label: 'Critic-in-Residence', href: '/codex#critic' },
        { label: 'Patrons', href: '/patrons' },
        { label: 'Press', href: '/transparency#press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Master Blueprint', href: '/transparency#blueprint' },
        { label: 'Transparency Pulse', href: '/transparency' },
        { label: 'Status', href: '/transparency#status' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/transparency#privacy' },
        { label: 'Terms of Entry', href: '/transparency#terms' },
        { label: 'Acceptable Use', href: '/transparency#aup' },
        { label: 'Cookie / CNIL', href: '/transparency#cookie' },
        { label: 'Accessibility', href: '/transparency#a11y' },
      ],
    },
  ]

  return (
    <footer
      className="pt-20 pb-12"
      style={{
        background: 'var(--void-black)',
        borderTop: '1px solid var(--ash-line)',
      }}
    >
      <div className="section-container">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div
              className="font-display"
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--field-white)',
              }}
            >
              VEXVOR
            </div>
            <div
              className="mt-1 mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.36em',
                textTransform: 'uppercase',
                color: 'var(--ash-soft)',
              }}
            >
              Being · Before · Having
            </div>
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.75,
                color: 'var(--ash-soft)',
                maxWidth: '32ch',
              }}
            >
              A standard against the Vortex. We are engineering a civilization where
              verifiable character — not visibility, not capital — generates the value.
            </p>
            <div
              className="mt-6"
              style={{ fontSize: '0.78rem', color: 'var(--ash-grey)', lineHeight: 1.7 }}
            >
              Stiftung in formation · Switzerland (canton TBD)
              <br />
              Operating under Swiss federal foundation law (Art. 80 ZGB)
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div
                  className="mb-5"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    color: 'var(--ash-soft)',
                  }}
                >
                  {col.title}
                </div>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--ash-grey)',
                          transition: 'color 0.2s ease',
                          fontWeight: 300,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--field-white)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ash-grey)')}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclosure block */}
        <div className="disclosure-block mb-8" style={{ maxWidth: '64ch' }}>
          VexVor is fallible. We have engineered governance, kill-switches, and an
          appeals process precisely because we expect to be wrong, sometimes. If we
          are, we want you to be able to prove it — and for the system to learn.
        </div>

        {/* Bottom row */}
        <div
          className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
          style={{ borderTop: '1px solid var(--ash-mute)' }}
        >
          <p style={{ fontSize: '0.78rem', color: 'var(--ash-grey)', lineHeight: 1.7 }}>
            © {new Date().getFullYear()} VexVor. All rights reserved.
            <br />
            Policy checksum family: hash_policy_v6 · Effective 2025-08-19
          </p>
          <div className="flex justify-center">
            <Link
              href="https://kiyasha.group"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--ash-soft)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--field-white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ash-soft)')}
            >
              Member of Kiyasha Group
            </Link>
          </div>
          <p
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--ash-soft)',
              textAlign: 'right',
            }}
          >
            L'être avant l'avoir
          </p>
        </div>
      </div>
    </footer>
  )
}
