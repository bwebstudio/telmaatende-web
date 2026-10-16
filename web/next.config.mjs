/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * `next dev` and `next build` both write to `.next` by default, so running a
   * build while a dev server is up corrupts it: the dev server ends up serving
   * production server output against development client chunks, and React
   * reports it as a hydration mismatch in whichever component changed shape
   * most recently. The stack trace points at that component, which is
   * misleading — the component is fine, the directory is not.
   *
   * Setting NEXT_DIST_DIR sends a build somewhere else, so verification builds
   * can run against a live dev server without touching it:
   *
   *     NEXT_DIST_DIR=.next-verify npm run build
   */
  distDir: process.env.NEXT_DIST_DIR || '.next',

  /**
   * TWO SHAREABLE DOORS ON OUR OWN DOMAIN.
   *
   * The panel is a separate deployment and its own URL is a Vercel hostname
   * nobody would paste into an email to a clinic. These two paths are the
   * addresses we hand out; where they point can change without the address
   * changing with it.
   *
   *     telmaatende.com/onboarding  ->  the sign-up
   *     telmaatende.com/dashboard   ->  the sign-in
   *
   * The root is untouched: middleware.ts matches '/' alone and sends it to
   * /pt, so telmaatende.com is still the site.
   *
   * NOT permanent, and that is the whole point of writing them here rather
   * than in Vercel's dashboard. A 308 is cached by the browser for good: the
   * day the panel moves from a preview hostname to app.telmaatende.com, every
   * clinic that ever followed one of these would keep going to the old place
   * with no way for us to reach them. 307 costs a redirect per visit and buys
   * the right to change our minds.
   *
   * Unset means the panel is not deployed yet and neither path exists, which
   * is the same switch lib/signup.ts uses: a 404 is a better answer than a
   * redirect into nothing.
   */
  async redirects() {
    const panel = process.env.NEXT_PUBLIC_ONBOARDING_URL?.replace(/\/$/, '')
    if (!panel) return []
    return [
      { source: '/onboarding', destination: `${panel}/inscricao`, permanent: false },
      { source: '/dashboard', destination: `${panel}/login`, permanent: false },
    ]
  },
}

export default nextConfig
