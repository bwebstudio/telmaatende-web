import Image from 'next/image'
import { imageSlots, type ImageSlot, type ImageSlotId } from '@/lib/images'

const ratios = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
} as const

/**
 * A photograph, or the space one will occupy.
 *
 * Every image on the site is declared as a slot in lib/images.ts with its ratio
 * and its generation brief. Until a slot has a `src`, this renders a calm
 * tonal panel at the right aspect ratio — not a broken image, not a grey box
 * with a mountain icon. The layout is final either way, so no section ever
 * waits on art. Drop a file into /public, add the `src` to the slot, done.
 */
export function Figure({
  slot,
  className = '',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  rounded = 'card',
}: {
  slot: ImageSlotId
  className?: string
  priority?: boolean
  sizes?: string
  rounded?: 'card' | 'hero'
}) {
  // `satisfies` in lib/images.ts keeps the slot ids literal, which also means
  // each entry narrows to its own shape and loses the optional `src`. Widening
  // back to ImageSlot here is what lets a slot be filled in later.
  const meta: ImageSlot = imageSlots[slot]
  const radius = rounded === 'hero' ? 'rounded-hero' : 'rounded-card'

  return (
    <figure
      className={`relative w-full overflow-hidden ${radius} ${ratios[meta.ratio]} ${className}`}
    >
      {meta.src ? (
        <Image
          src={meta.src}
          alt={meta.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <Placeholder slot={slot} />
      )}
      {/* A hairline over the top of the photo so it sits on the page rather
          than being pasted onto it. It uses the palette border rather than a
          tint of ink: ink at 6% is a cool grey, and on a warm ground a cool
          hairline is visibly blue. */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${radius} ring-1 ring-inset ring-line-strong`}
      />
    </figure>
  )
}

/**
 * The waiting state. A soft green wash with a single quiet mark — it reads as
 * a deliberate tonal panel at a glance. In development it also names the
 * slot, so it is obvious which brief the image belongs to.
 */
function Placeholder({ slot }: { slot: ImageSlotId }) {
  return (
    <span
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-brand-wash"
      style={{
        backgroundImage:
          'radial-gradient(120% 90% at 25% 10%, rgba(255,255,255,0.9), rgba(255,255,255,0) 72%)',
      }}
    >
      <span className="flex flex-col items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-brand-accent" />
        {process.env.NODE_ENV !== 'production' && (
          <span className="text-label font-medium uppercase text-brand-accent/70">
            {slot}
          </span>
        )}
      </span>
    </span>
  )
}
