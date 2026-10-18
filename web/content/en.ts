import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Telma Atende: the receptionist who answers when no one can',
    description:
      'Telma is a virtual receptionist for clinics. She answers calls, handles patient questions and appointments, and transfers calls to your team when needed.',
    ogTitle: "Telma Atende: your clinic's virtual receptionist",
    ogDescription:
      'Telma is a virtual receptionist for clinics. She answers calls, handles patient questions and appointments, and transfers calls to your team when needed.',
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
    signIn: 'Sign in',
    signUp: 'Create an account',
  },
  hero: {
    name: 'Telma',
    headlineLines: ['Telma answers', 'when no one can.'],
    eyebrow: 'Virtual receptionist for clinics',
    subtitle:
      'Answers calls, handles patient questions and manages appointments when your front desk cannot.',
    ctaPrimary: 'See pricing',
    ctaSecondary: 'Talk to us',
    sceneAlt:
      'A clinic reception counter early in the morning: a desk phone, an open appointment book with a booking written in, and light coming through the window.',
    flow: {
      steps: [
        { label: 'Incoming call' },
        { label: 'Telma answers' },
        { label: 'Appointment booked' },
        { label: 'Summary ready' },
      ],
    },
  },
  voice: {
    label: 'Hear her',
    title: 'This is how Telma answers.',
    lead: 'A real call, unedited. Hear how Telma handles a patient call.',
    play: 'Listen to the call',
    pause: 'Pause',
    note: 'If the patient asks, Telma explains that she is the clinic\u2019s virtual assistant.',
  },
  problem: {
    label: 'The problem',
    sceneAlt:
      'An empty clinic reception counter, the phone resting unanswered, morning light crossing the wall.',
    title: 'When the front desk cannot answer, some calls go unanswered.',
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
        text: 'Telma identifies the reason for the call and books the appointment within the hours the clinic has set.',
      },
      {
        n: '04',
        title: 'The front desk has a summary of every call',
        text: 'At the end of each call a written summary of what was agreed is waiting in the clinic dashboard.',
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
      'Everything is managed from the clinic dashboard, included with every plan. You can set available hours, block holidays and time off, confirm appointments and review calls. The dashboard updates in real time and works on desktop, tablet and mobile.',
    ],
    preview: { heading: 'Schedule', day: 'Tuesday', confirmed: 'Confirmed', pending: 'To confirm', free: 'Free slot', booking: 'New booking' },
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
    installIncluded: 'Installation included',
    mostChosen: 'Most chosen',
    fromLabel: 'was',
    whatsappCardNote: 'Add WhatsApp for +49€/mo',
    planCta: 'Talk to us',
    planCtaSignup: 'Get started',
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
        features: [
          '24 hour answering',
          'Answers in one language, whichever the clinic chooses',
          'Answers questions using your clinic information',
          'Automatic appointment booking',
          'Transfer to a real person',
          'A written summary of every call in the dashboard',
          'SMS confirmation to the patient, included',
          'Clinic dashboard to manage appointments and calls from any screen.',
        ],
      },
      {
        id: 'clinica',
        name: 'Clínica',
        audience: 'Clinics with up to 6 professionals, up to 25 calls a day',
        priceMonthly: 249,
        priceUnit: 'per clinic',
        allowance: '700 minutes of conversation per month',
        allowanceNote: 'around 280 calls',
        highlighted: true,
        features: [
          'Everything in Essencial',
          'Answers in two languages',
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
        allowance: '1,750 minutes of conversation per month',
        allowanceNote: 'around 700 calls, shared across the locations',
        extraSite:
          'Each location beyond the three: 149€ per month, with 400 more minutes and installation included.',
        features: [
          'Everything in Clínica',
          'Answers in all three: Portuguese, Spanish and English',
          'Every location in one dashboard, one contract and one invoice',
          'Each location with its own number and its own schedule',
          'Priority support',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'For groups with several locations or over 1,750 minutes per month',
        priceMonthly: null,
        priceText: 'on request',
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
        'Telma answers on WhatsApp too, not only on the telephone',
        'Patients can book, reschedule or cancel an appointment directly on WhatsApp',
        'Confirmations, already included in the plan, arrive on WhatsApp instead of by SMS',
        'Up to 1,000 messages per month',
      ],
    },
    finePrint: [
      'Installation included on every plan. There is no entry fee.',
      'Confirmation messages to the patient are included on every plan. Reminders the clinic schedules count as one minute each.',
      'Additional minutes: 0.45€ per minute, or a pack of 250 minutes for 89€, which works out at 0.36€. We warn you before you reach the limit.',
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
        tag: 'No integration',
        name: 'Works with any system',
        badge: 'Included in every plan',
        badgeStrong: true,
        text: 'Nothing needs to change. Telma records bookings in a shared calendar and leaves a written summary of every call in the clinic dashboard. The front desk copies the booking into the clinic software in seconds.',
      },
      {
        tag: 'Calendar sync',
        name: 'Google Calendar or iCal',
        badge: 'Included where available',
        text: 'If the clinic software syncs with Google Calendar or exports iCal, bookings appear directly in the existing schedule.',
      },
      {
        tag: 'API integration',
        name: 'For software with an API',
        badge: 'Separate project',
        text: 'For clinics whose software offers an API. We review the case and provide a quote.',
      },
    ],
    closing:
      'In most clinics we start with no integration on day one. There is no need to wait for integrations.',
  },
  clinics: {
    label: 'Who it is for',
    title: 'For clinics that take appointments by phone.',
    lead: 'Telma adapts to the way each clinic works.',
    items: [{ id: 'dental', name: 'Dentistry' }, { id: 'general', name: 'General practice' }, { id: 'aesthetic', name: 'Aesthetics' }, { id: 'physio', name: 'Physiotherapy' }],
  },
  calls: {
    title: 'Built for the calls that cannot wait.',
    lead: 'When the front desk cannot answer, Telma takes the call and records what the team needs to know.',
    listen: 'Hear Telma',
    items: [
      { tag: 'For callers', title: 'Without sending the call to voicemail', text: 'The call the front desk cannot take goes to Telma, and she is the one who answers.' },
      { tag: 'For callers', title: 'Out of hours too', text: 'At the end of the day, at weekends and on holidays, the call is answered and the request is recorded.' },
      { tag: 'For the team', title: 'Nothing gets lost', text: 'Every call lands in the dashboard with a written summary and the recording, ready to confirm and move on.' },
    ],
  },
  banner: { title: 'Reception looks after the person at the desk. Telma answers the phone.', cta: 'Talk to us' },
  band: { title: 'From each conversation, only what is needed remains.' },
  resources: {
    title: 'Worth reading',
    prev: 'Previous',
    next: 'Next',
    readingTime: '{n} min read',
    more: 'More to read',
    unwritten: 'This one is not written yet. In the meantime, talk to us and we will go through it on the phone.',
  },
  trust: {
    label: 'Trust',
    title: 'The clinic stays in control.',
    items: [
      { icon: 'shield', title: 'Data in the European Union', text: 'We comply with the GDPR and the data is hosted in the EU.' },
      { icon: 'mic', title: 'Recorded with notice', text: 'Calls are recorded with prior notice, and you can listen to each one and read its summary.' },
      { icon: 'siren', title: 'Urgent calls straight to the clinic', text: 'Telma detects urgent situations and passes the call straight on.' },
      { icon: 'calendar', title: 'Only the hours you set', text: 'Telma only offers the hours the clinic chooses. She never books two appointments at the same time.' },
      { icon: 'phone', title: 'The same number', text: 'You keep your number and install nothing. Unanswered calls are forwarded to Telma.' },
      { icon: 'unlock', title: 'No minimum term', text: 'Installation included and no minimum term. Cancel whenever you like.' },
    ],
  },
  faq: {
    label: 'Frequently asked questions',
    title: 'Frequently asked questions.',
    showMore: 'Show all questions',
    showLess: 'Show less',
    items: [
      {
        q: 'Can the patient tell they are talking to a virtual assistant?',
        a: 'The voice is natural. If the patient asks, Telma explains that she is the clinic\u2019s virtual assistant.',
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
        q: 'I have several locations. Which plan is mine?',
        a: 'Let us talk. Today each location is taken out as its own clinic, with its own number and its own schedule, and there is not yet a single dashboard that brings them together: we are building it. Tell us how many locations you have and how they work with each other, and we will tell you what we can do today and what has to wait.',
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
        q: 'How long until it is up and running?',
        a: 'It depends on when Telma’s number becomes available. We email you as soon as it is active, and meanwhile you can already set Telma up in the panel.',
      },
      {
        q: 'Does installation cost anything?',
        a: "No. Setup is included with every plan. We configure the clinic information, Telma's answers, voice and call forwarding. We then run the necessary tests and support the team before activation.",
      },
      {
        q: 'Which languages does Telma answer in?',
        a: 'Portuguese, Spanish and English. Telma answers in the language the clinic chooses and, when there is more than one, says at the greeting how to ask for the others: "for English say English". The caller asks and she switches. The plan decides how many of the three a clinic uses. French, German and Italian are on the way.',
      },
      {
        q: 'Is the price per clinic or per professional?',
        a: 'Per clinic. We do not charge per professional or per dashboard user. The price is for one clinic at one address. If you have several locations, let us talk.',
      },
      {
        q: 'Why are the plans in minutes rather than calls?',
        a: 'Because call length varies considerably. A simple question may take only a few seconds, while booking or rescheduling an appointment can take several minutes. Charging by the minute allows the plan to reflect the clinic\u2019s actual usage. As a reference, an appointment-booking call lasts two to three minutes on average.',
      },
      {
        q: 'What happens if I go over the minutes in my plan?',
        a: 'Additional minutes are charged at 0.45€ each, or you can add a pack of 250 minutes for 89€, which works out at 0.36€ a minute, a fifth less. Telma never stops answering because of the limit, and we warn you before you reach it. If it happens every month, the next plan up costs less than the extras.',
      },
      {
        q: 'What is the clinic dashboard, and what does it cost?',
        a: 'It is the dashboard where the clinic manages Telma, and it is included on every plan at no extra cost. You see the day: provisional bookings waiting to be confirmed and the calls from today, updating live. You confirm, change or reject each booking and copy the patient details to paste into your clinic software. You mark on the calendar the hours Telma may offer and block holidays and closures. And you get the call history with filters, the written summary and the recording of each one. It runs on any screen, and on a phone it installs like an app, with no store to go through.',
      },
      {
        q: 'Can I listen to the calls?',
        a: 'Yes. The dashboard holds a written summary of every call and you can access the recordings.',
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
    title: 'When your front desk cannot answer, Telma can.',
    lead: 'We\u2019ll show you how Telma would work in your clinic, with your opening hours and your schedule. No commitment.',
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
    planOptions: ['Essencial', 'Clínica', 'Rede', 'Personalizado'],
    submit: 'Send',
    sending: 'Sending...',
    success: 'We have your request. We will be in touch soon.',
    error: 'We could not send your request. Please try again or email us.',
    directEmail: 'Or write to',
  },
  footer: {
    tagline: 'Telma answers when no one can.',
    contactHeading: 'Contact',
    productHeading: 'Product',
    email: 'ola@telmaatende.com',
    companyHeading: 'Company',
    companyText: 'Telma is a Bweb Studio product.',
    companyLinkLabel: 'bwebstudio.com',
    companyLink: 'https://bwebstudio.com',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms',
    rights: 'All rights reserved.',
  },
  flow: {
    title: 'From each conversation, only what is needed remains.',
    description:
      'Each call ends up where it belongs: in the schedule or in a summary for the front desk.',
    tabsLabel: 'Examples',
    tabs: {
      booking: 'Books and organises',
      summary: 'Summarises each call',
      whatsapp: 'Also on WhatsApp',
    },
    scenes: {
      booking: {
        steps: [
          { kind: 'call', label: 'Call', quote: 'Hi, I\u2019d like to book an appointment for Tuesday morning, if there\u2019s availability.', duration: '12 s', related: ['call answered', 'Tuesday', 'morning'] },
          { kind: 'identified', label: 'Telma identified', title: 'Booking', lines: ['Tuesday', 'morning'], badge: 'To be confirmed', related: ['booking', 'Tuesday', 'morning'] },
          { kind: 'agenda', label: 'In the schedule', day: 'Tuesday', detail: 'Morning', status: 'To be confirmed', related: ['to be confirmed', 'Tuesday'] },
          { kind: 'call', label: 'Call', quote: 'Good afternoon. I need to move my appointment from Thursday to Friday afternoon.', duration: '9 s', related: ['call answered', 'Thursday', 'Friday'] },
          { kind: 'identified', label: 'Telma identified', title: 'Change', lines: ['from Thursday to Friday', 'afternoon'], badge: 'To be confirmed', related: ['change', 'Friday', 'afternoon'] },
          { kind: 'agenda', label: 'In the schedule', day: 'Friday', detail: 'Afternoon', status: 'To be confirmed', related: ['to be confirmed', 'Friday'] },
          { kind: 'call', label: 'Call', quote: 'Good morning. I can\u2019t make it tomorrow, I\u2019d like to cancel, please.', duration: '7 s', related: ['call answered', 'tomorrow'] },
          { kind: 'identified', label: 'Telma identified', title: 'Cancellation', lines: ['tomorrow'], badge: 'To be confirmed', related: ['cancellation', 'tomorrow'] },
          { kind: 'agenda', label: 'In the schedule', day: 'Tomorrow', detail: 'Cancellation requested', status: 'To be confirmed', related: ['to be confirmed', 'cancellation'] },
        ],
        facts: [
          { text: 'Tuesday' },
          { text: 'morning' },
          { text: 'booking', caption: 'Request' },
          { text: 'change', caption: 'Request' },
          { text: 'cancellation', caption: 'Request' },
          { text: 'to be confirmed', caption: 'Status' },
          { text: 'call answered' },
          { text: 'Thursday' },
          { text: 'Friday', caption: 'When' },
          { text: 'afternoon' },
          { text: 'tomorrow' },
          { text: 'first appointment' },
          { text: 'call back' },
          { text: 'morning', caption: 'When' },
          { text: 'booking' },
          { text: 'to be confirmed' },
        ],
      },
      summary: {
        steps: [
          { kind: 'call', label: 'Call', quote: 'Good morning. This is my first time calling. I\u2019d like an appointment next week, in the afternoon.', duration: '24 s', related: ['call answered', 'first appointment'] },
          { kind: 'summary', label: 'Summary for the front desk', title: 'First appointment', lines: ['Booking request', 'Next week, afternoon', 'To be confirmed'], channels: ['Clinic dashboard'], related: ['summary', 'dashboard', 'afternoon'] },
          { kind: 'call', label: 'Call', quote: 'Good afternoon. I called earlier and forgot to ask what time you open on Saturdays.', duration: '11 s', related: ['call answered', 'question'] },
          { kind: 'summary', label: 'Summary for the front desk', title: 'Question answered', lines: ['Saturday opening hours', 'No booking'], channels: ['Clinic dashboard'], related: ['summary', 'dashboard', 'question'] },
        ],
        facts: [
          { text: 'summary', caption: 'For the front desk' },
          { text: 'dashboard', caption: 'Where it lands' },
          { text: 'call answered' },
          { text: 'first appointment', caption: 'Request' },
          { text: 'next week', caption: 'When' },
          { text: 'afternoon' },
          { text: 'question', caption: 'Request' },
          { text: 'recording' },
          { text: 'to be confirmed', caption: 'Status' },
          { text: 'summary' },
          { text: 'Saturday' },
        ],
      },
      whatsapp: {
        steps: [
          { kind: 'call', label: 'WhatsApp \u00b7 Patient', quote: 'Hi! Can I book for Friday morning?', duration: '10:42', related: ['whatsapp', 'Friday', 'morning'] },
          { kind: 'call', label: 'WhatsApp \u00b7 Telma', quote: 'Of course. I have 10:00 or 11:30. Which would you prefer?', duration: '10:42', related: ['whatsapp', '10:00', 'message'] },
          { kind: 'agenda', label: 'In the schedule', day: 'Friday', detail: '10:00 \u00b7 requested on WhatsApp', status: 'To be confirmed', related: ['to be confirmed', 'Friday', 'booking'] },
        ],
        facts: [
          { text: 'whatsapp' },
          { text: 'message', caption: 'Channel' },
          { text: 'Friday', caption: 'When' },
          { text: 'morning' },
          { text: '10:00' },
          { text: 'booking', caption: 'Request' },
          { text: 'to be confirmed', caption: 'Status' },
          { text: 'reschedule' },
          { text: 'cancel' },
          { text: 'confirmation', caption: 'On WhatsApp' },
          { text: 'whatsapp' },
          { text: '11:30' },
        ],
      },
    },
  },
  process: {
    title: 'From the call to the schedule.',
    lead: 'Telma answers, identifies the reason for the call and organises the information in the schedule.',
    chapters: [
      {
        title: 'Answers the call',
        text: 'When the front desk cannot answer, Telma takes the call with a natural voice and identifies the reason for the call.',
      },
      {
        title: 'Organises the schedule',
        text: 'The request sits in the schedule as unconfirmed, with a written summary of what was agreed in the dashboard.',
      },
    ],
    agenda: 'Schedule',
    day: 'Tuesday',
    newBooking: 'New appointment',
    dayAndTime: 'Tuesday \u00b7 10:00',
    callInProgress: 'Call in progress',
    morning: 'Morning',
    statusLabel: 'Status',
    toConfirm: 'To be confirmed',
    speakers: { caller: 'Patient', telma: 'Telma' },
    dialogue: {
      caller1: ['Hi,', ' I\u2019d like to book', ' for Tuesday', ' morning,', ' if there\u2019s availability.'],
      telma1: ['Of course.', ' Do you have a preferred time in the morning?'],
      caller2: ['Around ten,', ' if possible.'],
    },
    facts: ['Appointment', 'Tuesday', 'morning', '~10:00'],
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
