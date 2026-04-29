import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import type { SiteConfig } from '../../content/site'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'

type SlideItem = { src: string; alt: string }

export function HeroSlider({
  site,
  items,
}: {
  site?: Pick<SiteConfig, 'heroSlider'>
  items?: SlideItem[]
}) {
  const fallbackItems = site?.heroSlider?.items ?? []
  const raw = items ?? fallbackItems

  const slides = useMemo(
    () => raw.filter((s) => typeof s?.src === 'string' && s.src.length > 0),
    [raw],
  )

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goNext = () => {
    if (slides.length === 0) return
    setIndex((i) => (i + 1) % slides.length)
  }

  const goPrev = () => {
    if (slides.length === 0) return
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (paused) return
    if (slides.length <= 1) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3500)

    return () => window.clearInterval(id)
  }, [paused, slides.length])

  useEffect(() => {
    if (index >= slides.length) setIndex(0)
  }, [index, slides.length])

  if (slides.length === 0) return null

  const active = slides[index]

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl bg-white/75 ring-1 ring-slate-200"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            <div className="relative aspect-[16/7] w-full bg-slate-50">
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-lg font-semibold text-slate-900 transition hover:bg-white"
                aria-label="Previous slide"
              >
                {'<'}
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-lg font-semibold text-slate-900 transition hover:bg-white"
                aria-label="Next slide"
              >
                {'>'}
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={active.src}
                  src={active.src}
                  alt={active.alt}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  draggable={false}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/leader-placeholder.svg'
                  }}
                />
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
