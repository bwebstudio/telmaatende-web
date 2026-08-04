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

/**
 * One moment of the hero scene. A label and nothing else: the detail lines that
 * used to sit under each one turned the scene into an interface, which is the
 * one thing it must not be. The specifics live further down the page.
 */
export interface FlowStep {
  label: string
}

export interface Plan {
  id: string
  name: string
  /**
   * Who the plan is for, written as something the clinic can check against
   * itself without help: how many professionals, how many calls in a day. This
   * is the line that decides the sale, so it says a number, not an adjective.
   */
  audience: string
  // Monthly price as a plain number so annual pricing can be computed.
  // Use null for the custom "sob consulta" plan and fill priceText instead.
  priceMonthly: number | null
  priceText?: string
  /**
   * What the monthly price buys: one clinic, or a whole group. Sits next to the
   * price because "is this per location or in total?" is the first question
   * every multi site buyer asks, and the answer belongs where the number is.
   */
  priceUnit?: string
  /**
   * The metered allowance, in minutes of conversation. Minutes, not calls: the
   * cost of running Telma is per minute, and a plan sold in calls prices a two
   * minute booking the same as an eight minute one.
   */
  allowance?: string
  /** The same allowance in calls, so the clinic can picture it. */
  allowanceNote?: string
  /**
   * One time installation fee. It scales with the plan because the work does:
   * a two professional practice has fewer treatments to document, one schedule
   * instead of six and a smaller team to train. Null for the custom plan
   * (quoted). Free on annual plans, and payable in three parts on monthly ones.
   */
  installation: number | null
  /** What one location beyond those included costs. Multi site plan only. */
  extraSite?: string
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
    /** Describes the hero scene for anyone who cannot see it. */
    sceneAlt: string
    /**
     * The four moments the hero scene draws, in order. Four words carry the
     * whole product: a call arrives, it is answered, it becomes an appointment,
     * reception is told. Nothing else belongs on the first screen.
     */
    flow: {
      steps: FlowStep[]
    }
  }
  /**
   * The voice sample. Chapter 2 names "will it sound artificial?" as the first
   * objection a buyer has, and the recording answers it faster than any
   * paragraph can — so it sits second on the page, not buried in the FAQ.
   */
  voice: {
    label: string
    title: string
    lead: string
    play: string
    pause: string
    note: string
  }
  problem: {
    label: string
    title: string
    /** Describes the moving scene for anyone who cannot see it. */
    sceneAlt: string
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
    /** Tells the reader how to choose, without repeating the plans themselves. */
    chooseHint: string
    monthly: string
    annual: string
    annualBadge: string
    perMonth: string
    billedAnnually: string
    installFreeAnnual: string
    /**
     * Prefix for the instalment option, e.g. "or in three payments of". The
     * objection to an installation fee is usually when it is due, not what it
     * costs, so the answer belongs on the card next to the amount.
     */
    installSplit: string
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
  /** The closing invitation, on the dark surface, right before the footer. */
  finalCta: {
    title: string
    lead: string
    cta: string
    secondary: string
  }
  contact: {
    label: string
    title: string
    intro: string
    /** Localised word for "required", announced to screen readers. */
    requiredLabel: string
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
