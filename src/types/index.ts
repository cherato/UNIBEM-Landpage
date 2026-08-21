export interface NavLink {
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  tags?: string[]
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  whatsapp: string
  mapsEmbedUrl: string
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'youtube'
  url: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface Stat {
  value: string
  label: string
}
