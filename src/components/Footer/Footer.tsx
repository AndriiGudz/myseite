import {FooterComponent, Copyright, Created} from './styles'

function Footer() {
    var year = new Date().getFullYear();

    return (
        <FooterComponent>
            <Copyright>© Gudz Andrii {year}</Copyright>
            <Created>Designed and Developed by me.</Created>
        </FooterComponent>
    )
}

export default Footer