import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/babas', label: 'Saints & Sages' },
  { to: '/blogs', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/about', label: 'About Us' },
];

const categories = [
  { label: 'Katha Vachak', to: '/category/Katha Vachak', icon: '📖' },
  { label: 'Vaishnav Sant', to: '/category/Vaishnav Sant', icon: '🌸' },
  { label: 'Yoga Guru', to: '/category/Yoga Guru', icon: '🧘' },
  { label: 'Vedanta Guru', to: '/category/Vedanta Guru', icon: '🕉' },
  { label: 'Spiritual Guru', to: '/category/Spiritual Guru', icon: '✨' },
  { label: 'ISKCON Monk', to: '/category/ISKCON Monk', icon: '🪷' },
  { label: 'Mystic', to: '/category/Mystic', icon: '🌀' },
  { label: 'Yogi', to: '/category/Yogi', icon: '🔱' },
  { label: 'Katha Vachika', to: '/category/Katha Vachika', icon: '🎶' },
  { label: 'Shankaracharya Parampara', to: '/category/Shankaracharya Parampara', icon: '🏔' },
];

const socials = [
  { icon: <FaYoutube />, label: 'YouTube', href: '#', color: '#FF0000' },
  { icon: <FaFacebookF />, label: 'Facebook', href: '#', color: '#1877F2' },
  { icon: <FaInstagram />, label: 'Instagram', href: '#', color: '#E1306C' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#', color: '#0A66C2' },
];

const mantras = ['🙏 Jai Shri Ram', 'Har Har Mahadev', 'Radhe Radhe', 'Jai Mata Di 🙏'];

export default function Footer() {
  return (
    <footer className="footer">

      {/* Mantra Strip */}
      <div className="footer-mantra-strip">
        <div className="footer-mantra-track">
          {[...mantras, ...mantras, ...mantras].map((m, i) => (
            <span key={i}>{m} <span className="footer-mantra-dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon"><img src="/DY LOGO.png" alt="DY LOGO" style={{ height: 60 ,borderRadius: '50%'}}/></div>
              <div>
                <div className="footer-name">DharamYodha</div>
                <div className="footer-name-sub">Sanatan Dharma Platform</div>
              </div>
            </Link>
            <p className="footer-tagline">
              A sacred digital pilgrimage dedicated to preserving and sharing the timeless wisdom of India's most revered saints, sages and spiritual masters.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="footer-social-btn" aria-label={s.label} style={{ '--social-color': s.color }}>
                  <span className="footer-social-icon" style={{ background: s.color }}>{s.icon}</span>
                </a>
              ))}
            </div>
            <div className="footer-stats">
              <div className="footer-stat"><strong>16+</strong><span>Saints</span></div>
              <div className="footer-stat-divider" />
              <div className="footer-stat"><strong>70 Cr+</strong><span>Devotees</span></div>
              <div className="footer-stat-divider" />
              <div className="footer-stat"><strong>10+</strong><span>Categories</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span className="footer-col-title-line" />
              Quick Links
            </h4>
            <ul className="footer-col-list">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to}>
                    <span className="footer-link-arrow">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col footer-col-categories">
            <h4 className="footer-col-title">
              <span className="footer-col-title-line" />
              Categories
            </h4>
            <ul className="footer-col-list">
              {categories.map(c => (
                <li key={c.label}>
                  <Link to={c.to}>
                    <span className="footer-cat-icon">{c.icon}</span>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider Quote */}
      <div className="footer-quote">
        <blockquote>
          "सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।"
          <cite>— Vedic Prayer</cite>
        </blockquote>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} <span>DharamYodha</span> by Onexvora. All rights reserved.</p>
          <p className="footer-made">Made with ❤️ by Onexvora Team</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
