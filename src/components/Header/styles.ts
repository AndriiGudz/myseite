import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center; // Центрирует элементы по вертикали
  justify-content: center; // Центрирует элементы по горизонтали
  justify-content: space-between;
  padding: 0 30px; // Отступы по бокам
  margin: 0; // Убираем вертикальный отступ
  position: fixed; // Фиксируем хедер
  top: 0; // Привязываем к верхней части экрана
  width: 100%;
  height: 70px;
  background-color: white; // Фон белого цвета
  z-index: 1000; // Устанавливаем z-index для отображения поверх контента
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
