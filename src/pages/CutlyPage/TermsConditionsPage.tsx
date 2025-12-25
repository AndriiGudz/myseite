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

const TermsConditionsPage: React.FC = () => {
  const { t } = useTranslation('cutlyTerms')
  const effectiveDate = '2025-12-25'
  const lastUpdatedDate = '2025-12-25'

  const s2_items = t('sections.2.items', { returnObjects: true }) as string[]
  const s3_items = t('sections.3.items', { returnObjects: true }) as string[]
  const s5_items = t('sections.5.items', { returnObjects: true }) as string[]
  const s6_items = t('sections.6.items', { returnObjects: true }) as string[]
  const s7_items = t('sections.7.items', { returnObjects: true }) as string[]

  return (
    <PageContainer>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta
          name="description"
          content={t('seo.description')}
        />
      </Helmet>

      <Section style={{ paddingTop: '120px', minHeight: '80vh', alignItems: 'flex-start' }}>
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

        <CardText style={{ fontWeight: 'bold' }}>
          {t('meta.effectiveDate', { date: effectiveDate })}
          <br />
          {t('meta.lastUpdated', { date: lastUpdatedDate })}
        </CardText>

        <CardText>{t('intro.0')}</CardText>
        <CardText>{t('intro.1')}</CardText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <div>
            <h3>1. {t('sections.1.title')}</h3>
            <CardText>
              {t('sections.1.p1')}
            </CardText>
            <CardText>
              {t('sections.1.p2')}
            </CardText>
          </div>

          <div>
            <h3>2. {t('sections.2.title')}</h3>
            <CardText>
              {t('sections.2.p1')}
            </CardText>
            <CardText>{t('sections.2.lead')}</CardText>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {s2_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <CardText>
              {t('sections.2.note')}
            </CardText>
          </div>

          <div>
            <h3>3. {t('sections.3.title')}</h3>
            <CardText>
              {t('sections.3.p1')}
            </CardText>
            <CardText>{t('sections.3.lead')}</CardText>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {s3_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <CardText>
              {t('sections.3.note')}
            </CardText>
          </div>

          <div>
            <h3>4. {t('sections.4.title')}</h3>
            <CardText>{t('sections.4.p1')}</CardText>
            <CardText>
              {t('sections.4.p2')}
            </CardText>
          </div>

          <div>
            <h3>5. {t('sections.5.title')}</h3>
            <CardText>
              {t('sections.5.p1')}
            </CardText>
            <CardText>{t('sections.5.lead')}</CardText>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {s5_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>6. {t('sections.6.title')}</h3>
            <CardText>
              {t('sections.6.intro')}
            </CardText>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {s6_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <CardText>
              {t('sections.6.note')}
            </CardText>
          </div>

          <div>
            <h3>7. {t('sections.7.title')}</h3>
            <CardText>{t('sections.7.lead')}</CardText>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              {s7_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <CardText>
              {t('sections.7.note')}
            </CardText>
          </div>

          <div>
            <h3>8. {t('sections.8.title')}</h3>
            <CardText>
              {t('sections.8.p1')}
            </CardText>
            <CardText>
              {t('sections.8.p2')}
            </CardText>
          </div>

          <div>
            <h3>9. {t('sections.9.title')}</h3>
            <CardText>
              {t('sections.9.p1')}
            </CardText>
          </div>

          <div>
            <h3>10. {t('sections.10.title')}</h3>
            <CardText>
              {t('sections.10.p1')}
            </CardText>
            <CardText>
              {t('contact.emailLabel')}{' '}
              <a
                href="mailto:andriigudz.de@gmail.com"
                style={{ color: '#2D8259' }}
              >
                andriigudz.de@gmail.com
              </a>
            </CardText>
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

export default TermsConditionsPage

