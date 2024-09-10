import styled from '@emotion/styled'

export const PageBox = styled.div`
  margin-top: 102px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  min-width: 988px;
`

export const MyPhoto = styled.img`
  width: 500px;
`

export const DescriptionBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 14px;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  left: 24px;
  bottom: 62px;
`

/* Настройка позиционирования элементов внутри блока Title */
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Для позиционирования элементов относительно Title */
  position: relative; /* Относительное позиционирование для дочерних элементов */
  padding-right: 562px;
  margin-bottom: -52px;
`

export const TitleSmall = styled.span`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-left: 342px;
  transform: rotate(2deg);
`

/* Стили для TitleHome, включая линию под текстом */
export const TitleHome1 = styled.span`
  font-size: 48px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  /* Добавление линии под текстом */
  &::after {
    content: '';
    position: absolute;
    width: 380px; /* Длина линии */
    height: 36px; /* Толщина линии */
    background-color: #d6ccc2; /* Цвет линии */
    left: -42px; /* Расположить линию внизу */
    bottom: 8px; /* Небольшой отступ под текстом */
    transform: rotate(-1deg); /* Наклон линии на 2 градуса */
    z-index: -1; /* Размещаем линию под текстом */
  }
`
export const TitleHome2 = styled.span`
  font-size: 48px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-left: 98px;

  /* Добавление линии под текстом */
  &::after {
    content: '';
    position: absolute;
    width: 400px; /* Длина линии */
    height: 36px; /* Толщина линии */
    background-color: #d6ccc2; /* Цвет линии */
    left: 62px; /* Расположить линию внизу */
    bottom: 7px; /* Небольшой отступ под текстом */
    transform: rotate(-1deg); /* Наклон линии на 2 градуса */
    z-index: -1; /* Размещаем линию под текстом */
  }
`
