# Design System — UNIBEM Imbituva

<!-- impeccable:design-schema 1 -->

Landing page (mode: **Persuade**) redesenhada no mundo **"Monta‑Blocos"**: partes do site simulam um brinquedo de montar (blocos de encaixe com pinos/studs), mantendo a identidade de cores da UNIBEM e a logomarca — a palavra UNIBEM — intactas.

## World

"Monta‑Blocos" — cada criança constrói o futuro bloco por bloco, e a página é montada com peças de encaixe: cards, botões, estatísticas e títulos viram tijolos com pinos (studs) e base com rebordo. O fundo é uma "baseplate" pontilhada. O mundo substitui o visual anterior "quatro cores + cards genéricos".

## Tokens (`tailwind.config.ts`, `src/index.css`)

Cores (identidade UNIBEM, do logo):

- `uni-yellow` `#FFCF00` · `uni-yellow-deep` `#F0B800` · `uni-yellow-ink` `#8A6A00` (amarelo como texto, AA)
- `uni-blue` `#186CC0` · `uni-blue-dark` `#0E4A85`
- `uni-red` `#E41818` · `uni-red-deep` `#B30E0E`
- `uni-green` `#30B46C` · `uni-green-dark` `#1A7A48`
- Neutros: `ink` `#101014`, `ink-soft` `#38383F`, `ink-muted` `#5C5C66`, `ink-faint` `#8A8A94`, `ink-line` `#E6E6EC`, `ink-softest` `#F4F4F7`, `bone` `#FAFAF6`

Tipografia (substituiu Inter / Plus Jakarta Sans — fora do padrão genérico):

- Display/headings: **Fredoka** (500–700) — geométrica arredondada, tom de brinquedo moderno
- Body: **Nunito Sans** (400–800) — legível e quente

Raio de tijolo: `rounded-brick` = `14px`. Sombras: `shadow-card`, `shadow-lift`, `shadow-brick` (profundidade suave com deslocamento — sem sombra dura/offset zero).

## Gramática do brinquedo

- **Stud (pino):** componente `Studs` — linha de círculos com `currentColor` e sombra interna (realce claro em cima, escuro embaixo), como o pino de uma peça real.
- **Base do tijolo:** `border-b-4` com a cor mais escura do bloco — o rebordo inferior da peça. O detector marca `border-accent-on-rounded`; é **intencional e fixado pelo brief** (o rebordo é o que faz o bloco ler como tijolo), e por isso é mantido.
- **Baseplate:** `bg-baseplate` (pontos claros sobre `bone`) — o tabuleiro onde as peças encaixam.
- **Encaixe/motion:** `Reveal` (IntersectionObserver) sobe as peças com ease-out exponencial limpo ao entrar no viewport; um único momento de movimento por bloco. `prefers-reduced-motion` desliga tudo.
- **Cores por seção:** cada seção "escolhe" um tijolo líder: hero = amarelo (CTA) + palavra‑tijolo azul/amarela; About = verde (título) + cards azul/verde/vermelho; Services = azul + cards ciclando 4 cores + faixa CTA amarela; Contact = azul (form) + verde (WhatsApp); Footer = bone claro + pino‑faixa 4 cores.

## Componentes

- `Studs`, `Reveal`, `StatBrick` (bloco de estatística com pinos e base).
- `Button` — variantes primary/secondary/outline/light × cores; primary com `studs` opcional renderiza uma linha de pinos acima do rótulo (CTA de destaque).
- `SectionHeading` — **sem kicker/eyebrow/tag** (ban do craft‑floor): título + linha de 4 studs como assinatura + descrição.
- `ServiceCard` — faixa superior colorida com pinos + ícone em quadrado‑tijolo + tags em chips de peça.
- `Navbar` — fundo `bone` translúcido, logo `icon.png`, CTA azul em tijolo, link ativo com 3 micro‑studs (amarelo/azul/vermelho).
- `ContactForm` — inputs `rounded-[10px]` com focus ring amarelo; botão enviar azul em tijolo.
- `Footer` — fundo `bone` claro, faixa superior de studs nas 4 cores, ícones coloridos (azul/verde/vermelho).

## Assets

- `public/logo.png` — **logomarca do site** (navbar, hero e rodapé).
- `public/icon.png` — **apenas favicon** (`index.html`).
- `public/reference_colors.png` — referência de cores.

## Accessibility & craft notes

- Amarelo como preenchimento; texto amarelo usa `yellow-ink` (AA ≥4.5:1 em claro).
- Verde com texto ink (≥7:1); `green-dark` p/ acentos de texto.
- Seleção de texto e scrollbar tematizados (amarelo/bone).
- Sem emojis como ícones (lucide-react), sem gradiente‑texto, sem borda lateral grossa, sem blur decorativo, sem sombra offset dura.
