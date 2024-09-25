import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const FooterComponent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CopyrightLink = styled(Link)`
  text-decoration: none;
  color: #1a1a1a;

  &:hover {
    text-decoration: underline;
    color: #b4aea8;
  }
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

export const LinkedInLink = styled(Link)`
  text-decoration: none;
  color: #1a1a1a;

  &:hover {
    text-decoration: none;
    color: #b4aea8;
  }

  .linkedin-icon {
    font-size: 42px;

    @media (max-width: 600px) {
      font-size: inherit;
    }
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
