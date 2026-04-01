import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'   // ← NEW
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Destinations from './pages/Destinations'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white">
        <ScrollToTop />                    {/* ← Add here */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
           <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App