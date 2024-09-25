import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import './i18n';
import ResumePage from './pages/ResumePage/ResumePage';

function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
