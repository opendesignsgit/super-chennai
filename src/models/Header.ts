import type { Header } from '@/payload-types'

export interface Block {
  title: string
  desc: string
  link: string
}

export interface MenuItem {
  label: string
  link: string
  content: {
    title: string
    desc: string
    link: string
  }[]
  gallery?: {
    url: string
    alt?: string
  }[]
  contentImage?: {
    filename: string
    mimeType: string
    url: string
  }
}

export interface DrawerItem {
  label: string
  link: string
}

export interface HeaderClientProps {
  data: Header
  socialLinks?: {
    url: string
    platform: string
    icon?: {
      filename: string
      url?: string
    }
  }[]
}
