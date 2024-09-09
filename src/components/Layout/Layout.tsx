import type { LayoutProps } from "./types"
import { LayoutComponent, Main } from "./styles"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutComponent>
  )
}

export default Layout
