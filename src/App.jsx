import HappyMomentsPage from './imports/Home'
import GalleryPage from './Gallery'
import AutoExpoPage from './AutoExpoPage'
import './App.css'

function App() {
  if (window.location.pathname === '/gallery') {
    return <GalleryPage />
  }

  if (window.location.pathname === '/gallery/autoexpo-2023') {
    return <AutoExpoPage />
  }

  return <HappyMomentsPage />
}

export default App
