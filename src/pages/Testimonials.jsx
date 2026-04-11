import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  { id: 1,  name: 'Rajesh Kumar Sharma',    city: 'Delhi',          avatar: 'https://picsum.photos/seed/raj1/80/80',    rating: 5, category: 'Bageshwar Dham',    text: 'Bageshwar Dham Divya Darbar mein jaane ke baad meri zindagi badal gayi. Dhirendra Krishna Shastri Ji ne bina bataye meri samasya bata di. Yeh anubhav adbhut tha.' },
  { id: 2,  name: 'Priya Devi Singh',        city: 'Lucknow',        avatar: 'https://picsum.photos/seed/pri2/80/80',    rating: 5, category: 'Premanand Ji',      text: 'Premanand Ji Maharaj ke satsang ne mujhe jeevan ka asli arth samjhaya. Unki bhakti aur sadgi dekh kar mann ko bahut shanti milti hai.' },
  { id: 3,  name: 'Amit Tiwari',             city: 'Varanasi',       avatar: 'https://picsum.photos/seed/ami3/80/80',    rating: 5, category: 'Morari Bapu',       text: 'Morari Bapu ki Ram Katha sunne ke baad Ramcharitmanas ke prati mera prem aur gehra ho gaya. Unki vyakhya itni saral aur prabhavshali hoti hai.' },
  { id: 4,  name: 'Sunita Agarwal',          city: 'Jaipur',         avatar: 'https://picsum.photos/seed/sun4/80/80',    rating: 5, category: 'Jaya Kishori Ji',   text: 'Jaya Kishori Ji ki katha sunkar lagta hai jaise Meera Ji khud bol rahi hain. Unke bhajan aur pravachan se mann ko aisi shanti milti hai jo kahi aur nahi milti.' },
  { id: 5,  name: 'Vikram Pandey',           city: 'Prayagraj',      avatar: 'https://picsum.photos/seed/vik5/80/80',    rating: 5, category: 'Sadhguru',          text: 'Sadhguru ke Inner Engineering program ne meri soch badal di. Unka yoga aur meditation approach bilkul alag hai. Zindagi mein ek naya nazar aaya.' },
  { id: 6,  name: 'Meena Joshi',             city: 'Haridwar',       avatar: 'https://picsum.photos/seed/mee6/80/80',    rating: 5, category: 'Baba Ramdev',       text: 'Baba Ramdev ke pranayam se meri 10 saal purani bimari theek ho gayi. Unka yoga sikhana itna aasan hai ki ghar par bhi kar sakte hain.' },
  { id: 7,  name: 'Suresh Chandra Gupta',    city: 'Mathura',        avatar: 'https://picsum.photos/seed/sur7/80/80',    rating: 5, category: 'Devkinandan Thakur', text: 'Devkinandan Thakur Ji ki Bhagwat Katha mein ek baar jaane ke baad baar baar jaane ka mann karta hai. Unka ras aur bhav anokha hai.' },
  { id: 8,  name: 'Kavita Mishra',           city: 'Vrindavan',      avatar: 'https://picsum.photos/seed/kav8/80/80',    rating: 5, category: 'Pundrik Goswami',  text: 'Pundrik Goswami Ji ke pravachan mein Radha-Krishna ki bhakti ka jo ras hai woh aur kahi nahi milta. Vrindavan mein unke darshan ka anubhav divya hai.' },
  { id: 9,  name: 'Rohit Verma',             city: 'Mumbai',         avatar: 'https://picsum.photos/seed/roh9/80/80',    rating: 5, category: 'Gaur Gopal Das',   text: 'Gaur Gopal Das ke motivational talks ne mujhe corporate life aur spirituality ka balance sikhaya. Unki baatein seedhi dil mein utarti hain.' },
  { id: 10, name: 'Anita Sharma',            city: 'Pune',           avatar: 'https://picsum.photos/seed/ani10/80/80',   rating: 5, category: 'Sri Sri Ravi Shankar', text: 'Art of Living course karne ke baad meri anxiety bilkul khatam ho gayi. Sri Sri Ravi Shankar Ji ki Sudarshan Kriya ek vardaan hai.' },
  { id: 11, name: 'Deepak Tripathi',         city: 'Gorakhpur',      avatar: 'https://picsum.photos/seed/dee11/80/80',   rating: 5, category: 'Morari Bapu',       text: 'Morari Bapu ne Ram Katha ke zariye mujhe samjhaya ki Satya, Prem aur Karuna hi asli dharm hai. Unka sandesh aaj ke samay mein bahut zaruri hai.' },
  { id: 12, name: 'Pooja Rani',              city: 'Chandigarh',     avatar: 'https://picsum.photos/seed/poo12/80/80',   rating: 5, category: 'Jaya Kishori Ji',   text: 'Jaya Kishori Ji ki aawaaz mein ek aisi shakti hai jo seedha aatma ko chhu leti hai. Unke bhajan sunkar aankhon mein aansu aa jaate hain.' },
  { id: 13, name: 'Manoj Kumar Yadav',       city: 'Patna',          avatar: 'https://picsum.photos/seed/man13/80/80',   rating: 4, category: 'Sadhguru',          text: 'Sadhguru ka Save Soil movement ek bahut bada kaam hai. Unke YouTube videos dekh kar mujhe samjha ki dharti ki seva bhi ek pooja hai.' },
  { id: 14, name: 'Rekha Devi',              city: 'Ayodhya',        avatar: 'https://picsum.photos/seed/rek14/80/80',   rating: 5, category: 'Bageshwar Dham',    text: 'Bageshwar Dham jaane se pehle mujhe bahut shak tha, lekin wahan jaane ke baad mera vishwas pakka ho gaya. Baba Ji ki shakti sachchi hai.' },
  { id: 15, name: 'Sanjay Dubey',            city: 'Bhopal',         avatar: 'https://picsum.photos/seed/san15/80/80',   rating: 5, category: 'Aniruddhacharya',   text: 'Aniruddhacharya Ji ki katha mein aadhunik examples se Bhagwat samajhna bahut aasan ho jaata hai. Yuvaon ke liye yeh bahut upyogi hai.' },
  { id: 16, name: 'Geeta Kumari',            city: 'Nashik',         avatar: 'https://picsum.photos/seed/gee16/80/80',   rating: 5, category: 'Premanand Ji',      text: 'Premanand Ji Maharaj ki sadgi aur unka vairagya dekh kar lagta hai ki asli sukh bhakti mein hi hai. Unke satsang mein ek alag hi shanti milti hai.' },
  { id: 17, name: 'Harish Chandra Tiwari',   city: 'Rishikesh',      avatar: 'https://picsum.photos/seed/har17/80/80',   rating: 5, category: 'Baba Ramdev',       text: 'Baba Ramdev ne yoga ko ghar ghar pahunchaya. Unki wajah se aaj mera poora parivaar roz yoga karta hai aur swasth rehta hai.' },
  { id: 18, name: 'Nisha Agarwal',           city: 'Indore',         avatar: 'https://picsum.photos/seed/nis18/80/80',   rating: 4, category: 'Gaur Gopal Das',   text: 'Gaur Gopal Das ki book "Life\'s Amazing Secrets" ne mujhe jeevan ke mushkil waqt mein sahara diya. Unka approach bilkul practical hai.' },
  { id: 19, name: 'Ramesh Prasad',           city: 'Allahabad',      avatar: 'https://picsum.photos/seed/ram19/80/80',   rating: 5, category: 'Devkinandan Thakur', text: 'Devkinandan Thakur Ji Hindu dharm ki raksha ke liye jo kaam kar rahe hain woh sach mein praiseworthy hai. Unka josh aur vishwas prerna deta hai.' },
  { id: 20, name: 'Shobha Devi',             city: 'Ujjain',         avatar: 'https://picsum.photos/seed/sho20/80/80',   rating: 5, category: 'Pundrik Goswami',  text: 'Vrindavan mein Pundrik Goswami Ji ke sath parikrama karna ek adbhut anubhav tha. Unke saath rehne par Radha-Krishna ki kripa ka ehsaas hota hai.' },
  { id: 21, name: 'Arun Kumar Singh',        city: 'Kanpur',         avatar: 'https://picsum.photos/seed/aru21/80/80',   rating: 5, category: 'Sri Sri Ravi Shankar', text: 'Sri Sri Ravi Shankar Ji ke ashram mein ek hafte rehne ka anubhav meri zindagi ka sabse sundar anubhav tha. Wahan ki shanti aur prakriti anokhi hai.' },
  { id: 22, name: 'Lalita Devi',             city: 'Mathura',        avatar: 'https://picsum.photos/seed/lal22/80/80',   rating: 5, category: 'Bageshwar Dham',    text: 'Mere bete ki bimari ke liye Bageshwar Dham mein arzi lagayi thi. Baba Ji ki kripa se woh theek ho gaya. Yeh chamatkaar mujhe aaj bhi yaad hai.' },
  { id: 23, name: 'Prakash Narayan',         city: 'Varanasi',       avatar: 'https://picsum.photos/seed/pra23/80/80',   rating: 5, category: 'Morari Bapu',       text: 'Morari Bapu ki Ram Katha mein ek baar jaane ke baad mujhe samjha ki Ramcharitmanas sirf ek granth nahi, jeevan jeene ka tarika hai.' },
  { id: 24, name: 'Savita Kumari',           city: 'Agra',           avatar: 'https://picsum.photos/seed/sav24/80/80',   rating: 4, category: 'Jaya Kishori Ji',   text: 'Jaya Kishori Ji ki katha mein jo bhakti ka ras hai woh anokha hai. Unhe sunkar lagta hai ki bhakti marg hi sabse aasan aur sundar marg hai.' },
  { id: 25, name: 'Dinesh Chaturvedi',       city: 'Gwalior',        avatar: 'https://picsum.photos/seed/din25/80/80',   rating: 5, category: 'Sadhguru',          text: 'Sadhguru ke Isha Yoga Center mein jaane ka anubhav alag hi tha. Wahan ki energy aur atmosphere mein ek adbhut shanti hai.' },
  { id: 26, name: 'Usha Rani',               city: 'Jodhpur',        avatar: 'https://picsum.photos/seed/ush26/80/80',   rating: 5, category: 'Premanand Ji',      text: 'Premanand Ji Maharaj ke YouTube channel se roz pravachan sunti hoon. Unki baatein itni saral hoti hain ki seedha dil mein utar jaati hain.' },
  { id: 27, name: 'Vinod Kumar Mishra',      city: 'Faizabad',       avatar: 'https://picsum.photos/seed/vin27/80/80',   rating: 5, category: 'Aniruddhacharya',   text: 'Aniruddhacharya Ji ki katha mein jo energy aur josh hota hai woh dekhte hi banta hai. Unhe sunkar lagta hai ki Bhagwat Katha sunna ek anand hai.' },
  { id: 28, name: 'Kamla Devi',              city: 'Haridwar',       avatar: 'https://picsum.photos/seed/kam28/80/80',   rating: 5, category: 'Baba Ramdev',       text: 'Baba Ramdev ke yoga shivir mein jaane ke baad meri diabetes control mein aa gayi. Unka Patanjali Ayurved bhi bahut effective hai.' },
  { id: 29, name: 'Sunil Sharma',            city: 'Noida',          avatar: 'https://picsum.photos/seed/sun29/80/80',   rating: 4, category: 'Gaur Gopal Das',   text: 'Gaur Gopal Das ke TEDx talks bahut inspiring hain. Unka ISKCON aur modern life ka combination bahut unique aur effective hai.' },
  { id: 30, name: 'Radha Devi',              city: 'Vrindavan',      avatar: 'https://picsum.photos/seed/rad30/80/80',   rating: 5, category: 'Pundrik Goswami',  text: 'Pundrik Goswami Ji ke darshan aur pravachan se Radha-Krishna ki bhakti aur gehri ho jaati hai. Vrindavan mein unka ashram ek divya sthan hai.' },
];

