import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    backgroundColor: '#161616',
    border: '1px solid #2a2a2a',
    color: '#ffffff',
    borderRadius: 6,
    padding: '12px 14px',
    width: '100%',
    fontSize: 14,
    outline: 'none',
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 sm:px-6 lg:px-16 py-10 md:py-14" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <p
                className="text-xs uppercase font-semibold mb-3"
                style={{ color: '#888888', letterSpacing: '0.2em' }}
              >
                Get in touch
              </p>
              <h1 className="text-3xl md:text-4xl font-bold uppercase text-white mb-8">
                Let's talk shirts.
              </h1>

              {submitted ? (
                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: '#161616', border: '1px solid #2a2a2a' }}
                >
                  <p
                    className="text-sm font-semibold uppercase mb-2"
                    style={{ color: '#c8102e', letterSpacing: '0.15em' }}
                  >
                    Message sent
                  </p>
                  <p className="text-sm" style={{ color: '#888888' }}>
                    Thanks {form.name} — we'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      className="block text-xs uppercase mb-2"
                      style={{ color: '#888888', letterSpacing: '0.12em' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#c8102e')}
                      onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase mb-2"
                      style={{ color: '#888888', letterSpacing: '0.12em' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#c8102e')}
                      onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase mb-2"
                      style={{ color: '#888888', letterSpacing: '0.12em' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your order, team size, design ideas..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => (e.target.style.borderColor = '#c8102e')}
                      onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3 text-sm font-semibold uppercase rounded transition-colors duration-150 mt-2"
                    style={{ backgroundColor: '#c8102e', color: '#fff', letterSpacing: '0.12em' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a50d25')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8102e')}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="lg:pt-20">
              <div className="flex flex-col gap-8">
                <div>
                  <p
                    className="text-xs uppercase font-semibold mb-3"
                    style={{ color: '#888888', letterSpacing: '0.2em' }}
                  >
                    Location
                  </p>
                  <p className="text-sm text-white">Reading, Berkshire</p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-semibold mb-3"
                    style={{ color: '#888888', letterSpacing: '0.2em' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hello@smarterdartshirts.co.uk"
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#c8102e' }}
                  >
                    hello@smarterdartshirts.co.uk
                  </a>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-semibold mb-3"
                    style={{ color: '#888888', letterSpacing: '0.2em' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:07799668880"
                    className="text-sm text-white transition-colors duration-150 hover:opacity-75"
                  >
                    07799 668880
                  </a>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-semibold mb-3"
                    style={{ color: '#888888', letterSpacing: '0.2em' }}
                  >
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm uppercase font-semibold transition-colors duration-150 hover:text-white"
                      style={{ color: '#555555', letterSpacing: '0.1em' }}
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm uppercase font-semibold transition-colors duration-150 hover:text-white"
                      style={{ color: '#555555', letterSpacing: '0.1em' }}
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
