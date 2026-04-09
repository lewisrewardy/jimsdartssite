import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Shirts', to: '/shirts' },
    { label: 'Teams', to: '/shirts?filter=team' },
    { label: 'Patches', to: '/shirts' },
    { label: 'Partners', to: '/why-smarter' },
    { label: 'Why Smarter?', to: '/why-smarter' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#111111', borderBottom: '0.5px solid #2a2a2a' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-semibold tracking-widest uppercase text-xs"
          style={{ letterSpacing: '0.2em' }}
        >
          Smarter Dart Shirts
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs uppercase tracking-widest transition-colors duration-150"
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
        <div className="flex items-center gap-4">
          <Link
            to="/shirts"
            className="hidden md:block text-xs uppercase font-semibold px-4 py-2 rounded transition-colors duration-150"
            style={{
              backgroundColor: '#c8102e',
              color: '#ffffff',
              letterSpacing: '0.12em',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#a50d25')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#c8102e')}
          >
            Create Your Shirt
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
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
          className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-3"
          style={{ borderTop: '0.5px solid #2a2a2a' }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-widest py-2"
              style={{ color: '#888888', letterSpacing: '0.12em' }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/shirts"
            onClick={() => setMenuOpen(false)}
            className="text-xs uppercase font-semibold px-4 py-2 rounded text-center mt-2"
            style={{ backgroundColor: '#c8102e', color: '#ffffff', letterSpacing: '0.12em' }}
          >
            Create Your Shirt
          </Link>
        </div>
      )}
    </nav>
  )
}
