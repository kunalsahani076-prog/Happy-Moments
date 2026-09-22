import HappyMomentsPage from './imports/Home'
import GalleryPage from './Gallery'
import AutoExpoPage from './AutoExpoPage'
import DecoIndiaPage from './DecoIndiaPage'
import IITFPage from './IITFPage'
import RisingRajasthanPage from './RisingRajasthanPage'
import IndiaStonemartPage from './IndiaStonemartPage'
import StonaPage from './StonaPage'
import AadharHousingPage from './AadharHousingPage'
import HDFCTownHallPage from './HDFCTownHallPage'
import JCBFamilyDayPage from './JCBFamilyDayPage'
import V1SirsaCupPage from './V1SirsaCupPage'
import './App.css'

function App() {
  if (window.location.pathname === '/gallery') {
    return <GalleryPage />
  }

  if (window.location.pathname === '/gallery/autoexpo-2023') {
    return <AutoExpoPage />
  }

  if (window.location.pathname === '/gallery/deco-india-2023') {
    return <DecoIndiaPage />
  }

  if (window.location.pathname === '/gallery/iitf-2024') {
    return <IITFPage />
  }

  if (window.location.pathname === '/gallery/rising-rajasthan-2024') {
    return <RisingRajasthanPage />
  }

  if (window.location.pathname === '/gallery/india-stonemart-2024') {
    return <IndiaStonemartPage />
  }

  if (window.location.pathname === '/gallery/stona-2025-bangalore') {
    return <StonaPage />
  }

  if (window.location.pathname === '/gallery/aadhar-housing-r-and-r') {
    return <AadharHousingPage />
  }

  if (window.location.pathname === '/gallery/hdfc-town-hall') {
    return <HDFCTownHallPage />
  }

  if (window.location.pathname === '/gallery/jcb-family-day-2024') {
    return <JCBFamilyDayPage />
  }

  if (window.location.pathname === '/gallery/v1-sirsa-cup') {
    return <V1SirsaCupPage />
  }

  return <HappyMomentsPage />
}

export default App
