import './Gallery.css'
import logo from './imports/Home/f5827fc53beb6a882da4c0b971bc828d60f71ba0.png'
import iitfImage1 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 12.02.07 PM.jpeg'
import iitfImage2 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 12.01.55 PM.jpeg'
import iitfImage3 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 12.01.46 PM.jpeg'
import iitfImage4 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 12.01.46 PM (1).jpeg'
import iitfImage5 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 12.01.16 PM.jpeg'
import iitfImage6 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 12.00.25 PM.jpeg'
import iitfImage7 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 11.52.08 AM.jpeg'
import iitfImage8 from './assets/Gallery-page/IITF 2024/WhatsApp Image 2026-09-22 at 11.51.35 AM.jpeg'
import iconFacebook from './icons/Facebook.png'
import iconInstagram from './icons/Instagram.png'
import iconLinkedIn from './icons/Linkedlin.png'
import iconTwitter from './icons/Twitter.png'
import iconYouTube from './icons/Youtube.png'

const iitfImages = [iitfImage1, iitfImage2, iitfImage3, iitfImage4, iitfImage5, iitfImage6, iitfImage7, iitfImage8]

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

export default function IITFPage() {
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
        <h1>IITF <em>2024</em></h1>
        <p className="gallery-intro">A collection of moments and experiences from IITF 2024.</p>
        <section className="gallery-detail-grid" aria-label="IITF 2024 photos">
          {iitfImages.map((image, index) => <article className="gallery-detail-card" key={image}><img src={image} alt={`IITF 2024 event photo ${index + 1}`} /></article>)}
        </section>
      </main>

      <Footer />
    </div>
  )
}
