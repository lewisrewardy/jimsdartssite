import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Contact', to: '/contact' },
  { label: 'Help & Info', to: '/contact' },
  { label: 'Terms', to: '/contact' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

export default function Footer() {
  return (
    <footer
      className="px-6 py-6"
      style={{ backgroundColor: '#0a0a0a', borderTop: '0.5px solid #1a1a1a' }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p
          className="text-xs uppercase"
          style={{ color: '#444444', letterSpacing: '0.1em' }}
        >
          © 2026 Smarter Dart Shirts
        </p>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase transition-colors duration-150 hover:text-white"
                style={{ color: '#333333', letterSpacing: '0.1em' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs uppercase transition-colors duration-150 hover:text-white"
                style={{ color: '#333333', letterSpacing: '0.1em' }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  )
}
