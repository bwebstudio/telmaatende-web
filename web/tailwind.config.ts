import type { Config } from 'tailwindcss'

/**
 * Tailwind is a thin mapping over the CSS custom properties declared in
 * app/globals.css. Nothing here holds a literal colour, radius or duration —
 * change a token there and every utility follows.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
          hover: 'rgb(var(--brand-hover) / <alpha-value>)',
          // The lighter green — the one that may be read as text on a light
          // surface. Never use it for a label on the dark blocks.
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          wash: 'rgb(var(--brand-wash) / <alpha-value>)',
          'wash-strong': 'rgb(var(--brand-wash-strong) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          mute: 'rgb(var(--ink-mute) / <alpha-value>)',
        },
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          sunken: 'rgb(var(--surface-sunken) / <alpha-value>)',
        },
        line: {
          DEFAULT: 'rgb(var(--border) / <alpha-value>)',
          strong: 'rgb(var(--border-strong) / <alpha-value>)',
        },
        dark: {
          DEFAULT: 'rgb(var(--dark) / <alpha-value>)',
          soft: 'rgb(var(--dark-soft) / <alpha-value>)',
          line: 'rgb(var(--dark-line) / <alpha-value>)',
        },
      },
      fontWeight: {
        // Between Tailwind's medium and semibold, and only reachable because
        // DM Sans is a variable font. It is the weight the whole hierarchy turns
        // on: display type and every sub-heading use it, which is what keeps a
        // 17px title from reading at the same strength as the 16px paragraph
        // underneath it now that there is no serif to separate them.
        mid: '550',
      },
      fontFamily: {
        // One family for the entire interface, and the only one loaded. The
        // logotype's letterforms live inside its artwork, not in a webfont.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        input: 'var(--radius-input)',
        card: 'var(--radius-card)',
        hero: 'var(--radius-hero)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
        brand: 'var(--shadow-brand)',
      },
      transitionTimingFunction: {
        calm: 'var(--ease)',
      },
      transitionDuration: {
        fast: '320ms',
        DEFAULT: '520ms',
        slow: '800ms',
      },
      maxWidth: {
        // 1320px. Wider than the Bible's 1280 — at display sizes the extra
        // 40px is what lets the Spanish headline hold two lines at 80px.
        container: '82.5rem',
        // Measure caps, so a paragraph never runs past comfortable reading.
        prose: '36rem',
        lead: '42rem',
      },
      spacing: {
        // The 8px scale, extended upward for the section rhythm. 4 through 32
        // are Tailwind defaults already.
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        58: '14.5rem',
      },
      letterSpacing: {
        // Positive only for the small uppercase labels, which need it to stay
        // readable. Everything else is pulled in; a sans set at its natural
        // spacing looks loose at any size above body copy.
        label: '0.14em',
        display: '-0.02em',
        tight: '-0.014em',
        snug: '-0.008em',
      },
      fontSize: {
        // 18px body, per ch.5. Nothing smaller than 14px anywhere.
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        // A sans carries far more visual weight per point than the light serif
        // the site used to run, so every display size came down: a 96px headline
        // in a 300-weight serif and an 80px one in DM Sans 550 occupy roughly
        // the same amount of page.
        //
        // Leading went the other way. The serif ran at 1.01–1.06; DM Sans's
        // larger x-height needs more room or the lines lock together.
        //
        // The lower bounds are still set from a 320px screen, where the measure
        // is 272px and the Spanish headline is the longest of the three.
        h3: ['clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem)', { lineHeight: '1.4' }],
        h2: ['clamp(1.75rem, 1.1rem + 2.3vw, 3rem)', { lineHeight: '1.14' }],
        h1: ['clamp(2rem, 1.25rem + 3.2vw, 4rem)', { lineHeight: '1.1' }],
        hero: ['clamp(2rem, 1.1rem + 4.6vw, 5rem)', { lineHeight: '1.06' }],
      },
      keyframes: {
        'flow-step': {
          '0%, 4%': { opacity: '0', transform: 'translateY(10px)' },
          '12%, 100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
