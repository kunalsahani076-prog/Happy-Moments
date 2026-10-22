import { useEffect } from 'react'

const galleryMetadata = {
  title: 'Event Gallery | Happy Moments Delhi NCR',
  description: 'Explore the Happy Moments event gallery featuring wedding decorations, corporate events, exhibitions and special celebrations. Discover our event setups and get inspired for your next occasion.',
  canonical: 'https://happy-moments.co.in/gallery/',
  image: 'https://happy-moments.co.in/images/happy-moments-social.jpg',
  imageAlt: 'Happy Moments event gallery',
  socialDescription: 'Explore wedding decorations, corporate events, exhibitions and special celebrations in the Happy Moments event gallery.',
  twitterDescription: 'Explore wedding decorations, corporate events, exhibitions and special celebrations in the Happy Moments gallery.',
}

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    if (selector.startsWith('link')) element.setAttribute('rel', 'canonical')
    else if (selector.includes('property=')) element.setAttribute('property', selector.match(/property="([^"]+)"/)[1])
    else element.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
    document.head.append(element)
  }
  element.setAttribute(attribute, value)
}

export default function SeoMetadata() {
  useEffect(() => {
    if (window.location.pathname.replace(/\/$/, '') !== '/gallery') return

    document.title = galleryMetadata.title
    setMeta('meta[name="description"]', 'content', galleryMetadata.description)
    setMeta('meta[name="robots"]', 'content', 'index, follow')
    setMeta('link[rel="canonical"]', 'href', galleryMetadata.canonical)
    setMeta('meta[property="og:title"]', 'content', galleryMetadata.title)
    setMeta('meta[property="og:description"]', 'content', galleryMetadata.socialDescription)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:url"]', 'content', galleryMetadata.canonical)
    setMeta('meta[property="og:image"]', 'content', galleryMetadata.image)
    setMeta('meta[property="og:image:alt"]', 'content', galleryMetadata.imageAlt)
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', galleryMetadata.title)
    setMeta('meta[name="twitter:description"]', 'content', galleryMetadata.twitterDescription)
    setMeta('meta[name="twitter:image"]', 'content', galleryMetadata.image)
  }, [])

  return null
}
