import './Gallery.css'
import logo from './imports/Home/f5827fc53beb6a882da4c0b971bc828d60f71ba0.png'
import iconFacebook from './icons/Facebook.png'
import iconInstagram from './icons/Instagram.png'
import iconLinkedIn from './icons/Linkedlin.png'
import iconTwitter from './icons/Twitter.png'
import iconYouTube from './icons/Youtube.png'

const aadharHousingImages = Object.entries(import.meta.glob('./assets/Gallery-page/Aadhar Housing R&R/*', { eager: true, query: '?url', import: 'default' }))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([, image]) => image)

function Footer() {
  return (
    <footer className="gallery-footer site-footer" data-name="Footer">
      <div className="site-footer-panel">
        <section className="site-footer-about">
          <a className="site-footer-brand" href="/" aria-label="Happy Moments home"><img src={logo} alt="Happy Moments" /><span>Happy<br />Moments</span></a>
          <p>Full service event management from Delhi-NCR 10+ years of event industry experience behind 100+ events: corporate, weddings, Exhibitions, Special Occasions across 25+ cities in India.</p>
          <nav className="site-footer-social" aria-label="Social media"><a href="/#contact" aria-label="Facebook"><img src={iconFacebook} alt="" /></a><a href="/#contact" aria-label="Instagram"><img src={iconInstagram} alt="" /></a><a href="/#contact" aria-label="LinkedIn"><img src={iconLinkedIn} alt="" /></a><a href="/#contact" aria-label="Twitter"><img src={iconTwitter} alt="" /></a><a href="/#contact" aria-label="YouTube"><img src={iconYouTube} alt="" /></a></nav>
        </section>
        <section className="site-footer-links"><h3>SERVICES</h3><a href="/#services">Corporate.</a><a href="/#services">Wedding.</a><a href="/#services">Exhibitions.</a><a href="/#services">Special Occasions</a></section>
        <section className="site-footer-links"><h3>CONTACT</h3><a href="/#contact">Get in Touch</a><a href="tel:+919717928676">+91 9717928676</a><a href="tel:+919968211112">+91 9968211112</a><a href="mailto:sales@happy-moments.co.in">sales@happy-moments.co.in</a></section>
        <div className="site-footer-bottom"><span className="site-footer-mini-brand"><img src={logo} alt="" />Happy Moments</span><span>Managed By D&apos;miraki</span><span>© 2026 HAPPY MOMENTS. ALL RIGHTS RESERVED.</span></div>
      </div>
    </footer>
  )
}

export default function AadharHousingPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-nav">
        <a className="gallery-brand" href="/" aria-label="Happy Moments home"><img src={logo} alt="Happy Moments" /><span>Happy<br />Moments</span></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/#services">Services</a><a className="active" href="/gallery">Gallery</a><a href="/#contact">Contact</a></nav>
        <a className="gallery-call" href="tel:+919717928676">Call Us <span>→</span></a>
      </header>

      <main className="gallery-detail">
        <a className="gallery-back-link" href="/gallery">← Back to Gallery</a>
        <span className="gallery-eyebrow">EVENT GALLERY</span>
        <h1>Aadhar Housing <em>R&amp;R</em></h1>
        <p className="gallery-intro">A collection of moments and experiences from Aadhar Housing R&amp;R.</p>
        <section className="gallery-detail-grid" aria-label="Aadhar Housing R and R photos">
          {aadharHousingImages.map((image, index) => <article className="gallery-detail-card" key={image}><img src={image} alt={`Aadhar Housing R and R event photo ${index + 1}`} /></article>)}
        </section>
      </main>

      <Footer />
    </div>
  )
}
