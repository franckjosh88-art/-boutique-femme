import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { Appointment } from './pages/Appointment'
import { BlogPage } from './pages/BlogPage'
import { BlogPost } from './pages/BlogPost'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ReviewsPage } from './pages/ReviewsPage'
import { ServiceDetail } from './pages/ServiceDetail'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/review" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}