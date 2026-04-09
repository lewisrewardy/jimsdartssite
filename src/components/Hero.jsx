import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center min-h-screen px-6 md:px-16"
      style={{ backgroundColor: '#0d0d0d' }}
    >
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase font-semibold mb-5"
          style={{ color: '#c8102e', letterSpacing: '0.2em' }}
        >
          PDC World Champion Endorsed
        </p>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-6" style={{ letterSpacing: '-0.01em' }}>
          Bespoke dart shirts,{' '}
          <span style={{ color: '#c8102e' }}>built for the game.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg mb-10 max-w-xl" style={{ color: '#888888', lineHeight: '1.6' }}>
          From pub leagues to the professional stage. Precision, quality and service without compromise.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/shirts"
            className="px-7 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
            style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.1em' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
          >
            Create Your Shirt
          </Link>
          <Link
            to="/shirts?filter=team"
            className="px-7 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
            style={{
              border: '1px solid #555',
              color: '#fff',
              backgroundColor: 'transparent',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#555')}
          >
            Shop Team Shirts
          </Link>
        </div>
      </div>
    </section>
  )
}
