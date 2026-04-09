const trustItems = [
  'Luke Humphries Endorsed',
  'Free UK Shipping over £150',
  'Proofed Before Print',
  'Founded by Players',
]

export default function TrustBar() {
  return (
    <div
      className="w-full px-4 sm:px-6 py-3 md:py-4"
      style={{
        backgroundColor: '#111111',
        borderTop: '0.5px solid #222222',
        borderBottom: '0.5px solid #222222',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 md:gap-0 md:flex md:items-center md:justify-between">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#c8102e' }}
            />
            <span
              className="text-xs uppercase font-medium leading-tight"
              style={{ color: '#cccccc', letterSpacing: '0.1em' }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
