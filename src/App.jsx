import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Rover from './pages/Rover'
import Base from './pages/Base'
import Software from './pages/Software'
import About from './pages/About'

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/rover" element={<Rover />} />
        <Route path="/products/base" element={<Base />} />
        <Route path="/software" element={<Software />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}