# Telma Atende · web

Landing page pública da Telma (Telma Atende), a rececionista virtual com voz
para clínicas dentárias e de estética em Portugal e Espanha.

```
telmaatende-web/
  web/   Landing page pública (marketing). Next.js + Tailwind, sem backend.
```

Página única, em português, inglês e espanhol. Deploy na Vercel com a
**Root Directory** definida como `web`.

## O painel de gestão vive noutro repositório

O painel (clínica, equipa interna e o CRM comercial) foi separado para
**[bwebstudio/telma-dashboard](https://github.com/bwebstudio/telma-dashboard)**,
com o seu próprio deploy na Vercel. É lá que estão a autenticação, a base de
dados e as migrações do Supabase.

## Identidade

Fundo branco quente, tinta escura e verde-floresta como cor de marca, reservada
à marca e às ações — nunca a superfícies inteiras. Uma única família tipográfica
(DM Sans) em toda a interface; a serif existe apenas dentro do logótipo, que é
um ficheiro de imagem.

O painel ainda usa a paleta e as fontes anteriores. Alinhá-lo é trabalho por
fazer, e agora faz-se no outro repositório.
