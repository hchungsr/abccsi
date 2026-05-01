import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/"><img src="/logo.jpg" alt="ABC Computer Solutions Logo" className="nav-logo" /></a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/services" onClick={closeMenu}>Services</a></li>
          <li><a href="/#marketing" onClick={closeMenu}>Local SEO</a></li>
          <li><a href="/#about" onClick={closeMenu}>About</a></li>
          <li><a href="/#testimonials" onClick={closeMenu}>Reviews</a></li>
          <li><a href="/#faq" onClick={closeMenu}>FAQ</a></li>
          <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <a href="tel:3605398486" className="nav-phone">(360) 539-8486</a>
      </div>
    </nav>
  )
}
