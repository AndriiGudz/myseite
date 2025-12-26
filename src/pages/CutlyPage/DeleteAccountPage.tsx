import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import {
  PageContainer,
  Section,
  SectionTitle,
  CardText,
  Footer,
  StyledRouterLink,
} from './styles'

const DeleteAccountPage: React.FC = () => {
  const { t } = useTranslation('cutlyDeleteAccount')
  const email = 'andriigudz.de@gmail.com'

  const option2IncludeItems = t('options.2.includeItems', {
    returnObjects: true,
  }) as string[]
  const dataDeletedItems = t('dataDeleted.items', {
    returnObjects: true,
  }) as string[]
  const retentionItems = t('retention.items', {
    returnObjects: true,
  }) as string[]

  return (
    <PageContainer>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Helmet>

      <Section
        style={{
          paddingTop: '120px',
          minHeight: '80vh',
          alignItems: 'flex-start',
        }}
      >
        <Link
          to="/cutly"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#2D8259',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          <FaArrowLeft /> {t('nav.backToCutly')}
        </Link>

        <SectionTitle style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
          {t('title')}
        </SectionTitle>

        <CardText style={{ fontWeight: 'bold' }}>{t('lead')}</CardText>

        <CardText>{t('intro')}</CardText>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <div>
            <h3>{t('options.1.title')}</h3>
            <CardText>{t('options.1.p1')}</CardText>
            <CardText>{t('options.1.p2')}</CardText>
          </div>

          <div>
            <h3>{t('options.2.title')}</h3>
            <CardText>
              {t('options.2.emailLabel')}{' '}
              <a href={`mailto:${email}`} style={{ color: '#2D8259' }}>
                {email}
              </a>
            </CardText>
            <CardText>
              <strong>{t('options.2.subjectLabel')}</strong>{' '}
              {t('options.2.subjectValue')}
            </CardText>
            <CardText>{t('options.2.includeLabel')}</CardText>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {option2IncludeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t('dataDeleted.title')}</h3>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {dataDeletedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t('retention.title')}</h3>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {retentionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Footer>
        <StyledRouterLink to="/cutly">
          {t('footer.backToCutly')}
        </StyledRouterLink>
      </Footer>
    </PageContainer>
  )
}

export default DeleteAccountPage
