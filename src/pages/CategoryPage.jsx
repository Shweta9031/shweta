import { useParams, Link } from 'react-router-dom';
import { babas } from '../data/babas';
import BabaCard from '../components/BabaCard';
import './CategoryPage.css';

const categoryInfo = {
  'Katha Vachak': {
    icon: '📖',
    desc: 'Katha Vachaks are spiritual orators who narrate sacred stories from scriptures like Bhagwat, Ramayan and Mahabharat, spreading divine wisdom through storytelling.',
    color: '#FF6B00',
  },
  'Vaishnav Sant': {
    icon: '🌸',
    desc: 'Vaishnav Saints are devoted followers of Lord Vishnu and Krishna, spreading the message of Bhakti, love and surrender through their teachings and way of life.',
    color: '#FF8C00',
  },
  'Yoga Guru': {
    icon: '🧘',
    desc: 'Yoga Gurus have dedicated their lives to spreading the ancient science of Yoga, Pranayam and physical wellness to millions across India and the world.',
    color: '#FF7700',
  },
  'Vedanta Guru': {
    icon: '🕉',
    desc: 'Vedanta Gurus are masters of Advaita Vedanta philosophy, interpreting the Upanishads, Bhagavad Gita and Brahma Sutras for modern seekers of truth.',
    color: '#E05500',
  },
  'Spiritual Guru': {
    icon: '✨',
    desc: 'Spiritual Gurus guide seekers on the path of inner transformation, meditation and self-realization through a blend of ancient wisdom and modern understanding.',
    color: '#FF5500',
  },
  'ISKCON Monk': {
    icon: '🪷',
    desc: 'ISKCON Monks follow the Gaudiya Vaishnav tradition founded by Srila Prabhupada, spreading the teachings of Lord Krishna and Bhagavad Gita worldwide.',
    color: '#FF6000',
  },
  'Mystic': {
    icon: '🌀',
    desc: 'Mystics explore the deeper dimensions of consciousness, existence and spirituality, often challenging conventional thinking with profound philosophical insights.',
    color: '#FF4400',
  },
  'Yogi': {
    icon: '🔱',
    desc: 'Yogis are masters of the yogic sciences who have attained deep states of meditation and inner realization, guiding others on the path of self-discovery.',
    color: '#CC4400',
  },
  'Katha Vachika': {
    icon: '🎶',
    desc: 'Katha Vachikas are female spiritual orators who narrate sacred stories and sing devotional bhajans, inspiring millions with their divine voice and bhakti.',
    color: '#FF9900',
  },
  'Shankaracharya Parampara': {
    icon: '🏔',
    desc: 'Saints of the Shankaracharya tradition follow the Advaita Vedanta lineage established by Adi Shankaracharya, upholding the highest standards of Sanatan Dharma.',
    color: '#E06000',
  },
};

export default function CategoryPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const info = categoryInfo[decodedCategory] || { icon: '🕉', desc: '', color: '#FF6B00' };
  const saints = babas.filter(b => b.category === decodedCategory);

  return (
    <div className="category-page">

      {/* Hero */}
      <section className="category-hero" style={{ '--cat-color': info.color }}>
        <div className="category-hero-glow" />
        <div className="category-hero-content">
          <Link to="/babas" className="category-back">← All Saints</Link>
          <div className="category-hero-icon">{info.icon}</div>
          <h1>{decodedCategory}</h1>
          <p>{info.desc}</p>
          <div className="category-hero-count">
            <span>{saints.length}</span> Saint{saints.length !== 1 ? 's' : ''} in this category
          </div>
        </div>
      </section>

      {/* Saints Grid */}
      <section className="category-grid-section">
        {saints.length > 0 ? (
          <>
            <div className="category-grid-header">
              <h2>Saints of <span>{decodedCategory}</span></h2>
              <p>{saints.length} saint{saints.length !== 1 ? 's' : ''} found</p>
            </div>
            <div className="category-cards-grid">
              {saints.map(b => <BabaCard key={b.id} baba={b} />)}
            </div>
          </>
        ) : (
          <div className="category-empty">
            <span>🙏</span>
            <h3>No saints found</h3>
            <p>No saints found in this category yet.</p>
            <Link to="/babas" className="category-btn">View All Saints</Link>
          </div>
        )}
      </section>

      {/* Other Categories */}
      <section className="category-others">
        <h3>Explore Other Categories</h3>
        <div className="category-others-grid">
          {Object.entries(categoryInfo)
            .filter(([key]) => key !== decodedCategory)
            .map(([key, val]) => (
              <Link key={key} to={`/category/${encodeURIComponent(key)}`} className="category-other-card">
                <span>{val.icon}</span>
                <div>
                  <strong>{key}</strong>
                  <p>{babas.filter(b => b.category === key).length} saints</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

    </div>
  );
}
