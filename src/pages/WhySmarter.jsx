import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LukeQuote from '../components/LukeQuote'
import { Link } from 'react-router-dom'

const useCases = [
  { level: 'Pub Leagues', desc: 'Stand out at your local with a shirt that means something.' },
  { level: 'County Teams', desc: 'Represent with kit built for county-level competition.' },
  { level: 'Super Leagues', desc: 'Shirts that keep up with the pace of the highest local game.' },
  { level: 'Professional Stage', desc: 'Worn by PDC professionals. Endorsed by a World Champion.' },
]

export default function WhySmarter() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0d0d0d' }}>
        {/* Founder section */}
        <section className="px-4 sm:px-6 lg:px-16 py-12 md:py-20" style={{ borderBottom: '0.5px solid #222222' }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: '#c8102e', letterSpacing: '0.2em' }}
            >
              The story behind the brand
            </p>
            <h1 className="text-3xl md:text-4xl font-bold uppercase text-white mb-6 leading-tight">
              Built by a player, for players.
            </h1>
            <div className="space-y-4" style={{ color: '#888888', lineHeight: '1.75', fontSize: '0.95rem' }}>
              <p>
                Smarter Dart Shirts was founded by <strong className="text-white">James Clifton</strong> — a
                darts player who was frustrated by the lack of quality, affordable bespoke apparel available to
                players at every level of the game.
              </p>
              <p>
                Playing in pub leagues and county competitions in Reading, Berkshire, James understood exactly
                what players wanted: shirts that look professional, feel great under pressure, and don't cost a
                fortune.
              </p>
              <p>
                What started as shirts for his own team quickly grew into a full-service bespoke dart apparel
                brand — trusted by hundreds of teams and players across the UK, all the way up to the PDC
                professional stage.
              </p>
              <p>
                Every shirt is proofed before print, shipped with care, and backed by the kind of service you
                only get from a brand that genuinely loves the sport.
              </p>
            </div>
          </div>
        </section>

        {/* Luke quote reuse */}
        <LukeQuote />

        {/* Vision */}
        <section className="px-4 sm:px-6 lg:px-16 py-12 md:py-20" style={{ borderBottom: '0.5px solid #222222' }}>
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              Our vision
            </p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-5">
              Precision, quality and service without compromise.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
              We believe every darts player deserves to step up to the oche in kit they're proud of — whether
              that's a one-off bespoke design or a full team order. That belief is what drives every shirt we
              produce.
            </p>
          </div>
        </section>

        {/* Built for every level */}
        <section className="px-4 sm:px-6 lg:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-xs uppercase font-semibold mb-8 text-center"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              Built for every level
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((uc) => (
                <div
                  key={uc.level}
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: '#161616', border: '1px solid #222222' }}
                >
                  <div
                    className="w-1.5 h-6 mb-4 rounded-sm"
                    style={{ backgroundColor: '#c8102e' }}
                  />
                  <h3
                    className="text-sm font-bold uppercase text-white mb-2"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {uc.level}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/shirts"
                className="inline-block px-8 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
                style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.12em' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
              >
                Create Your Shirt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
