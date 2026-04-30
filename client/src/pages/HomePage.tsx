import { getPageContent } from '../content/pages'
import { Seo } from '../components/seo/Seo'
import { useLanguage } from '../components/i18n/language'

import { NewHeader } from '../components/NewHeader'
import { HeroSection } from '../components/sections/HeroSection'
import { HeroSlider } from '../components/sections/HeroSlider'
import { ParagraphSlider } from '../components/sections/ParagraphSlider'
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel'
import { Container } from '../components/Container'
import { FooterSimple } from '../components/FooterSimple'

export function HomePage() {
  const { lang } = useLanguage()
  const content = getPageContent(lang, 'home')
  const achievements = getPageContent(lang, 'achievements')

  return (
    <div className="min-h-screen">
      <Seo title={content.seo.title} description={content.seo.description} ogImage={content.seo.ogImage} />
      <NewHeader leaderName={content.leader.name} />

      <main>
        <HeroSection
          content={content}
          ctaHref={`/${lang}/achievements`}
          achievementPreview={achievements.achievements.items.slice(0, 3)}
        />

        <HeroSlider items={content.heroSlider.items} />

        <section id="about" className="py-12 sm:py-14">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl mb-5">
              {content.about.headline}
            </h2>
            <ParagraphSlider paragraphs={content.about.paragraphs} />
          </Container>
        </section>

        <TestimonialsCarousel headline={content.testimonials.headline} items={content.testimonials.items} />
      </main>

      <FooterSimple content={content} />
    </div>
  )
}
