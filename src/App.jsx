import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shirts from './pages/Shirts'
import WhySmarter from './pages/WhySmarter'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/why-smarter" element={<WhySmarter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
