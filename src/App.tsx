import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import './i18n';
import ResumePage from './pages/ResumePage/ResumePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import CutlyPage from './pages/CutlyPage/CutlyPage';

function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cutly" element={<CutlyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
