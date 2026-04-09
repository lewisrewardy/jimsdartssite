const trustItems = [
  'Luke Humphries Endorsed',
  'Free UK Shipping over £150',
  'Proofed Before Print',
  'Founded by Players',
]

export default function TrustBar() {
  return (
    <div
      className="w-full px-6 py-4"
      style={{ backgroundColor: '#111111', borderTop: '0.5px solid #222222', borderBottom: '0.5px solid #222222' }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#c8102e' }}
            />
            <span
              className="text-xs uppercase font-medium"
              style={{ color: '#cccccc', letterSpacing: '0.12em' }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
