import { Link } from 'react-router-dom';
import { babas } from '../data/babas';
import './Legal.css';

const pages = [
  {
    category: '🏠 Main Pages',
    links: [
      { label: 'Home', path: '/', desc: 'Welcome to DharamYodha — explore India\'s greatest saints' },
      { label: 'Saints & Sages', path: '/babas', desc: 'Browse all 16+ profiled saints and spiritual masters' },
      { label: 'Blogs', path: '/blogs', desc: 'Spiritual articles, teachings and divine wisdom' },
      { label: 'Testimonials', path: '/testimonials', desc: 'Devotee experiences and spiritual journeys' },
      { label: 'About Us', path: '/about', desc: 'Learn about DharamYodha\'s mission and values' },
      { label: 'Contact', path: '/contact', desc: 'Get in touch with the DharamYodha team' },
    ]
  },
  {
    category: '⚖️ Legal Pages',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy', desc: 'How we collect, use and protect your data' },
      { label: 'Terms of Use', path: '/terms-of-use', desc: 'Rules and guidelines for using our platform' },
      { label: 'Sitemap', path: '/sitemap', desc: 'Complete overview of all pages on DharamYodha' },
    ]
  },
];

const categories = [...new Set(babas.map(b => b.category))];

export default function Sitemap() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-glow" />
        <div className="legal-hero-content">
          <span className="legal-badge">🗺️ Navigation</span>
          <h1>Sitemap</h1>
          <p>Complete overview of all pages and content on DharamYodha</p>
        </div>
      </div>

      <div className="sitemap-body">

        {/* Stats */}
        <div className="sitemap-stats">
          {[
            { v: '16+', l: 'Saint Profiles' },
            { v: '9', l: 'Main Pages' },
            { v: '10+', l: 'Categories' },
            { v: '∞', l: 'Spiritual Content' },
          ].map(s => (
            <div key={s.l} className="sitemap-stat">
              <span>{s.v}</span>
              <p>{s.l}</p>
            </div>
          ))}
        </div>

        <div className="sitemap-grid">

          {/* Main & Legal Pages */}
          {pages.map(group => (
            <div key={group.category} className="sitemap-group">
              <h2>{group.category}</h2>
              <div className="sitemap-links">
                {group.links.map(l => (
                  <Link key={l.path} to={l.path} className="sitemap-link-card">
                    <div className="sitemap-link-top">
                      <span className="sitemap-link-label">{l.label}</span>
                      <span className="sitemap-link-path">{l.path}</span>
                    </div>
                    <p>{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Saints Profiles */}
          <div className="sitemap-group sitemap-group-full">
            <h2>🧘 Saints & Sages Profiles</h2>
            <div className="sitemap-saints-grid">
              {babas.map(b => (
                <Link key={b.id} to={`/babas/${b.id}`} className="sitemap-saint-card">
                  <div className="sitemap-saint-img">
                    <img src={b.image} alt={b.name} onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(b.name)}&background=2a1200&color=FF6B00&size=80`; }} />
                  </div>
                  <div className="sitemap-saint-info">
                    <strong>{b.name}</strong>
                    <span style={{ background: b.color }}>{b.category}</span>
                    <p>{b.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="sitemap-group sitemap-group-full">
            <h2>📂 Browse by Category</h2>
            <div className="sitemap-categories">
              {categories.map(cat => (
                <Link key={cat} to="/babas" className="sitemap-cat-chip">
                  {cat}
                  <span>{babas.filter(b => b.category === cat).length} saints</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
