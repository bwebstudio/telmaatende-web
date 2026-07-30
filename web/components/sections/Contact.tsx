'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Field, SelectField, TextareaField } from '@/components/ui/Field'
import { ICON_STROKE } from '@/components/ui/Card'

type Status = 'idle' | 'sending' | 'success' | 'error'

// Formspree endpoint. Overridable via env var; the default keeps the form
// working without one (this ID is public — it travels in the browser anyway).
const endpoint =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? 'https://formspree.io/f/xnjewazz'

export function Contact({ c }: { c: Content }) {
  const [status, setStatus] = useState<Status>('idle')
  const configured = Boolean(endpoint && endpoint.trim().length > 0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)

    // With no form backend configured, fall back to the visitor's mail client,
    // pre-filled and addressed to the clinic inbox.
    if (!configured) {
      const get = (k: string) => (data.get(k) as string)?.trim() ?? ''
      const f = c.contact.fields
      const body = [
        `${f.name}: ${get('name')}`,
        `${f.clinic}: ${get('clinic')}`,
        `${f.phone}: ${get('phone')}`,
        `${f.email}: ${get('email')}`,
        `${f.plan}: ${get('plan')}`,
        '',
        `${f.message}:`,
        get('message'),
      ].join('\n')
      const subject = `${c.contact.label} — ${get('name') || 'Telma'}`
      window.location.href = `mailto:${c.footer.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  const required = c.contact.requiredLabel

  return (
    <Section id="contacto" tone="sunken">
      <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-10">
        <Reveal className="lg:col-span-4">
          <SectionHeader
            eyebrow={c.contact.label}
            title={c.contact.title}
            lead={c.contact.intro}
          />
          <p className="mt-8 flex items-center gap-3 text-ink-soft">
            <Mail
              size={18}
              strokeWidth={ICON_STROKE}
              aria-hidden
              className="shrink-0 text-brand-accent"
            />
            <span>
              {c.contact.directEmail}{' '}
              <a
                href={`mailto:${c.footer.email}`}
                className="font-medium text-ink underline decoration-line-strong decoration-1 underline-offset-4 transition-colors duration-fast ease-calm hover:decoration-brand-accent"
              >
                {c.footer.email}
              </a>
            </span>
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
          {status === 'success' ? (
            <p
              role="status"
              className="rounded-card border border-brand bg-brand-wash px-8 py-10 text-lg font-medium text-ink"
            >
              {c.contact.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label={c.contact.fields.name}
                  requiredLabel={required}
                  autoComplete="name"
                  required
                />
                <Field
                  id="clinic"
                  label={c.contact.fields.clinic}
                  requiredLabel={required}
                  autoComplete="organization"
                  required
                />
                <Field
                  id="phone"
                  type="tel"
                  label={c.contact.fields.phone}
                  requiredLabel={required}
                  autoComplete="tel"
                  required
                />
                <Field
                  id="email"
                  type="email"
                  label={c.contact.fields.email}
                  requiredLabel={required}
                  autoComplete="email"
                  required
                />
              </div>

              <SelectField
                id="plan"
                label={c.contact.fields.plan}
                requiredLabel={required}
                placeholder={c.contact.planPlaceholder}
                options={c.contact.planOptions}
              />

              <TextareaField
                id="message"
                label={c.contact.fields.message}
                requiredLabel={required}
              />

              {status === 'error' && (
                <p role="alert" className="font-medium text-ink">
                  {c.contact.error}
                </p>
              )}

              <Button type="submit" disabled={status === 'sending'} className="self-start">
                {status === 'sending' ? c.contact.sending : c.contact.submit}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
