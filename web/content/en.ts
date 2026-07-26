import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Telma Atende: the receptionist who answers when no one can',
    description:
      'Telma is a voice receptionist that answers your clinic phone, answers patient questions using your clinic information, books appointments and hands the call to a real person when it is urgent. For dental and aesthetic clinics in Portugal.',
    ogTitle: 'Telma Atende',
    ogDescription: 'No missed calls. No lost patients.',
  },
  langSwitchLabel: 'Language',
  header: {
    productBy: 'a Bweb Studio product',
    nav: [
      { label: 'How it works', href: '#como-funciona' },
      { label: 'Pricing', href: '#precos' },
      { label: 'Integrations', href: '#integracoes' },
      { label: 'Questions', href: '#perguntas' },
    ],
    cta: 'Talk to us',
  },
  hero: {
    name: 'Telma',
    headlineLines: ['No missed calls.', 'No lost patients.'],
    subtitle:
      "Telma is your clinic's virtual receptionist. She answers the phone, replies to patient questions, books appointments and transfers to the front desk when needed.",
    ctaPrimary: 'See pricing',
    ctaSecondary: 'Talk to us',
    backedBy: 'a Bweb Studio product',
  },
  problem: {
    label: 'The problem',
    title: 'Every call that goes unanswered is a patient calling another clinic.',
    items: [
      {
        title: 'Missed calls while you help a patient',
        text: 'The front desk is helping someone at the counter and the phone rings. No one can pick up and the call is lost.',
      },
      {
        title: 'Calls outside opening hours',
        text: 'After hours, at weekends and on public holidays the phone keeps ringing. And the caller needs an appointment.',
      },
      {
        title: 'An overloaded front desk',
        text: 'Between the counter, the phone and the schedule, the team is juggling. Something always ends up slipping.',
      },
    ],
  },
  how: {
    label: 'How it works',
    title: 'Simple, from the first ring to the final summary.',
    steps: [
      {
        n: '01',
        title: 'The call comes into the clinic',
        text: 'Everything stays the same. The patient calls the usual number.',
      },
      {
        n: '02',
        title: 'If no one answers, Telma answers',
        text: "When the front desk cannot pick up, the call goes to Telma. She answers in a natural voice and replies to the patient's questions using your clinic information.",
      },
      {
        n: '03',
        title: 'Telma books the appointment',
        text: 'Telma understands what the patient needs and books the appointment within the hours the clinic has set.',
      },
      {
        n: '04',
        title: 'The front desk gets a summary of every call',
        text: 'At the end of each call, the front desk receives a written summary of what was agreed.',
      },
    ],
    note: 'In case of an emergency, or if the patient asks, Telma passes the call to a real person.',
  },
  agenda: {
    label: 'The schedule',
    title: 'Your schedule stays yours.',
    paragraphs: [
      'The clinic sets which hours Telma can offer. Telma only offers those. There can never be an overlap with what the front desk books by hand.',
      'By default, Telma leaves a provisional booking that the clinic confirms. When calendar sync is in place, Telma can confirm directly.',
    ],
  },
  pricing: {
    label: 'Plans and pricing',
    title: 'Choose the plan for your clinic.',
    intro: 'No minimum term. Cancel whenever you want.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualBadge: '2 months free',
    perMonth: '/mo',
    billedAnnually: 'billed annually',
    installFreeAnnual: 'Free installation',
    mostChosen: 'Most chosen',
    fromLabel: 'was',
    installLabel: 'Installation',
    whatsappCardNote: 'Add WhatsApp for +39€/mo',
    planCta: 'Talk to us',
    customCta: 'Talk to us',
    plans: [
      {
        id: 'essencial',
        name: 'Essencial',
        audience: 'For practices with 1 to 2 professionals',
        priceMonthly: 99,
        installation: 99,
        features: [
          'Up to 250 calls per month',
          '24 hour answering',
          'Answers questions using your clinic information',
          'Automatic appointment booking',
          'Transfer to a real person',
          'A summary of every call by email',
        ],
      },
      {
        id: 'clinica',
        name: 'Clínica',
        audience: 'For clinics with up to 6 professionals',
        priceMonthly: 199,
        installation: 149,
        highlighted: true,
        features: [
          'Up to 600 calls per month',
          'Everything in Essencial',
          'Personalised voice',
          'Monthly call report',
        ],
      },
      {
        id: 'rede',
        name: 'Rede',
        audience: 'For clinics with several locations',
        priceMonthly: 399,
        installation: 249,
        features: [
          'Up to 1,500 calls per month',
          'Everything in Clínica',
          'Several locations in a single dashboard',
          'Priority support',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'For groups with more than 1,500 calls per month',
        priceMonthly: null,
        priceText: 'on request',
        installation: null,
        isCustom: true,
        features: [],
      },
    ],
    whatsapp: {
      label: 'Add-on',
      name: 'Telma on WhatsApp',
      price: '+39€',
      priceNote: 'per month, on any plan',
      features: [
        'Automatic appointment confirmations and reminders',
        'The patient can write to book, reschedule or cancel',
        'Telma replies and handles the booking',
      ],
    },
    finePrint: [
      'Installation: 99€ (Essencial), 149€ (Clínica), 249€ (Rede), free on annual plans.',
      'Additional calls: 0.35€ per call.',
      'Prices exclude VAT.',
      'No minimum term.',
    ],
  },
  integrations: {
    label: 'Integrations',
    title: 'It connects to your system.',
    levels: [
      {
        tag: 'Level 1',
        name: 'Works with any system',
        badge: 'Included in every plan',
        badgeStrong: true,
        text: 'Nothing needs to change. Telma records bookings in a shared calendar and sends the front desk a summary of every call by email or WhatsApp. The front desk copies the booking into the clinic software in seconds.',
      },
      {
        tag: 'Level 2',
        name: 'Calendar sync',
        badge: 'Included where available',
        text: 'If the clinic software syncs with Google Calendar or exports iCal, bookings appear directly in the existing schedule.',
      },
      {
        tag: 'Level 3',
        name: 'Direct API integration',
        badge: 'Separate project',
        text: 'For clinics whose software offers an API. We review the case and provide a quote.',
      },
    ],
    closing:
      'In most clinics we start at Level 1 on day one. There is no need to wait for integrations.',
  },
  faq: {
    label: 'Frequently asked questions',
    title: 'Frequently asked questions.',
    showMore: 'Show all questions',
    showLess: 'Show less',
    items: [
      {
        q: 'Can the patient tell they are talking to a virtual assistant?',
        a: 'The voice is very natural. If the patient asks directly, Telma answers honestly that she is a virtual assistant.',
      },
      {
        q: 'Can Telma answer questions about the clinic?',
        a: 'Yes. Telma answers the most common patient questions using your clinic information: opening hours, address, parking, treatments and how to prepare for an appointment. When needed, she passes the call to the front desk.',
      },
      {
        q: 'What if it is an emergency?',
        a: 'Telma detects urgent situations and passes the call straight to the clinic.',
      },
      {
        q: 'Can Telma book two appointments at the same time?',
        a: 'No. The clinic sets the hours Telma can offer, and she only offers those.',
      },
      {
        q: 'Do I have to change the clinic phone number?',
        a: 'No. You keep your number. Unanswered calls are forwarded to Telma.',
      },
      {
        q: 'How long does installation take?',
        a: 'Usually between 3 and 5 working days.',
      },
      {
        q: 'Does Telma speak English?',
        a: 'Yes, she answers in Portuguese and in English.',
      },
      {
        q: 'What happens if I go over the calls in my plan?',
        a: 'Additional calls are charged at 0.35€ each. We warn you before you reach the limit.',
      },
      {
        q: 'Can I listen to the calls?',
        a: 'Yes. You get a written summary of every call and you can access the recordings.',
      },
      {
        q: 'How does data protection work?',
        a: 'We comply with the GDPR. Calls are recorded with prior notice to the patient and the data is hosted in the European Union.',
      },
      {
        q: 'Do I need to install software?',
        a: "No. Telma works over the clinic's current phone line.",
      },
      {
        q: 'What exactly does Telma do on WhatsApp?',
        a: 'Two things: she sends automatic confirmations and reminders, and she lets the patient write to book, reschedule or cancel.',
      },
      {
        q: 'Can I cancel whenever I want?',
        a: 'Yes, there is no minimum term.',
      },
      {
        q: 'Does it work for aesthetic clinics?',
        a: 'Yes. It works in any clinic that takes bookings by phone.',
      },
      {
        q: 'Who is behind Telma?',
        a: 'Telma is a product by Bweb Studio, a software studio with experience in digital products.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Let us talk about your clinic.',
    intro: 'Leave your details and we will get in touch to show you Telma.',
    fields: {
      name: 'Name',
      clinic: 'Clinic',
      phone: 'Mobile',
      email: 'Email',
      plan: 'Plan of interest',
      message: 'Message',
    },
    planPlaceholder: 'Choose a plan',
    planOptions: ['Essencial', 'Clínica', 'Rede', 'Personalizado', 'Telma on WhatsApp'],
    submit: 'Send',
    sending: 'Sending...',
    success: 'We have your request. We will be in touch soon.',
    error: 'We could not send it. Please try again or email us.',
    notConfigured:
      'The form is not configured yet. Set the NEXT_PUBLIC_CONTACT_ENDPOINT variable or email us directly.',
    directEmail: 'Or write to',
  },
  footer: {
    tagline: 'Telma answers when no one can.',
    contactHeading: 'Contact',
    email: 'ola@telmaatende.com',
    phone: '+351 000 000 000',
    companyHeading: 'Company',
    companyText: 'Telma is a Bweb Studio product.',
    companyLinkLabel: 'bwebstudio.com',
    companyLink: 'https://bwebstudio.com',
    legalPlaceholder:
      'Reserved space for tax number, address and registered company name (to be filled in before publishing).',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms',
    rights: 'All rights reserved.',
  },
  legal: {
    privacy: {
      title: 'Privacy Policy',
      updated: 'Placeholder content. To be reviewed by the company before publishing.',
      intro:
        'This text is a placeholder and is not the final policy. It describes, in general terms, how Telma handles personal data in line with the GDPR.',
      sections: [
        {
          heading: 'Data controller',
          body: [
            'To be filled in with the registered company name, tax number and address of Bweb Studio.',
            'Contact for privacy matters: to be defined.',
          ],
        },
        {
          heading: 'Data we handle',
          body: [
            'Contact details submitted in the form: name, clinic, mobile, email and message.',
            'Call recordings and summaries, when the service is active, with prior notice to the patient.',
          ],
        },
        {
          heading: 'Where the data lives',
          body: ['The data is hosted in the European Union.'],
        },
        {
          heading: 'Your rights',
          body: [
            'You can request access to, correction of, or deletion of your data. The channel and response time are to be defined.',
          ],
        },
      ],
      back: 'Back to home',
    },
    terms: {
      title: 'Terms',
      updated: 'Placeholder content. To be reviewed by the company before publishing.',
      intro:
        'This text is a placeholder and is not the final terms of service. It will be replaced by the legal version before publishing.',
      sections: [
        {
          heading: 'The service',
          body: [
            'Telma is a voice receptionist for clinics. The exact scope of the service is set in the contract.',
          ],
        },
        {
          heading: 'Plans and payment',
          body: [
            'The prices shown on the site are indicative and exclude VAT.',
            'The final billing terms are set in the commercial proposal.',
          ],
        },
        {
          heading: 'Cancellation',
          body: ['There is no minimum term. You can cancel whenever you want.'],
        },
      ],
      back: 'Back to home',
    },
  },
}
