import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Shirts', to: '/shirts' },
    { label: 'Teams', to: '/shirts?filter=team' },
    { label: 'Patches', to: '/shirts' },
    { label: 'Partners', to: '/#partners' },
    { label: 'Why Smarter?', to: '/why-smarter' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#111111', borderBottom: '0.5px solid #2a2a2a' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-semibold uppercase flex-shrink-0"
          style={{ letterSpacing: '0.18em', fontSize: 11 }}
        >
          Smarter Dart Shirts
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs uppercase tracking-widest transition-colors duration-150 whitespace-nowrap"
              style={({ isActive }) => ({
                color: isActive ? '#ffffff' : '#888888',
                letterSpacing: '0.12em',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/shirts"
            className="hidden lg:block text-xs uppercase font-semibold px-4 py-2 rounded transition-colors duration-150 whitespace-nowrap"
            style={{
              backgroundColor: '#c8102e',
              color: '#ffffff',
              letterSpacing: '0.12em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
          >
            Create Your Shirt
          </Link>

          {/* Mobile CTA (small, no label) */}
          <Link
            to="/shirts"
            className="lg:hidden text-xs uppercase font-semibold px-3 py-1.5 rounded"
            style={{ backgroundColor: '#c8102e', color: '#ffffff', letterSpacing: '0.1em', fontSize: 10 }}
          >
            Order
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-white transition-all duration-200"
              style={{ transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-200"
              style={{ transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-4 sm:px-6 pb-4 pt-2 flex flex-col gap-1"
          style={{ borderTop: '0.5px solid #2a2a2a', backgroundColor: '#111111' }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase py-2.5 transition-colors duration-150"
              style={{ color: '#888888', letterSpacing: '0.12em', borderBottom: '0.5px solid #1a1a1a' }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/shirts"
            onClick={() => setMenuOpen(false)}
            className="text-xs uppercase font-semibold px-4 py-3 rounded text-center mt-3"
            style={{ backgroundColor: '#c8102e', color: '#ffffff', letterSpacing: '0.12em' }}
          >
            Create Your Shirt
          </Link>
        </div>
      )}
    </nav>
  )
}
