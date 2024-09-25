import styled from '@emotion/styled'

interface StyledButtonProps {
  disabled: boolean
  buttonType: string
  customColor?: string
}

export const ButtonComponent = styled.button<StyledButtonProps>`
  width: auto;
  height: auto;
  padding: 10px;
  border: 3px solid transparent; /* Исходный бордер будет градиентным */
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  background: ${({ disabled, customColor }) =>
    disabled ? 'lightgray' : customColor ? customColor : '#fff'};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: color 0.4s ease, box-shadow 0.4s ease;

  /* Добавляем радиальный градиент в качестве бордера */
  border-image: linear-gradient(to right, #1a1a1a, #d6ccc2) 1;

  /* Стили для активной кнопки */
  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      border-image: radial-gradient(circle, #1A1A1A, #D6CCC2) 1;
      box-shadow: 0 0 6px rgba(214, 204, 194, 0.6), 0 0 12px rgba(26, 26, 26, 0.6);
      animation: borderAnimation 1.5s infinite linear;
    }
  `}

  /* Анимация для градиента при наведении */
  @keyframes borderAnimation {
    0% {
      border-image: radial-gradient(circle, #1a1a1a, #d6ccc2) 1;
    }
    50% {
      border-image: radial-gradient(circle, #d6ccc2, #1a1a1a) 1;
    }
    100% {
      border-image: radial-gradient(circle, #1a1a1a, #d6ccc2) 1;
    }
  }

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 10px;
  }
`
