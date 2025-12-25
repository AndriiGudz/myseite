import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import {
  // FaApple,
  FaGooglePlay,
  FaLeaf,
  FaUtensils,
  FaCartShopping,
  FaShieldHalved,
  FaRobot,
  FaUserMinus,
  FaEnvelope,
  FaGlobe,
  FaClockRotateLeft,
  FaReact,
  FaLayerGroup,
} from 'react-icons/fa6'
import { MdHealthAndSafety, MdFamilyRestroom } from 'react-icons/md'
import {
  SiExpo,
  SiTypescript,
  SiSupabase,
  SiOpenai,
  SiGoogle,
} from 'react-icons/si'

import {
  PageContainer,
  HeroSection,
  Section,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  Grid,
  Card,
  IconWrapper,
  CardTitle,
  CardText,
  SectionTitle,
  ListItem,
  ListSection,
  InfoBlock,
  TechGrid,
  TechCard,
  TechName,
  Footer,
  FooterLink,
  LogoImage,
  DescriptionText,
} from './styles'

import Logo from '../../assets/logo_cutly.png'
import cutly1 from '../../assets/cutly_1.webp'
import cutly2 from '../../assets/cutly_2.webp'
import cutly3 from '../../assets/cutly_3.webp'
import cutly4 from '../../assets/cutly_4.webp'
import cutly5 from '../../assets/cutly_5.webp'
import cutly6 from '../../assets/cutly_6.webp'
import cutly7 from '../../assets/cutly_7.webp'
import cutly8 from '../../assets/cutly_8.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const CutlyPage: React.FC = () => {
  const { t } = useTranslation()

  const featureCards = [
    {
      icon: <FaRobot />,
      titleKey: 'cutlyPage.features.aiMenu.title',
      textKey: 'cutlyPage.features.aiMenu.text',
    },
    {
      icon: <FaLeaf />,
      titleKey: 'cutlyPage.features.diets.title',
      textKey: 'cutlyPage.features.diets.text',
    },
    {
      icon: <FaUtensils />,
      titleKey: 'cutlyPage.features.allergies.title',
      textKey: 'cutlyPage.features.allergies.text',
    },
    {
      icon: <FaCartShopping />,
      titleKey: 'cutlyPage.features.shoppingList.title',
      textKey: 'cutlyPage.features.shoppingList.text',
    },
    {
      icon: <FaClockRotateLeft />,
      titleKey: 'cutlyPage.features.personalization.title',
      textKey: 'cutlyPage.features.personalization.text',
    },
    {
      icon: <FaShieldHalved />,
      titleKey: 'cutlyPage.features.dataControl.title',
      textKey: 'cutlyPage.features.dataControl.text',
    },
  ]

  const audienceItems = [
    { icon: <MdHealthAndSafety />, textKey: 'cutlyPage.audience.healthy' },
    { icon: <MdFamilyRestroom />, textKey: 'cutlyPage.audience.family' },
    { icon: <FaLeaf />, textKey: 'cutlyPage.audience.everyone' },
  ]

  const techItems = [
    { name: 'React Native', icon: <FaReact /> },
    { name: 'Expo', icon: <SiExpo /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'Zustand', icon: <FaLayerGroup /> },
    { name: 'OpenAI', icon: <SiOpenai /> },
    { name: 'Gemini', icon: <SiGoogle /> },
  ]

  return (
    <PageContainer>
      <Helmet>
        <title>{t('cutlyPage.seoTitle')}</title>
        <meta name="description" content={t('cutlyPage.seoDescription')} />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <LogoImage
          src={Logo}
          alt={t('cutlyPage.logoAlt')}
          variants={fadeInUp}
        />
        <Subtitle variants={fadeInUp}>{t('cutlyPage.subtitle')}</Subtitle>
        <ButtonGroup variants={fadeInUp}>
          {/* <PrimaryButton href="#">
            <FaApple size={20} /> App Store
          </PrimaryButton> */}
          <PrimaryButton href="#">
            <FaGooglePlay size={20} /> {t('cutlyPage.googlePlay')}
          </PrimaryButton>
        </ButtonGroup>
      </HeroSection>

      {/* App Screenshots Slider */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ padding: '0 0 60px 0', overflow: 'hidden' }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          style={{
            width: '100%',
            padding: '40px 0 60px 0',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
        >
          {[cutly1, cutly2, cutly3, cutly4, cutly5, cutly6, cutly7, cutly8].map(
            (img, index) => (
              <SwiperSlide
                key={index}
                style={{ width: '280px', height: 'auto' }}
              >
                <img
                  src={img}
                  alt={t('cutlyPage.screenshotsAlt', { index: index + 1 })}
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 15px 35px rgba(45, 130, 89, 0.2)',
                    border: '4px solid #fff',
                  }}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Section>

      {/* Description Section */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <DescriptionText>{t('cutlyPage.description')}</DescriptionText>
      </Section>

      {/* Key Features */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionTitle>{t('cutlyPage.featuresTitle')}</SectionTitle>
        <Grid>
          {featureCards.map((item) => (
            <Card key={item.titleKey} variants={fadeInUp}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{t(item.titleKey)}</CardTitle>
              <CardText>{t(item.textKey)}</CardText>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Target Audience */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionTitle>{t('cutlyPage.audienceTitle')}</SectionTitle>
        <ListSection>
          {audienceItems.map((item) => (
            <ListItem key={item.textKey} variants={fadeInUp}>
              <IconWrapper style={{ margin: 0 }}>{item.icon}</IconWrapper>
              <CardText>{t(item.textKey)}</CardText>
            </ListItem>
          ))}
        </ListSection>
      </Section>

      {/* Tech Stack */}
      <Section>
        <SectionTitle>{t('cutlyPage.techTitle')}</SectionTitle>
        <TechGrid>
          {techItems.map((tech, index) => (
            <TechCard
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tech.icon}
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechGrid>
      </Section>

      {/* Privacy & Data */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <SectionTitle>{t('cutlyPage.privacyTitle')}</SectionTitle>
        <InfoBlock>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <FaShieldHalved size={32} color="#2D8259" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {t('cutlyPage.privacyHeading')}
            </h3>
          </div>
          <CardText>{t('cutlyPage.privacyText')}</CardText>
          <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
            <FooterLink href="#" style={{ color: '#2D8259', margin: 0 }}>
              {t('cutlyPage.privacyPolicy')}
            </FooterLink>
            <FooterLink href="#" style={{ color: '#2D8259', margin: 0 }}>
              {t('cutlyPage.terms')}
            </FooterLink>
          </div>
        </InfoBlock>
      </Section>

      {/* Account Deletion */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <SectionTitle>{t('cutlyPage.accountTitle')}</SectionTitle>
        <InfoBlock
          style={{
            borderLeft: '5px solid #E85D3F', // Terracotta color for warning/action
            backgroundColor: '#FFF5F2', // Slightly reddish background
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <FaUserMinus size={32} color="#E85D3F" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {t('cutlyPage.accountHeading')}
            </h3>
          </div>
          <CardText>{t('cutlyPage.accountText')}</CardText>
        </InfoBlock>
      </Section>

      {/* Developer & Footer */}
      <Footer>
        <SectionTitle style={{ color: 'white' }}>
          {t('cutlyPage.developerTitle')}
        </SectionTitle>
        <CardText
          style={{
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          {t('cutlyPage.developerText')}
        </CardText>

        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <FooterLink
            href="https://gudz-andrii.com/"
            target="_blank"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaGlobe /> gudz-andrii.com
          </FooterLink>
          <FooterLink
            href="mailto:andriigudz.de@gmail.com"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaEnvelope /> andriigudz.de@gmail.com
          </FooterLink>
        </div>
      </Footer>
    </PageContainer>
  )
}

export default CutlyPage
