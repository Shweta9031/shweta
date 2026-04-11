import { Link } from 'react-router-dom';
import './About.css';

const values = [
  { icon: '🕉', title: 'Sanatan Dharma', desc: 'Honoring and preserving India\'s ancient spiritual tradition that has guided humanity for thousands of years.' },
  { icon: '📖', title: 'Spreading Knowledge', desc: 'Bringing the profound teachings and divine messages of great saints to every corner of the world.' },
  { icon: '🙏', title: 'Devotion & Reverence', desc: 'Presenting each saint with the utmost respect, accuracy and devotion their sacred legacy deserves.' },
  { icon: '🌟', title: 'Inspiring Youth', desc: 'Igniting the spiritual flame in the younger generation to walk the path of dharma and righteousness.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Making India\'s spiritual heritage accessible to devotees and seekers across the entire world.' },
  { icon: '💡', title: 'Digital Pilgrimage', desc: 'Creating a sacred digital space where you can connect with saints without boundaries of time or place.' },
];

const stats = [
  { value: '16+', label: 'Saints Profiled', icon: '🧘' },
  { value: '10+', label: 'Categories', icon: '📂' },
  { value: '70 Cr+', label: 'Devotees Worldwide', icon: '🌍' },
  { value: '∞', label: 'Faith & Bhakti', icon: '🙏' },
];

const timeline = [
  { year: '2024', title: 'DharamYodha Founded', desc: 'Started with a vision to digitally preserve and share the wisdom of India\'s greatest saints.' },
  { year: '2024', title: '16 Saints Profiled', desc: 'Detailed profiles of 16 renowned saints across 10+ spiritual categories added to the platform.' },
  { year: '2024', title: 'Community Growing', desc: 'Thousands of devotees joining daily to explore, learn and connect with their spiritual heritage.' },
  { year: '2025', title: 'Expanding Vision', desc: 'Adding more saints, blogs, audio content and regional language support for wider reach.' },
];

const team = [
  { name: 'Spiritual Research Team', role: 'Content & Accuracy', icon: '📚' },
  { name: 'Tech & Design Team', role: 'Platform Development', icon: '💻' },
  { name: 'Devotee Community', role: 'Feedback & Growth', icon: '🙏' },
];

export default function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-particles">
          {[...Array(6)].map((_, i) => <div key={i} className={`about-particle about-particle-${i + 1}`} />)}
        </div>
        <div className="about-hero-content">
          <div className="about-hero-badge">🕉 Jai Sanatan Dharma</div>
          <h1>About <span>DharamYodha</span></h1>
          <p>
            A sacred digital platform dedicated to preserving and sharing the timeless wisdom
            of India's most revered saints, sages and spiritual masters — bringing their
            divine light to every home across the world.
          </p>
          <div className="about-hero-actions">
            <Link to="/babas" className="about-btn-primary">Explore Saints →</Link>
            <Link to="/contact" className="about-btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="about-stats-bar">
        {stats.map(s => (
          <div key={s.label} className="about-stats-bar-item">
            <span className="about-stats-icon">{s.icon}</span>
            <span className="about-stats-value">{s.value}</span>
            <span className="about-stats-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-mission-inner">

          {/* Left — Image */}
          <div className="about-mission-img-side">
            <div className="about-mission-img-wrap">
              <img src="/Hindu temple.png" alt="Sant" />
              <div className="about-mission-img-glow" />
              
            </div>
            <div className="about-mission-img-cards">
              <div className="about-mission-mini-card">
                <span>🧘</span>
                <div>
                  <strong>16+</strong>
                  <p>Saints Profiled</p>
                </div>
              </div>
              <div className="about-mission-mini-card">
                <span>🌍</span>
                <div>
                  <strong>70 Cr+</strong>
                  <p>Devotees</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="about-mission-text">
            <span className="about-section-tag">Our Mission</span>
            <h2>Preserving the Divine Legacy of Sanatan Dharma</h2>
            <p>
              India has a glorious tradition of saints and sages spanning thousands of years.
              Their lives and messages have transformed the lives of millions across generations.
              DharamYodha's mission is to bring the wisdom of these great luminaries to every
              home through the power of the digital medium.
            </p>
            <p>
              We want the younger generation to stay deeply connected with their religion and
              culture, and draw inspiration from the teachings of these saints. This platform
              is like a digital pilgrimage site — where you can learn about these great souls
              anytime, anywhere, without any boundaries.
            </p>
            <div className="about-mission-points">
              {['Authentic & well-researched content', 'Respectful presentation of each saint', 'Accessible to all age groups', 'Available in simple language'].map(p => (
                <div key={p} className="about-mission-point">
                  <span className="about-point-check">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <Link to="/babas" className="about-btn-primary" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
              Explore Saints →
            </Link>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-section-header">
            <span className="about-section-tag">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at DharamYodha</p>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon-wrap">
                  <span className="value-icon">{v.icon}</span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="about-timeline-inner">
          <div className="about-section-header">
            <span className="about-section-tag">Our Journey</span>
            <h2>The DharamYodha Story</h2>
            <p>From a vision to a growing spiritual community</p>
          </div>
          <div className="timeline-list">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-content">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team
      <section className="about-team">
        <div className="about-team-inner">
          <div className="about-section-header">
            <span className="about-section-tag">Behind DharamYodha</span>
            <h2>The People & Community</h2>
            <p>Built with devotion by a team that believes in the power of dharma</p>
          </div>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-icon">{t.icon}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quote */}
      <section className="about-quote">
        <div className="about-quote-inner">
          <span className="about-quote-mark">"</span>
          <blockquote>
            यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।<br />
            तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥
          </blockquote>
          <cite>— Bhagavad Gita, Chapter 18, Verse 78</cite>
          <p className="about-quote-translation">Where there is Krishna, the Lord of Yoga, and where there is Arjuna, the archer — there will always be prosperity, victory, happiness and righteousness.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-glow" />
        <div className="about-cta-inner">
          <span className="about-cta-om">🙏</span>
          <h2>Begin Your Spiritual Journey</h2>
          <p>Explore the lives, teachings and divine wisdom of India's most revered saints and sages</p>
          <div className="about-cta-actions">
            <Link to="/babas" className="about-btn-primary">Explore All Saints →</Link>
            <Link to="/testimonials" className="about-btn-secondary">Read Testimonials</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
