import { useTranslation } from 'react-i18next'
import {
    ContentBox,
  IconDatum,
  LeftContentBox,
  LeftSidebar,
  MyPhoto,
  MyPhotoMedia,
  RightContentBox,
  RightSidebar,
  SidebarContainer,
  SubTitleH2,
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
} from './styles'
import myPhoto from '../../assets/Photo-AGudz.webp'
import HomeIcon from '@mui/icons-material/Home'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PublicIcon from '@mui/icons-material/Public'

function Resume() {
  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <RightSidebar>
        <TitleH1>
          Gudz <span>Andrii</span>
        </TitleH1>
        <SubTitleH2>
            <TitleH2>{t(`resumePage.subTitleh2`)}</TitleH2>
        </SubTitleH2>
        <MyPhotoMedia src={myPhoto} alt="Gudz Andrii" />
        <RightContentBox>
            <TitleH3>{t(`resumePage.profExp`)}</TitleH3>
            <ContentBox>
                <TitleH5>{t(`resumePage.intern`)}</TitleH5>
                <p><span>{t(`resumePage.ait`)}</span></p>
                <p><span>{t(`resumePage.aitY`)}</span></p>
                <li>{t(`resumePage.intCreat`)}</li>
                <li>{t(`resumePage.intImpl`)}</li>
                <li>{t(`resumePage.intDev`)}</li>
                <li>{t(`resumePage.intCollab`)}</li>
            </ContentBox>
            <ContentBox>
                <TitleH5>{t(`resumePage.prjMan`)}</TitleH5>
                <p><span>{t(`resumePage.simb`)}</span></p>
                <p><span>{t(`resumePage.simbY`)}</span></p>
                <li>{t(`resumePage.prPlan`)}</li>
                <li>{t(`resumePage.assPrT`)}</li>
                <li>{t(`resumePage.orgAndCoor`)}</li>
                <li>{t(`resumePage.commMan`)}</li>
                <li>{t(`resumePage.repMot`)}</li>
                <li>{t(`resumePage.prCom`)}</li>
            </ContentBox>
            <ContentBox>
                <TitleH5>{t(`resumePage.consu`)}</TitleH5>
                <p><span>{t(`resumePage.qarea`)}</span></p>
                <p><span>{t(`resumePage.qareaY`)}</span></p>
                <li>{t(`resumePage.conOdo`)}</li>
                <li>{t(`resumePage.wrtIn`)}</li>
                <li>{t(`resumePage.trCom`)}</li>
            </ContentBox>
            <ContentBox>
                <TitleH5>{t(`resumePage.intMark`)}</TitleH5>
                <p><span>{t(`resumePage.selfEmp`)}</span></p>
                <p><span>{t(`resumePage.selfEmpY`)}</span></p>
                <li>{t(`resumePage.cons`)}</li>
                <li>{t(`resumePage.devMarkStr`)}</li>
                <li>{t(`resumePage.webOpt`)}</li>
                <li>{t(`resumePage.setCam`)}</li>
                <li>{t(`resumePage.conMan`)}</li>
                <li>{t(`resumePage.webAnal`)}</li>
                <li>{t(`resumePage.creatRep`)}</li>
            </ContentBox>
            <TitleH3>{t(`resumePage.eruc`)}</TitleH3>
            <ContentBox>
                <TitleH5>{t(`resumePage.natUn`)}</TitleH5>
                <p><span>{t(`resumePage.natUnY`)}</span></p>
                <p>{t(`resumePage.autMan`)}</p>
            </ContentBox>
            <TitleH3>{t(`resumePage.furthEd`)}</TitleH3>
            <ContentBox>
                <p><span>{t(`resumePage.prLangY`)}</span></p>
                <p>{t(`resumePage.prLang`)}</p>
            </ContentBox>
            <ContentBox>
                <p><span>{t(`resumePage.softDevY`)}</span></p>
                <p>{t(`resumePage.softDev`)}</p>
            </ContentBox>
            <ContentBox>
                <p><span>{t(`resumePage.integCrY`)}</span></p>
                <p>{t(`resumePage.integCr`)}</p>
            </ContentBox>
        </RightContentBox>
      </RightSidebar>

      <LeftSidebar>
        <MyPhoto src={myPhoto} alt="Gudz Andrii" />
        <LeftContentBox>
          <TitleH4>{t(`resumePage.contDetal`)}</TitleH4>
          <IconDatum>
            <HomeIcon />
            <p>{t(`resumePage.address1`)}</p>
          </IconDatum>
          <IconDatum>
            <PhoneAndroidIcon />
            <p>{t(`resumePage.phone1`)}</p>
          </IconDatum>
          <IconDatum>
            <EmailIcon />
            <p>{t(`resumePage.email1`)}</p>
          </IconDatum>
          <IconDatum>
            <LinkedInIcon />
            <p><a href="https://www.linkedin.com/in/andriigudz/" target='_blank' rel="noopener noreferrer">{t(`resumePage.linkedin`)}</a></p>
          </IconDatum>
          <IconDatum>
            <PublicIcon />
            <p><a href="https://gudz-andrii.com/" target='_blank' rel="noopener noreferrer">{t(`resumePage.public`)}</a></p>
          </IconDatum>
          <IconDatum>
            <PersonIcon />
            <div>
              <p>
                <span>{t(`resumePage.perDat1`)}</span>
                {t(`resumePage.perDat11`)}
              </p>
              <p>
                <span>{t(`resumePage.perDat2`)}</span>
                {t(`resumePage.perDat21`)}
              </p>
              <p>
                <span>{t(`resumePage.perDat3`)}</span>
                {t(`resumePage.perDat31`)}
              </p>
            </div>
          </IconDatum>
        </LeftContentBox>
        <LeftContentBox>
          <TitleH4>{t(`resumePage.compSkil`)}</TitleH4>
          <IconDatum>
            <div>
              <p>
                <span>{t(`resumePage.specPr`)}</span>
              </p>
              <li>VS Code</li>
              <li>IntelliJ IDEA</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Jira</li>
              <li>Odoo</li>
              <li>Slack</li>
              <li>MS Office</li>
              <li>{t(`resumePage.etc`)}</li>
            </div>
            <div>
              <p><span>{t(`resumePage.lang`)}</span></p>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScipt</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Java</li>
            </div>
          </IconDatum>
        </LeftContentBox>
        <LeftContentBox>
          <TitleH4>{t(`resumePage.langSkils`)}</TitleH4>
          <div>
            <p>
              <span>{t(`resumePage.ukrainian`)}</span>
              {t(`resumePage.nat`)}
            </p>
            <p>
              <span>{t(`resumePage.russian`)}</span>
              {t(`resumePage.nat`)}
            </p>
            <p>
              <span>{t(`resumePage.german`)}</span>
              {t(`resumePage.b2l`)}
            </p>
            <p>
              <span>{t(`resumePage.english`)}</span>
              {t(`resumePage.a2l`)}
            </p>
          </div>
        </LeftContentBox>
        <LeftContentBox>
          <TitleH4>{t(`resumePage.strengths`)}</TitleH4>
          <div>
            <li>{t(`resumePage.teamwork`)}</li>
            <li>{t(`resumePage.wilLearn`)}</li>
            <li>{t(`resumePage.friendliness`)}</li>
            <li>{t(`resumePage.flexibility`)}</li>
          </div>
        </LeftContentBox>
        <LeftContentBox>
          <TitleH4>{t(`resumePage.interests`)}</TitleH4>
          <div>
            <li>{t(`resumePage.progr`)}</li>
            <li>{t(`resumePage.ai`)}</li>
            <li>{t(`resumePage.uxui`)}</li>
            <li>{t(`resumePage.volleyb`)}</li>
            <li>{t(`resumePage.tenn`)}</li>
          </div>
        </LeftContentBox>
      </LeftSidebar>
    </SidebarContainer>
  )
}

export default Resume
