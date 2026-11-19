import { existsSync } from 'node:fs'
import path from 'node:path'

/**
 * Whether a file under /public is actually there, checked when the page is
 * built.
 *
 * The hotel page names its photographs before they exist: they are generated
 * outside the repo and dropped into public/images/hoteis when ready. Until a
 * file lands, the slot it would fill renders without it (or the section waits),
 * so the page can be shared today and fills in by itself on the next deploy,
 * with no code change and never with a clinic's photograph in a hotel's page.
 */
export function publicFile(src: string): string | null {
  return existsSync(path.join(process.cwd(), 'public', src)) ? src : null
}
