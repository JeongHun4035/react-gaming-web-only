import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SideBar from "@/components/SideBar"
import { SideBarProvider } from "@/context/SideBarContext"

import "@/components/Layouts/index.css"

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <SideBarProvider>
      <div className="layout-wrapper">
        <header>
          <Header />
        </header>
        <aside>
          <SideBar />
        </aside>
        <main>{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </SideBarProvider>
  )
}

export default Layout
