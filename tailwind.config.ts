import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian:   '#0B0C0E',
        steel:      '#44474F',
        gold:       '#D4AF37',
        'gold-dim': '#8A6E1A',
        'gold-bright': '#E8C84A',
        bone:       '#FAFAF7',
        ember:      '#E01814',
        'bone-dim': '#C4C4C0',
        charcoal:   '#1A1B1F',
        'charcoal2':'#141518',
      },
      fontFamily: {
        display: ['var(--font-unbounded)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
    },
  },
  plugins: [],
}

export default config
