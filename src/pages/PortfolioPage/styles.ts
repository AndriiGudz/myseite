import styled from '@emotion/styled'

/* Контейнер всей страницы */
export const PortfolioPageContainer = styled.div`
  margin-top: 102px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  padding: 0 16px;

  @media (max-width: 600px) {
    margin-top: 80px;
    gap: 24px;
  }
`

/* Обертка заголовка */
export const PortfolioBoxTitle = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/* Заголовок страницы */
export const PortfolioTitle = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  width: 100%;

  color: var(--Color-Black, #1a1a1a);
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 7.2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 36px;
    letter-spacing: 5px;
  }

  @media (max-width: 480px) {
    padding: 4px 16px;
    font-size: 24px;
    letter-spacing: 3px;
  }
`

/* Линия под заголовком */
export const PortfolioTitleLine = styled.div`
  position: absolute;
  width: 100%;
  height: 36px;
  background: #d6ccc2;
  bottom: 0;
  z-index: -1;

  @media (max-width: 768px) {
    height: 24px;
  }

  @media (max-width: 480px) {
    height: 16px;
  }
`

/* Подзаголовок страницы */
export const PortfolioSubtitle = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  color: var(--Color-Black, #1a1a1a);
  text-align: justify;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

/* Контейнер для карточек */
export const PortfolioBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 16px 32px;
  align-items: stretch;
  gap: 32px;

  & a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

/* Карточка элемента портфолио */
export const PortfolioItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 552px;
  padding: 16px;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid var(--Color-A1, #a1a1a1);
  background: var(--Color-White, #ffffff);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  /* При наведении (если карточка не перекрывает событие, можно также задать для контейнера или отдельно для контейнера с изображением) */
  &:hover img.alternative {
    opacity: 1;
  }
  &:hover img.primary {
    opacity: 0;
  }
`

/* --- Контейнер для изображений в карточке --- */
export const PortfolioItemCardImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: opacity 0.3s ease;
  }

  /* По умолчанию альтернативная картинка скрыта */
  & img.alternative {
    opacity: 0;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`

/* Заголовок карточки */
export const PortfolioItemCardTitle = styled.div`
  width: 100%;
  color: var(--Color-Black, #1a1a1a);
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3.3px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 2.5px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    letter-spacing: 2px;
  }
`

/* Описание карточки */
export const PortfolioItemCardDescription = styled.div`
  width: 100%;
  color: var(--Color-Black, #1a1a1a);
  text-align: justify;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`
