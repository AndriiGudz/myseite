// src/pages/Home/Home.tsx
import { useEffect, useRef, useCallback } from 'react'
import BlinkingText from '../../components/BlinkingText/BlinkingText'
import Button from '../../components/Button/Button'
import {
  BtnContact,
  ContactBlock,
  ContactBox,
  ContactMessage,
  DescriptionBox,
  FirstBlock,
  MyPhoto,
  PageBox,
  PortfolioBlock,
  PortfolioBox,
  PortfolioDeescriptionBtn,
  PortfolioDescription,
  PortfolioMessage,
  Title,
  TitleHome1,
  TitleHome2,
  TitleSmall,
} from './styles'
import myPhoto from '../../assets/my-foto-1.webp'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const portfolioDescriptionRef = useRef<HTMLDivElement | null>(null)
  const portfoliotRef = useRef<HTMLParagraphElement | null>(null)
  const contactRef = useRef<HTMLParagraphElement | null>(null)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    })

    // Сохраняем все current в локальные переменные сразу
    const descEl = descriptionRef.current
    const portDescEl = portfolioDescriptionRef.current
    const portEl = portfoliotRef.current
    const contEl = contactRef.current

    if (descEl)       observer.observe(descEl)
    if (portDescEl)   observer.observe(portDescEl)
    if (portEl)       observer.observe(portEl)
    if (contEl)       observer.observe(contEl)

    return () => {
      // При анмаунте снимаем наблюдателя с тех же самых элементов
      if (descEl)       observer.unobserve(descEl)
      if (portDescEl)   observer.unobserve(portDescEl)
      if (portEl)       observer.unobserve(portEl)
      if (contEl)       observer.unobserve(contEl)
    }
  }, [handleIntersection])

  return (
    <PageBox>
      <FirstBlock>
        <Title>
          <TitleSmall>
            <BlinkingText text={t('titleSmall')} />
          </TitleSmall>
          <TitleHome1>{t('titleHome1')}</TitleHome1>
          <TitleHome2>{t('titleHome2')}</TitleHome2>
        </Title>
        <MyPhoto src={myPhoto} alt="Gudz Andrii" />
        <DescriptionBox ref={descriptionRef}>
          <p>{t('description1')}</p>
          <p>{t('description2')}</p>
        </DescriptionBox>
      </FirstBlock>

      <a href="/resume">
        <Button name={t('resume')} />
      </a>

      <PortfolioBlock>
        <PortfolioDeescriptionBtn>
          <PortfolioDescription ref={portfolioDescriptionRef}>
            {t('portfolioDesc')}
          </PortfolioDescription>
          <a href="portfolio">
            <Button name={t('portfolio')} />
          </a>
        </PortfolioDeescriptionBtn>

        <PortfolioBox>
          <PortfolioMessage ref={portfoliotRef}>
            {t('portfolioMessage')}
          </PortfolioMessage>
        </PortfolioBox>
      </PortfolioBlock>

      <ContactBlock>
        <ContactBox>
          <ContactMessage ref={contactRef}>
            {t('contactMessage')}
          </ContactMessage>
        </ContactBox>
        <BtnContact>
          <a href="mailto:andreygudz.de@gmail.com">
            <Button name={t('getInTouch')} />
          </a>
        </BtnContact>
      </ContactBlock>
    </PageBox>
  )
}

export default Home
