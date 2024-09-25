import { useTranslation } from 'react-i18next';
import MorphingMenu from '../MorphingMenu/MorphingMenu';
import {
  FirstName,
  HeaderComponent,
  LastName,
  Logo,
  LogoLink,
  NavBar,
  LanguageSwitcher // Новый стиль для селектора
} from './styles';

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void
}

function Header({ onMenuToggle }: HeaderProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Смена языка
  };

  return (
    <HeaderComponent>
      <LogoLink to="/">
        <Logo>
          <LastName>Gudz</LastName>
          <FirstName>Andrii</FirstName>
        </Logo>
      </LogoLink>
      <NavBar>
        {/* Свитчер языка */}
        <LanguageSwitcher
          value={i18n.language} // Отображение текущего языка
          onChange={(e) => changeLanguage(e.target.value)} // Смена языка при выборе
        >
          <option value="en">EN</option>
          <option value="de">DE</option>
        </LanguageSwitcher>
        <MorphingMenu onMenuToggle={onMenuToggle} />
      </NavBar>
    </HeaderComponent>
  );
}

export default Header;
