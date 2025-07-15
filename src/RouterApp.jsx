import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wedding from './pages/services/Wedding';
import Education from './pages/services/Education';
import Spiritual from './pages/services/Spiritual';
import Corporate from './pages/services/Corporate';
import Surprise from './pages/services/Surprise';

export default function RouterApp() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-[#fef9ff] to-[#e3eafc] text-gray-800 font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/wedding" element={<Wedding />} />
            <Route path="/services/surprise" element={<Surprise />} />
            <Route path="/services/corporate" element={<Corporate />} />
            <Route path="/services/spiritual" element={<Spiritual />} />
            <Route path="/services/education" element={<Education />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}
