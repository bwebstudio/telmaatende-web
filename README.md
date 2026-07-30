# Telma Atende

Monorepo do produto Telma (Telma Atende), a rececionista virtual com voz para
clínicas dentárias e de estética em Portugal.

```
telmaatende/
  web/         Landing page pública (marketing). Next.js + Tailwind.
  dashboard/   Painel de gestão (clínica + interno). Next.js + Supabase.
```

Cada pasta é uma aplicação Next.js independente, com o seu próprio `package.json`
e o seu próprio deploy na Vercel (defina a Root Directory em cada projeto Vercel).

- **[web/](web/README.md)**: página única, PT, EN e ES, sem backend.
- **[dashboard/](dashboard/README.md)**: autenticação, base de dados e realtime
  com Supabase, dois tipos de utilizador (clínica e interno) e webhooks para o
  sistema de voz.

A identidade visual do site foi refeita: fundo branco quente, tinta escura,
verde-floresta como cor de marca reservada a marcas e ações, e uma única família
tipográfica (DM Sans) em toda a interface. O painel ainda usa a paleta e as
fontes anteriores — alinhá-lo é trabalho por fazer.
