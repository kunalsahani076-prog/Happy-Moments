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

const moments = [
  ['AutoExpo 2023', stageImage],
  ['Deco India 2023', exhibitionImage],
  ['IITF 2024', corporateImage],
  ['Rising Rajasthan 2024', concertImage],
  ['Rising Rajasthan 2024', weddingImage],
  ['India Stonemart 2024', decorImage],
  ['HDFC Town Hall', celebrationImage],
  ['Stona 2025 Bangalore', exhibitionImage],
  ['Aadhar Housing R&R', stageImage],
  ['V1 Sirsa Cup', heroImage],
]

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
        <section className="gallery-hero">
          <img src={heroImage} alt="A beautifully decorated Happy Moments wedding" />
          <div className="gallery-hero-shade" />
          <div className="gallery-hero-copy">
            <p>HAPPY MOMENTS</p>
            <h1>Stories worth<br />celebrating.</h1>
          </div>
        </section>

        <section className="gallery-content">
          <span className="gallery-eyebrow">GALLERY</span>
          <h2>Discover Our <em>Journey</em></h2>
          <p className="gallery-intro">A glimpse into the celebrations, ideas, and experiences we have brought to life.</p>
          <div className="gallery-grid">
            {moments.map(([title, image], index) => (
              <article className="gallery-card" key={`${title}-${index}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="gallery-footer">
        <div className="footer-panel">
          <section>
            <div className="footer-brand"><img src={logo} alt="" /><strong>Happy<br />Moments</strong></div>
            <p>Full-service event management for celebrations, weddings, exhibitions and exceptional corporate experiences.</p>
          </section>
          <section><h3>Services</h3><p>Corporate</p><p>Weddings</p><p>Exhibitions</p><p>Special Occasions</p></section>
          <section><h3>Contact</h3><p>Get in touch</p><p>+91 9717928676</p><p>+91 9996821111</p><p>sales@happy-moments.co.in</p></section>
        </div>
        <div className="footer-bottom">© 2026 HAPPY MOMENTS. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  )
}
