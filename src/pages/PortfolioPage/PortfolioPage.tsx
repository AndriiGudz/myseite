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

import { useTranslation } from 'react-i18next'

function PortfolioPage() {
  const { t } = useTranslation()

  return (
    <PortfolioPageContainer>
      <PortfolioBoxTitle>
        <PortfolioTitle>{t('portfolioPage.portfolioTitle')}</PortfolioTitle>
        <PortfolioTitleLine />
      </PortfolioBoxTitle>
      <PortfolioSubtitle>
        {t('portfolioPage.portfolioSubtitle')}
      </PortfolioSubtitle>

      <PortfolioBox>
        <a href="https://mv-kfz.com" target="_blank" rel="noopener noreferrer">
          <PortfolioItemCard>
            <PortfolioItemCardImage>
              <img
                className="primary"
                src={MvkfzScr1}
                alt="MV-KFZ Autoschlüssel site"
              />
              <img
                className="alternative"
                src={MvkfzScr2}
                alt="MV_KFZ Autoschlüssel"
              />
            </PortfolioItemCardImage>
            <PortfolioItemCardTitle>
              {t('portfolioPage.itemMvkfz')}
            </PortfolioItemCardTitle>
            <PortfolioItemCardDescription>
              {t('portfolioPage.itemDescriptionMvkfz')}
            </PortfolioItemCardDescription>
          </PortfolioItemCard>
        </a>

        <PortfolioItemCard>
          <PortfolioItemCardImage>
            <img className="primary" src={FokuZSlider} alt="Slider Fokuz" />
            <img
              className="alternative"
              src={FokuZSliderAlternativ}
              alt="Alternative slider"
            />
          </PortfolioItemCardImage>
          <PortfolioItemCardTitle>
            {t('portfolioPage.itemTitle1')}
          </PortfolioItemCardTitle>
          <PortfolioItemCardDescription>
            {t('portfolioPage.itemDescription1')}
          </PortfolioItemCardDescription>
        </PortfolioItemCard>

        <PortfolioItemCard>
          <PortfolioItemCardImage>
            <img
              className="primary"
              src={SprachSign}
              alt="Authentication page"
            />
            <img
              className="alternative"
              src={SprachSignAlternativ}
              alt="Alternative page"
            />
          </PortfolioItemCardImage>
          <PortfolioItemCardTitle>
            {t('portfolioPage.itemTitle2')}
          </PortfolioItemCardTitle>
          <PortfolioItemCardDescription>
            {t('portfolioPage.itemDescription2')}
          </PortfolioItemCardDescription>
        </PortfolioItemCard>
      </PortfolioBox>
    </PortfolioPageContainer>
  )
}

export default PortfolioPage
