import { Link } from 'react-router-dom'
import lukeSrc from '../assets/lukeHeadshot.webp'

export default function LukeQuote() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '0.5px solid #222222',
        borderBottom: '0.5px solid #222222',
      }}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 max-w-7xl mx-auto">
        {/* Photo side */}
        <div
          className="relative overflow-hidden w-full"
          style={{ minHeight: '280px', height: '45vw', maxHeight: '560px' }}
        >
          <img
            src={lukeSrc}
            alt="Luke Humphries, PDC World Champion"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(60%) contrast(1.1)' }}
          />
          {/* Right-fade gradient on desktop */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(to right, transparent 55%, #0a0a0a 100%)' }}
          />
          {/* Bottom-fade gradient on mobile */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, #0a0a0a 100%)' }}
          />
        </div>

        {/* Quote side */}
        <div
          className="flex flex-col justify-center px-4 sm:px-8 md:px-12 py-10 md:py-14"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          {/* Label */}
          <p
            className="text-xs uppercase font-semibold mb-5 md:mb-6"
            style={{ color: '#c8102e', letterSpacing: '0.2em' }}
          >
            World Champion Endorsed
          </p>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-snug mb-5 md:mb-6 text-white">
            "The fit and breathability of Smarter Dart Shirts is{' '}
            <span style={{ color: '#c8102e' }}>UNRIVALLED</span>. It's built for those who take the
            game seriously."
          </blockquote>

          {/* Attribution */}
          <div className="mb-5 md:mb-6">
            <p
              className="text-sm font-semibold uppercase text-white"
              style={{ letterSpacing: '0.15em' }}
            >
              Luke Humphries
            </p>
            <p className="text-xs mt-1" style={{ color: '#888888' }}>
              World Champion &amp; Brand Ambassador
            </p>
          </div>

          {/* Link */}
          <Link
            to="/why-smarter"
            className="text-sm font-semibold transition-opacity duration-150 hover:opacity-75 self-start"
            style={{ color: '#c8102e' }}
          >
            Read the full story →
          </Link>
        </div>
      </div>
    </section>
  )
}
