export default function ShirtCard({ shirt, showDetails = false }) {
  const { name, tagLabel, placeholderColors, price, description, image } = shirt

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: '#161616',
        border: '1px solid #222222',
        minWidth: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#c8102e')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#222222')}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${placeholderColors[0]} 0%, ${placeholderColors[1]} 100%)`,
            }}
          />
        )}
        {/* Tag badge */}
        <span
          className="absolute bottom-3 left-3 text-xs uppercase font-semibold px-2 py-1 rounded"
          style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.12em' }}
        >
          {tagLabel}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-sm font-semibold text-white leading-snug">{name}</p>

        {showDetails && (
          <>
            <p className="text-xs mt-1" style={{ color: '#888888', lineHeight: '1.5' }}>
              {description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-semibold" style={{ color: '#c8102e' }}>
                {price}
              </span>
              <button
                className="text-xs uppercase font-semibold px-3 py-1.5 rounded transition-colors duration-150"
                style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
              >
                Customise
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
