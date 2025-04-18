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
          <PortfolioItemCard>
            <PortfolioItemCardImage>
            <img className="primary" src={FokuZSlider} alt="Slider Fokuz" />
            <img className="alternative" src={FokuZSliderAlternativ} alt="Alternative slider" />
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
            <img className="primary" src={SprachSign} alt="Authentication page" />
            <img className="alternative" src={SprachSignAlternativ} alt="Alternative page" />
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
  