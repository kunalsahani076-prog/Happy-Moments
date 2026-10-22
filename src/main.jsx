import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SeoMetadata from './SeoMetadata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeoMetadata />
    <App />
  </StrictMode>,
)
