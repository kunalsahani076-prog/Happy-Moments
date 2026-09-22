import './Gallery.css'
import logo from './imports/Home/f5827fc53beb6a882da4c0b971bc828d60f71ba0.png'
import risingRajasthanImage1 from './assets/Gallery-page/Rising Rajasthan 2024/WhatsApp Image 2026-09-22 at 12.23.56 PM.jpeg'
import risingRajasthanImage2 from './assets/Gallery-page/Rising Rajasthan 2024/WhatsApp Image 2026-09-22 at 12.23.41 PM.jpeg'
import risingRajasthanImage3 from './assets/Gallery-page/Rising Rajasthan 2024/WhatsApp Image 2026-09-22 at 12.23.38 PM.jpeg'
import risingRajasthanImage4 from './assets/Gallery-page/Rising Rajasthan 2024/WhatsApp Image 2026-09-22 at 12.23.21 PM.jpeg'
import risingRajasthanImage5 from './assets/Gallery-page/Rising Rajasthan 2024/WhatsApp Image 2026-09-22 at 12.23.11 PM.jpeg'
import risingRajasthanImage6 from './assets/Gallery-page/Rising Rajasthan 2024/WhatsApp Image 2026-09-22 at 12.23.00 PM.jpeg'
import iconFacebook from './icons/Facebook.png'
import iconInstagram from './icons/Instagram.png'
import iconLinkedIn from './icons/Linkedlin.png'
import iconTwitter from './icons/Twitter.png'
import iconYouTube from './icons/Youtube.png'

const risingRajasthanImages = [risingRajasthanImage1, risingRajasthanImage2, risingRajasthanImage3, risingRajasthanImage4, risingRajasthanImage5, risingRajasthanImage6]

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

export default function RisingRajasthanPage() {
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
        <h1>Rising Rajasthan <em>2024</em></h1>
        <p className="gallery-intro">A collection of moments and experiences from Rising Rajasthan 2024.</p>
        <section className="gallery-detail-grid" aria-label="Rising Rajasthan 2024 photos">
          {risingRajasthanImages.map((image, index) => <article className="gallery-detail-card" key={image}><img src={image} alt={`Rising Rajasthan 2024 event photo ${index + 1}`} /></article>)}
        </section>
      </main>

      <Footer />
    </div>
  )
}
