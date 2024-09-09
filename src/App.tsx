import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import BlinkingText from './components/BlinkingText/BlinkingText'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <BlinkingText />
    </BrowserRouter>
  )
}

export default App
