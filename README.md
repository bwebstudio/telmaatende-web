# Telma Atende · web

Landing page pública da Telma (Telma Atende), a rececionista virtual com voz
para clínicas dentárias e de estética em Portugal e Espanha.

```
telmaatende-web/
  web/   Landing page pública (marketing). Next.js + Tailwind, sem backend.
```

Página única, em português e espanhol. Deploy na Vercel com a **Root Directory**
definida como `web`.

## O painel de gestão vive noutro repositório

O painel (clínica, equipa interna e o CRM comercial) foi separado para
**[bwebstudio/telma-dashboard](https://github.com/bwebstudio/telma-dashboard)**,
com o seu próprio deploy na Vercel. É lá que estão a autenticação, a base de
dados e as migrações do Supabase.

As duas aplicações partilham a mesma identidade visual: paleta creme, tinta
escura, acento terracota e verde pino, títulos em Clash Display e corpo em
General Sans.
