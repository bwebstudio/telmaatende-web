import type { Locale } from '@/content'

/**
 * THE WRITING.
 *
 * Kept apart from content/<lang>.ts, which holds the page's furniture: a
 * sentence on a button and a two-thousand-word guide want different handling,
 * and mixing them makes both harder to find.
 *
 * ── WHY BLOCKS AND NOT MDX ─────────────────────────────────────────────────
 * A paragraph is a string and anything else is a small object. That is less
 * pleasant to write than Markdown and buys two things worth more: every piece
 * is type-checked, so a heading cannot go missing in one language and not
 * another, and no build plugin is needed to render the site. If the writing
 * ever outgrows it, the escape is to swap this file for MDX and leave the
 * template alone.
 */
export type Block =
  | string
  | { h: string }
  | { list: string[] }
  | { quote: string; by?: string }
  /** An aside, set off from the argument: a caution, a number, a rule. */
  | { note: string }

export type Piece = {
  /** The URL. Never translated: one piece, one address, three languages. */
  slug: string
  /**
   * What it is. A guide is a reference you come back to and gets a contents
   * box; an article is read once, straight through, and does not.
   */
  format: 'guide' | 'article'
  /** The word the reader sees for that format. */
  kind: string
  title: string
  /** Does three jobs: the card's excerpt, the standfirst, and the meta
   *  description. One sentence, and it has to work alone. */
  lead: string
  /** ISO. Shown as a date and used for ordering. */
  date: string
  minutes: number
  /** A photograph behind the cover's colour, desaturated and multiplied into
   *  it so the ground stays the ground. Articles have one; guides do not,
   *  because a guide's cover is already occupied by its document. */
  image?: string
  body: Block[]
}

/** Marks a piece as not yet written, so the template can say so plainly
 *  instead of rendering a convincing-looking empty page. */
const TODO = (what: string): Block[] => [{ note: what }]

