import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'

export function Gallery({ site, locale }: { site: SiteConfig; locale: Locale }) {
  return (
    <section id="gallery" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8">
          <SectionHeading
            eyebrow={ui(locale, 'gallery')}
            title={site.gallery.headline}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {site.gallery.items.map((img, idx) => (
              <Reveal key={img.src} delay={idx * 0.04}>
                <figure className="overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-slate-600">
                    {img.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
