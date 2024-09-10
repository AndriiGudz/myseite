import BlinkingText from '../../components/BlinkingText/BlinkingText'
import Button from '../../components/Button/Button'
import { DescriptionBox, FirstBlock, MyPhoto, PageBox, Title, TitleHome1, TitleHome2, TitleSmall } from './styles'
import myPhoto from '../../assets/my-foto-1.webp'

function Home() {
  return (
    <PageBox>
      <FirstBlock>
        <Title>
          <TitleSmall><BlinkingText text='Junior' /></TitleSmall>
          <TitleHome1>Frontend</TitleHome1>
          <TitleHome2>Developer</TitleHome2>
        </Title>
        <MyPhoto src={myPhoto} alt="Gudz Andrii" />
        <DescriptionBox>
          <p>I am a professional with experience in project management, internet marketing, and IT consulting. Currently, I am in a career transition phase, having completed a Full-Stack development course.</p>
          <p>Now, I want to apply my diverse experience to a new role as a Frontend Developer.</p>
        </DescriptionBox>
      </FirstBlock>
      {/* <Button name="Resume" /> */}
    </PageBox>
  )
}

export default Home
