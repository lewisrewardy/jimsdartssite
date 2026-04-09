import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LukeQuote from '../components/LukeQuote'
import { Link } from 'react-router-dom'

const levels = [
  {
    label: 'First-time Players',
    desc: 'Ordering your first personalised dart shirt — we make it simple, fast and affordable.',
  },
  {
    label: 'Pub & Club Teams',
    desc: 'Kit your full team with matching bespoke designs. Minimum fuss, maximum impact.',
  },
  {
    label: 'County Competitors',
    desc: 'Represent your county in kit that looks the part and performs under pressure.',
  },
  {
    label: 'Professionals',
    desc: 'From Q-School to the PDC stage — precision apparel built for the highest level.',
  },
]

const team = [
  { name: 'James Clifton', role: 'Founder' },
  { name: 'Ryan', role: 'Production' },
  { name: 'Tom', role: 'Design' },
  { name: 'Laura', role: 'Operations' },
  { name: 'Lisa', role: 'Customer Experience' },
]

export default function WhySmarter() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0d0d0d' }}>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-16 py-16 md:py-24"
          style={{ borderBottom: '0.5px solid #222222' }}
        >
          <div className="max-w-4xl">
            <p
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: '#c8102e', letterSpacing: '0.2em' }}
            >
              Founded by James Clifton
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white leading-tight mb-6">
              Where darts meets{' '}
              <span style={{ color: '#c8102e' }}>decades of print expertise.</span>
            </h1>
            <p className="text-base md:text-lg max-w-2xl" style={{ color: '#888888', lineHeight: '1.7' }}>
              Smarter Dart Shirts creates bespoke dart shirts and custom apparel for individuals,
              teams and clubs — built by players, powered by professional print expertise.
            </p>
          </div>
        </section>

        {/* ── ORIGIN STORY ─────────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-16 py-14 md:py-20"
          style={{ borderBottom: '0.5px solid #222222' }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Copy */}
            <div>
              <p
                className="text-xs uppercase font-semibold mb-4"
                style={{ color: '#888888', letterSpacing: '0.2em' }}
              >
                Designed by people who live the game
              </p>
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-6 leading-tight">
                18 years at the oche. Decades behind the press.
              </h2>
              <div className="space-y-4 text-sm md:text-base" style={{ color: '#888888', lineHeight: '1.8' }}>
                <p>
                  James Clifton is a lifelong print professional with decades of experience in
                  printing, garment production and customisation. He also heads{' '}
                  <strong className="text-white">Smarter Impressions</strong>, a workwear brand
                  built on the same foundations of quality and precision.
                </p>
                <p>
                  Away from the press, James has been playing darts for{' '}
                  <strong className="text-white">18 years</strong> — competing as a Super League
                  and County player for both Wiltshire and Berkshire. He knows what players need
                  because he is one.
                </p>
                <p>
                  Over the years, James was frequently asked by players and teams to personalise
                  supplied dart shirts with names and sponsors, or to create fully bespoke
                  individual and team designs. The demand was clear. The gap in the market was
                  obvious. Smarter Dart Shirts was the answer.
                </p>
              </div>
            </div>

            {/* Stat/callout cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '18', unit: 'Years', label: 'Playing competitive darts' },
                { num: '10+', unit: 'Years', label: 'In professional print & garment production' },
                { num: '2', unit: 'Counties', label: 'Represented — Wiltshire & Berkshire' },
                { num: '1', unit: 'Mission', label: 'Precision, quality and service without compromise' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: '#161616', border: '1px solid #222222' }}
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold" style={{ color: '#c8102e' }}>
                      {stat.num}
                    </span>
                    <span className="text-xs uppercase font-semibold text-white" style={{ letterSpacing: '0.1em' }}>
                      {stat.unit}
                    </span>
                  </div>
                  <p className="text-xs leading-snug" style={{ color: '#555555' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LUKE AMBASSADOR ──────────────────────────────────────── */}
        <LukeQuote />

        {/* ── LUKE CONNECTION ──────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-16 py-14 md:py-20"
          style={{ borderBottom: '0.5px solid #222222' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              Brand Ambassador
            </p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-6 leading-tight">
              Luke Humphries MBE — former PDC World No.1 & World Champion
            </h2>
            <p className="text-sm md:text-base mb-4" style={{ color: '#888888', lineHeight: '1.8' }}>
              The relationship between James and Luke wasn't forged in a boardroom — it was built
              through years of{' '}
              <strong className="text-white">competing together</strong>, attending Q-School, and
              playing in national competitions. Two players who understand what the game demands.
            </p>
            <p className="text-sm md:text-base" style={{ color: '#888888', lineHeight: '1.8' }}>
              Luke's endorsement of Smarter Dart Shirts isn't a sponsorship deal — it's a genuine
              belief in the product, worn at the highest level of the sport.
            </p>
          </div>
        </section>

        {/* ── VISION STATEMENT ─────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-16 py-14 md:py-20"
          style={{ backgroundColor: '#0a0a0a', borderBottom: '0.5px solid #222222' }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs uppercase font-semibold mb-6"
              style={{ color: '#c8102e', letterSpacing: '0.2em' }}
            >
              Our vision
            </p>
            <blockquote
              className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-8"
            >
              "Rome wasn't built in a day, but{' '}
              <span style={{ color: '#c8102e' }}>the foundations of ours already are.</span>"
            </blockquote>
            <p className="text-sm md:text-base max-w-2xl" style={{ color: '#888888', lineHeight: '1.8' }}>
              With James' position in the print industry, Luke's standing at the top of
              professional darts, and the Print Often Group's production power, Smarter Dart
              Shirts is built to become the{' '}
              <strong className="text-white">go-to destination for bespoke dart apparel</strong> —
              from first-time pub league players to professionals chasing world titles.
            </p>
          </div>
        </section>

        {/* ── TEAM ─────────────────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-16 py-14 md:py-20"
          style={{ borderBottom: '0.5px solid #222222' }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-xs uppercase font-semibold mb-8"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              The team behind the shirts
            </p>
            <div className="flex flex-wrap gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg"
                  style={{ backgroundColor: '#161616', border: '1px solid #222222' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                    style={{ backgroundColor: '#c8102e' }}
                  >
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs" style={{ color: '#555555' }}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUILT FOR EVERY LEVEL ────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-16 py-14 md:py-20" style={{ borderBottom: '0.5px solid #222222' }}>
          <div className="max-w-7xl mx-auto">
            <p
              className="text-xs uppercase font-semibold mb-2"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              Built for every level of the game
            </p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-10">
              Your shirt should work as hard as you do.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {levels.map((level, i) => (
                <div
                  key={level.label}
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: '#161616', border: '1px solid #222222' }}
                >
                  <div
                    className="text-4xl font-bold mb-4 leading-none select-none"
                    style={{ color: '#c8102e', opacity: 0.2 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="w-1 h-5 mb-4 rounded-sm"
                    style={{ backgroundColor: '#c8102e' }}
                  />
                  <h3
                    className="text-sm font-bold uppercase text-white mb-2"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {level.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                    {level.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-16 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-xs uppercase font-semibold mb-4"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              Precision. Quality. Service without compromise.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-6">
              Ready to step up to the oche in style?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/shirts"
                className="inline-block px-8 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
                style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.12em' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
              >
                Create Your Shirt
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150"
                style={{ border: '1px solid #444', color: '#fff', backgroundColor: 'transparent', letterSpacing: '0.12em' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#444')}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
