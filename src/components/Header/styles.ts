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

// Добавляем стили для выпадающего списка языка
export const LanguageSwitcher = styled.select`
  padding: 5px 10px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  background-color: transparent;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
  cursor: pointer;
  color: #1a1a1a;

  &:focus {
    outline: none;
    border-color: #b4aea8;
  }

  option {
    background-color: #fff;
    color: #1a1a1a;
  }
`
