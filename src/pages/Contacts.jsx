import { useState } from 'react';
import './Contacts.css';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'contact@dharamyodha.com', sub: 'Reply within 24 hours' },
  { icon: '📱', label: 'WhatsApp', value: '+91 98765 43210', sub: 'Mon–Sat, 9am–6pm IST' },
  { icon: '📍', label: 'Address', value: 'Vrindavan, Uttar Pradesh', sub: 'India — 281121' },
  { icon: '🕉', label: 'Spiritual Queries', value: 'dharma@dharamyodha.com', sub: 'Sant darshan & katha info' },
];

const faqs = [
  { q: 'DharamYodha kya hai?', a: 'DharamYodha ek digital platform hai jo India ke pramukh saints, sages aur spiritual masters ka parichay karata hai. Yahan aap unke jeevan, shiksha aur sandesh ke baare mein padh sakte hain.' },
  { q: 'Kya main apne favourite sant ka naam suggest kar sakta hoon?', a: 'Bilkul! Aap Contact form ke zariye ya email par hume apne favourite sant ka naam bhej sakte hain. Hum unhe apni list mein add karne ki koshish karenge.' },
  { q: 'Kya yahan koi katha ya satsang ki jankari milti hai?', a: 'Haan, hum apne Blogs section mein aane wale kathaon aur satsang ki jankari dete rehte hain. Aap hume follow karke latest updates pa sakte hain.' },
  { q: 'Kya DharamYodha free hai?', a: 'Haan, DharamYodha bilkul free hai. Hum chahte hain ki Sanatan Dharma ka gyaan har insaan tak pahunche bina kisi rokawat ke.' },
  { q: 'Mujhe kisi sant ke baare mein galat jankari mili, kya karoon?', a: 'Kripya hume turant email karein. Hum accuracy ko bahut mahatva dete hain aur galti ko jald se jald theek karenge.' },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-glow" />
        <div className="contact-hero-content">
          <span className="contact-om"><img src="/DY LOGO.png" alt="DY LOGO" style={{ height: 80 ,borderRadius: '50%'}}/></span>
          <h1>Humse Sampark Karein</h1>
          <p>Koi sawaal, sujhaav ya sant ke baare mein jankari — hum yahan hain</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactInfo.map(c => (
            <div key={c.label} className="contact-info-card">
              <span className="contact-info-icon">{c.icon}</span>
              <div>
                <p className="contact-info-label">{c.label}</p>
                <p className="contact-info-value">{c.value}</p>
                <p className="contact-info-sub">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="contact-main">

        {/* Form */}
        <div className="contact-form-wrap">
          <h2>Sandesh Bhejein</h2>
          <p className="contact-form-sub">Aapka har sandesh hamare liye mahatvapoorn hai</p>

          {sent ? (
            <div className="contact-success">
              <span>🙏</span>
              <h3>Dhanyavaad!</h3>
              <p>Aapka sandesh mil gaya. Hum jald hi aapse sampark karenge.</p>
              <button onClick={() => setSent(false)} className="contact-btn">Dobara Bhejein</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Aapka Naam *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jaise: Ramesh Kumar"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="aapka@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Vishay (Subject)</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Jaise: Sant ka naam suggest karna"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Aapka Sandesh *</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Apna sawaal, sujhaav ya sandesh yahan likhein..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact-btn">
                🙏 Sandesh Bhejein
              </button>
            </form>
          )}
        </div>

        {/* Side Info */}
        <div className="contact-side">
          <div className="contact-side-card">
            <h3>🕉 Hamara Uddeshya</h3>
            <p>DharamYodha ka uddeshya hai ki Sanatan Dharma ke mahaan saints ka parichay har ghar tak pahunche. Aapke sawaal aur sujhaav hamare liye prerna hain.</p>
          </div>
          <div className="contact-side-card">
            <h3>📖 Blogs & Updates</h3>
            <p>Nayi kathaon, satsang aur sant ke pravachan ki jankari ke liye hamare Blogs section ko zaroor dekhein.</p>
          </div>
          <div className="contact-side-card">
            <h3>🌟 Sant Suggest Karein</h3>
            <p>Koi sant jo is platform par nahi hain lekin hone chahiye? Unka naam aur thodi jankari hume bhejein — hum unhe zaroor add karenge.</p>
          </div>
          <div className="contact-side-card highlight">
            <h3>⏱ Response Time</h3>
            <p>Hum aam taur par <strong>24 ghante</strong> ke andar jawab dete hain. Urgent matters ke liye WhatsApp par sampark karein.</p>
          </div>
        </div>

      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <h2>Aksar Pooche Jaane Wale Sawaal</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
              </button>
              {openFaq === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="contact-quote">
        <blockquote>
          "अतिथि देवो भव — Guest is God."
          <cite>— Taittiriya Upanishad</cite>
        </blockquote>
      </section>

    </div>
  );
}
