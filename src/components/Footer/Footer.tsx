import {FooterComponent, Copyright, Created, CopyrightLink} from './styles'

function Footer() {
    var year = new Date().getFullYear();

    return (
        <FooterComponent>
            <CopyrightLink to="/">
            <Copyright>© Gudz Andrii {year}</Copyright>
            </CopyrightLink>
            <Created>Designed and Developed by me.</Created>
        </FooterComponent>
    )
}

export default Footer