const filters = ['All', 'Bageshwar Dham', 'Premanand Ji', 'Morari Bapu', 'Jaya Kishori Ji', 'Sadhguru', 'Baba Ramdev', 'Gaur Gopal Das', 'Devkinandan Thakur', 'Aniruddhacharya', 'Sri Sri Ravi Shankar', 'Pundrik Goswami'];

const stats = [
  { value: '70 Cr+', label: 'Devotees Inspired' },
  { value: '30+',    label: 'Testimonials' },
  { value: '16+',    label: 'Saints Covered' },
  { value: '∞',      label: 'Faith & Bhakti' },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? testimonials : testimonials.filter(t => t.category === active);

  return (
    <div className="testi-page">

      {/* Hero */}
      <section className="testi-hero">
        <div className="testi-hero-glow" />
        <div className="testi-hero-content">
          <span className="testi-om"><img src="/DY LOGO.png" alt="DY LOGO" style={{ height: 80 ,borderRadius: '50%'}}/></span>
          <h1>Devotees Ki Anubhav</h1>
          <p>Unke shabdon mein — jo sant ke darshan se badal gaye</p>
        </div>
      </section>

      {/* Stats */}
      <section className="testi-stats">
        {stats.map(s => (
          <div key={s.label} className="testi-stat">
            <span>{s.value}</span>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Filter */}
      <section className="testi-filter">
        {filters.map(f => (
          <button
            key={f}
            className={`testi-filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section className="testi-grid-section">
        <div className="testi-count">{filtered.length} Testimonials</div>
        <div className="testi-grid">
          {filtered.map(t => (
            <div key={t.id} className="testi-card">
              <div className="testi-card-top">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testi-avatar"
                  onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=2a1a00&color=FF6B00&size=80`; }}
                />
                <div className="testi-info">
                  <h3>{t.name}</h3>
                  <p className="testi-city">📍 {t.city}</p>
                  <Stars count={t.rating} />
                </div>
              </div>
              <span className="testi-badge">{t.category}</span>
              <p className="testi-text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="testi-quote">
        <blockquote>
          "भक्ति वह शक्ति है जो असंभव को भी संभव बना देती है।"
          <cite>— Sanatan Dharma</cite>
        </blockquote>
      </section>

    </div>
  );
}
