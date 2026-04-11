import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllBabas from './pages/AllBabas';
import BabaDetail from './pages/BabaDetail';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Testimonials from './pages/Testimonials';
import Contacts from './pages/Contacts';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Sitemap from './pages/Sitemap';
import CategoryPage from './pages/CategoryPage';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/babas" element={<AllBabas />} />
          <Route path="/babas/:id" element={<BabaDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '6rem 2rem', color: '#666' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕉</div>
      <h2 style={{ color: '#FF6B00', marginBottom: '0.5rem' }}>404 - Page Not Found</h2>
      <p>This page does not exist.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.6rem 1.4rem', background: '#FF6B00', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>
        Go to Home
      </a>
    </div>
  );
}

export default App;
