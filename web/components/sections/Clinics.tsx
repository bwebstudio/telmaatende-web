import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { MediaSlot } from '@/components/ui/MediaSlot'

/**
 * Who it is for, as picture cards, after the reference's resource cards:
 * image, small mono label, name. It answers "is this for a clinic like mine?"
 * with a picture of a clinic like theirs, which no sentence does as fast.
 *
 * ── THE CARDS ARE PORTRAIT AND THE PHOTOGRAPHS ARE NOT ─────────────────────
 * A 4/5 card keeps barely half of a 3/2 frame, and which half decides whether
 * somebody recognises their own clinic. Three of these are composed around
 * their subject and survive the middle. The aesthetic one is not: its middle
 * is an empty corridor, and what names the speciality — the red counter, the
 * flowers, the shelf of products — is all on the right. So it holds right.
 */
const MEDIA: Record<
  Content['clinics']['items'][number]['id'],
  { src: string; focus?: string }
> = {
  dental: { src: '/images/for-dental.webp' },
  general: { src: '/images/for-general.webp' },
  aesthetic: { src: '/images/for-aesthetic.webp', focus: 'object-[88%_center]' },
  physio: { src: '/images/for-physio.webp' },
}

export function Clinics({ c }: { c: Content }) {
  return (
    <Section id="para-quem" tone="bg" rule>
      <SectionHeader eyebrow={c.clinics.label} title={c.clinics.title} lead={c.clinics.lead} align="center" />

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {c.clinics.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.id}
            delay={i * 80}
            className="group overflow-hidden rounded-[16px] border border-line bg-surface"
          >
            <MediaSlot
              src={MEDIA[item.id].src}
              alt=""
              focus={MEDIA[item.id].focus}
              className="aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="px-6 py-5">
              <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-[1.1875rem] font-medium tracking-tight text-ink">{item.name}</h3>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
