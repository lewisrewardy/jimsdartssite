import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShirtCard from '../components/ShirtCard'
import { shirts } from '../data/shirts'

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Bespoke', value: 'bespoke' },
  { label: 'Team Shirts', value: 'team' },
  { label: 'Fun Designs', value: 'fun' },
]

export default function Shirts() {
  const [searchParams] = useSearchParams()
  const initialFilter = searchParams.get('filter') || 'all'
  const [activeTab, setActiveTab] = useState(initialFilter)

  const filtered = shirts.filter((s) => activeTab === 'all' || s.tag === activeTab)

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 md:px-16 py-14" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p
              className="text-xs uppercase font-semibold mb-2"
              style={{ color: '#888888', letterSpacing: '0.2em' }}
            >
              Our collection
            </p>
            <h1 className="text-3xl md:text-4xl font-bold uppercase text-white">
              Bespoke Dart Shirts
            </h1>
            <p className="text-sm mt-3 max-w-lg" style={{ color: '#888888', lineHeight: '1.6' }}>
              Every shirt is proofed before print. Custom names, sponsors, and logos on every
              order.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-0 mb-10" style={{ borderBottom: '1px solid #222222' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className="px-4 py-3 text-xs uppercase font-semibold transition-colors duration-150 outline-none"
                  style={{
                    color: isActive ? '#ffffff' : '#555555',
                    borderBottom: isActive ? '2px solid #c8102e' : '2px solid transparent',
                    letterSpacing: '0.12em',
                    background: 'transparent',
                    marginBottom: '-1px',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((shirt) => (
              <ShirtCard key={shirt.id} shirt={shirt} showDetails />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center" style={{ color: '#555555' }}>
              <p className="text-sm uppercase tracking-widest">No shirts in this category yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
