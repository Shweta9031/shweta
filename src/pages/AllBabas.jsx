import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { babas, categories } from '../data/babas';
import BabaCard from '../components/BabaCard';
import './AllBabas.css';

export default function AllBabas() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  const activeCategory = decodeURIComponent(searchParams.get('category') || 'All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const setCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    return babas.filter(b => {
      const matchCat = activeCategory === 'All' || b.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || b.name.toLowerCase().includes(q) || b.location.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="all-babas">
      <div className="all-babas-header">
        <h1>Saints & Sages</h1>
        <p>
          {activeCategory === 'All'
            ? "Discover India's most revered spiritual luminaries"
            : `Showing saints in: ${activeCategory}`}
        </p>
      </div>

      <div className="all-babas-controls">
        <input
          type="text"
          placeholder="🔍 Search by name, location or category..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="category-filters">
          <button
            className={`cat-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setCategory('All')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="all-babas-count">
        {filtered.length} saint{filtered.length !== 1 ? 's' : ''} found
        {activeCategory !== 'All' && (
          <button className="clear-filter-btn" onClick={() => setCategory('All')}>
            ✕ Clear Filter
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="cards-grid">
          {filtered.map(b => <BabaCard key={b.id} baba={b} />)}
        </div>
      ) : (
        <div className="no-results">
          <span>🙏</span>
          <p>No saints found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
