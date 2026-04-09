import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import ShirtCarousel from '../components/ShirtCarousel'
import LukeQuote from '../components/LukeQuote'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ShirtCarousel />
      <LukeQuote />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  )
}
