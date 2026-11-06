import type { NavLink, ServiceItem, ContactInfo, SocialLink, Stat } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export const HERO_CONTENT = {
  headline: 'Transformando Vidas,\nConstruindo Futuros',
  subheadline:
    'A UNIBEM atende crianças e adolescentes de 5 a 13 anos em situação de vulnerabilidade social, com atendimento socioassistencial, protetivo e educacional em meio aberto.',
  ctaPrimary: 'Conheça Nossos Serviços',
  ctaSecondary: 'Como Ajudar',
}

export const ABOUT_CONTENT = {
  sectionTag: 'Quem Somos',
  headline: 'Uma comunidade unida pelo amor às crianças',
  body: [
    'A UNIBEM — União Imbituvense do Bem Estar da Criança e do Adolescente — foi fundada em 27 de abril de 1978. É uma instituição civil e filantrópica, de direito privado, sem fins lucrativos e sem distinção de raça, credo religioso ou político-partidário, sediada no bairro Morro das Pedras, em Imbituva-PR.',
    'Presta atendimento socioassistencial, protetivo e educacional em meio aberto a crianças e adolescentes de 5 a 13 anos em situação de vulnerabilidade social — o serviço de convivência e fortalecimento de vínculos.',
  ],
  mission: {
    label: 'Missão',
    text: 'Assegurar os direitos físicos, intelectuais, morais e sociais da criança e do adolescente, instruindo-o e protegendo-o de forma integral.',
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
    { value: '100+', label: 'Crianças Atendidas' },
    { value: '50+', label: 'Voluntários Ativos' },
    { value: '45+', label: 'Anos de História' },
    { value: '150+', label: 'Famílias Apoiadas' },
  ] as Stat[],
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'convivencia',
    icon: 'HeartHandshake',
    title: 'Convivência e Vínculos',
    description:
      'Serviço de convivência e fortalecimento de vínculos familiares e comunitários para crianças e adolescentes em situação de vulnerabilidade social.',
    tags: ['5–13 anos', 'Gratuito'],
  },
  {
    id: 'educativo',
    icon: 'BookOpen',
    title: 'Acompanhamento Educativo',
    description:
      'Ações socioeducativas lúdicas, em contra turno escolar, com turmas organizadas por ano escolar e até 20 alunos por turma.',
    tags: ['Contra turno', 'Gratuito'],
  },
  {
    id: 'alimentacao',
    icon: 'UtensilsCrossed',
    title: 'Alimentação',
    description:
      'Café da manhã, almoço e lanche da tarde para os turnos matutino e vespertino, com 4 horas diárias de permanência.',
    tags: ['Café, almoço e lanche', 'Gratuito'],
  },
  {
    id: 'prevencao',
    icon: 'ShieldCheck',
    title: 'Prevenção',
    description:
      'Planos de prevenção a situações de vulnerabilidade social e à ruptura de vínculos familiares e comunitários.',
    tags: ['Famílias', 'Gratuito'],
  },
  {
    id: 'protecao',
    icon: 'Heart',
    title: 'Proteção Integral',
    description:
      'Garantia dos direitos físicos, intelectuais, morais e sociais, segundo o Estatuto da Criança e do Adolescente.',
    tags: ['5–13 anos', 'Gratuito'],
  },
  {
    id: 'rede',
    icon: 'Users',
    title: 'Trabalho em Rede',
    description:
      'Atuação articulada com as políticas de Educação, Saúde e Assistência Social pela proteção integral.',
    tags: ['Parcerias', 'Gratuito'],
  },
]

export const CONTACT_INFO: ContactInfo = {
  address: 'R. Aldebaran Brasil, Nº 753, Bairro Morro das Pedras — Imbituva, Paraná',
  phone: '(42) 99914-8450',
  email: 'contato@unibemimbituva.com.br',
  whatsapp: '5542999148450',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57847.47453760637!2d-50.61215!3d-25.1028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81acd17a72537%3A0x5c30d9e1c87e8e82!2sImbituva%2C%20PR!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/unibem.imbituva',
    label: 'Facebook da UNIBEM Imbituva',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/unibem.imbituva',
    label: 'Instagram da UNIBEM Imbituva',
  },
]
