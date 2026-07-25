import type { Content } from './types'

export const pt: Content = {
  meta: {
    title: 'Telma Atende: a receção que atende quando ninguém pode',
    description:
      'A Telma é uma rececionista virtual com voz que atende o telefone da sua clínica, responde às dúvidas dos pacientes com a informação da clínica, marca consultas e passa a chamada a uma pessoa real quando é urgente. Para clínicas dentárias e de estética em Portugal.',
    ogTitle: 'Telma Atende',
    ogDescription: 'Nenhuma chamada perdida. Nenhum paciente perdido.',
  },
  langSwitchLabel: 'Idioma',
  header: {
    productBy: 'um produto Bweb Studio',
    nav: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Preços', href: '#precos' },
      { label: 'Integrações', href: '#integracoes' },
      { label: 'Perguntas', href: '#perguntas' },
    ],
    cta: 'Falar connosco',
  },
  hero: {
    name: 'Telma',
    headlineLines: ['Nenhuma chamada perdida.', 'Nenhum paciente perdido.'],
    subtitle:
      'A Telma é a rececionista virtual da sua clínica. Atende o telefone, responde às perguntas dos pacientes, marca as consultas e transfere para a receção quando é preciso.',
    ctaPrimary: 'Ver preços',
    ctaSecondary: 'Falar connosco',
    backedBy: 'um produto Bweb Studio',
  },
  problem: {
    label: 'O problema',
    title: 'Cada chamada que fica sem resposta é um paciente que liga a outra clínica.',
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
        text: 'A Telma percebe o que o paciente precisa e marca a consulta nos horários que a clínica definiu.',
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
    ],
  },
  pricing: {
    label: 'Planos e preços',
    title: 'Escolha o plano da sua clínica.',
    intro: 'Sem período de permanência. Cancela quando quiser.',
    monthly: 'Mensal',
    annual: 'Anual',
    annualBadge: '2 meses grátis',
    perMonth: '/mês',
    billedAnnually: 'faturado anualmente',
    installFreeAnnual: 'Instalação gratuita',
    mostChosen: 'Mais escolhido',
    fromLabel: 'antes',
    installLabel: 'Instalação',
    whatsappCardNote: 'Junte o WhatsApp por +39€/mês',
    planCta: 'Falar connosco',
    customCta: 'Falar connosco',
    plans: [
      {
        id: 'essencial',
        name: 'Essencial',
        audience: 'Para consultórios de 1 a 2 profissionais',
        priceMonthly: 99,
        installation: 99,
        features: [
          'Até 250 chamadas por mês',
          'Atendimento 24 horas',
          'Responde a dúvidas com a informação da clínica',
          'Marcação automática de consultas',
          'Transferência para pessoa real',
          'Resumo de cada chamada por email',
        ],
      },
      {
        id: 'clinica',
        name: 'Clínica',
        audience: 'Para clínicas até 6 profissionais',
        priceMonthly: 199,
        installation: 149,
        highlighted: true,
        features: [
          'Até 600 chamadas por mês',
          'Tudo o que inclui o Essencial',
          'Voz personalizada',
          'Relatório mensal de chamadas',
        ],
      },
      {
        id: 'rede',
        name: 'Rede',
        audience: 'Para clínicas com várias sedes',
        priceMonthly: 399,
        installation: 249,
        features: [
          'Até 1.500 chamadas por mês',
          'Tudo o que inclui o Clínica',
          'Várias sedes num único painel',
          'Apoio prioritário',
        ],
      },
      {
        id: 'personalizado',
        name: 'Personalizado',
        audience: 'Para grupos com mais de 1.500 chamadas por mês',
        priceMonthly: null,
        priceText: 'sob consulta',
        installation: null,
        isCustom: true,
        features: [],
      },
    ],
    whatsapp: {
      label: 'Add-on',
      name: 'Telma no WhatsApp',
      price: '+39€',
      priceNote: 'por mês, em qualquer plano',
      features: [
        'Confirmações e lembretes automáticos de consultas',
        'O paciente pode escrever para marcar, remarcar ou cancelar',
        'A Telma responde e trata da marcação',
      ],
    },
    finePrint: [
      'Instalação: 99€ (Essencial), 149€ (Clínica), 249€ (Rede), grátis nos planos anuais.',
      'Chamadas adicionais: 0,35€ por chamada.',
      'Preços sem IVA.',
      'Sem período de permanência.',
    ],
  },
  integrations: {
    label: 'Integrações',
    title: 'Liga-se ao seu sistema.',
    levels: [
      {
        tag: 'Nível 1',
        name: 'Funciona com qualquer sistema',
        badge: 'Incluído em todos os planos',
        badgeStrong: true,
        text: 'Não é preciso mudar nada. A Telma regista as marcações num calendário partilhado e envia à receção um resumo de cada chamada por email ou WhatsApp. A receção passa a marcação para o software da clínica em segundos.',
      },
      {
        tag: 'Nível 2',
        name: 'Sincronização de calendário',
        badge: 'Incluído se disponível',
        text: 'Se o software da clínica sincroniza com o Google Calendar ou exporta iCal, as marcações aparecem diretamente na agenda existente.',
      },
      {
        tag: 'Nível 3',
        name: 'Integração direta por API',
        badge: 'Projeto à parte',
        text: 'Para clínicas cujo software disponibilize API. Analisamos o caso e apresentamos orçamento.',
      },
    ],
    closing:
      'Na maioria das clínicas começamos no Nível 1 no primeiro dia. Não é preciso esperar por integrações.',
  },
  faq: {
    label: 'Perguntas frequentes',
    title: 'Perguntas frequentes.',
    showMore: 'Ver todas as perguntas',
    showLess: 'Ver menos',
    items: [
      {
        q: 'O paciente percebe que está a falar com uma assistente virtual?',
        a: 'A voz é muito natural. Se o paciente perguntar diretamente, a Telma responde com honestidade que é uma assistente virtual.',
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
        q: 'A Telma pode marcar duas consultas à mesma hora?',
        a: 'Não. A clínica define os horários que a Telma pode oferecer, e ela só oferece esses.',
      },
      {
        q: 'Tenho de mudar o número de telefone da clínica?',
        a: 'Não. Mantém o seu número. As chamadas não atendidas são reencaminhadas para a Telma.',
      },
      {
        q: 'Quanto tempo demora a instalação?',
        a: 'Normalmente entre 3 e 5 dias úteis.',
      },
      {
        q: 'A Telma fala inglês?',
        a: 'Sim, atende em português e em inglês.',
      },
      {
        q: 'O que acontece se ultrapassar as chamadas do meu plano?',
        a: 'As chamadas adicionais são cobradas a 0,35€ cada. Avisamos antes de chegar ao limite.',
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
        a: 'Duas coisas: envia confirmações e lembretes automáticos, e permite que o paciente escreva para marcar, remarcar ou cancelar.',
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
  contact: {
    label: 'Contacto',
    title: 'Vamos falar sobre a sua clínica.',
    intro: 'Deixe os seus dados e entramos em contacto para lhe mostrar a Telma.',
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
    error: 'Não foi possível enviar. Tente novamente ou escreva-nos por email.',
    notConfigured:
      'O formulário ainda não está configurado. Configure a variável NEXT_PUBLIC_CONTACT_ENDPOINT ou escreva-nos diretamente.',
    directEmail: 'Ou escreva para',
  },
  footer: {
    tagline: 'A Telma atende quando ninguém pode.',
    contactHeading: 'Contacto',
    email: 'ola@telma.pt',
    phone: '+351 000 000 000',
    companyHeading: 'Empresa',
    companyText: 'Telma é um produto Bweb Studio.',
    companyLinkLabel: 'bwebstudio.com',
    companyLink: 'https://bwebstudio.com',
    legalPlaceholder:
      'Espaço reservado para NIF, morada e denominação social (a preencher antes de publicar).',
    privacyLabel: 'Política de Privacidade',
    termsLabel: 'Termos',
    rights: 'Todos os direitos reservados.',
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
