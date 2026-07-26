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
        // Brand anchor: a strong terracotta ("barro") + near-black ink, on a
        // cream base — the fixed identity that lets us layer softer colours,
        // photos and motion without ever losing the brand (the GoDaddy trick,
        // where turquoise + black anchor everything). Terracotta is THE colour:
        // every icon and primary accent uses it.
        paper: '#F6F2EA',
        'paper-2': '#EFE9DC',
        ink: '#141210',
        'ink-soft': '#4A433B',
        'ink-mute': '#6F6759',
        // Signature terracotta. #B8461F clears WCAG AA (~4.85:1) for small text
        // on cream, so it is safe for the eyebrow labels and icons too.
        accent: '#B8461F',
        'accent-dark': '#983814',
        'accent-light': '#E68A5C',
        // Soft tinted card washes — the "many colours" that sit under the
        // terracotta anchor. Muted so the brand colour always leads.
        'wash-peach': '#F7E6DC',
        'wash-sage': '#E4EDE7',
        'wash-sand': '#EFE9DC',
        // Deep pine, the dark "trust" surface for inverted blocks.
        pine: '#17352A',
        'pine-soft': '#244A3B',
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
        content: '86rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
