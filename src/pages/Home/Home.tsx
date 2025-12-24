// src/pages/Home/Home.tsx
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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

// Анимационные варианты
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

// Создаем анимированные компоненты из styled-компонентов
const MotionDescriptionBox = motion(DescriptionBox)
const MotionPortfolioDescription = motion(PortfolioDescription)
const MotionPortfolioMessage = motion(PortfolioMessage)
const MotionContactMessage = motion(ContactMessage)
const MotionMyPhoto = motion(MyPhoto)

function Home() {
  const { t } = useTranslation()

  // Простая проверка на мобильное устройство для адаптации анимации PortfolioMessage
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600

  return (
    <PageBox>
      <Helmet>
        <title>
          {t('titleHome1')} {t('titleHome2')} | Frontend Developer
        </title>
        <meta
          name="description"
          content={`${t('description1')} ${t('description2')}`}
        />
        <link rel="canonical" href="https://your-domain.com/" />
      </Helmet>

      <FirstBlock>
        <Title>
          <TitleSmall>
            <BlinkingText text={t('titleSmall')} />
          </TitleSmall>
          <TitleHome1>{t('titleHome1')}</TitleHome1>
          <TitleHome2>{t('titleHome2')}</TitleHome2>
        </Title>
        <MotionMyPhoto
          src={myPhoto}
          alt="Gudz Andrii"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          width="500"
          height="500" // Approximate/max dimensions to reduce layout shift
        />
        <MotionDescriptionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{t('description1')}</p>
          <p>{t('description2')}</p>
        </MotionDescriptionBox>
      </FirstBlock>

      <Link to="/resume" style={{ textDecoration: 'none' }}>
        <Button name={t('resume')} />
      </Link>

      <PortfolioBlock>
        <PortfolioDeescriptionBtn>
          <MotionPortfolioDescription
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t('portfolioDesc')}
          </MotionPortfolioDescription>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <Button name={t('portfolio')} />
          </Link>
        </PortfolioDeescriptionBtn>

        <PortfolioBox>
          <MotionPortfolioMessage
            variants={isMobile ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t('portfolioMessage')}
          </MotionPortfolioMessage>
        </PortfolioBox>
      </PortfolioBlock>

      <ContactBlock>
        <ContactBox>
          <MotionContactMessage
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t('contactMessage')}
          </MotionContactMessage>
        </ContactBox>
        <BtnContact>
          <a
            href="mailto:andriigudz.de@gmail.com"
            style={{ textDecoration: 'none' }}
          >
            <Button name={t('getInTouch')} />
          </a>
        </BtnContact>
      </ContactBlock>
    </PageBox>
  )
}

export default Home
