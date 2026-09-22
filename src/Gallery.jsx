import './Gallery.css'
import logo from './imports/Home/f5827fc53beb6a882da4c0b971bc828d60f71ba0.png'
import heroImage from './imports/Home/5e2e9bb69a2352fdbca70be9b1afa76667c654be.png'
import stageImage from './imports/Home/3fbbadffdb59ad2cf7c3ff262f90ef8500776879.png'
import weddingImage from './imports/Home/8a807b5e371d15d2479561018912511f7fc17fdb.png'
import exhibitionImage from './imports/Home/fc217c221e771b9769b028a1653cd59a883ad2bb.png'
import celebrationImage from './imports/Home/e31c109163ea3aea16ce888ce1b3e5169267c16e.png'
import concertImage from './imports/Home/b3ee254810031e9b3c043e5cbae2fec0848b43ea.png'
import decorImage from './imports/Home/c50cfccb20b89733ab415c7a8e7ed264f217647b.png'
import corporateImage from './imports/Home/839aa8e7a83b9048f683ff1e239efe86dd0a0504.png'
import galleryHero1 from './assets/Gallery-hero/Hero 1.png'
import galleryHero2 from './assets/Gallery-hero/Hero 2.png'
import galleryHero3 from './assets/Gallery-hero/Hero 3.png'
import galleryHero4 from './assets/Gallery-hero/Hero 4.png'
import aadharHousingImage from './assets/Gallery-cards/Aadhar Housing R&R.png'
import v1SirsaCupImage from './assets/Gallery-cards/V1 Sirsa Cup.png'
import decoIndiaImage from './assets/Gallery-cards/Deco India 2023.png'
import iitfImage from './assets/Gallery-cards/IITF 2024.png'
import risingRajasthanImage from './assets/Gallery-cards/Rising Rajasthan 2024.png'
import indiaStonemartImage from './assets/Gallery-cards/India Stonemart 2024.png'
import hdfcTownHallImage from './assets/Gallery-cards/HDFC Town Hall.png'
import stonaImage from './assets/Gallery-cards/Stona 2025 Bangalore.png'
import iconFacebook from './icons/Facebook.png'
import iconInstagram from './icons/Instagram.png'
import iconLinkedIn from './icons/Linkedlin.png'
import iconTwitter from './icons/Twitter.png'
import iconYouTube from './icons/Youtube.png'
import { useEffect, useState } from 'react'

const moments = [
  ['AutoExpo 2023', stageImage],
  ['Deco India 2023', decoIndiaImage],
  ['IITF 2024', iitfImage],
  ['Rising Rajasthan 2024', risingRajasthanImage],
  ['Rising Rajasthan 2024', risingRajasthanImage],
  ['India Stonemart 2024', indiaStonemartImage],
  ['HDFC Town Hall', hdfcTownHallImage],
  ['Stona 2025 Bangalore', stonaImage],
  ['Aadhar Housing R&R', aadharHousingImage],
  ['V1 Sirsa Cup', v1SirsaCupImage],
]

function GalleryHeroCarousel() {
  const slides = [galleryHero1, galleryHero2, galleryHero3, galleryHero4]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(sliderTimer)
  }, [slides.length])

  return (
    <section className="gallery-hero" aria-label="Happy Moments gallery highlights">
      {slides.map((image, index) => <img key={image} className={`gallery-hero-slide ${index === activeSlide ? 'is-active' : ''}`} src={image} alt={`Happy Moments gallery highlight ${index + 1}`} aria-hidden={index !== activeSlide} />)}
      <div className="gallery-hero-shade" />
      <div className="gallery-hero-copy">
        <p>HAPPY MOMENTS</p>
        <h1>Stories worth<br />celebrating.</h1>
      </div>
      <div className="gallery-hero-dots">
        {slides.map((_, index) => <button key={index} type="button" aria-label={`Show gallery slide ${index + 1}`} aria-current={index === activeSlide} className={index === activeSlide ? 'is-active' : ''} onClick={() => setActiveSlide(index)} />)}
      </div>
    </section>
  )
}

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-nav">
        <a className="gallery-brand" href="/" aria-label="Happy Moments home">
          <img src={logo} alt="Happy Moments" />
          <span>Happy<br />Moments</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a className="active" href="/gallery">Gallery</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="gallery-call" href="tel:+919717928676">Call Us <span>→</span></a>
      </header>

      <main>
        <GalleryHeroCarousel />

        <section className="gallery-content">
          <span className="gallery-eyebrow">GALLERY</span>
          <h2>Discover Our <em>Journey</em></h2>
          <p className="gallery-intro">A glimpse into the celebrations, ideas, and experiences we have brought to life.</p>
          <div className="gallery-grid">
            {moments.map(([title, image], index) => (
              <article className="gallery-card" key={`${title}-${index}`}>
                {title === 'AutoExpo 2023' ? (
                  <a className="gallery-card-link" href="/gallery/autoexpo-2023" aria-label="View AutoExpo 2023 gallery">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                  </a>
                ) : <><img src={image} alt={title} /><h3>{title}</h3></>}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="gallery-footer site-footer" data-name="Footer">
        <div className="site-footer-panel">
          <section className="site-footer-about">
            <a className="site-footer-brand" href="/" aria-label="Happy Moments home"><img src={logo} alt="Happy Moments" /><span>Happy<br />Moments</span></a>
            <p>Full service event management from Delhi-NCR 10+ years of event industry experience behind 100+ events: corporate, weddings, Exhibitions, Special Occasions across 25+ cities in India.</p>
            <nav className="site-footer-social" aria-label="Social media"><a href="/#contact" aria-label="Facebook"><img src={iconFacebook} alt="" /></a><a href="/#contact" aria-label="Instagram"><img src={iconInstagram} alt="" /></a><a href="/#contact" aria-label="LinkedIn"><img src={iconLinkedIn} alt="" /></a><a href="/#contact" aria-label="Twitter"><img src={iconTwitter} alt="" /></a><a href="/#contact" aria-label="YouTube"><img src={iconYouTube} alt="" /></a></nav>
          </section>
          <section className="site-footer-links"><h3>SERVICES</h3><a href="/#services">Corporate.</a><a href="/#services">Wedding.</a><a href="/#services">Exhibitions.</a><a href="/#services">Special Occasions</a></section>
          <section className="site-footer-links"><h3>CONTACT</h3><a href="/#contact">Get in Touch</a><a href="tel:+919717928676">+91 9717928676</a><a href="tel:+919968211112">+91 9968211112</a><a href="mailto:sales@happy-moments.co.in">sales@happy-moments.co.in</a></section>
        </div>
        <div className="footer-bottom">© 2026 HAPPY MOMENTS. ALL RIGHTS RESERVED.</div>
        <div className="site-footer-bottom"><span className="site-footer-mini-brand"><img src={logo} alt="" />Happy Moments</span><span>Managed By D&apos;miraki</span><span>© 2026 HAPPY MOMENTS. ALL RIGHTS RESERVED.</span></div>
      </footer>
    </div>
  )
}
