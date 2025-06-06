import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* Сдвиг вниз для эффекта плавного появления */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const PageBox = styled.div`
  margin-top: 102px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
  }
`

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  min-width: 988px;
  margin-top: 42px;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    min-width: 0;
    align-items: center;
    position: initial;
    margin-top: 0;
    gap: 32px;
  }

  @media (max-width: 600px) {
    min-width: 0;
    align-items: center;
    position: initial;
    margin-top: 0;
    gap: 30px;
  }
`

export const MyPhoto = styled.img`
  width: 500px;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 300px;
  }
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
  left: -28px;
  bottom: 62px;
  opacity: 0; /* Изначально скрыт */
  transform: translateY(20px); /* Изначально сдвинут вниз */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* Переход для плавного появления */

  /* Класс, который будет добавляться при видимости */
  &.visible {
    opacity: 1;
    transform: translateY(0); /* Анимация появления */
  }

  // animation: ${fadeIn} 2s ease-in-out;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    align-items: center;
    position: initial;
  }

  @media (max-width: 600px) {
    position: initial;
    width: 300px;
    font-size: 16px;
    gap: 12px;
  }
`

/* Настройка позиционирования элементов внутри блока Title */
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Для позиционирования элементов относительно Title */
  position: relative; /* Относительное позиционирование для дочерних элементов */
  padding-right: 562px;
  margin-bottom: -52px;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    position: initial;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 600px) {
    position: initial;
    padding: 0;
    margin: 0;
  }
`

export const TitleSmall = styled.span`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-left: 342px;
  transform: rotate(2deg);

  @media (max-width: 600px) {
    padding-left: 192px;
    bottom: 4px;
  }
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

  @media (max-width: 600px) {
    font-size: 24px;
    left: 20px;

    &::after {
      width: 200px; /* Длина линии */
      height: 18px; /* Толщина линии */
      left: -24px; /* Расположить линию внизу */
      bottom: 4px; /* Небольшой отступ под текстом */
    }
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

  @media (max-width: 600px) {
    font-size: 24px;

    &::after {
      width: 200px; /* Длина линии */
      height: 18px; /* Толщина линии */
      left: 72px; /* Расположить линию внизу */
      bottom: 4px; /* Небольшой отступ под текстом */
    }
  }
`
// PortfolioBlock
export const PortfolioBlock = styled.div`
  display: flex;
  flex-wrap: wrap;           /* позволяем переносить при нехватке места */
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 102px 0;
  box-sizing: border-box;    /* учитываем padding в ширине */
  min-width: 0;              /* важно, чтобы дети ужимались */

  @media (min-width: 600px) and (max-width: 1050px) {
    padding-top: 52px;
    padding-bottom: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    /* align-items: flex-end; */
    align-items: center;
    gap: 32px;
    padding: 32px 0;
  }
`

export const PortfolioDeescriptionBtn = styled.div`
  flex: 1 1 0;               /* займёт доступное место, но может ужаться */
  min-width: 0;              /* предотвратить overflow по контенту */
  /* max-width: 400px;          максимальная ширина */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  box-sizing: border-box;
`

export const PortfolioDescription = styled.div`
  width: auto;
  max-width: 400px;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  gap: 14px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.8s ease-out;
  }

  @media (min-width: 600px) and (max-width: 1050px) {
    padding: 0 24px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    gap: 12px;
    max-width: 300px;
  }
`

export const PortfolioBox = styled.div`
  flex: 0 1 auto;            /* по содержимому, но может ужаться */
  min-width: 0;              /* чтобы не вылазило */
  max-width: 650px;          /* максимальная ширина */
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  background: var(--Bg-1, #d6ccc2);
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;

  @media (min-width: 600px) and (max-width: 1050px) {
    max-width: 382px;
    height: 142px;
  }

  @media (max-width: 600px) {
    align-self: flex-start;
    border-radius: 0 4px 4px 0;
    max-width: 240px;
    height: 74px;
  }
`

export const PortfolioMessage = styled.div`
  flex: 1 1 0;               /* займёт всё внутри PortfolioBox */
  min-width: 0;              /* чтобы текст ужимался */
  max-width: 440px;
  width: 100%;
  padding-left: 52px;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 3.3px;
  text-transform: uppercase;
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInRight} 1s ease-out;
  }

  @media (min-width: 600px) and (max-width: 1050px) {
    max-width: 282px;
    font-size: 16px;
    letter-spacing: 1.8px;
    padding-left: 32px;
  }

  @media (max-width: 600px) {
    /* max-width: 200px; */
    font-size: 12px;
    letter-spacing: 1.8px;
    /* padding-left: 10px; */
    padding-right: 10px;
    transform: translateX(-100px);

    &.visible {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInLeft} 1s ease-out;
  }
  }
`

// ContactBlock
export const ContactBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 102px 0;

  @media (max-width: 600px) {
    padding: 0 0 52px 0;
  }
`

export const ContactBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 650px;
  height: 160px;
  flex-shrink: 0;
  background: var(--Bg-1, #d6ccc2);
  border-radius: 0 4px 4px 0;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    width: 382px;
    height: 142px;
  }

  @media (max-width: 600px) {
    width: 240px;
    height: 74px;
  }
`
export const ContactMessage = styled.p`
  width: 440px;
  color: var(--Color-Black, #1a1a1a);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3.3px;
  text-transform: uppercase;
  padding-right: 52px;
  opacity: 0; /* Изначально скрыт */
  transform: translateX(-100px); /* Изначально сдвинут влево */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* Переход для плавного появления */

  /* Класс, который будет добавляться при видимости */
  &.visible {
    opacity: 1;
    transform: translateX(0); /* Анимация появления */
  }

  animation: ${slideInLeft} 1.5s ease-out;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    width: 282px;
    font-size: 16px;
    letter-spacing: 1.8px;
    padding-right: 24px;
  }

  @media (max-width: 600px) {
    width: 200px;
    font-size: 12px;
    letter-spacing: 1.8px;
    padding-right: 10px;
  }
`
export const BtnContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
  }
`
