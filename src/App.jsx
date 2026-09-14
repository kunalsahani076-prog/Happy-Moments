import HappyMomentsPage from './imports/Home'
import GalleryPage from './Gallery'
import './App.css'

function App() {
  if (window.location.pathname === '/gallery') {
    return <GalleryPage />
  }

  return <HappyMomentsPage />
}

export default App
