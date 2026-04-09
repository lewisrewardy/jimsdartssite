import { Link } from 'react-router-dom'
import lukeWinning from '../assets/luke winning.jpg'

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-end md:justify-center px-4 sm:px-6 lg:px-16"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(13,13,13,0.92) 40%, rgba(13,13,13,0.4) 100%), url(${lukeWinning})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        minHeight: 'calc(100vh - 48px)',
        paddingBottom: '10vh',
        paddingTop: '8vh',
      }}
    >
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase font-semibold mb-4 md:mb-5"
          style={{ color: '#c8102e', letterSpacing: '0.2em' }}
        >
          PDC World Champion Endorsed
        </p>

        {/* H1 */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-5 md:mb-6"
          style={{ letterSpacing: '-0.01em' }}
        >
          Bespoke dart shirts,{' '}
          <span style={{ color: '#c8102e' }}>built for the game.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-xl"
          style={{ color: '#888888', lineHeight: '1.65' }}
        >
          From pub leagues to the professional stage. Precision, quality and service without
          compromise.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/shirts"
            className="inline-block text-center px-6 sm:px-7 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
            style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.1em' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
          >
            Create Your Shirt
          </Link>
          <Link
            to="/shirts?filter=team"
            className="inline-block text-center px-6 sm:px-7 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
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
