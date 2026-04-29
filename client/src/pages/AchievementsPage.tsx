import { useLanguage } from '../components/i18n/language'
import { getPageContent } from '../content/pages'
import { Seo } from '../components/seo/Seo'

import { Header } from '../components/Header'
import { AchievementsSection } from '../components/sections/AchievementsSection'
import { FooterSimple } from '../components/FooterSimple'

export function AchievementsPage() {
  const { lang } = useLanguage()
  const home = getPageContent(lang, 'home')
  const content = getPageContent(lang, 'achievements')

  return (
    <div className="min-h-screen">
      <Seo title={content.seo.title} description={content.seo.description} ogImage={content.seo.ogImage} />
      <Header leaderName={home.leader.name} />

      <main>
        <AchievementsSection headline={content.achievements.headline} items={content.achievements.items} />
      </main>

      <FooterSimple content={home} />
    </div>
  )
}
