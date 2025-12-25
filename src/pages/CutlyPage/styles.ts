import styled from '@emotion/styled'
import { motion } from 'framer-motion'

// --- Color Palette (2025 Natural/Eco) ---
const colors = {
  primary: '#2D8259',
  primaryLight: '#5BA682',
  primaryDark: '#1F5D41',
  background: '#FEFBF7',
  surface: '#FFFFFF',
  secondaryBg: '#F8F6F2',
  textMain: '#0A0A0A',
  textSecondary: '#4A4A4A',
  sage: '#7FB069',
  terracotta: '#E85D3F',
  lavender: '#9B6B9E',
  cream: '#F7EDD7',
  charcoal: '#2C3D4F',
  gradient: 'linear-gradient(to right, #2D8259, #4CAF50)',
}

// --- Common Styled Components ---

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background};
  font-family: 'Nunito', sans-serif;
  color: ${colors.textMain};
  overflow-x: hidden;
`

export const Section = styled(motion.section)`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 40px 20px; /* Reduced from 60px */
    gap: 30px;
  }
`

export const HeroSection = styled(Section)`
  padding-top: 140px;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 100px;
    min-height: auto;
    padding-bottom: 60px;
  }
`

export const LogoImage = styled(motion.img)`
  width: 350px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 200px;
  }
`

export const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${colors.primaryDark};
  line-height: 1.2;
  margin-bottom: 16px;

  span {
    background: ${colors.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${colors.textSecondary};
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 24px;
  }
`

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.primaryDark};
  text-align: center;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  align-self: center;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: ${colors.gradient};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 120px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 16px;
  }
`

export const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`

export const PrimaryButton = styled.a`
  background: ${colors.gradient};
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(45, 130, 89, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 130, 89, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 360px) {
    grid-template-columns: 1fr; /* Force single column on very small devices */
  }
`

export const Card = styled(motion.div)`
  background: ${colors.surface};
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${colors.secondaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 24px;
  margin-bottom: 8px;
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.textMain};
`

export const CardText = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
`

// New component to replace inline styles
export const DescriptionText = styled(CardText)`
  font-size: 1.25rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: left; /* Better readability on mobile */
  }
`

export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${colors.surface};
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);

  svg {
    color: ${colors.primary};
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 24px;

    svg {
      margin-bottom: 8px;
    }
  }
`

export const InfoBlock = styled.div`
  background: ${colors.secondaryBg};
  padding: 40px;
  border-radius: 24px;
  border-left: 5px solid ${colors.primary};

  @media (max-width: 768px) {
    padding: 24px;
    border-left: 4px solid ${colors.primary};
  }
`

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  width: 100%;
  justify-items: center;
`

export const TechCard = styled(motion.div)`
  background: ${colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: 100%;
  height: 140px;
  gap: 12px;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(45, 130, 89, 0.15);
    border-color: ${colors.primaryLight};
  }

  svg {
    font-size: 2.5rem;
    color: ${colors.primary};
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: ${colors.primaryDark};
  }
`

export const TechName = styled.span`
  font-weight: 700;
  font-size: 0.95rem;
  color: ${colors.textMain};
  text-align: center;
`

export const Footer = styled.footer`
  background: ${colors.primaryDark};
  color: white;
  padding: 60px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const FooterLink = styled.a`
  color: ${colors.primaryLight};
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`

export const LegalText = styled.div`
  margin-top: 40px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`
