import localFont from 'next/font/local'

// Headlines: Clash Display, a confident geometric grotesque display face in the
// spirit of the type modern product companies use (Linear, Vercel, Stripe).
// Self hosted from Fontshare, no third party request. Strong character, tight
// and contemporary, clearly not a default system look.
export const display = localFont({
  variable: '--font-display',
  display: 'swap',
  src: [
    { path: '../public/fonts/ClashDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
  ],
})

// Body: General Sans, a grotesque that is not Inter. Self hosted from Fontshare.
export const grotesk = localFont({
  variable: '--font-grotesk',
  display: 'swap',
  src: [
    { path: '../public/fonts/GeneralSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/GeneralSans-Semibold.woff2', weight: '600', style: 'normal' },
  ],
})
