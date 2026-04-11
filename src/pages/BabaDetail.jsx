import { useParams, Link, useNavigate } from 'react-router-dom';
import { babas } from '../data/babas';
import './BabaDetail.css';

export default function BabaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const baba = babas.find(b => b.id === Number(id));

  if (!baba) {
    return (
      <div className="detail-not-found">
        <span>🙏</span>
        <p>Saint not found.</p>
        <Link to="/babas" className="btn-back">Go Back</Link>
      </div>
    );
  }

  const currentIndex = babas.findIndex(b => b.id === baba.id);
  const prev = babas[currentIndex - 1];
  const next = babas[currentIndex + 1];

  return (
    <div className="detail-page">
      {/* Back */}
      <button className="detail-back" onClick={() => navigate(-1)}>← Back</button>

      {/* Hero Banner */}
      <div className="detail-banner" style={{ background: `linear-gradient(135deg, #1a0800, #0d0d0d)` }}>
        <div className="detail-banner-glow" style={{ background: `radial-gradient(circle, ${baba.color}22 0%, transparent 70%)` }} />
        <div className="detail-banner-inner">
          <div className="detail-img-wrap">
            <img
              src={baba.image}
              alt={baba.name}
              onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(baba.name)}&background=2a1a00&color=FF6B00&size=300`; }}
            />
          </div>
          <div className="detail-banner-info">
            <span className="detail-category" style={{ background: baba.color }}>{baba.category}</span>
            <h1>{baba.name}</h1>
            <p className="detail-title">{baba.title}</p>
            <div className="detail-meta">
              <span>📍 {baba.location}</span>
              <span>🎂 {baba.born}</span>
              <span>👥 {baba.followers} Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content">
        {/* About */}
        <section className="detail-section">
          <h2>About</h2>
          <p>{baba.fullDesc}</p>
        </section>

        {/* Work */}
        <section className="detail-section">
          <h2>Key Contributions</h2>
          <ul className="detail-work-list">
            {baba.work.map((w, i) => (
              <li key={i}>
                <span style={{ color: baba.color }}>✦</span> {w}
              </li>
            ))}
          </ul>
        </section>

        {/* YouTube */}
        <section className="detail-section">
          <h2>YouTube Channel</h2>
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(baba.youtube)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-yt-btn"
            style={{ background: baba.color }}
          >
            ▶ {baba.youtube} — Watch on YouTube
          </a>
        </section>
      </div>

      {/* Navigation */}
      <div className="detail-nav">
        {prev ? (
          <Link to={`/babas/${prev.id}`} className="detail-nav-btn">
            ← {prev.name}
          </Link>
        ) : <span />}
        {next && (
          <Link to={`/babas/${next.id}`} className="detail-nav-btn">
            {next.name} →
          </Link>
        )}
      </div>
    </div>
  );
}
