import type { Content } from '../types'
import { pt } from '../pt'

/**
 * ── THE HOTEL PAGE, /pt/hoteis ─────────────────────────────────────────────
 * The same page as the clinic home, in a hotel's words. Everything that is not
 * about the kind of business (footer, legal, contact mechanics, the price
 * figures themselves) is inherited from `pt`, so a change there reaches both.
 *
 * WHAT THE PAGE PROMISES. For a hotel, Telma books, changes and cancels
 * reservations and answers questions, on the line. She does it through the
 * hotel's own reservation system (PMS): each hotel tells us which one it uses
 * and we connect Telma to it during setup. That connection is the condition
 * for every booking claim here, so the FAQ says it in plain words.
 *
 * Still not promised: languages beyond the three she speaks today, or more of
 * them than the plan includes.
 *
 * Plan ids stay the clinic ones (essencial / clinica / rede) because they are
 * what billing knows. Only the names on the cards change.
 */
export const hoteisPt: Content = {
  ...pt,
  meta: {
    title: 'Telma Atende para hotéis: a receção que atende quando ninguém pode',
    description:
      'A Telma é uma rececionista virtual para hotéis. Atende chamadas a qualquer hora, faz e cancela reservas e responde aos hóspedes em português, inglês e espanhol.',
    ogTitle: 'Telma Atende: a rececionista virtual do seu hotel',
    ogDescription:
      'Atende chamadas de dia e de noite, faz, muda e cancela reservas e responde aos hóspedes no idioma deles.',
  },
  header: {
    ...pt.header,
    nav: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Para quem', href: '#para-quem' },
      { label: 'Preços', href: '#precos' },
      { label: 'Perguntas', href: '#perguntas' },
    ],
  },
  hero: {
    ...pt.hero,
    headlineLines: ['A Telma atende', 'quando a receção não pode.'],
    eyebrow: 'Rececionista virtual para hotéis',
    subtitle:
      'Atende o telefone do hotel de dia e de noite, faz e cancela reservas e responde aos hóspedes no idioma deles.',
    sceneAlt:
      'Receção de um hotel à noite: o balcão iluminado, a chave de um quarto e o telefone a tocar sem ninguém por perto.',
    flow: {
      steps: [
        { label: 'Chamada a entrar' },
        { label: 'A Telma atende' },
        { label: 'Reserva feita' },
        { label: 'Resumo pronto' },
      ],
    },
  },
  voice: {
    ...pt.voice,
    lead: 'Duas chamadas de exemplo, uma em português e outra em que o hóspede pede inglês. A Telma cancela uma reserva, faz outra e responde às dúvidas.',
    note: 'Se o hóspede perguntar, a Telma explica com naturalidade que é a assistente virtual do hotel.',
  },
  problem: {
    label: 'O problema',
    sceneAlt:
      'Balcão de receção de um hotel, vazio, à noite, com o telefone pousado e a luz quente de um candeeiro.',
    title: 'Quando a receção não pode atender, o hóspede liga para outro sítio.',
    items: [
      {
        title: 'O telefone toca a meio de um check-in',
        text: 'A receção está com um hóspede ao balcão, com a chave na mão. O telefone toca e quem liga desiste ao quarto toque.',
      },
      {
        title: 'À noite não há ninguém para atender',
        text: 'Depois do turno da tarde, a receção fica vazia ou com uma só pessoa. As chamadas da noite ficam sem resposta até de manhã.',
      },
      {
        title: 'A reserva vai parar à Booking',
        text: 'Quem não consegue falar com o hotel reserva numa plataforma, e o hotel paga a comissão de uma reserva que podia ter sido direta.',
      },
    ],
  },
  how: {
    label: 'Como funciona',
    title: 'Simples, do primeiro toque ao resumo final.',
    steps: [
      {
        n: '01',
        title: 'O hóspede liga para o hotel',
        text: 'Tudo continua igual. Liga para o número de sempre, de Portugal ou do estrangeiro.',
      },
      {
        n: '02',
        title: 'Se ninguém atender, a Telma atende',
        text: 'Atende com voz natural, em português, inglês ou espanhol, e responde com a informação do hotel: check-in, estacionamento, pequeno-almoço, como chegar.',
      },
      {
        n: '03',
        title: 'Faz, muda e cancela reservas',
        text: 'A Telma vê a disponibilidade no sistema de reservas do hotel, reserva o quarto, muda datas ou cancela, e confirma tudo ao hóspede na mesma chamada.',
      },
      {
        n: '04',
        title: 'A receção tem o resumo de cada chamada',
        text: 'A reserva já está no sistema do hotel, e no painel fica um resumo escrito e a gravação de cada chamada.',
      },
    ],
    note: 'Se for urgente, ou se o hóspede pedir, a Telma passa a chamada para uma pessoa da equipa.',
  },
  pricing: {
    ...pt.pricing,
    title: 'Escolha o plano do seu hotel.',
    chooseHint:
      'Para saber qual é o seu, conte as chamadas que o hotel recebe num dia normal e em quantos idiomas lhe ligam.',
    plans: [
      {
        ...pt.pricing.plans[0],
        audience: 'Alojamento local e hotéis pequenos, até 8 chamadas por dia',
        priceUnit: 'por hotel',
        features: [
          'Atendimento 24 horas',
          'Atende num idioma, o que o hotel escolher',
          'Responde a dúvidas com a informação do hotel',
          'Faz, muda e cancela reservas no sistema do hotel',
          'Transferência para pessoa real',
          'Resumo escrito de cada chamada no painel',
          'Painel do hotel para ver chamadas e reservas, em qualquer ecrã',
        ],
      },
      {
        ...pt.pricing.plans[1],
        name: 'Hotel',
        audience: 'Hotéis com receção própria, até 25 chamadas por dia',
        priceUnit: 'por hotel',
        features: [
          'Tudo o que inclui o Essencial',
          'Atende em dois idiomas, por exemplo português e inglês',
          'Voz personalizada',
          'Relatório mensal de chamadas',
          'Apoio por telefone em horário de escritório',
        ],
      },
      {
        ...pt.pricing.plans[2],
        name: 'Grupo',
        audience: 'Grupos com dois ou mais hotéis, até cinco',
        priceUnit: 'por grupo, inclui 3 hotéis',
        allowanceNote: 'cerca de 700 chamadas, partilhados entre os hotéis',
        extraSite:
          'Cada hotel além dos três: 149€ por mês, com mais 400 minutos e a instalação incluída.',
        features: [
          'Tudo o que inclui o Hotel',
          'Atende nos três idiomas: português, inglês e espanhol',
          'Um contrato e uma fatura para todo o grupo',
          'Cada hotel com o seu número e o seu sistema de reservas',
          'Apoio prioritário',
        ],
      },
      {
        ...pt.pricing.plans[3],
        audience: 'Para grupos com mais de 5 hotéis ou mais de 1.750 minutos por mês',
      },
    ],
    whatsapp: {
      ...pt.pricing.whatsapp,
      features: [
        'A Telma atende também no WhatsApp, não só ao telefone',
        'O hóspede pode fazer perguntas, reservar e cancelar pelo WhatsApp',
        'Até 1.000 mensagens por mês',
      ],
    },
    finePrint: [
      'Instalação incluída em todos os planos. Não há custo de entrada.',
      'Minutos adicionais: 0,45€ por minuto, ou um pack de 250 minutos por 89€, que sai a 0,36€. Avisamos antes de chegar ao limite.',
      'Uma chamada de reserva dura, em média, dois a três minutos.',
      'Preços sem IVA.',
      'Sem período de permanência.',
    ],
  },
  clinics: {
    label: 'Para quem',
    title: 'Para alojamentos que recebem chamadas de hóspedes.',
    lead: 'A Telma aprende a informação de cada casa: horários, regras, serviços e como lá chegar.',
    items: [
      { id: 'hotel', name: 'Hotéis' },
      { id: 'local', name: 'Alojamento local' },
      { id: 'rural', name: 'Turismo rural' },
    ],
  },
  calls: {
    title: 'Feita para as chamadas que não podem esperar.',
    lead: 'Quando a receção não pode atender, a Telma atende a chamada e deixa tudo registado para a equipa.',
    listen: 'Ouvir a Telma',
    items: [
      { tag: 'Para o hóspede', title: 'Alguém atende, a qualquer hora', text: 'A chamada que a receção não pode atender segue para a Telma, também de madrugada.' },
      { tag: 'Para o hóspede', title: 'No idioma dele', text: 'Quem liga do estrangeiro é atendido em inglês ou espanhol, sem esperar por quem fale a língua.' },
      { tag: 'Para a equipa', title: 'Nada se perde pelo caminho', text: 'Cada chamada fica no painel com um resumo escrito e a gravação, para a equipa ver o que ficou feito.' },
    ],
  },
  banner: { title: 'A receção atende quem está ao balcão. A Telma atende o telefone.', cta: 'Falar connosco' },
  trust: {
    label: 'Confiança',
    title: 'O hotel mantém o controlo.',
    items: [
      { icon: 'shield', title: 'Dados na União Europeia', text: 'Cumprimos o RGPD e os dados ficam alojados na UE.' },
      { icon: 'mic', title: 'Gravação com aviso', text: 'As chamadas são gravadas com aviso prévio, e pode ouvi-las e ler o resumo de cada uma.' },
      { icon: 'siren', title: 'Urgências para a equipa', text: 'Se um hóspede tem um problema urgente, a Telma passa a chamada de imediato.' },
      { icon: 'calendar', title: 'Só reserva o que está livre', text: 'A Telma consulta a disponibilidade no sistema do hotel antes de reservar. Nunca vende o mesmo quarto duas vezes.' },
      { icon: 'phone', title: 'O mesmo número', text: 'Mantém o número do hotel e não instala nada. As chamadas não atendidas seguem para a Telma.' },
      { icon: 'unlock', title: 'Sem permanência', text: 'Instalação incluída e sem período de permanência. Cancela quando quiser.' },
    ],
  },
  faq: {
    ...pt.faq,
    items: [
      {
        q: 'A Telma faz reservas?',
        a: 'Sim. Faz reservas novas, muda datas e cancela. Consulta a disponibilidade no sistema de reservas do hotel, confirma ao hóspede na mesma chamada e deixa o resumo no painel. Para isso está ligada ao sistema que o hotel já usa: veja a pergunta seguinte.',
      },
      {
        q: 'Liga-se ao nosso sistema de reservas?',
        a: 'Sim, é assim que a Telma reserva. Diga-nos que sistema usa o hotel (Cloudbeds, Mews, Host ou outro) e ligamos a Telma a ele durante a instalação. Não precisa de mudar de sistema nem de trabalhar em dois sítios.',
      },
      {
        q: 'Em que idiomas atende a Telma?',
        a: 'Em português, inglês e espanhol. Se o hotel tiver mais do que um, a Telma diz logo na saudação como pedir os outros: "for English say English". Quem liga pede e ela muda. O plano decide quantos desses três o hotel usa. Francês, alemão e italiano estão a caminho.',
      },
      {
        q: 'O que sabe responder?',
        a: 'O que a receção responde todos os dias: horas de check-in e check-out, estacionamento, pequeno-almoço, como chegar, transfer, animais, se há quartos para famílias. Configuramos isso consigo na instalação. Quando não sabe, diz que a equipa liga de volta e deixa o recado no painel.',
      },
      {
        q: 'O hóspede percebe que está a falar com uma assistente virtual?',
        a: 'A voz é natural. Se o hóspede perguntar, a Telma explica com naturalidade que é a assistente virtual do hotel.',
      },
      {
        q: 'E se um hóspede tiver um problema durante a estadia?',
        a: 'Se for urgente, ou se o hóspede pedir para falar com alguém, a Telma passa a chamada para o número da equipa que definir.',
      },
      {
        q: 'Atende todas as chamadas ou só as que a receção não atende?',
        a: 'Escolhe o hotel. O habitual é reencaminhar só as chamadas que a receção não atende. Se à noite não houver ninguém, pode reencaminhar todas a partir de certa hora, e explicamos como se faz no seu operador.',
      },
      {
        q: 'Tenho de mudar o número de telefone do hotel?',
        a: 'Não. Mantém o seu número. As chamadas não atendidas são reencaminhadas para a Telma.',
      },
      {
        q: 'Que plano escolho?',
        a: 'Depende das chamadas por dia e dos idiomas. Um alojamento pequeno que recebe até oito chamadas por dia, quase todas em português, fica bem no Essencial. Se lhe ligam muitos estrangeiros, o Hotel atende em dois idiomas. Se tem dúvidas, fale connosco e vemos juntos as suas chamadas.',
      },
      {
        q: 'Porque é que os planos são em minutos e não em chamadas?',
        a: 'Porque a duração das chamadas varia bastante. Uma pergunta sobre o estacionamento dura segundos, uma reserva leva dois ou três minutos. Cobrar por minutos ajusta o plano ao uso real do hotel.',
      },
      {
        q: 'O que acontece se ultrapassar os minutos do meu plano?',
        a: 'Os minutos adicionais são cobrados a 0,45€ cada, ou pode juntar um pack de 250 minutos por 89€, que sai a 0,36€ o minuto. A Telma nunca deixa de atender por causa do limite, e avisamos antes de lá chegar. Na época alta pode compensar subir de plano.',
      },
      {
        q: 'Quanto tempo até estar a funcionar?',
        a: 'Depende da disponibilidade do número da Telma. Avisamos por email assim que estiver ativo e, entretanto, preparamos consigo a informação do hotel.',
      },
      {
        q: 'A instalação tem algum custo?',
        a: 'Não. Está incluída em todos os planos. Configuramos a informação do hotel, as respostas da Telma, a voz, a ligação ao sistema de reservas e o encaminhamento das chamadas, fazemos os testes e acompanhamos a equipa antes da ativação.',
      },
      {
        q: 'Posso ouvir as chamadas?',
        a: 'Sim. No painel tem o resumo escrito de cada chamada e pode aceder às gravações.',
      },
      {
        q: 'Como funciona a proteção de dados?',
        a: 'Cumprimos o RGPD. As chamadas são gravadas com aviso prévio ao hóspede e os dados ficam alojados na União Europeia.',
      },
      {
        q: 'Posso cancelar quando quiser?',
        a: 'Sim, não há período de permanência.',
      },
      {
        q: 'Quem está por trás da Telma?',
        a: 'A Telma é um produto da Bweb Studio, um estúdio de software com experiência em produtos digitais.',
      },
    ],
  },
  finalCta: {
    title: 'Quando a receção não pode atender, a Telma pode.',
    lead: 'Mostramos-lhe como funcionaria no seu hotel, com a sua informação, o seu sistema de reservas e os seus idiomas. Sem compromisso.',
    cta: 'Falar connosco',
    secondary: 'Ver preços',
  },
  contact: {
    ...pt.contact,
    title: 'Vamos falar sobre o seu hotel.',
    fields: { ...pt.contact.fields, clinic: 'Hotel' },
    planOptions: ['Essencial', 'Hotel', 'Grupo', 'Personalizado'],
  },
  flow: {
    title: 'Da conversa, fica o necessário.',
    description:
      'Cada chamada termina no sítio certo: numa reserva feita ou num resumo para a receção.',
    tabsLabel: 'Exemplos',
    tabs: {
      booking: 'Reserva e cancela',
      summary: 'Responde e resume',
      whatsapp: 'Noutros idiomas',
    },
    scenes: {
      booking: {
        steps: [
          { kind: 'call', label: 'Chamada', quote: 'Olá, queria um quarto duplo para sexta-feira, duas noites.', duration: '14 s', related: ['chamada atendida', 'sexta-feira', 'duas noites'] },
          { kind: 'identified', label: 'Telma identificou', title: 'Nova reserva', lines: ['sexta-feira', 'duas noites', 'quarto duplo'], badge: 'Disponível', related: ['reserva', 'sexta-feira', 'duas noites'] },
          { kind: 'agenda', label: 'No sistema do hotel', day: 'Sexta-feira', detail: 'Quarto duplo · 2 noites', status: 'Confirmada', related: ['confirmada', 'sexta-feira'] },
          { kind: 'call', label: 'Chamada', quote: 'Boa tarde. Tenho reserva para sábado e queria passar para o fim de semana seguinte.', duration: '10 s', related: ['chamada atendida', 'sábado', 'fim de semana'] },
          { kind: 'identified', label: 'Telma identificou', title: 'Alteração', lines: ['de sábado', 'para o fim de semana seguinte'], badge: 'Disponível', related: ['alteração', 'fim de semana'] },
          { kind: 'agenda', label: 'No sistema do hotel', day: 'Fim de semana seguinte', detail: 'Datas alteradas', status: 'Confirmada', related: ['confirmada', 'alteração'] },
          { kind: 'call', label: 'Chamada', quote: 'Bom dia. Queria cancelar a reserva de amanhã, por favor.', duration: '7 s', related: ['chamada atendida', 'amanhã'] },
          { kind: 'agenda', label: 'No sistema do hotel', day: 'Amanhã', detail: 'Reserva cancelada', status: 'Cancelada', related: ['cancelamento', 'amanhã'] },
        ],
        facts: [
          { text: 'sexta-feira' },
          { text: 'duas noites' },
          { text: 'reserva', caption: 'Pedido' },
          { text: 'alteração', caption: 'Pedido' },
          { text: 'cancelamento', caption: 'Pedido' },
          { text: 'confirmada', caption: 'Estado' },
          { text: 'chamada atendida' },
          { text: 'quarto duplo' },
          { text: 'fim de semana', caption: 'Quando' },
          { text: 'sábado' },
          { text: 'amanhã' },
          { text: 'pequeno-almoço' },
          { text: 'reserva' },
          { text: 'confirmada' },
        ],
      },
      summary: {
        steps: [
          { kind: 'call', label: 'Chamada', quote: 'Boa noite. Vamos chegar de carro. O hotel tem estacionamento?', duration: '18 s', related: ['chamada atendida', 'estacionamento'] },
          { kind: 'summary', label: 'Resumo para a receção', title: 'Pergunta respondida', lines: ['Estacionamento', 'Sem reserva'], channels: ['Painel do hotel'], related: ['resumo', 'painel', 'estacionamento'] },
          { kind: 'call', label: 'Chamada', quote: 'Olá. Tenho reserva para amanhã e só chego depois da meia-noite. Há problema?', duration: '11 s', related: ['chamada atendida', 'chegada tardia'] },
          { kind: 'summary', label: 'Resumo para a receção', title: 'Chegada tardia', lines: ['Reserva de amanhã', 'Chega depois da meia-noite'], channels: ['Painel do hotel'], related: ['resumo', 'painel', 'chegada tardia'] },
        ],
        facts: [
          { text: 'resumo', caption: 'Para a receção' },
          { text: 'painel', caption: 'Onde fica' },
          { text: 'chamada atendida' },
          { text: 'estacionamento', caption: 'Pergunta' },
          { text: 'chegada tardia', caption: 'Aviso' },
          { text: 'check-in' },
          { text: 'gravação' },
          { text: 'pequeno-almoço' },
          { text: 'como chegar' },
          { text: 'resumo' },
        ],
      },
      whatsapp: {
        steps: [
          { kind: 'call', label: 'Chamada · Inglês', quote: 'Hi, do you have a double room for next weekend? Two adults.', duration: '16 s', related: ['inglês', 'fim de semana', 'reserva'] },
          { kind: 'identified', label: 'Telma identificou', title: 'Nova reserva', lines: ['próximo fim de semana', '2 adultos', 'atendido em inglês'], badge: 'Disponível', related: ['reserva', 'inglês'] },
          { kind: 'agenda', label: 'No sistema do hotel', day: 'Próximo fim de semana', detail: 'Quarto duplo · 2 adultos', status: 'Confirmada', related: ['confirmada', 'fim de semana'] },
          { kind: 'summary', label: 'Resumo para a receção', title: 'Reserva feita em inglês', lines: ['Próximo fim de semana', 'Quarto duplo, 2 adultos', 'Resumo em português'], channels: ['Painel do hotel'], related: ['resumo', 'painel', 'português'] },
        ],
        facts: [
          { text: 'inglês', caption: 'Idioma' },
          { text: 'espanhol' },
          { text: 'português' },
          { text: 'fim de semana', caption: 'Quando' },
          { text: 'reserva', caption: 'Pedido' },
          { text: 'confirmada', caption: 'Estado' },
          { text: 'resumo', caption: 'Para a receção' },
          { text: 'painel' },
          { text: 'inglês' },
        ],
      },
    },
  },
  process: {
    title: 'Da chamada à reserva.',
    lead: 'A Telma atende, vê a disponibilidade e deixa a reserva feita no sistema do hotel.',
    chapters: [
      {
        title: 'Atende a chamada',
        text: 'Quando a receção não pode responder, a Telma atende com voz natural e percebe o que o hóspede quer.',
      },
      {
        title: 'Faz a reserva',
        text: 'Consulta a disponibilidade, reserva o quarto e deixa um resumo escrito do que ficou combinado no painel.',
      },
    ],
    agenda: 'Reservas',
    day: 'Sexta-feira',
    newBooking: 'Nova reserva',
    dayAndTime: 'Sexta-feira · 2 noites',
    callInProgress: 'Chamada em curso',
    morning: '2 noites · 2 pessoas',
    statusLabel: 'Estado',
    toConfirm: 'Confirmada',
    speakers: { caller: 'Hóspede', telma: 'Telma' },
    dialogue: {
      caller1: ['Olá,', ' queria reservar um quarto', ' para sexta-feira,', ' duas noites,', ' se houver disponibilidade.'],
      telma1: ['Tenho, sim.', ' Para quantas pessoas?'],
      caller2: ['Para duas,', ' com pequeno-almoço.'],
    },
    facts: ['Reserva', 'sexta-feira', '2 noites', '2 pessoas'],
  },
}
