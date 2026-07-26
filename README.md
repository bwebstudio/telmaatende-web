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

- **[web/](web/README.md)**: página única, PT e EN, sem backend.
- **[dashboard/](dashboard/README.md)**: autenticação, base de dados e realtime
  com Supabase, dois tipos de utilizador (clínica e interno) e webhooks para o
  sistema de voz.

Ambas as aplicações partilham a mesma identidade visual: paleta creme, tinta
escura, acento terracota e verde pino, títulos em Clash Display e corpo em
General Sans.
