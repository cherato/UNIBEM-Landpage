# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The landing page serves three audiences equally, with no single primary:

- **Supporters** — donors and volunteers who want to give money, time, or skills.
- **Families in vulnerability** — parents/caregivers in Imbituva and region looking for free programs (school support, food, psychosocial care) for their children and adolescents.
- **Community and partners** — local community, businesses, schools, and public sector who can amplify or fund the work.

## Product Purpose

UNIBEM — União Imbituvense do Bem Estar da Criança e do Adolescente — is a civil, philanthropic, non-profit institution founded on April 27, 1978 in Imbituva, Paraná. It provides socio-assistential, protective, and educational services in an open setting to children and adolescents aged 5–13 in social vulnerability: convivência e fortalecimento de vínculos, acompanhamento educativo em contra turno escolar, alimentação, prevenção de vulnerabilidades, proteção integral, and trabalho em rede.

The website is the organization's public face: it raises awareness of the cause, builds trust through transparency, and converts visitors into contacts, volunteers, and donors (Pix donation flow is a confirmed goal).

## Positioning

A community-rooted institution in Imbituva with 45+ years of history (founded 1978) offering **free, integrated socio-educational care** — convivência, education support, meals, prevention, and network-articulated protection — rather than a single isolated program. Transparent operation (an OSC accountability standard) is part of the claim: the organization publishes real numbers and invites public scrutiny.

## Operating Context

- Audience is local/regional: Imbituva, Paraná, Brazil. Content is Brazilian Portuguese (pt-BR).
- Visitors arrive to learn about the cause, find services for a child, or decide to help; success is measured by contact (form/WhatsApp) and donations (Pix planned).
- Existing contact channels: contact form (Web3Forms), WhatsApp, phone, email, Facebook and Instagram pages, Google Maps embed of Imbituva.

## Capabilities and Constraints

- **Free services offered** (all Gratuito): Convivência e Vínculos (5–13), Acompanhamento Educativo (contra turno), Alimentação (café/almoço/lanche), Prevenção (famílias), Proteção Integral (5–13), Trabalho em Rede (parcerias).
- **Published stats are real** (confirmed by user): 100+ children served, 50+ active volunteers, 45+ years of history, 150+ families supported. They may be quoted publicly.
- **Real contact data** (from unibemimbituva.com.br + user corrections): phone `(42) 99914-8450`, email `contato@unibemimbituva.com.br`, address `R. Aldebaran Brasil, Nº 753, Bairro Morro das Pedras — Imbituva, Paraná`.
- **Placeholder that must be filled before launch:** the Web3Forms key (`VITE_WEB3FORMS_KEY` in `.env.local`).
- **Donation via Pix** is a planned/desired conversion path, not yet implemented on the page.
- No testimonials, press coverage, or case studies exist yet; none may be fabricated.

## Brand Commitments

- Name: **UNIBEM — União Imbituvense do Bem Estar da Criança e do Adolescente** (CNPJ 78.251.485/0001-83). Tagline: "Transformando Vidas, Construindo Futuros".
- Assets on hand (in `public/`): `logo.png` (site logo — full wordmark), `icon.png` (favicon only), `reference_colors.png` (brand color reference swatches).
- **The four-color identity** (taken from the logo): yellow `#FFCF00`, blue `#186CC0`, red `#E41818`, green `#30B46C`. These are the binding brand colors and replace the previous brown/orange world.
- Neutral accents derived for usability: ink `#101014`, bone `#FAFAF6`, plus `yellow-ink` `#8A6A00` (amber for yellow-as-text) and `green-dark` `#1A7A48`.
- Voice on the page: warm, dignified, community-oriented Portuguese.

## Evidence on Hand

- Real data from the official site `https://unibemimbituva.com.br/` (founded 27/04/1978, CNPJ, address, phone, social links) plus user-corrected email `contato@unibemimbituva.com.br` and Instagram `https://www.instagram.com/unibem.imbituva`.
- Real stats (confirmed by user) and service descriptions in `src/constants/content.ts`.
- Logo and brand assets in `public/`.
- Known absences: no donation link/Pix, no Web3Forms key, no testimonials, press, or case studies — do not fabricate.

## Product Principles

1. **Transparency is the trust engine.** An OSC earns support by showing where help goes; real numbers and honest operation outrank marketing gloss.
2. **One page, three audiences.** Supporters, families, and partners share the same surface; nothing that serves one audience may block the others.
3. **Real evidence, never invented claims.** Only confirmed facts are published; placeholders are filled, not faked.
4. **Action is the measure.** The page succeeds when visitors contact, volunteer, or donate — awareness alone is not enough.
5. **Community-rooted and local.** Imbituva and region define the voice, geography, and partnerships; the work stays accessible and free.
