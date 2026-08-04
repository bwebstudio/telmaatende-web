import type { Content } from './types'

// Spanish (Spain). Uses peninsular conventions throughout: "usted" for the
// clinic, "móvil" rather than "celular", "reserva/cita" rather than "turno",
// and comma decimals with a space before the euro sign.
//
// Product and plan names (Telma, Essencial, Clínica, Rede, Personalizado) are
// left in Portuguese, exactly as the English version leaves them: they are
// names, not words to translate.

export const es: Content = {
  meta: {
    title: 'Telma Atende: la recepción que atiende cuando nadie puede',
    description:
      'Telma es una recepcionista virtual con voz que atiende el teléfono de su clínica, responde a las dudas de los pacientes con la información de la clínica, concierta citas y pasa la llamada a una persona real cuando es urgente. Para clínicas dentales y de estética en Portugal.',
    ogTitle: 'Telma Atende: la recepcionista virtual de su clínica',
    ogDescription:
      'Atiende el teléfono cuando nadie puede, responde a las dudas de los pacientes, concierta citas y pasa la llamada a una persona real cuando es urgente.',
  },
  langSwitchLabel: 'Idioma',
  skipToContent: 'Saltar al contenido',
  header: {
    productBy: 'un producto Bweb Studio',
    navLabel: 'Principal',
    nav: [
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Precios', href: '#precos' },
      { label: 'Integraciones', href: '#integracoes' },
      { label: 'Preguntas', href: '#perguntas' },
    ],
    cta: 'Hablar con nosotros',
  },
  hero: {
    name: 'Telma',
    headlineLines: ['Ninguna llamada perdida.', 'Ningún paciente perdido.'],
    subtitle:
      'Telma es la recepcionista virtual de su clínica.',
    ctaPrimary: 'Ver precios',
    ctaSecondary: 'Hablar con nosotros',
    sceneAlt:
      'Mostrador de recepción de una clínica a primera hora: un teléfono fijo, una agenda abierta con una cita anotada y la luz entrando por la ventana.',
    flow: {
      steps: [
        { label: 'Llamada entrante' },
        { label: 'Telma responde' },
        { label: 'Cita concertada' },
        { label: 'Resumen enviado' },
      ],
    },
  },
  voice: {
    label: 'Escúchela',
    title: 'Así atiende Telma.',
    lead: 'Una llamada real, sin editar. Es la forma más rápida de responder a la pregunta que todo el mundo hace primero.',
    play: 'Escuchar la llamada',
    pause: 'Pausar',
    note: 'Si el paciente pregunta directamente, Telma responde con honestidad que es una asistente virtual.',
  },
  problem: {
    label: 'El problema',
    sceneAlt:
      'Mostrador de recepción de una clínica, vacío, con el teléfono apoyado y la luz de la mañana cruzando la pared.',
    title: 'Cada llamada que queda sin respuesta es un paciente que llama a otra clínica.',
    items: [
      {
        title: 'Llamadas perdidas mientras se atiende a un paciente',
        text: 'Recepción está atendiendo a alguien en el mostrador y suena el teléfono. Nadie puede responder y la llamada se pierde.',
      },
      {
        title: 'Llamadas fuera de horario',
        text: 'Al final del día, los fines de semana y los festivos el teléfono sigue sonando. Y quien llama necesita cita.',
      },
      {
        title: 'Recepción saturada',
        text: 'Entre el mostrador, el teléfono y la agenda, el equipo hace malabares. Algo acaba quedándose siempre atrás.',
      },
    ],
  },
  how: {
    label: 'Cómo funciona',
    title: 'Sencillo, desde el primer tono hasta el resumen final.',
    steps: [
      {
        n: '01',
        title: 'La llamada entra en la clínica',
        text: 'Todo sigue igual. El paciente llama al número de siempre.',
      },
      {
        n: '02',
        title: 'Si nadie contesta, Telma atiende',
        text: 'Cuando recepción no puede responder, la llamada pasa a Telma. Atiende con voz natural y responde a las preguntas del paciente con la información de la clínica.',
      },
      {
        n: '03',
        title: 'Telma concierta la cita',
        text: 'Telma entiende lo que el paciente necesita y concierta la cita en los horarios que la clínica ha definido.',
      },
      {
        n: '04',
        title: 'Recepción recibe un resumen de cada llamada',
        text: 'Al final de cada llamada, recepción recibe un resumen escrito con lo acordado.',
      },
    ],
    note: 'En caso de urgencia, o si el paciente lo pide, Telma pasa la llamada a una persona real.',
  },
  agenda: {
    label: 'La agenda',
    title: 'La agenda sigue siendo suya.',
    paragraphs: [
      'La clínica define qué horarios puede ofrecer Telma. Telma solo ofrece esos. Nunca puede haber solapamiento con lo que recepción reserva a mano.',
      'Por defecto, Telma deja una cita provisional que la clínica confirma. Cuando hay sincronización de calendario, Telma puede confirmar directamente.',
      'Todo esto se hace en el panel de la clínica, incluido en todos los planes: ahí marca los horarios que Telma puede ofrecer, bloquea festivos y vacaciones, confirma o cambia cada cita provisional y escucha las llamadas. Funciona en el ordenador de recepción, en la tablet y en el móvil, y se actualiza en directo.',
    ],
  },
  pricing: {
    label: 'Planes y precios',
    title: 'Elija el plan de su clínica.',
    intro: 'Sin permanencia. Cancele cuando quiera.',
    chooseHint:
      'Para saber cuál es el suyo, cuente las llamadas que recibe la clínica en un día normal.',
    monthly: 'Mensual',
    annual: 'Anual',
    annualBadge: '2 meses gratis',
    perMonth: '/mes',
    billedAnnually: 'facturado anualmente',
    installIncluded: 'Instalación incluida',
    mostChosen: 'El más elegido',
    fromLabel: 'antes',
    whatsappCardNote: 'Añada WhatsApp por +49 € al mes',
    planCta: 'Hablar con nosotros',
    customCta: 'Hablar con nosotros',
    plans: [
      {
        id: 'essencial',
        name: 'Essencial',
        audience: 'Consultas de 1 a 2 profesionales, hasta 8 llamadas al día',
        priceMonthly: 99,
        priceUnit: 'por clínica',
        allowance: '250 minutos de conversación al mes',
        allowanceNote: 'unas 100 llamadas',
        features: [
          'Atención 24 horas',
          'Responde a dudas con la información de la clínica',
          'Cita automática',
          'Transferencia a una persona real',
          'Resumen de cada llamada por correo',
          'Panel de la clínica: lo ve y lo controla todo, en cualquier pantalla',
        ],
      },
      {
        id: 'clinica',
        name: 'Clínica',
        audience: 'Clínicas de hasta 6 profesionales, hasta 25 llamadas al día',
        priceMonthly: 249,
        priceUnit: 'por clínica',
        allowance: '750 minutos de conversación al mes',
        allowanceNote: 'unas 300 llamadas',
        highlighted: true,
        features: [
          'Todo lo que incluye Essencial',
          'Voz personalizada',
          'Informe mensual de llamadas',
          'Soporte telefónico en horario de oficina',
        ],
      },
      {
        id: 'rede',
        name: 'Rede',
        audience: 'Grupos con dos o más sedes, hasta cinco sedes',
        priceMonthly: 599,
        priceUnit: 'por grupo, incluye 3 sedes',
        allowance: '2.000 minutos de conversación al mes',
        allowanceNote: 'unas 800 llamadas, compartidas entre las sedes',
        extraSite:
          'Cada sede más allá de las tres: 149 € al mes, con 500 minutos más y la instalación incluida.',
        features: [
          'Todo lo que incluye Clínica',
          'Todas las sedes en un solo panel, un solo contrato y una sola factura',
          'Cada sede con su número y su agenda',
          'Soporte prioritario',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'Para grupos con más de 5 sedes o más de 2.000 minutos al mes',
        priceMonthly: null,
        priceText: 'a consultar',
        isCustom: true,
        features: [],
      },
    ],
    whatsapp: {
      label: 'Add-on',
      name: 'Telma en WhatsApp',
      price: '+49 €',
      priceNote: 'al mes, en cualquier plan',
      features: [
        'Confirmaciones y recordatorios automáticos de citas',
        'El paciente puede escribir para pedir, cambiar o cancelar cita',
        'Telma responde y se encarga de la cita',
        'Hasta 1.000 mensajes al mes',
      ],
    },
    finePrint: [
      'Instalación incluida en todos los planes. No hay coste de entrada.',
      'Minutos adicionales: 0,35 € por minuto, o un pack de 250 minutos por 79 €. Le avisamos antes de llegar al límite.',
      'Una llamada para pedir cita dura, de media, entre dos y tres minutos.',
      'Precios sin IVA.',
      'Sin permanencia.',
    ],
  },
  integrations: {
    label: 'Integraciones',
    title: 'Se conecta con su sistema.',
    levels: [
      {
        tag: 'Nivel 1',
        name: 'Funciona con cualquier sistema',
        badge: 'Incluido en todos los planes',
        badgeStrong: true,
        text: 'No hace falta cambiar nada. Telma registra las citas en un calendario compartido y envía a recepción un resumen de cada llamada por correo o WhatsApp. Recepción pasa la cita al software de la clínica en segundos.',
      },
      {
        tag: 'Nivel 2',
        name: 'Sincronización de calendario',
        badge: 'Incluido si está disponible',
        text: 'Si el software de la clínica sincroniza con Google Calendar o exporta iCal, las citas aparecen directamente en la agenda existente.',
      },
      {
        tag: 'Nivel 3',
        name: 'Integración directa por API',
        badge: 'Proyecto aparte',
        text: 'Para clínicas cuyo software disponga de API. Analizamos el caso y presentamos presupuesto.',
      },
    ],
    closing:
      'En la mayoría de las clínicas empezamos en el Nivel 1 el primer día. No hace falta esperar a las integraciones.',
  },
  faq: {
    label: 'Preguntas frecuentes',
    title: 'Preguntas frecuentes.',
    showMore: 'Ver todas las preguntas',
    showLess: 'Ver menos',
    items: [
      {
        q: '¿El paciente se da cuenta de que habla con una asistente virtual?',
        a: 'La voz es muy natural. Si el paciente lo pregunta directamente, Telma responde con honestidad que es una asistente virtual.',
      },
      {
        q: '¿Telma sabe responder a preguntas sobre la clínica?',
        a: 'Sí. Telma responde a las preguntas más habituales de los pacientes con la información de la clínica: horarios, dirección, aparcamiento, tratamientos y preparación para la cita. Cuando hace falta, pasa la llamada a recepción.',
      },
      {
        q: '¿Y si es una urgencia?',
        a: 'Telma detecta las situaciones urgentes y pasa la llamada a la clínica de inmediato.',
      },
      {
        q: 'Soy una clínica pequeña. ¿Qué plan elijo?',
        a: 'El Essencial. Es el plan de una consulta con uno o dos profesionales que recibe hasta ocho llamadas al día. Si suele pasar de ahí, el Clínica sale más barato que el Essencial con minutos adicionales.',
      },
      {
        q: 'Tengo cinco sedes. ¿Cuál es mi plan? ¿Pago por sede o en total?',
        a: 'Su plan es el Rede, y paga en total, no por sede. El Rede cuesta 599 € al mes e incluye tres sedes; las dos restantes son 149 € cada una, así que 897 € al mes por las cinco, con la instalación de las cinco incluida. Un solo contrato, una sola factura y todas las sedes en el mismo panel, cada una con su número y su agenda.',
      },
      {
        q: '¿Telma puede dar dos citas a la misma hora?',
        a: 'No. La clínica define los horarios que Telma puede ofrecer, y ella solo ofrece esos.',
      },
      {
        q: '¿Tengo que cambiar el número de teléfono de la clínica?',
        a: 'No. Mantiene su número. Las llamadas no atendidas se desvían a Telma.',
      },
      {
        q: '¿Cuánto tarda la instalación?',
        a: 'Normalmente entre 3 y 5 días laborables.',
      },
      {
        q: '¿La instalación tiene algún coste?',
        a: 'No. Está incluida en todos los planes y no hay coste de entrada. Y es trabajo de verdad: recogemos la información de la clínica, escribimos con usted las respuestas de Telma, elegimos la voz, gestionamos el desvío con su operadora, hacemos llamadas de prueba y formamos a recepción. Paga la primera mensualidad y nada más.',
      },
      {
        q: '¿En qué idiomas atiende Telma?',
        a: 'Atiende en español y en inglés.',
      },
      {
        q: '¿El precio es por clínica o por profesional?',
        a: 'Por clínica. No cobramos por profesional ni por usuario del panel. En el Essencial y en el Clínica, el precio es de una clínica en una dirección. En el Rede, es de un grupo con varias direcciones.',
      },
      {
        q: '¿Por qué los planes van en minutos y no en llamadas?',
        a: 'Porque así es como cuesta Telma. Una llamada para preguntar el horario dura veinte segundos y una cita con cambio de fecha dura seis minutos; contarlas igual obligaría a encarecer el plan para todos. En minutos, cada clínica paga lo que usa. Como referencia, una llamada para pedir cita dura de media entre dos y tres minutos.',
      },
      {
        q: '¿Qué pasa si supero los minutos de mi plan?',
        a: 'Los minutos adicionales se cobran a 0,35 € cada uno, o puede añadir un pack de 250 minutos por 79 €, que sale más barato. Telma nunca deja de atender por el límite, y le avisamos antes de llegar. Si ocurre todos los meses, el plan siguiente sale más barato que los extras.',
      },
      {
        q: '¿Qué es el panel de la clínica, y cuánto cuesta?',
        a: 'Es el sitio desde donde la clínica manda sobre Telma, y está incluido en todos los planes, sin coste extra. Ve el día: las citas provisionales pendientes de confirmar y las llamadas de hoy, actualizándose en directo. Confirma, cambia o rechaza cada cita y copia los datos del paciente para pegarlos en el software de la clínica. Marca en el calendario los horarios que Telma puede ofrecer y bloquea festivos y vacaciones. Y tiene el historial de llamadas con filtros, el resumen escrito y la grabación de cada una. Funciona en cualquier pantalla, y en el móvil se instala como una aplicación, sin pasar por tiendas.',
      },
      {
        q: '¿Puedo escuchar las llamadas?',
        a: 'Sí. Recibe un resumen escrito de cada llamada y puede acceder a las grabaciones.',
      },
      {
        q: '¿Cómo funciona la protección de datos?',
        a: 'Cumplimos el RGPD. Las llamadas se graban con aviso previo al paciente y los datos se alojan en la Unión Europea.',
      },
      {
        q: '¿Necesito instalar software?',
        a: 'No. Telma funciona sobre la línea telefónica actual de la clínica.',
      },
      {
        q: '¿Qué hace exactamente Telma en WhatsApp?',
        a: 'Dos cosas: envía confirmaciones y recordatorios automáticos, y permite que el paciente escriba para pedir, cambiar o cancelar cita.',
      },
      {
        q: '¿Puedo cancelar cuando quiera?',
        a: 'Sí, no hay permanencia.',
      },
      {
        q: '¿Sirve para clínicas de estética?',
        a: 'Sí. Funciona en cualquier clínica que reciba citas por teléfono.',
      },
      {
        q: '¿Quién está detrás de Telma?',
        a: 'Telma es un producto de Bweb Studio, un estudio de software con experiencia en productos digitales.',
      },
    ],
  },
  finalCta: {
    title: 'Que su clínica siga funcionando, también cuando nadie puede atender.',
    lead: 'Le enseñamos Telma con la agenda y los horarios de su clínica. Sin compromiso.',
    cta: 'Hablar con nosotros',
    secondary: 'Ver precios',
  },
  contact: {
    label: 'Contacto',
    title: 'Hablemos de su clínica.',
    intro: 'Déjenos sus datos y nos ponemos en contacto para enseñarle Telma.',
    requiredLabel: 'obligatorio',
    fields: {
      name: 'Nombre',
      clinic: 'Clínica',
      phone: 'Móvil',
      email: 'Correo electrónico',
      plan: 'Plan de interés',
      message: 'Mensaje',
    },
    planPlaceholder: 'Elija un plan',
    planOptions: ['Essencial', 'Clínica', 'Rede', 'Personalizado', 'Telma en WhatsApp'],
    submit: 'Enviar',
    sending: 'Enviando...',
    success: 'Hemos recibido su solicitud. Nos pondremos en contacto en breve.',
    error: 'No hemos podido enviarlo. Inténtelo de nuevo o escríbanos por correo.',
    notConfigured:
      'El formulario todavía no está configurado. Configure la variable NEXT_PUBLIC_CONTACT_ENDPOINT o escríbanos directamente.',
    directEmail: 'O escriba a',
  },
  footer: {
    tagline: 'Telma atiende cuando nadie puede.',
    contactHeading: 'Contacto',
    email: 'ola@telmaatende.com',
    phone: '+351 000 000 000',
    companyHeading: 'Empresa',
    companyText: 'Telma es un producto Bweb Studio.',
    companyLinkLabel: 'bwebstudio.com',
    companyLink: 'https://bwebstudio.com',
    legalPlaceholder:
      'Espacio reservado para NIF, dirección y denominación social (a rellenar antes de publicar).',
    privacyLabel: 'Política de Privacidad',
    termsLabel: 'Términos',
    rights: 'Todos los derechos reservados.',
  },
  legal: {
    privacy: {
      title: 'Política de Privacidad',
      updated: 'Contenido provisional. A revisar por la empresa antes de publicar.',
      intro:
        'Este texto es un marcador de posición y no constituye la política definitiva. Describe, de forma general, cómo trata Telma los datos personales en cumplimiento del RGPD.',
      sections: [
        {
          heading: 'Responsable del tratamiento',
          body: [
            'A rellenar con la denominación social, el NIF y la dirección de Bweb Studio.',
            'Contacto para cuestiones de privacidad: por definir.',
          ],
        },
        {
          heading: 'Datos que tratamos',
          body: [
            'Datos de contacto enviados en el formulario: nombre, clínica, móvil, correo electrónico y mensaje.',
            'Grabaciones y resúmenes de llamadas, cuando el servicio está activo, con aviso previo al paciente.',
          ],
        },
        {
          heading: 'Dónde se alojan los datos',
          body: ['Los datos se alojan en la Unión Europea.'],
        },
        {
          heading: 'Sus derechos',
          body: [
            'Puede solicitar el acceso, la rectificación o la supresión de sus datos. El canal y el plazo de respuesta están por definir.',
          ],
        },
      ],
      back: 'Volver al inicio',
    },
    terms: {
      title: 'Términos',
      updated: 'Contenido provisional. A revisar por la empresa antes de publicar.',
      intro:
        'Este texto es un marcador de posición y no constituye los términos definitivos del servicio. Se sustituirán por la versión jurídica antes de la publicación.',
      sections: [
        {
          heading: 'El servicio',
          body: [
            'Telma es una recepcionista virtual con voz para clínicas. El alcance exacto del servicio se define en el contrato.',
          ],
        },
        {
          heading: 'Planes y pago',
          body: [
            'Los precios que aparecen en el sitio son indicativos y no incluyen IVA.',
            'Las condiciones finales de facturación constan en la propuesta comercial.',
          ],
        },
        {
          heading: 'Cancelación',
          body: ['No hay permanencia. Puede cancelar cuando quiera.'],
        },
      ],
      back: 'Volver al inicio',
    },
  },
}
