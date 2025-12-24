import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  PortfolioBox,
  PortfolioBoxTitle,
  PortfolioItemCard,
  PortfolioItemCardDescription,
  PortfolioItemCardImage,
  PortfolioItemCardTitle,
  PortfolioPageContainer,
  PortfolioSubtitle,
  PortfolioTitle,
  PortfolioTitleLine,
} from './styles'

import FokuZSlider from '../../assets/slider-fokuz.png'
import FokuZSliderAlternativ from '../../assets/slider-fokuz-alternativ.png'
import SprachSign from '../../assets/SignIn.png'
import SprachSignAlternativ from '../../assets/SignUp.png'
import MvkfzScr1 from '../../assets/mv-kfz-src1.webp'
import MvkfzScr2 from '../../assets/mv-kfz-src2.webp'
import Cutly1 from '../../assets/cutly_1.webp'
import Cutly4 from '../../assets/cutly_4.webp'

// Анимационные варианты
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const MotionPortfolioBox = motion(PortfolioBox)
const MotionPortfolioItemCard = motion(PortfolioItemCard)

interface PortfolioItem {
  id: string
  link?: string
  external?: boolean
  images: {
    primary: string
    secondary: string
    altPrimary: string
    altSecondary: string
  }
  translationKey: string
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'cutly',
    link: '/cutly',
    external: false,
    images: {
      primary: Cutly1,
      secondary: Cutly4,
      altPrimary: 'Cutly App',
      altSecondary: 'Cutly Meal App',
    },
    translationKey: 'itemCutly', // Suffix for t('portfolioPage...')
  },
  {
    id: 'mvkfz',
    link: 'https://mv-kfz.com',
    external: true,
    images: {
      primary: MvkfzScr1,
      secondary: MvkfzScr2,
      altPrimary: 'MV-KFZ Autoschlüssel site',
      altSecondary: 'MV_KFZ Autoschlüssel',
    },
    translationKey: 'itemMvkfz',
  },
  {
    id: 'fokuz',
    images: {
      primary: FokuZSlider,
      secondary: FokuZSliderAlternativ,
      altPrimary: 'Slider Fokuz',
      altSecondary: 'Alternative slider',
    },
    translationKey: 'itemTitle1', // Special case mapping based on original code
  },
  {
    id: 'sprachsign',
    images: {
      primary: SprachSign,
      secondary: SprachSignAlternativ,
      altPrimary: 'Authentication page',
      altSecondary: 'Alternative page',
    },
    translationKey: 'itemTitle2', // Special case mapping based on original code
  },
]

function PortfolioPage() {
  const { t } = useTranslation()

  // Helper to get description key based on title key pattern or custom logic
  const getDescKey = (key: string) => {
    if (key === 'itemTitle1') return 'portfolioPage.itemDescription1'
    if (key === 'itemTitle2') return 'portfolioPage.itemDescription2'
    if (key === 'itemCutly') return 'portfolioPage.itemDescriptionCutly'
    if (key === 'itemMvkfz') return 'portfolioPage.itemDescriptionMvkfz'
    return `portfolioPage.${key}Description`
  }

  const getTitleKey = (key: string) => {
    // Handles keys that don't match the 'itemSomething' pattern directly in t() if needed
    // But here we just assume the key is the suffix or full key
    return `portfolioPage.${key}`
  }

  return (
    <PortfolioPageContainer>
      <Helmet>
        <title>{t('portfolioPage.portfolioTitle')} | Portfolio</title>
        <meta
          name="description"
          content={t('portfolioPage.portfolioSubtitle')}
        />
        <link rel="canonical" href="https://your-domain.com/portfolio" />
      </Helmet>

      <PortfolioBoxTitle>
        <PortfolioTitle>{t('portfolioPage.portfolioTitle')}</PortfolioTitle>
        <PortfolioTitleLine />
      </PortfolioBoxTitle>

      <PortfolioSubtitle>
        {t('portfolioPage.portfolioSubtitle')}
      </PortfolioSubtitle>

      <MotionPortfolioBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {portfolioData.map((item) => {
          const CardContent = (
            <MotionPortfolioItemCard variants={itemVariants}>
              <PortfolioItemCardImage>
                <img
                  className="primary contain"
                  src={item.images.primary}
                  alt={item.images.altPrimary}
                  loading="lazy"
                  width="550"
                  height="300"
                />
                <img
                  className="alternative contain"
                  src={item.images.secondary}
                  alt={item.images.altSecondary}
                  loading="lazy"
                  width="550"
                  height="300"
                />
              </PortfolioItemCardImage>
              <PortfolioItemCardTitle>
                {t(getTitleKey(item.translationKey))}
              </PortfolioItemCardTitle>
              <PortfolioItemCardDescription>
                {t(getDescKey(item.translationKey))}
              </PortfolioItemCardDescription>
            </MotionPortfolioItemCard>
          )

          if (item.link) {
            if (item.external) {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', width: '100%', maxWidth: '552px' }}
                >
                  {CardContent}
                </a>
              )
            } else {
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  style={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '552px',
                    textDecoration: 'none',
                  }}
                >
                  {CardContent}
                </Link>
              )
            }
          }

          return (
            <div
              key={item.id}
              style={{ display: 'flex', width: '100%', maxWidth: '552px' }}
            >
              {CardContent}
            </div>
          )
        })}
      </MotionPortfolioBox>
    </PortfolioPageContainer>
  )
}

export default PortfolioPage
