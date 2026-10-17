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
      'Telma es una recepcionista virtual para clínicas. Atiende llamadas, responde a preguntas, gestiona citas y deriva la llamada al equipo cuando es necesario.',
    ogTitle: 'Telma Atende: la recepcionista virtual de su clínica',
    ogDescription:
      'Telma es una recepcionista virtual para clínicas. Atiende llamadas, responde a preguntas, gestiona citas y deriva la llamada al equipo cuando es necesario.',
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
    signIn: 'Entrar',
    signUp: 'Crear cuenta',
  },
  hero: {
    name: 'Telma',
    headlineLines: ['Telma atiende', 'cuando nadie puede.'],
    eyebrow: 'Recepcionista virtual para clínicas',
    subtitle:
      'Atiende llamadas, responde a preguntas y gestiona las citas cuando recepción no puede.',
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
    lead: 'Una llamada real, sin editar. Escuche cómo atiende Telma a un paciente.',
    play: 'Escuchar la llamada',
    pause: 'Pausar',
    note: 'Si el paciente pregunta, Telma explica con naturalidad que es la asistente virtual de la clínica.',
  },
  problem: {
    label: 'El problema',
    sceneAlt:
      'Mostrador de recepción de una clínica, vacío, con el teléfono apoyado y la luz de la mañana cruzando la pared.',
    title: 'Cuando recepción no puede atender, algunas llamadas quedan sin respuesta.',
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
        text: 'Telma identifica el motivo de la llamada y concierta la cita en los horarios que la clínica ha definido.',
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
      'Todo se gestiona desde el panel de la clínica, incluido en todos los planes. Desde allí puede definir horarios, bloquear vacaciones y festivos, confirmar citas y consultar las llamadas. El panel se actualiza en tiempo real y funciona en ordenador, tablet y móvil.',
    ],
    preview: { heading: 'Agenda', day: 'Martes', confirmed: 'Confirmada', pending: 'Por confirmar', free: 'Hora libre', booking: 'Nueva cita' },
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
    planCtaSignup: 'Empezar',
    customCta: 'Hablar con nosotros',
    plans: [
      {
        id: 'essencial',
        name: 'Essencial',
        audience: 'Consultorios de 1 a 2 profesionales, hasta 8 llamadas al día',
        priceMonthly: 99,
        priceUnit: 'por clínica',
        allowance: '250 minutos de conversación al mes',
        allowanceNote: 'unas 100 llamadas',
        features: [
          'Atención 24 horas',
          'Atiende en un idioma, el que elija la clínica',
          'Responde a dudas con la información de la clínica',
          'Cita automática',
          'Transferencia a una persona real',
          'Resumen de cada llamada por correo',
          'Confirmación por SMS al paciente, incluida',
          'Panel de la clínica para gestionar citas y llamadas desde cualquier pantalla.',
        ],
      },
      {
        id: 'clinica',
        name: 'Clínica',
        audience: 'Clínicas de hasta 6 profesionales, hasta 25 llamadas al día',
        priceMonthly: 249,
        priceUnit: 'por clínica',
        allowance: '700 minutos de conversación al mes',
        allowanceNote: 'unas 280 llamadas',
        highlighted: true,
        features: [
          'Todo lo que incluye Essencial',
          'Atiende en dos idiomas',
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
        allowance: '1.750 minutos de conversación al mes',
        allowanceNote: 'unas 700 llamadas, compartidas entre las sedes',
        extraSite:
          'Cada sede más allá de las tres: 149 € al mes, con 400 minutos más y la instalación incluida.',
        features: [
          'Todo lo que incluye Clínica',
          'Atiende en los tres idiomas: portugués, español e inglés',
          'Todas las sedes en un solo panel, un solo contrato y una sola factura',
          'Cada sede con su número y su agenda',
          'Soporte prioritario',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'Para grupos con más de 5 sedes o más de 1.750 minutos al mes',
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
        'Telma atiende también en WhatsApp, no solo al teléfono',
        'El paciente puede pedir, cambiar o cancelar una cita directamente por WhatsApp',
        'Las confirmaciones, que ya van incluidas en el plan, llegan por WhatsApp en vez de por SMS',
        'Hasta 1.000 mensajes al mes',
      ],
    },
    finePrint: [
      'Instalación incluida en todos los planes. No hay coste de entrada.',
      'Los mensajes de confirmación al paciente van incluidos en todos los planes. Los avisos que programa la clínica cuentan como un minuto cada uno.',
      'Minutos adicionales: 0,45 € por minuto, o un pack de 250 minutos por 89 €, que sale a 0,36 €. Le avisamos antes de llegar al límite.',
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
        tag: 'Sin integración',
        name: 'Funciona con cualquier sistema',
        badge: 'Incluido en todos los planes',
        badgeStrong: true,
        text: 'No hace falta cambiar nada. Telma registra las citas en un calendario compartido y envía a recepción un resumen de cada llamada por correo o WhatsApp. Recepción pasa la cita al software de la clínica en segundos.',
      },
      {
        tag: 'Sincronización de calendario',
        name: 'Google Calendar o iCal',
        badge: 'Incluido si está disponible',
        text: 'Si el software de la clínica sincroniza con Google Calendar o exporta iCal, las citas aparecen directamente en la agenda existente.',
      },
      {
        tag: 'Integración por API',
        name: 'Para software con API',
        badge: 'Proyecto aparte',
        text: 'Para clínicas cuyo software disponga de API. Analizamos el caso y presentamos presupuesto.',
      },
    ],
    closing:
      'En la mayoría de las clínicas empezamos sin integración el primer día. No hace falta esperar a las integraciones.',
  },
  clinics: {
    label: 'Para quién',
    title: 'Para clínicas que reciben citas por teléfono.',
    lead: 'Telma se adapta a la forma de trabajar de cada clínica.',
    items: [{ id: 'dental', name: 'Odontología' }, { id: 'general', name: 'Medicina general' }, { id: 'aesthetic', name: 'Estética' }, { id: 'physio', name: 'Fisioterapia' }],
  },
  calls: {
    title: 'Hecha para las llamadas que no pueden esperar.',
    lead: 'Cuando recepción no puede atender, Telma atiende la llamada y deja la información registrada para el equipo.',
    listen: 'Escuchar a Telma',
    items: [
      { tag: 'Para quien llama', title: 'Sin dejar la llamada en el buzón de voz', text: 'La llamada que recepción no puede atender pasa a Telma, y es ella quien responde.' },
      { tag: 'Para quien llama', title: 'También fuera de horario', text: 'Al final del día, el fin de semana y en festivos, la llamada se atiende y la petición queda registrada.' },
      { tag: 'Para el equipo', title: 'Nada se pierde por el camino', text: 'Cada llamada llega a recepción con un resumen escrito y la grabación, lista para confirmar y seguir.' },
    ],
  },
  banner: { title: 'Recepción atiende a quien está en el mostrador. Telma atiende el teléfono.', cta: 'Hablar con nosotros' },
  band: { title: 'De la conversación, queda lo necesario.' },
  resources: {
    title: 'Para leer con calma',
    prev: 'Anterior',
    next: 'Siguiente',
    readingTime: '{n} min de lectura',
    more: 'Más para leer',
    unwritten: 'Este texto aún está por escribir. Mientras tanto, habla con nosotros y te lo contamos por teléfono.',
  },
  trust: {
    label: 'Confianza',
    title: 'La clínica mantiene el control.',
    items: [
      { icon: 'shield', title: 'Datos en la Unión Europea', text: 'Cumplimos el RGPD y los datos se alojan en la UE.' },
      { icon: 'mic', title: 'Grabación con aviso', text: 'Las llamadas se graban con aviso previo, y puede escucharlas y leer el resumen de cada una.' },
      { icon: 'siren', title: 'Urgencias directas a la clínica', text: 'Telma detecta las situaciones urgentes y pasa la llamada de inmediato.' },
      { icon: 'calendar', title: 'Solo los horarios que define', text: 'Telma solo ofrece los horarios que elige la clínica. Nunca da dos citas a la misma hora.' },
      { icon: 'phone', title: 'El mismo número', text: 'Mantiene su número y no instala nada. Las llamadas no atendidas se desvían a Telma.' },
      { icon: 'unlock', title: 'Sin permanencia', text: 'Instalación incluida y sin permanencia. Cancela cuando quiera.' },
    ],
  },
  faq: {
    label: 'Preguntas frecuentes',
    title: 'Preguntas frecuentes.',
    showMore: 'Ver todas las preguntas',
    showLess: 'Ver menos',
    items: [
      {
        q: '¿El paciente se da cuenta de que habla con una asistente virtual?',
        a: 'La voz es natural. Si el paciente pregunta, Telma explica con naturalidad que es la asistente virtual de la clínica.',
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
        q: '¿Cuánto tarda en estar funcionando?',
        a: 'Normalmente entre 3 y 5 días laborables.',
      },
      {
        q: '¿La instalación tiene algún coste?',
        a: 'No. La instalación está incluida en todos los planes. Configuramos la información de la clínica, las respuestas de Telma, la voz y el desvío de llamadas. Después hacemos las pruebas necesarias y acompañamos al equipo antes de la activación.',
      },
      {
        q: '¿En qué idiomas atiende Telma?',
        a: 'En español, portugués e inglés. Telma atiende en el idioma que elija la clínica y, si tiene más de uno, lo dice al descolgar para que quien llama pueda pedirlo: "for English say English". El plan decide cuántos de esos tres usa la clínica. Francés, alemán e italiano están en camino.',
      },
      {
        q: '¿El precio es por clínica o por profesional?',
        a: 'Por clínica. No cobramos por profesional ni por usuario del panel. En el Essencial y en el Clínica, el precio es de una clínica en una dirección. En el Rede, es de un grupo con varias direcciones.',
      },
      {
        q: '¿Por qué los planes van en minutos y no en llamadas?',
        a: 'Porque la duración de las llamadas varía bastante. Una pregunta sencilla puede durar pocos segundos, mientras que pedir o cambiar una cita puede llevar varios minutos. Cobrar por minutos permite ajustar el plan al uso real de la clínica. Como referencia, una llamada para pedir cita dura, de media, entre dos y tres minutos.',
      },
      {
        q: '¿Qué pasa si supero los minutos de mi plan?',
        a: 'Los minutos adicionales se cobran a 0,45 € cada uno, o puede añadir un pack de 250 minutos por 89 €, que sale a 0,36 € el minuto, un quinto menos. Telma nunca deja de atender por el límite, y le avisamos antes de llegar. Si ocurre todos los meses, el plan siguiente sale más barato que los extras.',
      },
      {
        q: '¿Qué es el panel de la clínica, y cuánto cuesta?',
        a: 'Es el panel desde el que la clínica gestiona Telma, y está incluido en todos los planes, sin coste extra. Ve el día: las citas provisionales pendientes de confirmar y las llamadas de hoy, actualizándose en directo. Confirma, cambia o rechaza cada cita y copia los datos del paciente para pegarlos en el software de la clínica. Marca en el calendario los horarios que Telma puede ofrecer y bloquea festivos y vacaciones. Y tiene el historial de llamadas con filtros, el resumen escrito y la grabación de cada una. Funciona en cualquier pantalla, y en el móvil se instala como una aplicación, sin pasar por tiendas.',
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
        a: 'Es Telma atendiendo en WhatsApp, igual que atiende al teléfono: el paciente escribe, ella responde dudas, da cita, la cambia y la cancela. Las confirmaciones de cita no son el add-on: esas van incluidas en cualquier plan, por SMS. Lo que cambia con el add-on es que pasan a llegar por WhatsApp, en la misma conversación.',
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
    title: 'Cuando recepción no puede atender, Telma puede.',
    lead: 'Le mostramos cómo funcionaría en su clínica, con sus horarios y su agenda. Sin compromiso.',
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
    error: 'No hemos podido enviar la solicitud. Inténtelo de nuevo o escríbanos por email.',
    directEmail: 'O escriba a',
  },
  footer: {
    tagline: 'Telma atiende cuando nadie puede.',
    contactHeading: 'Contacto',
    productHeading: 'Producto',
    email: 'ola@telmaatende.com',
    companyHeading: 'Empresa',
    companyText: 'Telma es un producto Bweb Studio.',
    companyLinkLabel: 'bwebstudio.com',
    companyLink: 'https://bwebstudio.com',
    privacyLabel: 'Política de Privacidad',
    termsLabel: 'Términos',
    rights: 'Todos los derechos reservados.',
  },
  flow: {
    title: 'De la conversación, queda lo necesario.',
    description:
      'Cada llamada termina donde corresponde: en la agenda, en un resumen para recepción o en una respuesta por WhatsApp.',
    tabsLabel: 'Ejemplos',
    tabs: {
      booking: 'Agenda y organiza',
      summary: 'Resume cada llamada',
      whatsapp: 'También en WhatsApp',
    },
    scenes: {
      booking: {
        steps: [
          { kind: 'call', label: 'Llamada', quote: 'Hola, quería pedir cita para el martes por la mañana, si hay disponibilidad.', duration: '12 s', related: ['llamada atendida', 'martes', 'por la mañana'] },
          { kind: 'identified', label: 'Telma ha identificado', title: 'Cita', lines: ['martes', 'por la mañana'], badge: 'Por confirmar', related: ['cita', 'martes', 'por la mañana'] },
          { kind: 'agenda', label: 'En la agenda', day: 'Martes', detail: 'Mañana', status: 'Por confirmar', related: ['por confirmar', 'martes'] },
          { kind: 'call', label: 'Llamada', quote: 'Buenas tardes. Necesitaba cambiar la cita del jueves al viernes, por la tarde.', duration: '9 s', related: ['llamada atendida', 'jueves', 'viernes'] },
          { kind: 'identified', label: 'Telma ha identificado', title: 'Cambio', lines: ['del jueves al viernes', 'por la tarde'], badge: 'Por confirmar', related: ['cambio', 'viernes', 'por la tarde'] },
          { kind: 'agenda', label: 'En la agenda', day: 'Viernes', detail: 'Tarde', status: 'Por confirmar', related: ['por confirmar', 'viernes'] },
          { kind: 'call', label: 'Llamada', quote: 'Buenos días. Mañana no voy a poder ir, quería cancelar, por favor.', duration: '7 s', related: ['llamada atendida', 'mañana'] },
          { kind: 'identified', label: 'Telma ha identificado', title: 'Cancelación', lines: ['mañana'], badge: 'Por confirmar', related: ['cancelación', 'mañana'] },
          { kind: 'agenda', label: 'En la agenda', day: 'Mañana', detail: 'Cancelación pedida', status: 'Por confirmar', related: ['por confirmar', 'cancelación'] },
        ],
        facts: [
          { text: 'martes' },
          { text: 'por la mañana' },
          { text: 'cita', caption: 'Petición' },
          { text: 'cambio', caption: 'Petición' },
          { text: 'cancelación', caption: 'Petición' },
          { text: 'por confirmar', caption: 'Estado' },
          { text: 'llamada atendida' },
          { text: 'jueves' },
          { text: 'viernes', caption: 'Cuándo' },
          { text: 'por la tarde' },
          { text: 'mañana' },
          { text: 'primera consulta' },
          { text: 'devolver la llamada' },
          { text: 'por la mañana', caption: 'Cuándo' },
          { text: 'cita' },
          { text: 'por confirmar' },
        ],
      },
      summary: {
        steps: [
          { kind: 'call', label: 'Llamada', quote: 'Buenos días. Es la primera vez que llamo. Quería pedir cita para la semana que viene, por la tarde.', duration: '24 s', related: ['llamada atendida', 'primera consulta'] },
          { kind: 'summary', label: 'Resumen para recepción', title: 'Primera consulta', lines: ['Petición de cita', 'La semana que viene, por la tarde', 'Por confirmar'], channels: ['Email', 'WhatsApp'], related: ['resumen', 'email', 'whatsapp', 'por la tarde'] },
          { kind: 'call', label: 'Llamada', quote: 'Buenas tardes. He llamado hace un rato y se me olvidó preguntar a qué hora abren los sábados.', duration: '11 s', related: ['llamada atendida', 'pregunta'] },
          { kind: 'summary', label: 'Resumen para recepción', title: 'Pregunta respondida', lines: ['Horario del sábado', 'Sin cita'], channels: ['Email', 'WhatsApp'], related: ['resumen', 'email', 'pregunta'] },
        ],
        facts: [
          { text: 'resumen', caption: 'Para recepción' },
          { text: 'email' },
          { text: 'whatsapp' },
          { text: 'llamada atendida' },
          { text: 'primera consulta', caption: 'Petición' },
          { text: 'semana que viene', caption: 'Cuándo' },
          { text: 'por la tarde' },
          { text: 'pregunta', caption: 'Petición' },
          { text: 'grabación' },
          { text: 'por confirmar', caption: 'Estado' },
          { text: 'resumen' },
          { text: 'sábado' },
        ],
      },
      whatsapp: {
        steps: [
          { kind: 'call', label: 'WhatsApp · Paciente', quote: '¡Hola! ¿Se puede pedir cita para el viernes por la mañana?', duration: '10:42', related: ['whatsapp', 'viernes', 'por la mañana'] },
          { kind: 'call', label: 'WhatsApp · Telma', quote: 'Claro. Tengo a las 10:00 o a las 11:30. ¿Cuál prefiere?', duration: '10:42', related: ['whatsapp', '10:00', 'mensaje'] },
          { kind: 'agenda', label: 'En la agenda', day: 'Viernes', detail: '10:00 · pedida por WhatsApp', status: 'Por confirmar', related: ['por confirmar', 'viernes', 'cita'] },
        ],
        facts: [
          { text: 'whatsapp' },
          { text: 'mensaje', caption: 'Canal' },
          { text: 'viernes', caption: 'Cuándo' },
          { text: 'por la mañana' },
          { text: '10:00' },
          { text: 'cita', caption: 'Petición' },
          { text: 'por confirmar', caption: 'Estado' },
          { text: 'cambiar' },
          { text: 'cancelar' },
          { text: 'confirmación', caption: 'Por WhatsApp' },
          { text: 'whatsapp' },
          { text: '11:30' },
        ],
      },
    },
  },
  process: {
    title: 'De la llamada a la agenda.',
    lead: 'Telma atiende, identifica el motivo de la llamada y deja la información organizada en la agenda.',
    chapters: [
      {
        title: 'Atiende la llamada',
        text: 'Cuando recepción no puede responder, Telma atiende con voz natural e identifica el motivo de la llamada.',
      },
      {
        title: 'Organiza la agenda',
        text: 'La petición queda en la agenda por confirmar, y recepción recibe un resumen escrito de lo acordado.',
      },
    ],
    agenda: 'Agenda',
    day: 'Martes',
    newBooking: 'Nueva cita',
    dayAndTime: 'Martes · 10:00',
    callInProgress: 'Llamada en curso',
    morning: 'Mañana',
    statusLabel: 'Estado',
    toConfirm: 'Por confirmar',
    speakers: { caller: 'Paciente', telma: 'Telma' },
    dialogue: {
      caller1: ['Hola,', ' quería pedir cita', ' para el martes', ' por la mañana,', ' si hay disponibilidad.'],
      telma1: ['Claro.', ' ¿Prefiere alguna hora durante la mañana?'],
      caller2: ['Hacia las diez,', ' si es posible.'],
    },
    facts: ['Cita', 'martes', 'mañana', '~10:00'],
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
