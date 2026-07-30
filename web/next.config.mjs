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
}

export default nextConfig
