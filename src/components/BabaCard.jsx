import { Link } from 'react-router-dom';
import './BabaCard.css';

export default function BabaCard({ baba }) {
  return (
    <Link to={`/babas/${baba.id}`} className="baba-card">
      <div className="baba-card-img-wrap">
        <img
          src={baba.image}
          alt={baba.name}
          onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(baba.name)}&background=2a1200&color=FF6B00&size=200`; }}
        />
        <span className="baba-card-category" style={{ background: baba.color }}>{baba.category}</span>
      </div>
      <div className="baba-card-body">
        <h3>{baba.name}</h3>
        <p className="baba-card-title">{baba.title}</p>
        <p className="baba-card-location">📍 {baba.location}</p>
        <p className="baba-card-desc">{baba.shortDesc}</p>
        <div className="baba-card-footer">
          <span className="baba-card-followers">👥 {baba.followers}</span>
          <span className="baba-card-more" style={{ color: baba.color }}>Learn More →</span>
        </div>
      </div>
    </Link>
  );
}
