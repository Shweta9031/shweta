import { useState } from 'react';
import './Blogs.css';

const categories = ['All', 'Katha & Pravachan', 'Temples & Tirth', 'Yoga & Meditation', 'Vedanta & Philosophy', 'Festivals & Traditions', 'Saints & Sages'];

const blogs = [
  // Katha & Pravachan (10)
  { id: 1, category: 'Katha & Pravachan',  img: '/baba3.jpg',},
  { id: 2, title: 'Morari Bapu Ki Ram Katha Ka Sandesh', category: 'Katha & Pravachan', date: '18 Jan 2025', read: '6 min', img: '/morari bapu.jpg', excerpt: 'Ram Katha ke vishwa prasiddh vachak Morari Bapu ke pravachan se jeevan badlane wali baatein.' },
  { id: 3, title: 'Bhagwat Katha Sunne Ke 7 Fayde', category: 'Katha & Pravachan', date: '25 Jan 2025', read: '4 min', img: '/Bhagwat-Katha.webp', excerpt: 'Bhagwat Katha sunne se mann ko shanti milti hai aur jeevan mein positive badlaav aata hai.' },
  { id: 4, title: 'Jaya Kishori Ji Ki Katha Ka Prabhav', category: 'Katha & Pravachan', date: '2 Feb 2025', read: '5 min', img: '/jaya kishori ji.jpg', excerpt: 'Rajasthan ki Meera ke naam se mashoor Jaya Kishori Ji ki katha yuvaon par kya prabhav dalti hai.' },
  

  // Temples & Tirth (10)
  { id: 11, title: 'Kashi Vishwanath Mandir Ka Itihas', category: 'Temples & Tirth', date: '8 Jan 2025', read: '8 min', img: '/Kashi-vishwanath.webp', excerpt: 'Varanasi ke Kashi Vishwanath Mandir ka poora itihas aur iska dharmik mahatva.' },
  { id: 12, title: 'Char Dham Yatra Ki Poori Jankari', category: 'Temples & Tirth', date: '14 Jan 2025', read: '10 min', img: '/char dham.jpg', excerpt: 'Badrinath, Kedarnath, Gangotri aur Yamunotri ki yatra kaise karein, poori guide.' },
  { id: 13, title: 'Tirupati Balaji Mandir Ka Rahasya', category: 'Temples & Tirth', date: '22 Jan 2025', read: '7 min', img: '/TIRUPATI BALAJI.jpg', excerpt: 'Andhra Pradesh ke Tirupati Balaji mandir ki kahani aur yahan ke anokhe rituals.' },
  { id: 14, title: 'Vrindavan Ke Pramukh Mandir', category: 'Temples & Tirth', date: '30 Jan 2025', read: '6 min', img: '/Prem-Mandir.jpg', excerpt: 'Vrindavan mein Radha-Krishna ke pramukh mandiro ki jankari aur darshan ka samay.' },


  // Yoga & Meditation (10)
  { id: 21, title: 'Sadhguru Ka Inner Engineering Program', category: 'Yoga & Meditation', date: '9 Jan 2025', read: '6 min', img: '/sadhguru ji.jpg', excerpt: 'Sadhguru ke Inner Engineering program se jeevan mein kya badlaav aata hai.' },
  { id: 22, title: 'Baba Ramdev Ke Pranayam Ke Fayde', category: 'Yoga & Meditation', date: '16 Jan 2025', read: '5 min', img: '/health benefits.jpg', excerpt: 'Baba Ramdev ke bataye pranayam techniques se swasthya mein sudhar kaise aata hai.' },
  { id: 23, title: 'Sudarshan Kriya Kya Hai Aur Kaise Karein', category: 'Yoga & Meditation', date: '23 Jan 2025', read: '7 min', img: '/sri sri ravi.jpg', excerpt: 'Sri Sri Ravi Shankar ki Sudarshan Kriya technique ki poori jankari aur fayde.' },
  { id: 24, title: 'Meditation Se Mann Ki Shanti Kaise Paayein', category: 'Yoga & Meditation', date: '31 Jan 2025', read: '5 min', img: '/meditation.jpg', excerpt: 'Roz 20 minute meditation karne se jeevan mein kya positive badlaav aate hain.' },


  // Vedanta & Philosophy (10)
  { id: 31, title: 'Bhagwat Geeta Ke 18 Adhyay Ka Saar', category: 'Vedanta & Philosophy', date: '10 Jan 2025', read: '10 min', img: '/Bhagwat-Katha.webp', excerpt: 'Bhagwat Geeta ke 18 adhyay ka saar aur har adhyay ka mukhya sandesh.' },
  { id: 32, title: 'Swami Vivekananda Ki Chicago Speech', category: 'Vedanta & Philosophy', date: '17 Jan 2025', read: '8 min', img: '/swami ji.jpg', excerpt: '1893 mein Chicago mein Swami Vivekananda ki ऐतिहासिक speech aur uska prabhav.' },
  { id: 33, title: 'Advaita Vedanta Kya Hai', category: 'Vedanta & Philosophy', date: '24 Jan 2025', read: '9 min', img: '/advaita.webp', excerpt: 'Adi Shankaracharya ke Advaita Vedanta philosophy ko saral bhasha mein samjhein.' },
  { id: 34, title: 'Upanishad Ki Mukhya Shiksha', category: 'Vedanta & Philosophy', date: '1 Feb 2025', read: '8 min', img: '/upanishads.jpg', excerpt: 'Pramukh Upanishadon ki mukhya shiksha aur unka aaj ke jeevan mein mahatva.' },


  // Festivals & Traditions (10)
  { id: 41, title: 'Kumbh Mela 2025 Ki Poori Jankari', category: 'Festivals & Traditions', date: '11 Jan 2025', read: '10 min', img: '/kumbh.jpg', excerpt: 'Prayagraj mein Kumbh Mela 2025 ki tarikein, snan ke muhurt aur yatra ki taiyari.' },
  { id: 42, title: 'Diwali Ka Dharmik Mahatva', category: 'Festivals & Traditions', date: '19 Jan 2025', read: '5 min', img: '/diwali.jpg', excerpt: 'Diwali sirf roshni ka tyohar nahi, iska dharmik aur adhyatmik mahatva kya hai.' },
  { id: 43, title: 'Navratri Mein Mata Ki Pooja Kaise Karein', category: 'Festivals & Traditions', date: '26 Jan 2025', read: '6 min', img:'/navratri.jpg', excerpt: 'Navratri ke 9 din mein Mata ke 9 swarupon ki pooja kaise karein, vidhi aur mantra.' },
  { id: 44, title: 'Holi Ka Adhyatmik Sandesh', category: 'Festivals & Traditions', date: '3 Feb 2025', read: '5 min', img: '/holi.jpg', excerpt: 'Holi ka tyohar sirf rang nahi, iska adhyatmik sandesh kya hai aur Prahlad ki kahani.' },

  // Saints & Sages (10+)
  { id: 51, title: 'Ramakrishna Paramahamsa Ki Divya Kahani', category: 'Saints & Sages', date: '13 Jan 2025', read: '8 min', img: '/ramakrishna para.jpg', excerpt: 'Dakshineswar ke mahaan sant Ramakrishna Paramahamsa ki jeevan kahani aur unke anubhav.' },
  { id: 52, title: 'Mirabai Ki Bhakti Aur Jeevan Sangharsh', category: 'Saints & Sages', date: '20 Jan 2025', read: '7 min', img: '/meera bai.jpg', excerpt: 'Rajputana ki mahaan bhakt Mirabai ki jeevan kahani aur Krishna bhakti ki prerna.' },
  { id: 53, title: 'Tulsidas Ji Ka Jeevan Aur Ramcharitmanas', category: 'Saints & Sages', date: '27 Jan 2025', read: '8 min', img: '/tulshidas.jpg', excerpt: 'Goswami Tulsidas ji ki jeevan kahani aur Ramcharitmanas likhne ki prerna kaise mili.' },
  { id: 54, title: 'Kabir Das Ke Dohe Aur Unka Arth', category: 'Saints & Sages', date: '4 Feb 2025', read: '6 min', img: 'kabir das.jpg', excerpt: 'Sant Kabir Das ke pramukh dohe aur unka aaj ke jeevan mein kya arth hai.' },

];



export default function Blogs() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active);

  return (
    <div className="blogs-page">
      <section className="blogs-hero">
        <div className="blogs-hero-glow" />
        <div className="blogs-hero-content">
          <span className="blogs-om"><img src="/DY LOGO.png" alt="DY LOGO" style={{ height: 80 ,borderRadius: '50%'}}/></span>
          <h1>DharamYodha Blogs</h1>
          <p>Sanatan Dharma, saints, temples, yoga aur adhyatm par gyaan se bhari lekhni</p>
        </div>
      </section>

      <section className="blogs-filter">
        {categories.map(c => (
          <button
            key={c}
            className={`filter-btn ${active === c ? 'active' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </section>

      <section className="blogs-grid-section">
        <div className="blogs-count">{filtered.length} Articles</div>
        <div className="blogs-grid">
          {filtered.map(blog => (
            <article key={blog.id} className="blog-card">
              <div className="blog-card-img">
                <img
                  src={blog.img}
                  loading="lazy"
                  onError={e => { e.target.src = `https://picsum.photos/seed/fallback${blog.id}/400/250`; }}
                />
               
              </div>
              
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
