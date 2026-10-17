import type { Content } from './types'

export const pt: Content = {
  meta: {
    title: 'Telma Atende: a receção que atende quando ninguém pode',
    description:
      'A Telma é uma rececionista virtual para clínicas. Atende chamadas, responde a dúvidas, gere marcações e encaminha para a equipa quando é necessário.',
    ogTitle: 'Telma Atende: a rececionista virtual da sua clínica',
    ogDescription:
      'A Telma é uma rececionista virtual para clínicas. Atende chamadas, responde a dúvidas, gere marcações e encaminha para a equipa quando é necessário.',
  },
  langSwitchLabel: 'Idioma',
  skipToContent: 'Saltar para o conteúdo',
  header: {
    productBy: 'um produto Bweb Studio',
    navLabel: 'Principal',
    nav: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Preços', href: '#precos' },
      { label: 'Integrações', href: '#integracoes' },
      { label: 'Perguntas', href: '#perguntas' },
    ],
    cta: 'Falar connosco',
    signIn: 'Entrar',
    signUp: 'Criar conta',
  },
  hero: {
    name: 'Telma',
    headlineLines: ['A Telma atende', 'quando ninguém pode.'],
    eyebrow: 'Rececionista virtual para clínicas',
    subtitle:
      'Atende chamadas, responde a dúvidas e trata das marcações quando a receção não pode.',
    ctaPrimary: 'Ver preços',
    ctaSecondary: 'Falar connosco',
    sceneAlt:
      'Balcão de receção de uma clínica ao início da manhã: um telefone fixo, uma agenda aberta com uma consulta marcada e a luz a entrar pela janela.',
    flow: {
      steps: [
        { label: 'Chamada a entrar' },
        { label: 'A Telma atende' },
        { label: 'Consulta marcada' },
        { label: 'Resumo enviado' },
      ],
    },
  },
  voice: {
    label: 'Oiça a Telma',
    title: 'É assim que a Telma atende.',
    lead: 'Uma chamada real, sem edição. Oiça como a Telma atende um paciente.',
    play: 'Ouvir a chamada',
    pause: 'Pausa',
    note: 'Se o paciente perguntar, a Telma explica com naturalidade que é a assistente virtual da clínica.',
  },
  problem: {
    label: 'O problema',
    sceneAlt:
      'Balcão de receção de uma clínica, vazio, com o telefone pousado e a luz da manhã a atravessar a parede.',
    title: 'Quando a receção não pode atender, algumas chamadas ficam por responder.',
    items: [
      {
        title: 'Chamadas perdidas enquanto se atende um paciente',
        text: 'A receção está a atender alguém ao balcão e o telefone toca. Ninguém pode responder e a chamada perde-se.',
      },
      {
        title: 'Chamadas fora de horário',
        text: 'Ao fim do dia, ao fim de semana e nos feriados o telefone continua a tocar. E quem liga precisa de marcação.',
      },
      {
        title: 'Receção saturada',
        text: 'Entre o balcão, o telefone e a agenda, a equipa faz malabarismos. Alguma coisa acaba sempre por ficar para trás.',
      },
    ],
  },
  how: {
    label: 'Como funciona',
    title: 'Simples, do primeiro toque ao resumo final.',
    steps: [
      {
        n: '01',
        title: 'A chamada entra na clínica',
        text: 'Tudo continua igual. O paciente liga para o número de sempre.',
      },
      {
        n: '02',
        title: 'Se ninguém atender, a Telma atende',
        text: 'Quando a receção não pode responder, a chamada segue para a Telma. Atende com voz natural e responde às perguntas do paciente com a informação da clínica.',
      },
      {
        n: '03',
        title: 'A Telma marca a consulta',
        text: 'A Telma identifica o motivo da chamada e marca a consulta nos horários que a clínica definiu.',
      },
      {
        n: '04',
        title: 'A receção recebe um resumo de cada chamada',
        text: 'No fim de cada chamada, a receção recebe um resumo escrito com o que ficou combinado.',
      },
    ],
    note: 'Em caso de urgência, ou se o paciente pedir, a Telma passa a chamada para uma pessoa real.',
  },
  agenda: {
    label: 'A agenda',
    title: 'A agenda continua a ser sua.',
    paragraphs: [
      'A clínica define que horários pode oferecer a Telma. A Telma só oferece esses. Nunca pode haver sobreposição com o que a receção marca à mão.',
      'Por defeito, a Telma deixa uma pré-marcação que a clínica confirma. Quando existe sincronização de calendário, a Telma pode confirmar diretamente.',
      'Tudo é gerido no painel da clínica, incluído em todos os planos. Aí pode definir horários, bloquear férias e feriados, confirmar marcações e consultar as chamadas. O painel atualiza-se em tempo real e funciona no computador, tablet e telemóvel.',
    ],
    preview: { heading: 'Agenda', day: 'Terça-feira', confirmed: 'Confirmada', pending: 'Por confirmar', free: 'Hora livre', booking: 'Nova marcação' },
  },
  pricing: {
    label: 'Planos e preços',
    title: 'Escolha o plano da sua clínica.',
    intro: 'Sem período de permanência. Cancela quando quiser.',
    chooseHint:
      'Para saber qual é o seu, conte as chamadas que a clínica recebe num dia normal.',
    monthly: 'Mensal',
    annual: 'Anual',
    annualBadge: '2 meses grátis',
    perMonth: '/mês',
    billedAnnually: 'faturado anualmente',
    installIncluded: 'Instalação incluída',
    mostChosen: 'Mais escolhido',
    fromLabel: 'antes',
    whatsappCardNote: 'Junte o WhatsApp por +49€/mês',
    planCta: 'Falar connosco',
    planCtaSignup: 'Começar',
    customCta: 'Falar connosco',
    plans: [
      {
        id: 'essencial',
        name: 'Essencial',
        audience: 'Consultórios de 1 a 2 profissionais, até 8 chamadas por dia',
        priceMonthly: 99,
        priceUnit: 'por clínica',
        allowance: '250 minutos de conversa por mês',
        allowanceNote: 'cerca de 100 chamadas',
        features: [
          'Atendimento 24 horas',
          'Atende num idioma, o que a clínica escolher',
          'Responde a dúvidas com a informação da clínica',
          'Marcação automática de consultas',
          'Transferência para pessoa real',
          'Resumo de cada chamada por email',
          'Confirmação por SMS ao paciente, incluída',
          'Painel da clínica para gerir marcações e chamadas, em qualquer ecrã.',
        ],
      },
      {
        id: 'clinica',
        name: 'Clínica',
        audience: 'Clínicas até 6 profissionais, até 25 chamadas por dia',
        priceMonthly: 249,
        priceUnit: 'por clínica',
        allowance: '700 minutos de conversa por mês',
        allowanceNote: 'cerca de 280 chamadas',
        highlighted: true,
        features: [
          'Tudo o que inclui o Essencial',
          'Atende em dois idiomas',
          'Voz personalizada',
          'Relatório mensal de chamadas',
          'Apoio por telefone em horário de escritório',
        ],
      },
      {
        id: 'rede',
        name: 'Rede',
        audience: 'Grupos com duas ou mais moradas, até cinco sedes',
        priceMonthly: 599,
        priceUnit: 'por grupo, inclui 3 sedes',
        allowance: '1.750 minutos de conversa por mês',
        allowanceNote: 'cerca de 700 chamadas, partilhados entre as sedes',
        extraSite:
          'Cada sede além das três: 149€ por mês, com mais 400 minutos e a instalação incluída.',
        features: [
          'Tudo o que inclui o Clínica',
          'Atende nos três idiomas: português, espanhol e inglês',
          'Todas as sedes num só painel, um só contrato e uma só fatura',
          'Cada sede com o seu número e a sua agenda',
          'Apoio prioritário',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'Para grupos com mais de 5 sedes ou mais de 1.750 minutos por mês',
        priceMonthly: null,
        priceText: 'sob consulta',
        isCustom: true,
        features: [],
      },
    ],
    whatsapp: {
      label: 'Add-on',
      name: 'Telma no WhatsApp',
      price: '+49€',
      priceNote: 'por mês, em qualquer plano',
      features: [
        'A Telma atende também no WhatsApp, não só ao telefone',
        'O paciente pode marcar, remarcar ou cancelar diretamente pelo WhatsApp',
        'As confirmações, que já vão incluídas no plano, chegam por WhatsApp em vez de SMS',
        'Até 1.000 mensagens por mês',
      ],
    },
    finePrint: [
      'Instalação incluída em todos os planos. Não há custo de entrada.',
      'As mensagens de confirmação ao paciente estão incluídas em todos os planos. Os avisos que a clínica agenda contam como um minuto cada um.',
      'Minutos adicionais: 0,45€ por minuto, ou um pack de 250 minutos por 89€, que sai a 0,36€. Avisamos antes de chegar ao limite.',
      'Uma chamada de marcação dura, em média, dois a três minutos.',
      'Preços sem IVA.',
      'Sem período de permanência.',
    ],
  },
  integrations: {
    label: 'Integrações',
    title: 'Liga-se ao seu sistema.',
    levels: [
      {
        tag: 'Sem integração',
        name: 'Funciona com qualquer sistema',
        badge: 'Incluído em todos os planos',
        badgeStrong: true,
        text: 'Não é preciso mudar nada. A Telma regista as marcações num calendário partilhado e envia à receção um resumo de cada chamada por email ou WhatsApp. A receção passa a marcação para o software da clínica em segundos.',
      },
      {
        tag: 'Sincronização de calendário',
        name: 'Google Calendar ou iCal',
        badge: 'Incluído se disponível',
        text: 'Se o software da clínica sincroniza com o Google Calendar ou exporta iCal, as marcações aparecem diretamente na agenda existente.',
      },
      {
        tag: 'Integração por API',
        name: 'Para software com API',
        badge: 'Projeto à parte',
        text: 'Para clínicas cujo software disponibilize API. Analisamos o caso e apresentamos orçamento.',
      },
    ],
    closing:
      'Na maioria das clínicas começamos sem integração no primeiro dia. Não é preciso esperar por integrações.',
  },
  clinics: {
    label: 'Para quem',
    title: 'Para clínicas que recebem marcações por telefone.',
    lead: 'A Telma adapta-se à forma de trabalhar de cada clínica.',
    items: [{ id: 'dental', name: 'Medicina dentária' }, { id: 'general', name: 'Medicina geral' }, { id: 'aesthetic', name: 'Estética' }, { id: 'physio', name: 'Fisioterapia' }],
  },
  calls: {
    title: 'Feita para as chamadas que não podem esperar.',
    lead: 'Quando a receção não pode atender, a Telma atende a chamada e deixa tudo registado para a equipa.',
    listen: 'Ouvir a Telma',
    items: [
      { tag: 'Para quem liga', title: 'Sem deixar a chamada no correio de voz', text: 'A chamada que a receção não pode atender segue para a Telma, e é ela que responde.' },
      { tag: 'Para quem liga', title: 'Também fora de horário', text: 'Ao fim do dia, ao fim de semana e nos feriados, a chamada é atendida e o pedido fica registado.' },
      { tag: 'Para a equipa', title: 'Nada se perde pelo caminho', text: 'Cada chamada chega à receção com um resumo escrito e a gravação, para confirmar e seguir em frente.' },
    ],
  },
  banner: { title: 'A receção atende quem está ao balcão. A Telma atende o telefone.', cta: 'Falar connosco' },
  band: { title: 'Da conversa, fica o necessário.' },
  resources: {
    title: 'Para ler com calma',
    prev: 'Anterior',
    next: 'Seguinte',
    readingTime: '{n} min de leitura',
    more: 'Mais para ler',
    unwritten: 'Este texto ainda está por escrever. Entretanto, fale connosco e explicamos o mesmo ao telefone.',
  },
  trust: {
    label: 'Confiança',
    title: 'A clínica mantém o controlo.',
    items: [
      { icon: 'shield', title: 'Dados na União Europeia', text: 'Cumprimos o RGPD e os dados ficam alojados na UE.' },
      { icon: 'mic', title: 'Gravação com aviso', text: 'As chamadas são gravadas com aviso prévio, e pode ouvi-las e ler o resumo de cada uma.' },
      { icon: 'siren', title: 'Urgências direto para a clínica', text: 'A Telma deteta situações urgentes e passa a chamada de imediato.' },
      { icon: 'calendar', title: 'Só os horários que define', text: 'A Telma só oferece os horários que a clínica escolhe. Nunca marca duas consultas à mesma hora.' },
      { icon: 'phone', title: 'O mesmo número', text: 'Mantém o seu número e não instala nada. As chamadas não atendidas seguem para a Telma.' },
      { icon: 'unlock', title: 'Sem permanência', text: 'Instalação incluída e sem período de permanência. Cancela quando quiser.' },
    ],
  },
  faq: {
    label: 'Perguntas frequentes',
    title: 'Perguntas frequentes.',
    showMore: 'Ver todas as perguntas',
    showLess: 'Ver menos',
    items: [
      {
        q: 'O paciente percebe que está a falar com uma assistente virtual?',
        a: 'A voz é natural. Se o paciente perguntar, a Telma explica com naturalidade que é a assistente virtual da clínica.',
      },
      {
        q: 'A Telma sabe responder a perguntas sobre a clínica?',
        a: 'Sim. A Telma responde às perguntas mais comuns dos pacientes com a informação da clínica: horários, morada, estacionamento, tratamentos e preparação para a consulta. Quando é preciso, passa a chamada para a receção.',
      },
      {
        q: 'E se for uma urgência?',
        a: 'A Telma deteta situações urgentes e passa imediatamente a chamada para a clínica.',
      },
      {
        q: 'Sou uma clínica pequena. Que plano escolho?',
        a: 'O Essencial. É o plano de um consultório com um ou dois profissionais, que recebe até oito chamadas por dia. Se costuma passar disso, o Clínica sai mais barato do que o Essencial com minutos adicionais.',
      },
      {
        q: 'Tenho cinco sedes. Qual é o meu plano? Pago por sede ou no total?',
        a: 'O seu plano é o Rede, e paga no total, não por sede. O Rede custa 599€ por mês e inclui três sedes; as duas restantes ficam a 149€ cada, portanto 897€ por mês pelas cinco, com a instalação das cinco incluída. Um só contrato, uma só fatura e todas as sedes no mesmo painel, cada uma com o seu número e a sua agenda.',
      },
      {
        q: 'A Telma pode marcar duas consultas à mesma hora?',
        a: 'Não. A clínica define os horários que a Telma pode oferecer, e ela só oferece esses.',
      },
      {
        q: 'Tenho de mudar o número de telefone da clínica?',
        a: 'Não. Mantém o seu número. As chamadas não atendidas são reencaminhadas para a Telma.',
      },
      {
        q: 'Quanto tempo até estar a funcionar?',
        a: 'Normalmente entre 3 e 5 dias úteis.',
      },
      {
        q: 'A instalação tem algum custo?',
        a: 'Não. A instalação está incluída em todos os planos. Configuramos a informação da clínica, as respostas da Telma, a voz e o encaminhamento das chamadas. Depois fazemos os testes necessários e acompanhamos a equipa antes da ativação.',
      },
      {
        q: 'Em que idiomas atende a Telma?',
        a: 'Em português, espanhol e inglês. A Telma atende no idioma que a clínica escolher e, se tiver mais do que um, diz logo na saudação como pedir os outros: "for English say English". Quem liga pede e ela muda. O plano decide quantos desses três a clínica usa. Francês, alemão e italiano estão a caminho.',
      },
      {
        q: 'O preço é por clínica ou por profissional?',
        a: 'Por clínica. Não cobramos por profissional nem por utilizador do painel. No Essencial e no Clínica, o preço é de uma clínica numa morada. No Rede, é de um grupo com várias moradas.',
      },
      {
        q: 'Porque é que os planos são em minutos e não em chamadas?',
        a: 'Porque a duração das chamadas varia bastante. Uma pergunta simples pode durar poucos segundos, enquanto uma marcação ou remarcação pode levar vários minutos. Cobrar por minutos permite ajustar o plano ao uso real da clínica. Como referência, uma chamada de marcação dura, em média, dois a três minutos.',
      },
      {
        q: 'O que acontece se ultrapassar os minutos do meu plano?',
        a: 'Os minutos adicionais são cobrados a 0,45€ cada, ou pode juntar um pack de 250 minutos por 89€, que sai a 0,36€ o minuto, um quinto menos. A Telma nunca deixa de atender por causa do limite, e avisamos antes de lá chegar. Se acontecer todos os meses, o plano seguinte fica mais barato do que os extras.',
      },
      {
        q: 'O que é o painel da clínica, e quanto custa?',
        a: 'É o painel onde a clínica gere a Telma, e está incluído em todos os planos, sem custo extra. Vê o dia: as pré-marcações à espera de confirmação e as chamadas de hoje, a atualizar em direto. Confirma, altera ou rejeita cada marcação e copia os dados do paciente para colar no software da clínica. Marca no calendário os horários que a Telma pode oferecer e bloqueia feriados e férias. E tem o histórico de chamadas com filtros, o resumo escrito e a gravação de cada uma. Funciona em qualquer ecrã, e no telemóvel instala-se como uma aplicação, sem passar por lojas.',
      },
      {
        q: 'Posso ouvir as chamadas?',
        a: 'Sim. Recebe um resumo escrito de cada chamada e pode aceder às gravações.',
      },
      {
        q: 'Como funciona a proteção de dados?',
        a: 'Cumprimos o RGPD. As chamadas são gravadas com aviso prévio ao paciente e os dados ficam alojados na União Europeia.',
      },
      {
        q: 'Preciso de instalar software?',
        a: 'Não. A Telma funciona sobre a linha telefónica atual da clínica.',
      },
      {
        q: 'O que faz exatamente a Telma no WhatsApp?',
        a: 'É a Telma a atender no WhatsApp, da mesma maneira que atende ao telefone: o paciente escreve, ela responde às dúvidas, marca, remarca e desmarca. As confirmações de marcação não são o add-on: essas já vão incluídas em qualquer plano, por SMS. O que muda com o add-on é que passam a chegar por WhatsApp, na mesma conversa.',
      },
      {
        q: 'Posso cancelar quando quiser?',
        a: 'Sim, não há período de permanência.',
      },
      {
        q: 'Serve para clínicas de estética?',
        a: 'Sim. Funciona em qualquer clínica que receba marcações por telefone.',
      },
      {
        q: 'Quem está por trás da Telma?',
        a: 'A Telma é um produto da Bweb Studio, um estúdio de software com experiência em produtos digitais.',
      },
    ],
  },
  finalCta: {
    title: 'Quando a receção não pode atender, a Telma pode.',
    lead: 'Mostramos-lhe como funcionaria na sua clínica, com os seus horários e a sua agenda. Sem compromisso.',
    cta: 'Falar connosco',
    secondary: 'Ver preços',
  },
  contact: {
    label: 'Contacto',
    title: 'Vamos falar sobre a sua clínica.',
    intro: 'Deixe os seus dados e entramos em contacto para lhe mostrar a Telma.',
    requiredLabel: 'obrigatório',
    fields: {
      name: 'Nome',
      clinic: 'Clínica',
      phone: 'Telemóvel',
      email: 'Email',
      plan: 'Plano de interesse',
      message: 'Mensagem',
    },
    planPlaceholder: 'Escolha um plano',
    planOptions: ['Essencial', 'Clínica', 'Rede', 'Personalizado', 'Telma no WhatsApp'],
    submit: 'Enviar',
    sending: 'A enviar...',
    success: 'Recebemos o seu pedido. Entramos em contacto em breve.',
    error: 'Não foi possível enviar o pedido. Tente novamente ou escreva-nos por email.',
    directEmail: 'Ou escreva para',
  },
  footer: {
    tagline: 'A Telma atende quando ninguém pode.',
    contactHeading: 'Contacto',
    productHeading: 'Produto',
    email: 'ola@telmaatende.com',
    companyHeading: 'Empresa',
    companyText: 'Telma é um produto Bweb Studio.',
    companyLinkLabel: 'bwebstudio.com',
    companyLink: 'https://bwebstudio.com',
    privacyLabel: 'Política de Privacidade',
    termsLabel: 'Termos',
    rights: 'Todos os direitos reservados.',
  },
  flow: {
    title: 'Da conversa, fica o necessário.',
    description:
      'Cada chamada termina no sítio certo: na agenda, num resumo para a receção, ou numa resposta no WhatsApp.',
    tabsLabel: 'Exemplos',
    tabs: {
      booking: 'Marca e organiza',
      summary: 'Resume cada chamada',
      whatsapp: 'Também no WhatsApp',
    },
    scenes: {
      booking: {
        steps: [
          { kind: 'call', label: 'Chamada', quote: 'Olá, queria marcar para terça-feira de manhã, se houver disponibilidade.', duration: '12 s', related: ['chamada atendida', 'terça-feira', 'de manhã'] },
          { kind: 'identified', label: 'Telma identificou', title: 'Marcação', lines: ['terça-feira', 'de manhã'], badge: 'Por confirmar', related: ['marcação', 'terça-feira', 'de manhã'] },
          { kind: 'agenda', label: 'Na agenda', day: 'Terça-feira', detail: 'Manhã', status: 'Por confirmar', related: ['por confirmar', 'terça-feira'] },
          { kind: 'call', label: 'Chamada', quote: 'Boa tarde. Precisava de mudar a consulta de quinta para sexta, à tarde.', duration: '9 s', related: ['chamada atendida', 'quinta-feira', 'sexta-feira'] },
          { kind: 'identified', label: 'Telma identificou', title: 'Alteração', lines: ['de quinta-feira para sexta-feira', 'à tarde'], badge: 'Por confirmar', related: ['alteração', 'sexta-feira', 'à tarde'] },
          { kind: 'agenda', label: 'Na agenda', day: 'Sexta-feira', detail: 'Tarde', status: 'Por confirmar', related: ['por confirmar', 'sexta-feira'] },
          { kind: 'call', label: 'Chamada', quote: 'Bom dia. Amanhã não vou conseguir ir, queria cancelar, por favor.', duration: '7 s', related: ['chamada atendida', 'amanhã'] },
          { kind: 'identified', label: 'Telma identificou', title: 'Cancelamento', lines: ['amanhã'], badge: 'Por confirmar', related: ['cancelamento', 'amanhã'] },
          { kind: 'agenda', label: 'Na agenda', day: 'Amanhã', detail: 'Cancelamento pedido', status: 'Por confirmar', related: ['por confirmar', 'cancelamento'] },
        ],
        facts: [
          { text: 'terça-feira' },
          { text: 'de manhã' },
          { text: 'marcação', caption: 'Pedido' },
          { text: 'alteração', caption: 'Pedido' },
          { text: 'cancelamento', caption: 'Pedido' },
          { text: 'por confirmar', caption: 'Estado' },
          { text: 'chamada atendida' },
          { text: 'quinta-feira' },
          { text: 'sexta-feira', caption: 'Quando' },
          { text: 'à tarde' },
          { text: 'amanhã' },
          { text: 'primeira consulta' },
          { text: 'ligar de volta' },
          { text: 'de manhã', caption: 'Quando' },
          { text: 'marcação' },
          { text: 'por confirmar' },
        ],
      },
      summary: {
        steps: [
          { kind: 'call', label: 'Chamada', quote: 'Bom dia. É a primeira vez que ligo. Queria marcar uma consulta para a próxima semana, de tarde.', duration: '24 s', related: ['chamada atendida', 'primeira consulta'] },
          { kind: 'summary', label: 'Resumo para a receção', title: 'Primeira consulta', lines: ['Pedido de marcação', 'Próxima semana, à tarde', 'Por confirmar'], channels: ['Email', 'WhatsApp'], related: ['resumo', 'email', 'whatsapp', 'à tarde'] },
          { kind: 'call', label: 'Chamada', quote: 'Boa tarde. Liguei há pouco e esqueci-me de perguntar a que horas abrem ao sábado.', duration: '11 s', related: ['chamada atendida', 'pergunta'] },
          { kind: 'summary', label: 'Resumo para a receção', title: 'Pergunta respondida', lines: ['Horário de sábado', 'Sem marcação'], channels: ['Email', 'WhatsApp'], related: ['resumo', 'email', 'pergunta'] },
        ],
        facts: [
          { text: 'resumo', caption: 'Para a receção' },
          { text: 'email' },
          { text: 'whatsapp' },
          { text: 'chamada atendida' },
          { text: 'primeira consulta', caption: 'Pedido' },
          { text: 'próxima semana', caption: 'Quando' },
          { text: 'à tarde' },
          { text: 'pergunta', caption: 'Pedido' },
          { text: 'gravação' },
          { text: 'por confirmar', caption: 'Estado' },
          { text: 'resumo' },
          { text: 'sábado' },
        ],
      },
      whatsapp: {
        steps: [
          { kind: 'call', label: 'WhatsApp · Cliente', quote: 'Olá! Dá para marcar para sexta de manhã?', duration: '10:42', related: ['whatsapp', 'sexta-feira', 'de manhã'] },
          { kind: 'call', label: 'WhatsApp · Telma', quote: 'Claro. Tenho às 10:00 ou às 11:30. Qual prefere?', duration: '10:42', related: ['whatsapp', '10:00', 'mensagem'] },
          { kind: 'agenda', label: 'Na agenda', day: 'Sexta-feira', detail: '10:00 · pedido por WhatsApp', status: 'Por confirmar', related: ['por confirmar', 'sexta-feira', 'marcação'] },
        ],
        facts: [
          { text: 'whatsapp' },
          { text: 'mensagem', caption: 'Canal' },
          { text: 'sexta-feira', caption: 'Quando' },
          { text: 'de manhã' },
          { text: '10:00' },
          { text: 'marcação', caption: 'Pedido' },
          { text: 'por confirmar', caption: 'Estado' },
          { text: 'remarcar' },
          { text: 'cancelar' },
          { text: 'confirmação', caption: 'Por WhatsApp' },
          { text: 'whatsapp' },
          { text: '11:30' },
        ],
      },
    },
  },
  process: {
    title: 'Da chamada à agenda.',
    lead: 'A Telma atende, identifica o motivo da chamada e deixa a informação organizada na agenda.',
    chapters: [
      {
        title: 'Atende a chamada',
        text: 'Quando a receção não pode responder, a Telma atende com voz natural e identifica o motivo da chamada.',
      },
      {
        title: 'Organiza a agenda',
        text: 'O pedido fica na agenda por confirmar, e a receção recebe um resumo escrito do que ficou combinado.',
      },
    ],
    agenda: 'Agenda',
    day: 'Terça-feira',
    newBooking: 'Nova marcação',
    dayAndTime: 'Terça-feira · 10:00',
    callInProgress: 'Chamada em curso',
    morning: 'Manhã',
    statusLabel: 'Estado',
    toConfirm: 'Por confirmar',
    speakers: { caller: 'Paciente', telma: 'Telma' },
    dialogue: {
      caller1: ['Olá,', ' queria marcar', ' para terça-feira', ' de manhã,', ' se houver disponibilidade.'],
      telma1: ['Claro.', ' Prefere algum horário durante a manhã?'],
      caller2: ['Por volta das dez,', ' se possível.'],
    },
    facts: ['Marcação', 'terça-feira', 'manhã', '~10:00'],
  },
  legal: {
    privacy: {
      title: 'Política de Privacidade',
      updated: 'Conteúdo provisório. A rever pela empresa antes de publicar.',
      intro:
        'Este texto é um espaço reservado e não constitui a política final. Descreve, de forma geral, como a Telma trata os dados pessoais no cumprimento do RGPD.',
      sections: [
        {
          heading: 'Responsável pelo tratamento',
          body: [
            'A preencher com a denominação social, NIF e morada da Bweb Studio.',
            'Contacto para questões de privacidade: a definir.',
          ],
        },
        {
          heading: 'Dados que tratamos',
          body: [
            'Dados de contacto submetidos no formulário: nome, clínica, telemóvel, email e mensagem.',
            'Gravações e resumos de chamadas, quando o serviço está ativo, com aviso prévio ao paciente.',
          ],
        },
        {
          heading: 'Onde ficam os dados',
          body: ['Os dados ficam alojados na União Europeia.'],
        },
        {
          heading: 'Os seus direitos',
          body: [
            'Pode pedir acesso, correção ou eliminação dos seus dados. A definir o canal e o prazo de resposta.',
          ],
        },
      ],
      back: 'Voltar ao início',
    },
    terms: {
      title: 'Termos',
      updated: 'Conteúdo provisório. A rever pela empresa antes de publicar.',
      intro:
        'Este texto é um espaço reservado e não constitui os termos finais do serviço. Serão substituídos pela versão jurídica antes da publicação.',
      sections: [
        {
          heading: 'O serviço',
          body: [
            'A Telma é uma rececionista virtual com voz para clínicas. O âmbito exato do serviço é definido no contrato.',
          ],
        },
        {
          heading: 'Planos e pagamento',
          body: [
            'Os preços apresentados no site são indicativos e não incluem IVA.',
            'As condições finais de faturação constam da proposta comercial.',
          ],
        },
        {
          heading: 'Cancelamento',
          body: ['Não há período de permanência. Pode cancelar quando quiser.'],
        },
      ],
      back: 'Voltar ao início',
    },
  },
}
