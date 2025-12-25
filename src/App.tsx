import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import './i18n';
import ResumePage from './pages/ResumePage/ResumePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import CutlyPage from './pages/CutlyPage/CutlyPage';
import PrivacyPolicyPage from './pages/CutlyPage/PrivacyPolicyPage';
import TermsConditionsPage from './pages/CutlyPage/TermsConditionsPage';

function App() {
  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/cutly" element={<CutlyPage />} />
            <Route path="/cutly/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/cutly/terms" element={<TermsConditionsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
