const steps = [
  {
    num: '01',
    title: 'Choose',
    desc: 'Select a pre-design or style from the options',
  },
  {
    num: '02',
    title: 'Customise',
    desc: 'Add names, sponsors, logos and details',
  },
  {
    num: '03',
    title: 'Approve',
    desc: 'Sign off your proof before we send to print',
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Printed and shipped straight to your door',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 md:px-16" style={{ backgroundColor: '#0d0d0d', borderTop: '0.5px solid #222222' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p
          className="text-xs uppercase font-semibold mb-10 text-center"
          style={{ color: '#888888', letterSpacing: '0.2em' }}
        >
          The precision workflow
        </p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="px-6 py-8 relative"
              style={{
                borderLeft: i > 0 ? '1px solid #222222' : 'none',
              }}
            >
              {/* Large faded step number */}
              <div
                className="text-7xl font-bold leading-none mb-4 select-none"
                style={{ color: '#c8102e', opacity: 0.15 }}
              >
                {step.num}
              </div>
              <h3
                className="text-sm font-bold uppercase text-white mb-2"
                style={{ letterSpacing: '0.15em' }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: '#888888', lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
