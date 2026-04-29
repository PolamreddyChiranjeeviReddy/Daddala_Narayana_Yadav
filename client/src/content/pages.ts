import type { Language } from '../components/i18n/language'
import type {
  AchievementsContent,
  HomeContent,
  PageContentMap,
  PageKey,
} from './types'

import homeEn from './en/home.json'
import homeTe from './te/home.json'
import achievementsEn from './en/achievements.json'
import achievementsTe from './te/achievements.json'
import impactEn from './en/impact.json'
import impactTe from './te/impact.json'
import mediaEn from './en/media.json'
import mediaTe from './te/media.json'
import contactEn from './en/contact.json'
import contactTe from './te/contact.json'

const HOME = {
  en: homeEn as unknown as HomeContent,
  te: homeTe as unknown as HomeContent,
} as const

const ACHIEVEMENTS = {
  en: achievementsEn as unknown as AchievementsContent,
  te: achievementsTe as unknown as AchievementsContent,
} as const

const SIMPLE = {
  impact: {
    en: impactEn as PageContentMap['impact'],
    te: impactTe as PageContentMap['impact'],
  },
  media: {
    en: mediaEn as PageContentMap['media'],
    te: mediaTe as PageContentMap['media'],
  },
  contact: {
    en: contactEn as PageContentMap['contact'],
    te: contactTe as PageContentMap['contact'],
  },
} as const

export function getPageContent(lang: Language, page: 'home'): HomeContent
export function getPageContent(
  lang: Language,
  page: 'achievements',
): AchievementsContent
export function getPageContent(
  lang: Language,
  page: Exclude<PageKey, 'home' | 'achievements'>,
): PageContentMap[Exclude<PageKey, 'home' | 'achievements'>]
export function getPageContent(lang: Language, page: PageKey) {
  if (page === 'home') return HOME[lang]
  if (page === 'achievements') return ACHIEVEMENTS[lang]
  return SIMPLE[page][lang]
}
