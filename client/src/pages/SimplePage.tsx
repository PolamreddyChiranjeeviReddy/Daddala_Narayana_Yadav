import { NewHeader } from '../components/NewHeader'
import { FooterSimple } from '../components/FooterSimple'
import { Seo } from '../components/seo/Seo'
import { Container } from '../components/Container'
import { useLanguage } from '../components/i18n/language'
import { getPageContent } from '../content/pages'
import type { PageKey } from '../content/types'

export function SimplePage({ page, heading }: { page: Exclude<PageKey, 'home' | 'achievements'>; heading: { en: string; te: string } }) {
  const { lang } = useLanguage()
  const home = getPageContent(lang, 'home')
  const content = getPageContent(lang, page)

  return (
    <div className="min-h-screen">
      <Seo title={content.seo.title} description={content.seo.description} ogImage={content.seo.ogImage} />
      <NewHeader leaderName={home.leader.name} />

      <main>
        <section className="py-12 sm:py-14">
          <Container>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {lang === 'te' ? heading.te : heading.en}
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {lang === 'te'
                ? 'ఈ పేజీకి కంటెంట్‌ను JSON లో నింపాలి (ప్లేస్‌హోల్డర్).'
                : 'Fill this page content from JSON (placeholder).'}
            </p>
          </Container>
        </section>
      </main>

      <FooterSimple content={home} />
    </div>
  )
}
