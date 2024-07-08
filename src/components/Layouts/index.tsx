import { Outlet } from "react-router-dom"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SideBar from "@/components/SideBar"
import { SideBarProvider } from "@/context/SideBarContext"
import "@/components/Layouts/index.css"

const Layout = () => {
  return (
    <SideBarProvider>
      <div className="layout-wrapper">
        <header>
          <Header />
        </header>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </SideBarProvider>
  )
}

export default Layout