const pt: Piece[] = [
  {
    slug: 'chamada-que-ninguem-atende',
    format: 'guide',
    kind: 'Guia',
    title: 'O que acontece a uma chamada que ninguém atende',
    lead: 'Do toque ao paciente que liga a outra clínica: o caminho de uma chamada perdida, e onde é possível travá-lo.',
    date: '2026-10-14',
    minutes: 6,
    body: [
      'Uma chamada perdida não é um número num relatório. É uma pessoa que precisava de uma consulta, não conseguiu falar com ninguém, e resolveu o problema noutro sítio. Este guia segue esse percurso do princípio ao fim e aponta os três sítios onde ainda dá para o travar.',
      { h: 'Os primeiros quinze segundos' },
      'Quem liga a uma clínica não espera muito. A maioria desliga entre o terceiro e o quinto toque, e quase ninguém passa dos quinze segundos. Não é impaciência: é que já tem outro número à frente, porque procurou no mapa e apareceram quatro clínicas.',
      'Isto significa que a recepção não perde a chamada por estar ocupada dez minutos. Perde-a por estar ocupada quinze segundos no momento errado.',
      { h: 'Quando é que o telefone toca' },
      'As horas de maior procura são também as de maior trabalho ao balcão. O telefone toca mais quando há mais gente à frente da recepcionista, e é exactamente aí que ela não pode atender.',
      {
        list: [
          'Ao abrir, entre as oito e as dez, quando se acumulam as chamadas da noite anterior',
          'À hora de almoço, quando a equipa está reduzida',
          'Ao fim da tarde, quando quem trabalha liga ao sair',
          'À segunda-feira, que concentra o fim-de-semana inteiro',
        ],
      },
      { h: 'O que acontece a seguir' },
      'Um paciente que não conseguiu falar raramente volta a tentar. Liga ao seguinte da lista. Se marcar aí, não é uma consulta perdida: é um paciente perdido, com todas as consultas que viriam depois.',
      {
        quote:
          'Perder uma chamada custa o valor de uma primeira consulta. Perder o paciente custa o valor de todas as outras.',
      },
      { h: 'Onde se pode travar' },
      'Há três pontos de paragem, por ordem de eficácia.',
      {
        list: [
          'Atender sempre, mesmo que seja para dizer que se liga de volta dentro de dez minutos',
          'Devolver a chamada no mesmo dia, enquanto a pessoa ainda não marcou noutro sítio',
          'Deixar marcar sem falar com ninguém, por mensagem ou online, para quem liga fora de horas',
        ],
      },
      'Os três resolvem o mesmo problema de maneiras diferentes. O primeiro é o que mais vale e o mais difícil de garantir com uma equipa que também atende ao balcão.',
      {
        note: 'Para medir o seu caso: peça à operadora o registo de chamadas não atendidas do último mês, por hora do dia. É um pedido comum e costuma chegar em dois dias úteis.',
      },
    ],
  },
  {
    slug: 'marcacoes-fora-de-horario',
    format: 'article',
    kind: 'Artigo',
    title: 'Marcações fora de horário',
    lead: 'Ao fim do dia, ao fim de semana e nos feriados o telefone continua a tocar. Como responder sem pôr ninguém de serviço.',
    date: '2026-10-09',
    minutes: 4,
    image: '/images/cover-fora-de-horario.webp',
    body: [
      'O telefone de uma clínica não deixa de tocar às sete da tarde. Deixa de ser atendido. Entre o fecho e a abertura seguinte passam catorze horas, e ao fim de semana passam sessenta. É o maior bloco de tempo da semana e é aquele em que ninguém está a ouvir.',
      { h: 'Quem liga a essa hora' },
      'Não é quem tem uma emergência. Quem tem uma emergência vai às urgências. Quem liga ao fim do dia é alguém que esteve a trabalhar e só agora teve um minuto, e é exactamente o paciente que uma clínica quer: tem horário fixo, falta pouco e paga a tempo.',
      'É também quem menos tolera ter de ligar outra vez. Já adiou isto uma semana.',
      { h: 'As três respostas possíveis' },
      'Há três maneiras de responder fora de horas, e só uma não custa dinheiro nem pessoas.',
      {
        list: [
          'Deixar tocar e devolver a chamada de manhã. Grátis, e perde-se quem já marcou noutro sítio nessa mesma noite',
          'Pôr alguém de piquete. Resolve tudo e é a opção mais cara que existe, por uma chamada ou duas por noite',
          'Atender sem pôr ninguém, e passar à clínica só o que for urgente',
        ],
      },
      { h: 'O que uma clínica precisa de decidir antes' },
      'A terceira opção só funciona se a clínica decidir três coisas de antemão, e são decisões suas, não da tecnologia.',
      {
        list: [
          'Que horários podem ser oferecidos sem confirmação, e quais ficam sempre para a recepção ver de manhã',
          'O que conta como urgente e para que número se passa nesse caso',
          'Se o paciente recebe confirmação por mensagem nessa mesma noite ou no dia seguinte',
        ],
      },
      'Nenhuma destas perguntas é técnica. São as mesmas que a clínica já responde todos os dias ao balcão, só que agora escritas uma vez.',
      { h: 'O que se ganha, em concreto' },
      'A conta é simples e vale a pena fazê-la com os números da própria clínica. Conte as chamadas que entram depois do fecho numa semana normal, multiplique por quatro e depois pelo valor de uma primeira consulta. Esse é o tamanho do bloco de tempo em que ninguém está a ouvir.',
      {
        note: 'Um aviso honesto: atender fora de horas não aumenta a procura, só deixa de a perder. Se a clínica recebe duas chamadas por noite, isto vale duas chamadas por noite.',
      },
    ],
  },
  {
    slug: 'preparar-a-rececao',
    format: 'guide',
    kind: 'Guia',
    title: 'Preparar a receção para uma assistente virtual',
    lead: 'O que muda no dia a dia da equipa, o que fica igual e como correm as primeiras semanas.',
    date: '2026-10-02',
    minutes: 7,
    body: TODO('Por escrever.'),
  },
  {
    slug: 'pre-marcacao-ou-marcacao-direta',
    format: 'article',
    kind: 'Artigo',
    title: 'Pré-marcação ou marcação direta?',
    lead: 'Quando convém que a clínica confirme cada pedido e quando faz sentido sincronizar o calendário.',
    date: '2026-09-24',
    minutes: 5,
    image: '/images/cover-pre-marcacao.webp',
    body: [
      'Há duas maneiras de uma assistente virtual tratar um pedido de consulta. Pode deixar a marcação feita, com a hora já ocupada na agenda, ou pode registar o pedido e deixá-lo à espera de que a recepção confirme. As duas são defensáveis. A escolha errada é a que se faz sem pensar.',
      { h: 'Marcação directa' },
      'A hora fica ocupada no momento da chamada. O paciente desliga com a consulta marcada e recebe a confirmação por mensagem.',
      'Funciona bem quando as consultas são homogéneas: uma higiene oral dura o que dura, uma consulta de rotina também. Se a agenda já está organizada em blocos iguais, deixar marcar directamente não cria problema nenhum e poupa à recepção todo o trabalho de confirmar.',
      { h: 'Pré-marcação' },
      'A chamada termina com um pedido registado, não com uma consulta. A recepção vê-o de manhã, confirma ou propõe outra hora, e só então o paciente recebe a confirmação.',
      'Faz sentido quando a duração depende do caso. Uma primeira consulta de ortodontia não ocupa o mesmo que uma revisão. Em fisioterapia, a sessão depende do que o médico prescreveu. Nessas clínicas, deixar marcar à cega enche a agenda de consultas com o tempo errado, e corrigir isso dá mais trabalho do que confirmar.',
      {
        quote:
          'A pergunta não é qual das duas é melhor. É se a duração de uma consulta se sabe antes de falar com a pessoa.',
      },
      { h: 'O custo escondido de cada uma' },
      'A marcação directa custa agenda mal ocupada quando o caso não era o que parecia. A pré-marcação custa tempo de recepção e, sobretudo, custa pacientes: entre o pedido e a confirmação há uma noite, e nessa noite a pessoa pode marcar noutro sítio.',
      'Por isso a pré-marcação só é segura se a clínica confirmar cedo. Se o pedido fica dois dias à espera, perde-se a vantagem das duas opções ao mesmo tempo.',
      { h: 'O que a maioria acaba por fazer' },
      'Misturar. Marcação directa para os serviços de duração conhecida, pré-marcação para primeiras consultas e para tudo o que precise de avaliação. É mais trabalho a configurar uma vez e menos trabalho todos os dias.',
      {
        note: 'Se tiver de escolher uma só para começar, comece pela pré-marcação. É mais lenta e não estraga nada. Passar depois a directa é fácil; desfazer uma agenda mal ocupada não.',
      },
    ],
  },
  {
    slug: 'rgpd-gravacao-de-chamadas',
    format: 'guide',
    kind: 'Guia',
    title: 'RGPD e gravação de chamadas numa clínica',
    lead: 'O essencial sobre aviso prévio, alojamento dos dados e acesso às gravações.',
    date: '2026-09-15',
    minutes: 8,
    body: TODO('Por escrever.'),
  },
]

