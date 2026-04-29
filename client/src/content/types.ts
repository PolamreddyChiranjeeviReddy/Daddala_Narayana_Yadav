export type PageKey = 'home' | 'achievements' | 'impact' | 'media' | 'contact'

export type StatChip = {
  label: string
  value: string
}

export type AchievementItem = {
  year: string
  title: string
  impact: string
}

export type TestimonialItem = {
  name: string
  role: string
  photo: string
  story: string
}

export type SeoData = {
  title: string
  description: string
  ogImage?: string
}

export type HomeContent = {
  seo: SeoData
  leader: {
    name: string
    position: string
    region: string
    portrait: string
    badges: string[]
  }
  hero: {
    headline: string
    tagline: string
    stats: StatChip[]
    didYouKnow: {
      label: string
      fact: string
    }
  }
  heroSlider: {
    items: Array<{ src: string; alt: string }>
  }
  about: {
    headline: string
    paragraphs: string[]
  }
  testimonials: {
    headline: string
    items: TestimonialItem[]
  }
}

export type AchievementsContent = {
  seo: SeoData
  achievements: {
    headline: string
    items: AchievementItem[]
  }
}

export type PageContentMap = {
  home: HomeContent
  achievements: AchievementsContent
  impact: { seo: SeoData }
  media: { seo: SeoData }
  contact: { seo: SeoData }
}
