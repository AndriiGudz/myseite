import styled from '@emotion/styled'

export const FooterComponent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Copyright = styled.div`
  font-size: 12px;
  margin-left: 30px;
  letter-spacing: 0.05em; /* 5% от размера шрифта */
  

  @media (max-width: 600px) {
    font-size: 8px;
    margin-left: 20px;
  }
`

export const Created = styled.div`
  font-size: 12px;
  margin-right: 30px;
  letter-spacing: 0.05em; /* 5% от размера шрифта */
  
  @media (max-width: 600px) {
    font-size: 8px;
    margin-left: 20px;
  }
`
