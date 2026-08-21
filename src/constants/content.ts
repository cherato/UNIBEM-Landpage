import type { NavLink, ServiceItem, ContactInfo, SocialLink, Stat } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export const HERO_CONTENT = {
  badge: 'OSC — Imbituva, Paraná',
  headline: 'Transformando Vidas,\nConstruindo Futuros',
  subheadline:
    'A UNIBEM acolhe e apoia crianças e adolescentes em situação de vulnerabilidade social, oferecendo educação, esporte, cultura e muito afeto.',
  ctaPrimary: 'Conheça Nossos Serviços',
  ctaSecondary: 'Como Ajudar',
}

export const ABOUT_CONTENT = {
  sectionTag: 'Quem Somos',
  headline: 'Uma comunidade unida pelo amor às crianças',
  body: [
    'A UNIBEM Imbituva é uma Organização da Sociedade Civil (OSC) fundada com o propósito de acolher e proteger crianças e adolescentes em situação de vulnerabilidade social no município de Imbituva e região.',
    'Atuamos de forma gratuita e transparente, oferecendo estrutura, carinho e oportunidades para que cada criança possa desenvolver todo o seu potencial e ter um futuro digno.',
  ],
  mission: {
    label: 'Missão',
    text: 'Promover o desenvolvimento integral de crianças e adolescentes em vulnerabilidade, garantindo seus direitos e fortalecendo os vínculos familiares e comunitários.',
  },
  vision: {
    label: 'Visão',
    text: 'Ser referência regional no atendimento socioeducativo, contribuindo para uma sociedade mais justa, solidária e equânime.',
  },
  values: {
    label: 'Valores',
    items: ['Amor', 'Transparência', 'Respeito', 'Solidariedade', 'Inclusão'],
  },
  stats: [
    { value: '200+', label: 'Crianças Atendidas' },
    { value: '50+', label: 'Voluntários Ativos' },
    { value: '10+', label: 'Anos de História' },
    { value: '150+', label: 'Famílias Apoiadas' },
  ] as Stat[],
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'educacao',
    icon: 'BookOpen',
    title: 'Reforço Escolar',
    description:
      'Apoio pedagógico para crianças e adolescentes com dificuldades de aprendizagem, com educadores dedicados e materiais didáticos.',
    tags: ['6–14 anos', 'Gratuito'],
  },
  {
    id: 'esporte',
    icon: 'Dumbbell',
    title: 'Esporte e Lazer',
    description:
      'Atividades esportivas que promovem saúde, disciplina e integração social. Futebol, vôlei e atletismo com acompanhamento especializado.',
    tags: ['8–17 anos', 'Gratuito'],
  },
  {
    id: 'cultura',
    icon: 'Music',
    title: 'Arte e Cultura',
    description:
      'Oficinas de música, teatro, dança e artes visuais que desenvolvem criatividade, autoestima e expressão cultural.',
    tags: ['6–17 anos', 'Gratuito'],
  },
  {
    id: 'alimentacao',
    icon: 'UtensilsCrossed',
    title: 'Alimentação Saudável',
    description:
      'Refeições nutritivas diárias para crianças em situação de vulnerabilidade, garantindo segurança alimentar e bem-estar.',
    tags: ['Todas as idades', 'Gratuito'],
  },
  {
    id: 'psicossocial',
    icon: 'HeartHandshake',
    title: 'Apoio Psicossocial',
    description:
      'Atendimento psicológico e assistência social às famílias, fortalecendo vínculos afetivos e prevenindo situações de risco.',
    tags: ['Famílias', 'Gratuito'],
  },
  {
    id: 'profissionalizacao',
    icon: 'GraduationCap',
    title: 'Profissionalização',
    description:
      'Cursos de qualificação profissional para adolescentes, preparando-os para o primeiro emprego e o mercado de trabalho.',
    tags: ['14–17 anos', 'Gratuito'],
  },
]

export const CONTACT_INFO: ContactInfo = {
  address: 'Imbituva — Paraná, Brasil',
  phone: '(42) 9 9999-9999',
  email: 'contato@unibemimbituva.com.br',
  whatsapp: '5542999999999',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57847.47453760637!2d-50.61215!3d-25.1028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81acd17a72537%3A0x5c30d9e1c87e8e82!2sImbituva%2C%20PR!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://facebook.com/unibemimbituva',
    label: 'Facebook da UNIBEM Imbituva',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/unibemimbituva',
    label: 'Instagram da UNIBEM Imbituva',
  },
]
