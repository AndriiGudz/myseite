import Menu from '../Menu/Menu'
import { FirstName, HeaderComponent, LastName, Logo } from './styles'

function Header() {
  return (
    <HeaderComponent>
      <Logo>
        <LastName>Gudz</LastName>
        <FirstName>Andrii</FirstName>
      </Logo>
      <Menu />
    </HeaderComponent>
  )
}

export default Header
