import { useEffect, useRef, useCallback } from 'react';
import BlinkingText from '../../components/BlinkingText/BlinkingText';
import Button from '../../components/Button/Button';
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
} from './styles';
import myPhoto from '../../assets/my-foto-1.webp';
import { useTranslation } from 'react-i18next'; // Импортируем хук для перевода

function Home() {
  const { t } = useTranslation(); // Используем хук для доступа к переводам

  // Используем useCallback, чтобы гарантировать стабильность функции и избежать ESLint ошибок
  const descriptionRef = useRef<HTMLDivElement | null>(null); 
  const contactRef = useRef<HTMLParagraphElement | null>(null); 

  useEffect(() => {
    const currentDescriptionRef = descriptionRef.current;
    const currentContactRef = contactRef.current;

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

    if (currentDescriptionRef) {
      observer.observe(currentDescriptionRef);
    }

    if (currentContactRef) {
      observer.observe(currentContactRef);
    }

    // Функция очистки при размонтировании компонента
    return () => {
      if (currentDescriptionRef) {
        observer.unobserve(currentDescriptionRef);
      }

      if (currentContactRef) {
        observer.unobserve(currentContactRef);
      }
    };
  }, []);

  return (
    <PageBox>
      <FirstBlock>
        <Title>
          <TitleSmall>
            <BlinkingText text={t('titleSmall')} /> {/* Перевод текста */}
          </TitleSmall>
          <TitleHome1>{t('titleHome1')}</TitleHome1> {/* Перевод текста */}
          <TitleHome2>{t('titleHome2')}</TitleHome2> {/* Перевод текста */}
        </Title>
        <MyPhoto src={myPhoto} alt="Gudz Andrii" />
        <DescriptionBox ref={descriptionRef}>
          <p>{t('description1')}</p> {/* Перевод текста */}
          <p>{t('description2')}</p> {/* Перевод текста */}
        </DescriptionBox>
      </FirstBlock>

      <a href="/resume">
        <Button name={t('resume')} /> {/* Перевод текста */}
      </a>

      <ContactBlock>
        <ContactBox>
          <ContactMessage ref={contactRef}>
            {t('contactMessage')} {/* Перевод текста */}
          </ContactMessage>
        </ContactBox>
        <BtnContact>
          <a href="mailto:andreygudz.de@gmail.com">
            <Button name={t('getInTouch')} /> {/* Перевод текста */}
          </a>
        </BtnContact>
      </ContactBlock>
    </PageBox>
  );
}

export default Home;
