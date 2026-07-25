'use client'

import { useState } from 'react'
import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

type Status = 'idle' | 'sending' | 'success' | 'error'

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

export function Contact({ c }: { c: Content }) {
  const [status, setStatus] = useState<Status>('idle')
  const configured = Boolean(endpoint && endpoint.trim().length > 0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!configured || status === 'sending') return

    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(endpoint as string, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 border-t border-line bg-paper-2 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <FadeIn>
            <Eyebrow>{c.contact.label}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {c.contact.title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">{c.contact.intro}</p>
            <p className="mt-6 text-base text-ink-mute">
              {c.contact.directEmail}{' '}
              <a href={`mailto:${c.footer.email}`} className="link-underline">
                {c.footer.email}
              </a>
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            {!configured && (
              <p
                role="note"
                className="mb-6 rounded-lg border border-line-strong bg-paper px-4 py-3 text-base text-ink-soft"
              >
                {c.contact.notConfigured}
              </p>
            )}

            {status === 'success' ? (
              <p
                role="status"
                className="rounded-lg border border-accent bg-paper px-5 py-6 text-lg font-medium text-ink"
              >
                {c.contact.success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    name="name"
                    label={c.contact.fields.name}
                    autoComplete="name"
                    required
                  />
                  <Field
                    id="clinic"
                    name="clinic"
                    label={c.contact.fields.clinic}
                    autoComplete="organization"
                    required
                  />
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    label={c.contact.fields.phone}
                    autoComplete="tel"
                    required
                  />
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    label={c.contact.fields.email}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="plan" className="text-base font-medium text-ink">
                    {c.contact.fields.plan}
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    defaultValue=""
                    className="min-h-[3rem] rounded-lg border border-line-strong bg-paper px-4 text-base text-ink focus:border-accent"
                  >
                    <option value="" disabled>
                      {c.contact.planPlaceholder}
                    </option>
                    {c.contact.planOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-base font-medium text-ink">
                    {c.contact.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="rounded-lg border border-line-strong bg-paper px-4 py-3 text-base text-ink focus:border-accent"
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-base font-medium text-accent">
                    {c.contact.error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!configured || status === 'sending'}
                  className="btn-primary self-start disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'sending' ? c.contact.sending : c.contact.submit}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function Field({
  id,
  name,
  label,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base font-medium text-ink">
        {label}
        {required && (
          <span className="text-accent" aria-hidden>
            {' '}
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="min-h-[3rem] rounded-lg border border-line-strong bg-paper px-4 text-base text-ink focus:border-accent"
      />
    </div>
  )
}
