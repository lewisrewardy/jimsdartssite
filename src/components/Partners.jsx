const partners = [
  {
    name: 'Modus Super Series',
    url: 'https://modussuperseries.com/',
    logo: 'https://logo.clearbit.com/modussuperseries.com',
  },
  {
    name: 'Testo',
    url: 'https://www.testo.com',
    logo: 'https://logo.clearbit.com/testo.com',
  },
  {
    name: 'Darts World',
    url: 'https://dartsworld.com/',
    logo: 'https://logo.clearbit.com/dartsworld.com',
  },
  {
    name: 'Red Dragon Darts',
    url: 'https://www.reddragondarts.com/collections/luke-humphries',
    logo: 'https://logo.clearbit.com/reddragondarts.com',
  },
]

function PartnerItem({ partner }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group flex-shrink-0 mx-10"
      style={{ textDecoration: 'none' }}
    >
      {/* Logo with text fallback */}
      <div
        className="flex items-center justify-center overflow-hidden"
        style={{ width: 28, height: 28, flexShrink: 0 }}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'grayscale(100%) brightness(0.6)',
            transition: 'filter 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) brightness(1)')}
          onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) brightness(0.6)')}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <span
        className="text-xs uppercase font-semibold whitespace-nowrap transition-colors duration-200 group-hover:text-white"
        style={{ color: '#444444', letterSpacing: '0.15em' }}
      >
        {partner.name}
      </span>
    </a>
  )
}

export default function Partners() {
  // Duplicate list enough times for seamless infinite scroll
  const loopItems = [...partners, ...partners, ...partners]

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '0.5px solid #1a1a1a',
        borderBottom: '0.5px solid #1a1a1a',
      }}
    >
      <div className="flex items-stretch">
        {/* Static label */}
        <div
          className="flex-shrink-0 flex items-center px-5 md:px-7 py-4 z-10"
          style={{
            borderRight: '0.5px solid #1e1e1e',
            backgroundColor: '#0a0a0a',
          }}
        >
          <span
            className="text-xs font-semibold uppercase whitespace-nowrap"
            style={{ color: '#c8102e', letterSpacing: '0.2em' }}
          >
            Official Partners
          </span>
        </div>

        {/* Scrolling track */}
        <div className="flex-1 overflow-hidden relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 40, background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 40, background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
          />

          <div
            className="flex items-center py-4"
            style={{
              animation: 'marquee 28s linear infinite',
              width: 'max-content',
            }}
          >
            {loopItems.map((partner, i) => (
              <PartnerItem key={i} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex-1 > div[style*="animation"] {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
