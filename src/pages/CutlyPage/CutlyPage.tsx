import React from 'react'
import { Helmet } from 'react-helmet-async'
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
  return (
    <PageContainer>
      <Helmet>
        <title>Cutly - Умное планирование питания с AI</title>
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
        <LogoImage src={Logo} alt="Cutly Logo" variants={fadeInUp} />
        <Subtitle variants={fadeInUp}>
          Cutly - ваш персональный помощник. Планируйте питание, создавайте меню
          и списки покупок за секунды.
        </Subtitle>
        <ButtonGroup variants={fadeInUp}>
          {/* <PrimaryButton href="#">
            <FaApple size={20} /> App Store
          </PrimaryButton> */}
          <PrimaryButton href="#">
            <FaGooglePlay size={20} /> Google Play
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
                  alt={`Cutly Screenshot ${index + 1}`}
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
        <DescriptionText>
          Cutly — это мобильное приложение для умного планирования питания с
          использованием искусственного интеллекта. Приложение помогает
          пользователям быстро составлять меню на день или неделю, подбирая
          блюда с учётом диеты, аллергий, вкусовых предпочтений и региона
          проживания, а также формирует список покупок для выбранных блюд.
          Приложение мультиязычное и на старте поддерживает английский,
          немецкий, украинский и русский языки.
        </DescriptionText>
      </Section>

      {/* Key Features */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionTitle>Ключевые фишки</SectionTitle>
        <Grid>
          <Card variants={fadeInUp}>
            <IconWrapper>
              <FaRobot />
            </IconWrapper>
            <CardTitle>AI генерация меню</CardTitle>
            <CardText>
              Мгновенное создание меню на день или неделю. Умный подбор блюд с
              учетом ваших вкусов.
            </CardText>
          </Card>
          <Card variants={fadeInUp}>
            <IconWrapper>
              <FaLeaf />
            </IconWrapper>
            <CardTitle>Диеты и питание</CardTitle>
            <CardText>
              Поддержка Vegan, Keto, Gluten-free, диабетического питания и
              других специальных режимов.
            </CardText>
          </Card>
          <Card variants={fadeInUp}>
            <IconWrapper>
              <FaUtensils />
            </IconWrapper>
            <CardTitle>Учет аллергий</CardTitle>
            <CardText>
              Исключение нежелательных ингредиентов для безопасности вашего
              здоровья.
            </CardText>
          </Card>
          <Card variants={fadeInUp}>
            <IconWrapper>
              <FaCartShopping />
            </IconWrapper>
            <CardTitle>Умный список покупок</CardTitle>
            <CardText>
              Автоматическое формирование списка продуктов на основе выбранного
              меню.
            </CardText>
          </Card>
          <Card variants={fadeInUp}>
            <IconWrapper>
              <FaClockRotateLeft />
            </IconWrapper>
            <CardTitle>Персонализация</CardTitle>
            <CardText>
              Персональный опросник для точных рекомендаций. История меню,
              избранные и исключённые рецепты.
            </CardText>
          </Card>
          <Card variants={fadeInUp}>
            <IconWrapper>
              <FaShieldHalved />
            </IconWrapper>
            <CardTitle>Контроль данных</CardTitle>
            <CardText>
              Полный контроль над вашими данными. Мы собираем только то, что
              необходимо для работы.
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* Target Audience */}
      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionTitle>Для кого Cutly?</SectionTitle>
        <ListSection>
          <ListItem variants={fadeInUp}>
            <IconWrapper style={{ margin: 0 }}>
              <MdHealthAndSafety />
            </IconWrapper>
            <CardText>
              Для людей, которые хотят экономить время на планировании здорового
              питания
            </CardText>
          </ListItem>
          <ListItem variants={fadeInUp}>
            <IconWrapper style={{ margin: 0 }}>
              <MdFamilyRestroom />
            </IconWrapper>
            <CardText>
              Для семей и занятых специалистов, ценящих структуру
            </CardText>
          </ListItem>
          <ListItem variants={fadeInUp}>
            <IconWrapper style={{ margin: 0 }}>
              <FaLeaf />
            </IconWrapper>
            <CardText>
              Для всех, кто следит за своим здоровьем и рационом
            </CardText>
          </ListItem>
        </ListSection>
      </Section>

      {/* Tech Stack */}
      <Section>
        <SectionTitle>Используемые технологии</SectionTitle>
        <TechGrid>
          {[
            { name: 'React Native', icon: <FaReact /> },
            { name: 'Expo', icon: <SiExpo /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Supabase', icon: <SiSupabase /> },
            { name: 'Zustand', icon: <FaLayerGroup /> },
            { name: 'OpenAI', icon: <SiOpenai /> },
            { name: 'Gemini', icon: <SiGoogle /> },
          ].map((tech, index) => (
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
        <SectionTitle>Конфиденциальность и данные</SectionTitle>
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
              Ваши данные под защитой
            </h3>
          </div>
          <CardText>
            Мы уважаем вашу приватность и стремимся защищать ваши персональные
            данные. Cutly собирает только те данные, которые необходимы для
            корректной работы приложения. Пользователи могут удалить аккаунт и
            связанные с ним данные в любое время.
          </CardText>
          <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
            <FooterLink href="#" style={{ color: '#2D8259', margin: 0 }}>
              Политика конфиденциальности
            </FooterLink>
            <FooterLink href="#" style={{ color: '#2D8259', margin: 0 }}>
              Terms & Conditions
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
        <SectionTitle>Управление аккаунтом</SectionTitle>
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
              Удаление аккаунта
            </h3>
          </div>
          <CardText>
            Пользователи могут запросить удаление аккаунта прямо внутри
            приложения. После удаления все связанные персональные данные будут
            безвозвратно удалены.
          </CardText>
        </InfoBlock>
      </Section>

      {/* Developer & Footer */}
      <Footer>
        <SectionTitle style={{ color: 'white' }}>О разработчике</SectionTitle>
        <CardText
          style={{
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Cutly разрабатывается как независимый проект с фокусом на удобство,
          прозрачность и современные технологии. Отзывы и предложения всегда
          приветствуются.
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
