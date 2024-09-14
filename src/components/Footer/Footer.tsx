import {FooterComponent, Copyright, Created, CopyrightLink, LinkedInLink} from './styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    var year = new Date().getFullYear();

    return (
        <FooterComponent>
            <CopyrightLink to="/">
            <Copyright>© Gudz Andrii {year}</Copyright>
            </CopyrightLink>
            <LinkedInLink 
                to="https://www.linkedin.com/in/andriigudz/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <LinkedInIcon className="linkedin-icon" />
            </LinkedInLink>
            <Created>Designed and Developed by me.</Created>
        </FooterComponent>
    )
}

export default Footer
