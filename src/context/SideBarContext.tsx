import { ReactNode, createContext, useState, useContext } from "react"

interface SideBarContextType {
  isSideBarVisible: boolean
  toggleSideBar: () => void
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined)

export const useSideBarContext = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }
  return context
}

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarVisible((prevState) => !prevState)
  }

  return (
    <SideBarContext.Provider value={{ isSideBarVisible, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  )
}
