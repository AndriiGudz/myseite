import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* Стили для всех дочерних элементов */
  & > * {
    width: 100%;
    gap: 24px;
    // padding: 1rem;
  }

  /* Breakpoint для планшетов (768px и выше) */
  @media (min-width: 950px) {
    & > *:nth-of-type(1) {
      width: calc(100% / 3 * 2); /* Основной контент занимает 2/3 */
    }
    & > *:nth-of-type(2) {
      width: calc(100% / 3); /* Боковая панель занимает 1/3 */
      order: -1; /* Боковая панель появляется слева */
    }
  }
`

export const RightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 52px;

  @media (max-width: 950px) {
    padding-left: 0;
    padding-bottom: 32px;
  }
`

export const TitleH1 = styled.h1`
  font-size: 64px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 1.2rem;
  text-transform: uppercase;

  span {
    display: block;
    color: #b4aea8;
  }

  @media (max-width: 600px) {
    font-size: 48px;
  }
`

export const SubTitleH2 = styled.div`
  display: flex;
  background-color: #d6ccc2;
`

export const TitleH2 = styled.h2`
  font-size: 36px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  padding-left: 24px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

export const RightContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`

export const TitleH3 = styled.h3`
  font-size: 26px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  position: relative;
  padding-top: 14px;
  padding-bottom: 6px; /* Отступ между текстом и линией */

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%; /* Линия будет на всю ширину блока */
    height: 4px; /* Толщина линии */
    background-color: #1a1a1a; /* Цвет линии */
  }

  @media (max-width: 600px) {
    font-size: 24px;
    padding-top: 10px;
  }
`

export const ContentBox = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
font-size: 18px;
padding-top: 18px;

  p {

  }

  span {
font-weight: bold;
  }

  li {

  }

  @media (max-width: 600px) {
    font-size: 16px;
    gap: 12px;
    padding-top: 10px;
  }
`

export const TitleH5 = styled.h5`
font-size: 21px;
letter-spacing: 0.05rem;

@media (max-width: 600px) {
    font-size: 18px;
  }
`

export const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d6ccc2;
`

export const MyPhoto = styled.img`
  width: 100%;

  @media (max-width: 950px) {
    display: none;
  }
`

export const MyPhotoMedia = styled.img`
display: none;
  width: 100%;

  @media (max-width: 950px) {
    display: block;
  }
`

export const LeftContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 30px;
  padding-right: 30px;

  li {
    font-size: 16px;
    padding-bottom: 5px;

    @media (max-width: 600px) {
    font-size: 14px;
  }
  }

  p {
    padding-bottom: 5px;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 950px) {
    padding-top: 14px;
  }
`

export const TitleH4 = styled.h4`
  font-size: 22px;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 6px; /* Отступ между текстом и линией */

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%; /* Линия будет на всю ширину блока */
    height: 3px; /* Толщина линии */
    background-color: #1a1a1a; /* Цвет линии */
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const IconDatum = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  gap: 22px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`
