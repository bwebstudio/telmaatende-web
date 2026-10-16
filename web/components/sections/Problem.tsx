import type { Content } from '@/content'
import { Eyebrow, Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The three ways a clinic loses a call, as a bento of grey panels: one wide,
 * two beside each other underneath, after the reference's figures section.
 * There are no figures here, on purpose. Telma has no measured numbers yet, so
 * the large type carries the situation itself, which a clinic recognises at a
 * glance, instead of a statistic nobody can stand behind.
 */
export function Problem({ c }: { c: Content }) {
  const [first, ...rest] = c.problem.items

  return (
    <Section id="problema" tone="bg">
      {/* The claim stays for screen readers and search, but not on screen: the
          bento below says the same thing at a much larger size, and stating it
          twice in a row was one heading too many. */}
      <h2 className="sr-only">{c.problem.title}</h2>
      <Eyebrow>{c.problem.label}</Eyebrow>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal className="lg:col-span-2">
          <article className="panel-grey grid gap-10 rounded-[24px] p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:p-16">
            <h3 className="display text-[2.25rem] leading-[1.05] text-ink sm:text-[3rem] lg:text-[4rem]">
              {first.title}
            </h3>
            <p className="max-w-[30ch] text-[1.25rem] leading-snug text-ink sm:text-[1.5rem]">
              {first.text}
            </p>
          </article>
        </Reveal>

        {rest.map((item, i) => (
          <Reveal key={i} delay={(i + 1) * 90}>
            <article className="panel-grey flex h-full min-h-[18rem] flex-col justify-between gap-12 rounded-[24px] p-8 sm:p-12">
              <h3 className="display text-[1.875rem] leading-[1.08] text-ink sm:text-[2.5rem]">
                {item.title}
              </h3>
              <p className="max-w-[36ch] text-[1.125rem] leading-snug text-ink">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
