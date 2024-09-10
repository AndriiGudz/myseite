import { useState } from 'react'
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { LayoutComponent, Main } from "./styles"
import type { LayoutProps } from './types'

function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleMenuToggle = (isOpen: boolean) => {
    setMenuOpen(isOpen)
  }

  return (
    <LayoutComponent className={menuOpen ? 'menu-open' : ''}>
      <Header onMenuToggle={handleMenuToggle} />
      <Main>{children}</Main>
      <Footer />
    </LayoutComponent>
  )
}

export default Layout
