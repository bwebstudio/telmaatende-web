/**
 * Where the sign-up lives.
 *
 * The wizard is not part of this site. It needs a database, a login and a
 * payment provider, and this site deliberately has none of those: it is a
 * static marketing page with a contact form and nothing behind it. So the
 * sign-up runs in the panel app, and the landing links to it.
 *
 * Unset means "not launched yet", and every call site falls back to the contact
 * form. That is not a placeholder: talking to somebody first is a real funnel
 * for a clinic, and it is the one that exists today. Setting the variable is
 * what turns the page from "ask us" into "start now", and it should be set on
 * purpose rather than by default.
 */
const BASE = process.env.NEXT_PUBLIC_ONBOARDING_URL?.replace(/\/$/, '')

/** Null when self sign-up is not switched on. */
export function signupUrl(plan?: string): string | null {
  if (!BASE) return null
  return plan ? `${BASE}/inscricao?plano=${encodeURIComponent(plan)}` : `${BASE}/inscricao`
}

export function signupEnabled(): boolean {
  return Boolean(BASE)
}
