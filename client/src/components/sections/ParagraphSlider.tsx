import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function extractHeadingAndBody(text: string): { heading: string; body: string } {
  const match = text.match(/^([A-Z][A-Z\s&]+):\s*([\s\S]*)/)
  if (match) {
    return { heading: match[1], body: match[2] }
  }
  return { heading: '', body: text }
}

export function ParagraphSlider({ paragraphs }: { paragraphs: string[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(0)

  const goNext = () => {
    if (paragraphs.length === 0) return
    setDirection(1)
    setIndex((i) => (i + 1) % paragraphs.length)
  }

  const goPrev = () => {
    if (paragraphs.length === 0) return
    setDirection(-1)
    setIndex((i) => (i - 1 + paragraphs.length) % paragraphs.length)
  }

  const goTo = (idx: number) => {
    setDirection(idx > index ? 1 : -1)
    setIndex(idx)
  }

  useEffect(() => {
    if (paused) return
    if (paragraphs.length <= 1) return

    const id = window.setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % paragraphs.length)
    }, 4000)

    return () => window.clearInterval(id)
  }, [paused, paragraphs.length])

  useEffect(() => {
    if (index >= paragraphs.length) setIndex(0)
  }, [index, paragraphs.length])

  if (paragraphs.length === 0) return null

  const active = paragraphs[index]
  const { heading, body } = extractHeadingAndBody(active)

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] bg-white backdrop-blur-sm"
      style={{
        boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 0 80px -20px rgba(59, 130, 246, 0.15), inset 0 0 100px rgba(59, 130, 246, 0.05)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eef2ff 100%)'
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-blue-50/30 pointer-events-none rounded-[2rem]" />

      {/* Navigation arrows */}
      {paragraphs.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-md px-5 py-3 text-2xl font-bold text-slate-700 shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-125 active:scale-95 border border-white/50"
            style={{ boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)' }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-md px-5 py-3 text-2xl font-bold text-slate-700 shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-125 active:scale-95 border border-white/50"
            style={{ boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)' }}
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}

      {/* Slide content */}
      <div className="relative z-10 min-h-[320px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 120 : -120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -120 : 120, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="w-full p-10 sm:p-16"
          >
            {heading && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <span
                  className="inline-block px-6 py-3 rounded-full text-white text-sm font-bold tracking-wider uppercase shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
                    boxShadow: '0 10px 30px -5px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {heading}
                </span>
              </motion.div>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg leading-relaxed text-slate-700 whitespace-pre-line font-medium"
              style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}
            >
              {body || active}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      {paragraphs.length > 1 && (
        <div className="relative z-10 flex justify-center gap-3 pb-10">
          {paragraphs.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`h-3 rounded-full transition-all duration-500 ${
                idx === index
                  ? 'w-12 bg-blue-600 shadow-lg shadow-blue-600/50'
                  : 'w-3 bg-slate-300 hover:bg-slate-400 hover:scale-125'
              }`}
              style={idx === index ? { boxShadow: '0 4px 15px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5)' } : {}}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Decorative corner gradients */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-tl-[2rem] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-br-[2rem] pointer-events-none" />
    </div>
  )
}
