import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Home' },
     { to: '/about', label: 'About Us' },
    { to: '/babas', label: 'Saints & Sages' },
    { to: '/blogs', label: 'Gallery'},
    { to: '/testimonials', label: 'Testimonials'},
    // { to: '/contact', label: 'Contact Us'},
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-om"><img src="/DY LOGO.png" alt="DY LOGO" style={{ height: 60 ,borderRadius: '50%'}}/></span>
        <span className="logo-text">DharamYodha</span>
      </Link>

      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={pathname === l.to ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
