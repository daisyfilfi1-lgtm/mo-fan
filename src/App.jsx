import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import Journal from './pages/Journal'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import PaymentResult from './pages/PaymentResult'
import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { OrderProvider } from './contexts/OrderContext'

function App() {
  return (
    <LanguageProvider>
      <OrderProvider>
        <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout/:courseId" element={<Checkout />} />
                <Route path="/payment/:orderId" element={<Payment />} />
                <Route path="/payment/result" element={<PaymentResult />} />
              </Routes>
            </main>
            <Footer />
          </Router>
      </OrderProvider>
    </LanguageProvider>
  )
}

export default App
