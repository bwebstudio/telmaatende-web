# Telma Atende

Landing page do produto **Telma**, a rececionista virtual com voz para clínicas
dentárias e de estética. Uma única página com âncoras, em português de Portugal e
inglês, pronta para publicar na Vercel.

Telma é um produto [Bweb Studio](https://bwebstudio.com).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Sem base de dados, sem CMS. Todo o conteúdo vive em ficheiros de constantes tipados.
- Tipografia: Clash Display (títulos) e General Sans (corpo), ambas self hosted a
  partir da Fontshare via `next/font/local`. Sem pedidos a terceiros.

## Começar

```bash
npm install
cp .env.example .env.local   # opcional, para configurar o formulário
npm run dev                  # http://localhost:3000  (redireciona para /pt)
```

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # eslint
```

## Estrutura

```
app/
  [lang]/
    layout.tsx            # <html lang>, fontes, metadata, hreflang, Open Graph
    page.tsx              # a landing page (monta as secções)
    opengraph-image.tsx   # imagem OG gerada por idioma
    privacidade/page.tsx  # página estática (conteúdo placeholder)
    termos/page.tsx       # página estática (conteúdo placeholder)
  robots.ts, sitemap.ts, icon.svg
  globals.css
middleware.ts             # redireciona / para /pt
components/               # Header, Hero, Pricing, Faq, Contact, Footer, etc.
content/
  types.ts                # o tipo Content, partilhado por todos os idiomas
  pt.ts, en.ts            # o conteúdo de cada idioma
  index.ts                # regista os idiomas
lib/fonts.ts              # configuração das fontes
public/fonts/             # ficheiros .woff2 da General Sans
```

## Editar preços e textos

Todo o conteúdo visível está em [`content/pt.ts`](content/pt.ts) e
[`content/en.ts`](content/en.ts). Ambos seguem o mesmo tipo, definido em
[`content/types.ts`](content/types.ts), por isso o editor avisa se faltar algum campo.

- **Textos**: edite as strings diretamente. Não é preciso tocar em nenhum componente.
- **Preços dos planos**: cada plano tem `priceMonthly` (um número). O preço anual
  é calculado a partir dele (10 meses pagos, 2 grátis), por isso basta mudar o número.
  O plano `Personalizado` usa `priceMonthly: null` e o texto `priceText: 'sob consulta'`.
- **Add-on WhatsApp e letra pequena**: em `pricing.whatsapp` e `pricing.finePrint`.
- **Perguntas frequentes**: a lista `faq.items`, cada item com `q` e `a`.
- **Contactos e empresa**: em `footer` (email, telefone, link e o espaço reservado
  para NIF, morada e denominação social).

Regra de estilo do copy: não usar travessões nem hífens como pontuação. Substituir
por vírgulas, dois pontos, ponto e vírgula, parênteses ou ponto final.

## Adicionar um idioma

Está preparado para ser trivial. Para acrescentar, por exemplo, espanhol (`es`):

1. Copie `content/pt.ts` para `content/es.ts` e traduza as strings (mantendo o tipo).
2. Em [`content/index.ts`](content/index.ts), importe o novo ficheiro e adicione a
   entrada ao mapa `dictionaries` e o código ao array `locales`.

Rotas (`/es`), geração estática, hreflang, sitemap e o seletor de idioma passam a
incluir o novo idioma automaticamente.

## Configurar o formulário de contacto

O site não tem backend próprio. O formulário envia um `POST` para um endpoint
externo (por exemplo [Formspree](https://formspree.io)).

1. Crie um formulário no Formspree (ou serviço equivalente) e copie o endpoint.
2. Defina a variável de ambiente:

   ```
   NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```

   Localmente, em `.env.local`. Na Vercel, em **Project Settings > Environment Variables**.
3. Se a variável estiver vazia, o formulário mostra uma nota a pedir configuração
   e o botão de envio fica desativado, por isso nunca se perde uma submissão em silêncio.

Estados visíveis: a enviar, sucesso e erro.

## Deploy na Vercel

1. Faça push do repositório para o GitHub (ou GitLab / Bitbucket).
2. Em [vercel.com](https://vercel.com), **New Project** e importe o repositório.
   A Vercel deteta o Next.js sem configuração extra.
3. Em **Environment Variables**, defina:
   - `NEXT_PUBLIC_CONTACT_ENDPOINT` (endpoint do formulário)
   - `NEXT_PUBLIC_SITE_URL` (o domínio final, por exemplo `https://telma.pt`,
     usado em metadata, Open Graph, hreflang e sitemap)
4. **Deploy**.

Ou, a partir da linha de comandos:

```bash
npm i -g vercel
vercel        # pré visualização
vercel --prod # produção
```

## Notas

- Acessibilidade: HTML semântico, labels reais no formulário, acordeão de FAQ com
  `<details>` navegável por teclado, foco visível, ligação para saltar para o conteúdo.
- Sem `localStorage` nem `sessionStorage`.
- Movimento: apenas um fade discreto ao entrar no ecrã, respeitando
  `prefers-reduced-motion`.
- As páginas legais têm conteúdo provisório, claramente identificado. Rever com a
  empresa antes de publicar.
# telmaatende
