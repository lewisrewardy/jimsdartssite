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
    <section
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-16"
      style={{ backgroundColor: '#0d0d0d', borderTop: '0.5px solid #222222' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p
          className="text-xs uppercase font-semibold mb-8 md:mb-10 text-center"
          style={{ color: '#888888', letterSpacing: '0.2em' }}
        >
          The precision workflow
        </p>

        {/* Steps — vertical on mobile, 4-col on md+ */}
        <div className="flex flex-col md:flex-row md:divide-x md:divide-[#222222]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex-1 px-0 md:px-6 py-6 md:py-0"
              style={{
                borderTop: i > 0 ? '1px solid #222222' : 'none',
              }}
            >
              {/* On md+ the borderTop is handled by md:divide-x so remove mobile border */}
              <div className="md:border-t-0">
                {/* Large faded step number */}
                <div
                  className="text-6xl md:text-7xl font-bold leading-none mb-3 select-none"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
