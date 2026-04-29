import type { TestimonialItem } from '../../content/types'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'

export function TestimonialsSection({
  headline,
  items,
}: {
  headline: string
  items: TestimonialItem[]
}) {
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {headline}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((t, idx) => (
            <Reveal key={`${t.name}-${idx}`} delay={Math.min(0.22, idx * 0.05)}>
              <article className="h-full p-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/leader-placeholder.svg'
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="truncate text-xs text-slate-600">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{t.story}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
