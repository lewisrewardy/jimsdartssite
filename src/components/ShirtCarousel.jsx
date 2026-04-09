import { useState, useRef, useEffect, useCallback } from 'react'
import { shirts } from '../data/shirts'
import ShirtCard from './ShirtCard'

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Bespoke', value: 'bespoke' },
  { label: 'Team Shirts', value: 'team' },
  { label: 'Fun Designs', value: 'fun' },
]

export default function ShirtCarousel() {
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const trackRef = useRef(null)
  const wrapperRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)

  const filtered = shirts.filter((s) => activeTab === 'all' || s.tag === activeTab)
  const pageCount = Math.max(1, Math.ceil(filtered.length / visibleCount))
  const clampedPage = Math.min(currentPage, pageCount - 1)

  // Measure visible count from wrapper width
  const measure = useCallback(() => {
    if (!wrapperRef.current) return
    const w = wrapperRef.current.offsetWidth
    const gap = 16
    let count = 1
    if (w >= 900) count = 3
    else if (w >= 600) count = 2
    const cw = (w - gap * (count - 1)) / count
    setVisibleCount(count)
    setCardWidth(cw)
  }, [])

  useEffect(() => {
    measure()
    const observer = new ResizeObserver(measure)
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [measure])

  // Reset to page 0 on tab change
  useEffect(() => {
    setCurrentPage(0)
  }, [activeTab])

  const gap = 16
  const offset = clampedPage * visibleCount * (cardWidth + gap)

  return (
    <section className="py-16 px-6 md:px-16" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs uppercase font-semibold mb-2"
            style={{ color: '#888888', letterSpacing: '0.2em' }}
          >
            Select your kit
          </p>
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
            Real shirts, real players
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-0 mb-8" style={{ borderBottom: '1px solid #222222' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className="px-4 py-3 text-xs uppercase font-semibold transition-colors duration-150 outline-none"
                style={{
                  color: isActive ? '#ffffff' : '#555555',
                  borderBottom: isActive ? '2px solid #c8102e' : '2px solid transparent',
                  letterSpacing: '0.12em',
                  background: 'transparent',
                  marginBottom: '-1px',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-3">
          {/* Prev button */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={clampedPage === 0}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150 disabled:opacity-30"
            style={{ border: '1px solid #333', color: '#fff', background: 'transparent' }}
            onMouseEnter={(e) => {
              if (clampedPage > 0) {
                e.currentTarget.style.backgroundColor = '#c8102e'
                e.currentTarget.style.borderColor = '#c8102e'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = '#333'
            }}
          >
            ←
          </button>

          {/* Track wrapper */}
          <div ref={wrapperRef} className="flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ gap: `${gap}px`, transform: `translateX(-${offset}px)` }}
            >
              {filtered.map((shirt) => (
                <div
                  key={shirt.id}
                  style={{ width: cardWidth || 280, flexShrink: 0 }}
                >
                  <ShirtCard shirt={shirt} />
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={clampedPage >= pageCount - 1}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150 disabled:opacity-30"
            style={{ border: '1px solid #333', color: '#fff', background: 'transparent' }}
            onMouseEnter={(e) => {
              if (clampedPage < pageCount - 1) {
                e.currentTarget.style.backgroundColor = '#c8102e'
                e.currentTarget.style.borderColor = '#c8102e'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = '#333'
            }}
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="w-2 h-2 rounded-full transition-colors duration-150"
              style={{ backgroundColor: i === clampedPage ? '#c8102e' : '#333333' }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
