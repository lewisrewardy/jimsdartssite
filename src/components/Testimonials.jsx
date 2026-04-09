import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-16" style={{ backgroundColor: '#0d0d0d', borderTop: '0.5px solid #222222' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p
          className="text-xs uppercase font-semibold mb-10 text-center"
          style={{ color: '#888888', letterSpacing: '0.2em' }}
        >
          Player feedback
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-lg flex flex-col gap-3"
              style={{ backgroundColor: '#161616', border: '1px solid #222222' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#c8102e', fontSize: 14 }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm italic leading-relaxed text-white" style={{ color: '#dddddd' }}>
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="mt-auto pt-3" style={{ borderTop: '0.5px solid #2a2a2a' }}>
                <p className="text-xs font-semibold text-white">{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#555555' }}>
                  {t.league}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
