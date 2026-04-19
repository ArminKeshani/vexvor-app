import { SignIn } from '@clerk/nextjs'
import SpiralAnimation from '@/components/SpiralAnimation'

export default function SignInPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--obsidian)' }}>
      {/* Background spiral */}
      <div className="absolute inset-0 opacity-35">
        <SpiralAnimation seed={9999} starCount={2000} mouseInfluence={0.5} />
      </div>

      {/* Deep vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, rgba(11,12,14,0.88) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 w-full px-4 py-16">
        {/* Logo + wordmark */}
        <div className="text-center">
          <a
            href="/"
            className="font-display font-black tracking-widest gold-text"
            style={{ fontSize: '1.6rem', letterSpacing: '0.3em' }}
          >
            VEXVOR
          </a>
          <p
            className="font-display uppercase mt-2"
            style={{ fontSize: '0.58rem', letterSpacing: '0.4em', color: 'var(--steel)' }}
          >
            Return to the Forge
          </p>
          <div className="gold-divider mt-4 mx-auto" />
        </div>

        {/* Clerk Sign In — no deprecated redirectUrl prop */}
        <SignIn
          appearance={{
            elements: {
              rootBox: 'w-full max-w-md',
              card: 'shadow-2xl',
            },
          }}
          signUpUrl="/sign-up"
        />

        <p className="font-body text-xs" style={{ color: 'var(--steel)', fontWeight: 300 }}>
          Not a Redeemer yet?{' '}
          <a href="/#apply" style={{ color: 'var(--gold)' }}>
            Request Entry
          </a>
        </p>
      </div>
    </div>
  )
}
