// Shared content shape for every language.
// To add a new language, create content/<lang>.ts implementing this same type
// and register it in content/index.ts. Nothing else needs to change.

export interface NavItem {
  label: string
  href: string
}

export interface ProblemItem {
  title: string
  text: string
}

export interface Step {
  n: string
  title: string
  text: string
}

export interface Plan {
  id: string
  name: string
  audience: string
  // Monthly price as a plain number so annual pricing can be computed.
  // Use null for the custom "sob consulta" plan and fill priceText instead.
  priceMonthly: number | null
  priceText?: string
  // One time installation fee for this plan, scaled to roughly one month of the
  // plan. Null for the custom plan (quoted). Free on annual plans.
  installation: number | null
  features: string[]
  highlighted?: boolean
  isCustom?: boolean
}

export interface IntegrationLevel {
  tag: string
  name: string
  badge: string
  badgeStrong?: boolean
  text: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface LegalPage {
  title: string
  updated: string
  intro: string
  sections: { heading: string; body: string[] }[]
  back: string
}

export interface Content {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  langSwitchLabel: string
  /** Label for the "skip to content" link that opens the page. */
  skipToContent: string
  header: {
    productBy: string
    nav: NavItem[]
    /** Accessible name for the main navigation landmark. */
    navLabel: string
    cta: string
  }
  hero: {
    name: string
    headlineLines: string[]
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    backedBy: string
    highlights: string[]
  }
  problem: {
    label: string
    title: string
    items: ProblemItem[]
  }
  how: {
    label: string
    title: string
    steps: Step[]
    note: string
  }
  agenda: {
    label: string
    title: string
    paragraphs: string[]
  }
  pricing: {
    label: string
    title: string
    intro: string
    monthly: string
    annual: string
    annualBadge: string
    perMonth: string
    billedAnnually: string
    installFreeAnnual: string
    mostChosen: string
    fromLabel: string
    installLabel: string
    whatsappCardNote: string
    planCta: string
    customCta: string
    plans: Plan[]
    whatsapp: {
      label: string
      name: string
      price: string
      priceNote: string
      features: string[]
    }
    finePrint: string[]
  }
  integrations: {
    label: string
    title: string
    levels: IntegrationLevel[]
    closing: string
  }
  faq: {
    label: string
    title: string
    showMore: string
    showLess: string
    items: FaqItem[]
  }
  contact: {
    label: string
    title: string
    intro: string
    fields: {
      name: string
      clinic: string
      phone: string
      email: string
      plan: string
      message: string
    }
    planPlaceholder: string
    planOptions: string[]
    submit: string
    sending: string
    success: string
    error: string
    notConfigured: string
    directEmail: string
  }
  footer: {
    tagline: string
    contactHeading: string
    email: string
    phone: string
    companyHeading: string
    companyText: string
    companyLinkLabel: string
    companyLink: string
    legalPlaceholder: string
    privacyLabel: string
    termsLabel: string
    rights: string
  }
  legal: {
    privacy: LegalPage
    terms: LegalPage
  }
}
