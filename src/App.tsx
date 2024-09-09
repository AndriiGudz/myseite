import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
