import { useTranslation } from 'react-i18next';
import MorphingMenu from '../MorphingMenu/MorphingMenu';
import {
  FirstName,
  HeaderComponent,
  LastName,
  Logo,
  LogoLink,
  NavBar,
  LanguageContainer,
  LangOption,
  Separator
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
        <LanguageContainer>
          <LangOption 
            isActive={i18n.language === 'en'} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </LangOption>
          <Separator>|</Separator>
          <LangOption 
            isActive={i18n.language === 'de'} 
            onClick={() => changeLanguage('de')}
          >
            DE
          </LangOption>
        </LanguageContainer>
        <MorphingMenu onMenuToggle={onMenuToggle} />
      </NavBar>
    </HeaderComponent>
  );
}

export default Header;
