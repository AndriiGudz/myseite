import styled from '@emotion/styled'

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 30px;
  width: 100%;
  gap: 32px;
`

export const BtnBoxResume = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
