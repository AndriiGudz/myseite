import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 1000;
`

// Ссылка на логотип
export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const Logo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 32px;
  letter-spacing: 0.15em; /* 15% от размера шрифта */
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`

export const LastName = styled.span`
  color: #1a1a1a;
`

export const FirstName = styled.span`
  color: #b4aea8;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

// Контейнер для переключателя языков
export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
`

interface LangOptionProps {
  isActive: boolean
}

export const LangOption = styled.button<LangOptionProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
  color: ${({ isActive }) => (isActive ? '#1a1a1a' : '#b4aea8')};
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
  
  &:focus {
    outline: none;
  }
`

export const Separator = styled.span`
  color: #b4aea8;
`
