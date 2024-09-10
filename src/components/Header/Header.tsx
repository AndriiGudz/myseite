import MorphingMenu from '../MorphingMenu/MorphingMenu'
import { FirstName, HeaderComponent, LastName, Logo, LogoLink } from './styles'

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
}

function Header({ onMenuToggle }: HeaderProps) {
  return (
    <HeaderComponent>
      <LogoLink to="/">
        <Logo>
          <LastName>Gudz</LastName>
          <FirstName>Andrii</FirstName>
        </Logo>
      </LogoLink>
      <MorphingMenu onMenuToggle={onMenuToggle} />
    </HeaderComponent>
  )
}

export default Header