const es: Piece[] = [
  {
    slug: 'chamada-que-ninguem-atende',
    format: 'guide',
    kind: 'Guía',
    title: 'Qué le pasa a una llamada que nadie atiende',
    lead: 'Del timbre al paciente que llama a otra clínica: el recorrido de una llamada perdida, y dónde se puede frenar.',
    date: '2026-10-14',
    minutes: 6,
    body: [
      'Una llamada perdida no es un número en un informe. Es una persona que necesitaba una cita, no consiguió hablar con nadie y resolvió el problema en otro sitio. Esta guía sigue ese recorrido de principio a fin y señala los tres puntos donde todavía se puede frenar.',
      { h: 'Los primeros quince segundos' },
      'Quien llama a una clínica no espera mucho. La mayoría cuelga entre el tercer y el quinto tono, y casi nadie pasa de los quince segundos. No es impaciencia: es que ya tiene otro número delante, porque buscó en el mapa y le salieron cuatro clínicas.',
      'Esto significa que recepción no pierde la llamada por estar ocupada diez minutos. La pierde por estar ocupada quince segundos en el momento equivocado.',
      { h: 'Cuándo suena el teléfono' },
      'Las horas de más demanda son también las de más trabajo en el mostrador. El teléfono suena más cuando hay más gente delante de la recepcionista, y es justo ahí cuando no puede atender.',
      {
        list: [
          'Al abrir, entre las ocho y las diez, cuando se acumulan las llamadas de la noche anterior',
          'A la hora de comer, con el equipo reducido',
          'A última hora de la tarde, cuando quien trabaja llama al salir',
          'El lunes, que concentra el fin de semana entero',
        ],
      },
      { h: 'Qué pasa después' },
      'Un paciente que no consiguió hablar rara vez vuelve a intentarlo. Llama al siguiente de la lista. Si pide cita ahí, no es una consulta perdida: es un paciente perdido, con todas las consultas que vendrían después.',
      {
        quote:
          'Perder una llamada cuesta lo que vale una primera consulta. Perder al paciente cuesta lo que valen todas las demás.',
      },
      { h: 'Dónde se puede frenar' },
      'Hay tres puntos de parada, por orden de eficacia.',
      {
        list: [
          'Atender siempre, aunque sea para decir que se devuelve la llamada en diez minutos',
          'Devolverla el mismo día, mientras la persona todavía no ha pedido cita en otro sitio',
          'Dejar pedir cita sin hablar con nadie, por mensaje o en línea, para quien llama fuera de horario',
        ],
      },
      'Los tres resuelven el mismo problema de maneras distintas. El primero es el que más vale y el más difícil de garantizar con un equipo que también atiende el mostrador.',
      {
        note: 'Para medir tu caso: pide a la operadora el registro de llamadas no atendidas del último mes, por hora del día. Es una petición habitual y suele llegar en dos días hábiles.',
      },
    ],
  },
  {
    slug: 'marcacoes-fora-de-horario',
    format: 'article',
    kind: 'Artículo',
    title: 'Citas fuera de horario',
    lead: 'Al final del día, el fin de semana y en festivos el teléfono sigue sonando. Cómo responder sin dejar a nadie de guardia.',
    date: '2026-10-09',
    minutes: 4,
    image: '/images/cover-fora-de-horario.webp',
    body: [
      'El teléfono de una clínica no deja de sonar a las siete de la tarde. Deja de atenderse. Entre el cierre y la apertura siguiente pasan catorce horas, y el fin de semana pasan sesenta. Es el bloque de tiempo más grande de la semana y es aquel en el que no hay nadie escuchando.',
      { h: 'Quién llama a esa hora' },
      'No es quien tiene una urgencia. Quien tiene una urgencia va a urgencias. Quien llama al final del día es alguien que ha estado trabajando y solo ahora ha tenido un minuto, y es exactamente el paciente que una clínica quiere: tiene horario fijo, falta poco y paga a tiempo.',
      'Es también quien menos tolera tener que volver a llamar. Ya ha aplazado esto una semana.',
      { h: 'Las tres respuestas posibles' },
      'Hay tres maneras de responder fuera de horario, y solo una no cuesta ni dinero ni personas.',
      {
        list: [
          'Dejar sonar y devolver la llamada por la mañana. Gratis, y se pierde a quien ya pidió cita en otro sitio esa misma noche',
          'Poner a alguien de guardia. Lo resuelve todo y es la opción más cara que existe, por una o dos llamadas por noche',
          'Atender sin poner a nadie, y pasar a la clínica solo lo que sea urgente',
        ],
      },
      { h: 'Lo que una clínica tiene que decidir antes' },
      'La tercera opción solo funciona si la clínica decide tres cosas de antemano, y son decisiones suyas, no de la tecnología.',
      {
        list: [
          'Qué horarios se pueden ofrecer sin confirmar, y cuáles quedan siempre para que recepción los vea por la mañana',
          'Qué cuenta como urgente y a qué número se pasa en ese caso',
          'Si el paciente recibe confirmación por mensaje esa misma noche o al día siguiente',
        ],
      },
      'Ninguna de estas preguntas es técnica. Son las mismas que la clínica ya responde todos los días en el mostrador, solo que ahora escritas una vez.',
      { h: 'Lo que se gana, en concreto' },
      'La cuenta es simple y vale la pena hacerla con los números propios. Cuenta las llamadas que entran después del cierre en una semana normal, multiplica por cuatro y luego por el valor de una primera consulta. Ese es el tamaño del bloque de tiempo en el que no hay nadie escuchando.',
      {
        note: 'Un aviso honesto: atender fuera de horario no aumenta la demanda, solo deja de perderla. Si la clínica recibe dos llamadas por noche, esto vale dos llamadas por noche.',
      },
    ],
  },
  {
    slug: 'preparar-a-rececao',
    format: 'guide',
    kind: 'Guía',
    title: 'Preparar a recepción para una asistente virtual',
    lead: 'Qué cambia en el día a día del equipo, qué sigue igual y cómo van las primeras semanas.',
    date: '2026-10-02',
    minutes: 7,
    body: TODO('Por escribir.'),
  },
  {
    slug: 'pre-marcacao-ou-marcacao-direta',
    format: 'article',
    kind: 'Artículo',
    title: '¿Cita provisional o cita directa?',
    lead: 'Cuándo conviene que la clínica confirme cada petición y cuándo tiene sentido sincronizar el calendario.',
    date: '2026-09-24',
    minutes: 5,
    image: '/images/cover-pre-marcacao.webp',
    body: [
      'Hay dos maneras de que una asistente virtual trate una petición de cita. Puede dejar la cita hecha, con la hora ya ocupada en la agenda, o puede registrar la petición y dejarla a la espera de que recepción confirme. Las dos son defendibles. La elección equivocada es la que se hace sin pensar.',
      { h: 'Cita directa' },
      'La hora queda ocupada en el momento de la llamada. El paciente cuelga con la cita puesta y recibe la confirmación por mensaje.',
      'Funciona bien cuando las consultas son homogéneas: una higiene bucal dura lo que dura, una revisión también. Si la agenda ya está organizada en bloques iguales, dejar pedir cita directamente no crea ningún problema y le ahorra a recepción todo el trabajo de confirmar.',
      { h: 'Cita provisional' },
      'La llamada termina con una petición registrada, no con una cita. Recepción la ve por la mañana, confirma o propone otra hora, y solo entonces el paciente recibe la confirmación.',
      'Tiene sentido cuando la duración depende del caso. Una primera consulta de ortodoncia no ocupa lo mismo que una revisión. En fisioterapia, la sesión depende de lo que haya prescrito el médico. En esas clínicas, dejar pedir cita a ciegas llena la agenda de consultas con el tiempo equivocado, y corregir eso da más trabajo que confirmar.',
      {
        quote:
          'La pregunta no es cuál de las dos es mejor. Es si la duración de una consulta se sabe antes de hablar con la persona.',
      },
      { h: 'El coste escondido de cada una' },
      'La cita directa cuesta agenda mal ocupada cuando el caso no era el que parecía. La provisional cuesta tiempo de recepción y, sobre todo, cuesta pacientes: entre la petición y la confirmación hay una noche, y esa noche la persona puede pedir cita en otro sitio.',
      'Por eso la cita provisional solo es segura si la clínica confirma pronto. Si la petición se queda dos días esperando, se pierde la ventaja de las dos opciones a la vez.',
      { h: 'Lo que la mayoría acaba haciendo' },
      'Mezclar. Cita directa para los servicios de duración conocida, provisional para primeras consultas y para todo lo que necesite valoración. Es más trabajo al configurarlo una vez y menos trabajo todos los días.',
      {
        note: 'Si tienes que elegir una sola para empezar, empieza por la provisional. Es más lenta y no estropea nada. Pasar luego a la directa es fácil; deshacer una agenda mal ocupada no.',
      },
    ],
  },
  {
    slug: 'rgpd-gravacao-de-chamadas',
    format: 'guide',
    kind: 'Guía',
    title: 'RGPD y grabación de llamadas en una clínica',
    lead: 'Lo esencial sobre aviso previo, alojamiento de los datos y acceso a las grabaciones.',
    date: '2026-09-15',
    minutes: 8,
    body: TODO('Por escribir.'),
  },
]

