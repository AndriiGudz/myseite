import { useEffect, useRef } from 'react'
import BlinkingText from '../../components/BlinkingText/BlinkingText'
import Button from '../../components/Button/Button'
import {
  BtnContact,
  ContactBlock,
  ContactBox,
  ContactMessage,
  DescriptionBox,
  FirstBlock,
  MyPhoto,
  PageBox,
  Title,
  TitleHome1,
  TitleHome2,
  TitleSmall,
} from './styles'
import myPhoto from '../../assets/my-foto-1.webp'

function Home() {
  const descriptionRef = useRef(null); // Используем useRef для DescriptionBox
  const contactRef = useRef(null); // Используем useRef для ContactMessage

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Добавляем класс при видимости
        } else {
          entry.target.classList.remove('visible'); // Убираем класс, если элемент не виден
        }
      },
      {
        threshold: 0.1, // Сработает, когда 10% элемента будет видимым
      }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }

      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <PageBox>
      <FirstBlock>
        <Title>
          <TitleSmall>
            <BlinkingText text="Junior" />
          </TitleSmall>
          <TitleHome1>Frontend</TitleHome1>
          <TitleHome2>Developer</TitleHome2>
        </Title>
        <MyPhoto src={myPhoto} alt="Gudz Andrii" />
        <DescriptionBox ref={descriptionRef}>
          <p>
            I am a professional with experience in project management, internet
            marketing, and IT consulting. Currently, I am in a career transition
            phase, having completed a Full-Stack development course.
          </p>
          <p>
            Now, I want to apply my diverse experience to a new role as a
            Frontend Developer.
          </p>
        </DescriptionBox>
      </FirstBlock>
      <a href="/path/to/resume.pdf">
      <Button name="Resume" />
      </a>
      <ContactBlock>
        <ContactBox>
          <ContactMessage ref={contactRef}>
            Please write to me if you have any questions or job offers for me.
          </ContactMessage>
        </ContactBox>
        <BtnContact>
        <a href="mailto:andreygudz.de@gmail.com">
          <Button name="Get in touch" />
          </a>
        </BtnContact>
      </ContactBlock>
    </PageBox>
  )
}

export default Home
