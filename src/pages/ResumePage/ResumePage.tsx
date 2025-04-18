import { useTranslation } from 'react-i18next'
import Button from '../../components/Button/Button'
import Resume from '../../components/Resume/Resume'
import { BtnBoxResume, PageBox } from './styles'

function ResumePage() {
  const { t } = useTranslation()

  return (
    <PageBox>
      <Resume />
      <BtnBoxResume>
        <a href="CV-Gudz-Andrii.pdf">
          <Button name={t('resumePage.btnResEng')} />
        </a>
        <a href="Lebenslauf-Gudz-Andrii.pdf">
          <Button name={t('resumePage.btnResGer')} />
        </a>
      </BtnBoxResume>
    </PageBox>
  )
}

export default ResumePage
