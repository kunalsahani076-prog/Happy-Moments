import { useState } from 'react'
import logo from './imports/Home/f5827fc53beb6a882da4c0b971bc828d60f71ba0.png'

export default function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="gallery-nav site-navigation">
      <a className="gallery-brand" href="/" aria-label="Happy Moments home">
        <img src={logo} alt="Happy Moments" />
        <span>Happy<br />Moments</span>
      </a>
      <nav id="site-mobile-menu" className={menuOpen ? 'site-mobile-menu is-open' : 'site-mobile-menu'} aria-label="Main navigation">
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/#services" onClick={closeMenu}>Services</a>
        <a className="active" href="/gallery" onClick={closeMenu}>Gallery</a>
        <a href="/#contact" onClick={closeMenu}>Contact</a>
        <a className="gallery-call" href="tel:+919717928676" onClick={closeMenu}>Call Us <span>→</span></a>
      </nav>
      <button type="button" className="site-menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="site-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <a className="gallery-call site-desktop-call" href="tel:+919717928676">Call Us <span>→</span></a>
    </header>
  )
}
