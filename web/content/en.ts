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
  skipToContent: 'Skip to content',
  header: {
    productBy: 'a Bweb Studio product',
    navLabel: 'Main',
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
    sceneAlt:
      'A clinic reception counter early in the morning: a desk phone, an open appointment book with a booking written in, and light coming through the window.',
    flow: {
      steps: [
        { label: 'Incoming call' },
        { label: 'Telma answers' },
        { label: 'Appointment booked' },
        { label: 'Summary sent' },
      ],
    },
  },
  voice: {
    label: 'Hear her',
    title: 'This is how Telma answers.',
    lead: 'A real call, unedited. It is the fastest way to answer the question everybody asks first.',
    play: 'Listen to the call',
    pause: 'Pause',
    note: 'If a patient asks directly, Telma answers honestly that she is a virtual assistant.',
  },
  problem: {
    label: 'The problem',
    sceneAlt:
      'An empty clinic reception counter, the phone resting unanswered, morning light crossing the wall.',
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
    chooseHint:
      'To find yours, count the calls your clinic takes on an ordinary day.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualBadge: '2 months free',
    perMonth: '/mo',
    billedAnnually: 'billed annually',
    installFreeAnnual: 'Free installation',
    mostChosen: 'Most chosen',
    fromLabel: 'was',
    installLabel: 'Installation',
    whatsappCardNote: 'Add WhatsApp for +49€/mo',
    planCta: 'Talk to us',
    customCta: 'Talk to us',
    plans: [
      {
        id: 'essencial',
        name: 'Essencial',
        audience: 'Practices with 1 to 2 professionals, up to 8 calls a day',
        priceMonthly: 99,
        priceUnit: 'per clinic',
        allowance: '250 minutes of conversation per month',
        allowanceNote: 'around 100 calls',
        installation: 290,
        features: [
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
        audience: 'Clinics with up to 6 professionals, up to 25 calls a day',
        priceMonthly: 249,
        priceUnit: 'per clinic',
        allowance: '750 minutes of conversation per month',
        allowanceNote: 'around 300 calls',
        installation: 290,
        highlighted: true,
        features: [
          'Everything in Essencial',
          'Personalised voice',
          'Monthly call report',
          'Phone support during office hours',
        ],
      },
      {
        id: 'rede',
        name: 'Rede',
        audience: 'Groups with two or more locations, up to five',
        priceMonthly: 599,
        priceUnit: 'per group, includes 3 locations',
        allowance: '2,000 minutes of conversation per month',
        allowanceNote: 'around 800 calls, shared across the locations',
        installation: 290,
        installExtra: 'plus 190€ for each location beyond the first',
        extraSite: 'Each location beyond the three: 149€ per month, with 500 more minutes.',
        features: [
          'Everything in Clínica',
          'Every location in one dashboard, one contract and one invoice',
          'Each location with its own number and its own schedule',
          'Priority support',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'For groups with more than 5 locations or over 2,000 minutes per month',
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
      price: '+49€',
      priceNote: 'per month, on any plan',
      features: [
        'Automatic appointment confirmations and reminders',
        'The patient can write to book, reschedule or cancel',
        'Telma replies and handles the booking',
        'Up to 1,000 messages per month',
      ],
    },
    finePrint: [
      'Installation: 290€ per clinic, plus 190€ for each additional location. Free on annual plans.',
      'Additional minutes: 0.35€ per minute. We warn you before you reach the limit.',
      'A booking call lasts two to three minutes on average.',
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
        q: 'I am a small clinic. Which plan do I choose?',
        a: 'Essencial. It is the plan for a practice with one or two professionals taking up to eight calls a day. If you regularly go beyond that, Clínica works out cheaper than Essencial plus additional minutes.',
      },
      {
        q: 'I have five locations. Which plan is mine, and do I pay per location or in total?',
        a: 'Your plan is Rede, and you pay in total, not per location. Rede is 599€ per month and includes three locations; the remaining two are 149€ each, so 897€ per month for all five. One contract, one invoice and every location in the same dashboard, each with its own number and its own schedule.',
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
        q: 'Is the price per clinic or per professional?',
        a: 'Per clinic. We do not charge per professional or per dashboard user. On Essencial and Clínica the price is for one clinic at one address. On Rede it is for a group with several addresses.',
      },
      {
        q: 'Why are the plans in minutes rather than calls?',
        a: 'Because that is how Telma costs. A call asking about opening hours lasts twenty seconds and a booking with a reschedule lasts six minutes; counting them the same would mean charging everyone more. In minutes, each clinic pays for what it uses. For reference, a booking call lasts two to three minutes on average.',
      },
      {
        q: 'What happens if I go over the minutes in my plan?',
        a: 'Additional minutes are charged at 0.35€ each. Telma never stops answering because of the limit, and we warn you before you reach it. If it happens regularly, we suggest the next plan up.',
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
  finalCta: {
    title: 'Keep your clinic running, even when nobody can pick up the phone.',
    lead: 'We will show you Telma using your own schedule and opening hours. No commitment.',
    cta: 'Talk to us',
    secondary: 'See pricing',
  },
  contact: {
    label: 'Contact',
    title: 'Let us talk about your clinic.',
    intro: 'Leave your details and we will get in touch to show you Telma.',
    requiredLabel: 'required',
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
