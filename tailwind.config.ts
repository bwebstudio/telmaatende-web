import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, human palette. Cream base and near black ink for reading, a deep
        // pine green as the premium "trust" surface, and a terracotta accent.
        // Pine + terracotta + cream reads sophisticated and health adjacent,
        // not a generic SaaS look.
        paper: '#F6F2EA',
        'paper-2': '#EFE9DC',
        ink: '#14110E',
        'ink-soft': '#4A433B',
        'ink-mute': '#6F6759',
        // Terracotta accent, darkened slightly from #B4522F so small text and
        // button labels clear WCAG AA (>= 4.5:1) on both cream surfaces
        // (paper 5.1:1, paper-2 4.7:1).
        accent: '#A94A27',
        'accent-dark': '#8C3D1E',
        'accent-light': '#E38A5C',
        pine: '#1B3A2E',
        'pine-soft': '#264C3D',
        sage: '#9FB6A6',
        line: '#DCD3C1',
        'line-strong': '#C6BBA4',
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Nothing below 16px anywhere on the page.
        base: ['1rem', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        content: '68rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
