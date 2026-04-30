import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'

export function AboutSlider({ site, locale }: { site: SiteConfig; locale: Locale }) {
  const cards = site.about.cards
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(0)

  const goNext = () => {
    if (cards.length === 0) return
    setDirection(1)
    setIndex((i) => (i + 1) % cards.length)
  }

  const goPrev = () => {
    if (cards.length === 0) return
    setDirection(-1)
    setIndex((i) => (i - 1 + cards.length) % cards.length)
  }

  const goTo = (idx: number) => {
    setDirection(idx > index ? 1 : -1)
    setIndex(idx)
  }

  useEffect(() => {
    if (paused) return
    if (cards.length <= 1) return

    const id = window.setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % cards.length)
    }, 4000)

    return () => window.clearInterval(id)
  }, [paused, cards.length])

  useEffect(() => {
    if (index >= cards.length) setIndex(0)
  }, [index, cards.length])

  if (cards.length === 0) return null

  const active = cards[index]

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow={ui(locale, 'about')}
          title={site.about.headline}
          description={ui(locale, 'aboutDescription')}
        />

        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl bg-white shadow-xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Navigation arrows */}
            {cards.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-white hover:scale-110"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-white hover:scale-110"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}

            {/* Slide content */}
            <div className="relative min-h-[300px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full p-8 sm:p-12"
                >
                  <a href={active.href} className="block">
                    <div className="text-2xl font-bold text-slate-900 mb-4">
                      {active.title}
                    </div>
                    <p className="text-base leading-relaxed text-slate-600 max-w-2xl">
                      {active.description}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-blue-600">
                      {ui(locale, 'explore')} →
                    </p>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigation */}
            {cards.length > 1 && (
              <div className="flex justify-center gap-2 pb-6">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goTo(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === index
                        ? 'w-8 bg-blue-600'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
