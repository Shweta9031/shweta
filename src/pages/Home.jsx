import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { babas } from '../data/babas';
import BabaCard from '../components/BabaCard';
import './Home.css';

const stats = [
  { value: '16+', label: 'Renowned Saints' },
  { value: '70 Cr+', label: 'Devotees' },
  { value: '10+', label: 'Categories' },
  { value: '∞', label: 'Faith' },
];

const heroSlides = [
  { id: 1, image: '/premanand1.jpg', name: babas[0].name, title: babas[0].title, location: babas[0].location, category: babas[0].category, color: babas[0].color },
  { id: 2, image: '/b5.jpg', name: babas[1].name, title: babas[1].title, location: babas[1].location, category: babas[1].category, color: babas[1].color },
  { id: 3, image: '/jayakishori1.jpg', name: babas[2].name, title: babas[2].title, location: babas[2].location, category: babas[2].category, color: babas[2].color },
  { id: 4, image: '/indresh1.jpg', name: babas[3].name, title: babas[3].title, location: babas[3].location, category: babas[3].category, color: babas[3].color },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const baba = heroSlides[current];

  return (
    <div className="slider">
      {heroSlides.map((b, i) => (
        <div key={b.id} className={`slide ${i === current ? 'active' : ''}`}>
          <img src={b.image} alt={b.name} />
          <div className="slide-overlay" />
          <div className="slide-caption">
            <span className="slide-category" style={{ background: b.color }}>{b.category}</span>
            <h3>{b.name}</h3>
            <p>{b.title}</p>
            <span className="slide-location">📍 {b.location}</span>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="slider-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            style={i === current ? { background: baba.color } : {}}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="slider-arrow prev" onClick={() => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)}>‹</button>
      <button className="slider-arrow next" onClick={() => setCurrent(c => (c + 1) % heroSlides.length)}>›</button>
    </div>
  );
}

export default function Home() {
  const featured = babas.slice(0, 6);

  return (
    <div className="home">
      {/* Hero — left detail + right slider */}
      <section className="hero">
        <div className="hero-glow" />

        {/* Left */}
         <div className="hero-left">
          <div className="hero-om"><img src="/DY LOGO.png" alt="DY LOGO" style={{ height: 80 ,borderRadius: '50%'}}/></div>
          <h1>
            <span className="hero-title-main">DharamYodha</span>
            <span className="hero-title-sub">Discover the Great Saints of Sanatan Dharma</span>
          </h1>
          <p className="hero-desc">
            Explore the lives, teachings, and divine messages of India's most revered saints,
            sages, and spiritual masters. Let their wisdom illuminate your path.
          </p>

          {/* Mini stats */}
           <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link to="/babas" className="btn-primary">Explore Saints</Link>
            <Link to="/about" className="btn-secondary">About Us</Link>
          </div>
        </div> 

        {/* Right — Slider */}
        <div className="hero-right">
          <HeroSlider />
        </div>
      </section>

      {/* Featured */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Saints & Sages</h2>
          <p>Meet some of India's most prominent spiritual luminaries</p>
        </div>
        <div className="cards-grid">
          {featured.map(b => <BabaCard key={b.id} baba={b} />)}
        </div>
        <div className="view-all-wrap">
          <Link to="/babas" className="btn-primary">View All Saints →</Link>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <blockquote>
          "सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।"
          <cite>— May all beings be happy. May all beings be free from illness. (Vedic Prayer)</cite>
        </blockquote>
      </section>

      {/* About Preview */}
      <section className="home-about">
        <div className="home-about-inner">
          <div className="home-about-text">
            <span className="home-about-tag">About Us</span>
            <h2>About DharamYodha</h2>
            <p>DharamYodha is a platform dedicated to introducing India's most revered saints, sages, and spiritual masters to the world. Our mission is to help every person connect with their dharma and spiritual heritage.</p>
            <div className="home-about-values">
              {[{icon:'🕉',t:'Sanatan Dharma'},{icon:'📖',t:'Spreading Knowledge'},{icon:'🙏',t:'Devotion & Reverence'},{icon:'🌟',t:'Inspiration'}].map(v => (
                <div key={v.t} className="home-about-value">
                  <span>{v.icon}</span>
                  <p>{v.t}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary">Know More →</Link>
          </div>
          <div className="home-about-stats">
            {[{v:'16+',l:'Saints Profiled'},{v:'8+',l:'Categories'},{v:'70 Cr+',l:'Devotees'},{v:'∞',l:'Faith'}].map(s => (
              <div key={s.l} className="home-about-stat">
                <span>{s.v}</span>
                <p>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="home-testi">
        <div className="home-testi-header">
          <h2>Devotees Ki Anubhav</h2>
          <p>Unke shabdon mein — jo sant ke darshan se badal gaye</p>
        </div>
        <div className="home-testi-grid">
          {[
            { id:1, name:'Rajesh Kumar Sharma', city:'Delhi', rating:5, category:'Bageshwar Dham', text:'Bageshwar Dham Divya Darbar mein jaane ke baad meri zindagi badal gayi. Dhirendra Krishna Shastri Ji ne bina bataye meri samasya bata di.' },
            { id:2, name:'Priya Devi Singh', city:'Lucknow', rating:5, category:'Premanand Ji', text:'Premanand Ji Maharaj ke satsang ne mujhe jeevan ka asli arth samjhaya. Unki bhakti aur sadgi dekh kar mann ko bahut shanti milti hai.' },
            { id:3, name:'Sunita Agarwal', city:'Jaipur', rating:5, category:'Jaya Kishori Ji', text:'Jaya Kishori Ji ki katha sunkar lagta hai jaise Meera Ji khud bol rahi hain. Unke bhajan se mann ko aisi shanti milti hai jo kahi aur nahi milti.' },
          ].map(t => (
            <div key={t.id} className="home-testi-card">
              <div className="home-testi-top">
                <div className="home-testi-avatar">{t.name[0]}</div>
                <div>
                  <h4>{t.name}</h4>
                  <p className="home-testi-city">📍 {t.city}</p>
                  <div className="home-testi-stars">{[1,2,3,4,5].map(i=><span key={i} style={{color: i<=t.rating?'#93C5FD':'#333'}}>★</span>)}</div>
                </div>
              </div>
              <span className="home-testi-badge">{t.category}</span>
              <p className="home-testi-text">"{t.text}"</p>
            </div>
          ))}
        </div>
        <div className="view-all-wrap">
          <Link to="/testimonials" className="btn-primary">View All Testimonials →</Link>
        </div>
      </section>
    </div>
  );
}