const en: Piece[] = [
  {
    slug: 'chamada-que-ninguem-atende',
    format: 'guide',
    kind: 'Guide',
    title: 'What happens to a call nobody answers',
    lead: 'From the ring to the patient calling another clinic: the path of a missed call, and where it can be stopped.',
    date: '2026-10-14',
    minutes: 6,
    body: [
      'A missed call is not a number in a report. It is a person who needed an appointment, could not reach anybody, and solved the problem somewhere else. This guide follows that path from end to end and marks the three places it can still be stopped.',
      { h: 'The first fifteen seconds' },
      'People calling a clinic do not wait long. Most hang up between the third and fifth ring, and almost nobody gets past fifteen seconds. It is not impatience: they already have another number in front of them, because they searched the map and four clinics came up.',
      'Which means reception does not lose the call by being busy for ten minutes. It loses it by being busy for fifteen seconds at the wrong moment.',
      { h: 'When the phone rings' },
      'The busiest hours on the phone are the busiest hours at the desk. It rings most when there are most people standing in front of the receptionist, which is exactly when she cannot pick up.',
      {
        list: [
          'At opening, between eight and ten, when the previous evening piles up',
          'Over lunch, with the team at half strength',
          'Late afternoon, when people call on their way out of work',
          'Mondays, which carry the whole weekend',
        ],
      },
      { h: 'What happens next' },
      'A patient who could not get through rarely tries again. They call the next one on the list. If they book there it is not a lost appointment: it is a lost patient, and every appointment that would have followed.',
      {
        quote:
          'Missing a call costs one first appointment. Losing the patient costs all the others.',
      },
      { h: 'Where it can be stopped' },
      'Three places, in order of how much they are worth.',
      {
        list: [
          'Always answer, even if only to say somebody will call back within ten minutes',
          'Call back the same day, while the person has not booked elsewhere yet',
          'Let them book without speaking to anyone, by message or online, for calls out of hours',
        ],
      },
      'All three solve the same problem differently. The first is worth the most and is the hardest to guarantee with a team that is also serving the counter.',
      {
        note: 'To measure your own: ask your telephone provider for last month’s unanswered-call log, broken down by hour. It is a routine request and usually arrives within two working days.',
      },
    ],
  },
  {
    slug: 'marcacoes-fora-de-horario',
    format: 'article',
    kind: 'Article',
    title: 'Bookings out of hours',
    lead: 'At the end of the day, at weekends and on holidays the phone keeps ringing. How to answer without keeping anyone on duty.',
    date: '2026-10-09',
    minutes: 4,
    image: '/images/cover-fora-de-horario.webp',
    body: [
      'A clinic\u2019s phone does not stop ringing at seven in the evening. It stops being answered. Fourteen hours pass between closing and opening again, and sixty pass over a weekend. It is the largest block of time in the week and it is the one with nobody listening.',
      { h: 'Who calls at that hour' },
      'Not someone with an emergency. People with emergencies go to A&E. The person calling at the end of the day has been at work and has only now had a minute, and that is exactly the patient a clinic wants: fixed hours, rarely misses, pays on time.',
      'It is also the person least willing to call again. They have already put this off for a week.',
      { h: 'The three possible answers' },
      'There are three ways to answer out of hours, and only one costs neither money nor people.',
      {
        list: [
          'Let it ring and call back in the morning. Free, and it loses whoever booked elsewhere that same evening',
          'Put somebody on call. It solves everything and is the most expensive option there is, for one or two calls a night',
          'Answer without putting anybody on, and pass only the urgent ones through to the clinic',
        ],
      },
      { h: 'What a clinic has to decide first' },
      'The third option only works if the clinic settles three things in advance, and they are its decisions, not the technology\u2019s.',
      {
        list: [
          'Which slots can be offered without confirmation, and which always wait for reception to see in the morning',
          'What counts as urgent, and the number it goes to when it is',
          'Whether the patient is confirmed by message that same evening or the next day',
        ],
      },
      'None of these is a technical question. They are the ones the clinic already answers every day at the desk, only written down once.',
      { h: 'What it is worth, concretely' },
      'The arithmetic is simple and worth doing with your own numbers. Count the calls arriving after closing in a normal week, multiply by four, then by the value of a first appointment. That is the size of the block of time with nobody listening.',
      {
        note: 'An honest caveat: answering out of hours does not increase demand, it only stops losing it. If the clinic takes two calls a night, this is worth two calls a night.',
      },
    ],
  },
  {
    slug: 'preparar-a-rececao',
    format: 'guide',
    kind: 'Guide',
    title: 'Getting reception ready for a virtual assistant',
    lead: "What changes in the team's day, what stays the same, and how the first weeks go.",
    date: '2026-10-02',
    minutes: 7,
    body: TODO('Not written yet.'),
  },
  {
    slug: 'pre-marcacao-ou-marcacao-direta',
    format: 'article',
    kind: 'Article',
    title: 'Provisional or direct booking?',
    lead: 'When the clinic should confirm each request, and when syncing the calendar makes sense.',
    date: '2026-09-24',
    minutes: 5,
    image: '/images/cover-pre-marcacao.webp',
    body: [
      'There are two ways a virtual assistant can handle a request for an appointment. It can leave the booking made, with the slot already taken in the calendar, or it can log the request and leave it waiting for reception to confirm. Both are defensible. The wrong choice is the one made without thinking.',
      { h: 'Direct booking' },
      'The slot is taken during the call. The patient hangs up with an appointment and gets the confirmation by message.',
      'It works well when appointments are uniform: a hygiene visit takes what it takes, and so does a check-up. If the calendar is already organised in equal blocks, booking straight through creates no problem and saves reception all the confirming.',
      { h: 'Provisional booking' },
      'The call ends with a logged request, not an appointment. Reception sees it in the morning, confirms or offers another time, and only then is the patient confirmed.',
      'It makes sense when the length depends on the case. A first orthodontic consultation does not take what a review takes. In physiotherapy, the session depends on what was prescribed. In those clinics, booking blind fills the calendar with appointments of the wrong length, and fixing that is more work than confirming.',
      {
        quote:
          'The question is not which of the two is better. It is whether the length of an appointment is known before speaking to the person.',
      },
      { h: 'What each one quietly costs' },
      'Direct booking costs badly filled calendar time when the case was not what it looked like. Provisional booking costs reception time and, above all, costs patients: between the request and the confirmation there is a night, and in that night the person can book elsewhere.',
      'So provisional booking is only safe if the clinic confirms early. Leave a request waiting two days and you lose the advantage of both options at once.',
      { h: 'What most clinics end up doing' },
      'Mixing them. Direct for services of known length, provisional for first appointments and anything needing assessment. More work to set up once, less work every day.',
      {
        note: 'If you have to pick one to start with, start with provisional. It is slower and it breaks nothing. Moving to direct later is easy; unpicking a badly filled calendar is not.',
      },
    ],
  },
  {
    slug: 'rgpd-gravacao-de-chamadas',
    format: 'guide',
    kind: 'Guide',
    title: 'GDPR and call recording in a clinic',
    lead: 'The essentials on prior notice, where the data is hosted and access to recordings.',
    date: '2026-09-15',
    minutes: 8,
    body: TODO('Not written yet.'),
  },
]

export const articles: Record<Locale, Piece[]> = { pt, en, es }

export const pieceBySlug = (lang: Locale, slug: string) =>
  articles[lang].find((p) => p.slug === slug)

/** Every slug, once. They are the same in all three languages on purpose. */
export const allSlugs = Array.from(new Set(pt.map((p) => p.slug)))

/** Whether a piece has a body yet. The template says so rather than pretending. */
export const isWritten = (p: Piece) => p.body.length > 1
