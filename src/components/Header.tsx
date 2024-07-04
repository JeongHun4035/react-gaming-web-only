import "@/components/styles/Header.css"

import { FiSettings } from "react-icons/fi"
import { HiOutlineMenu } from "react-icons/hi"
import { HiMiniBellAlert } from "react-icons/hi2"
import { RiUser5Fill } from "react-icons/ri"

import { useSideBarContext } from "@/context/SideBarContext"

const SideController = () => {
  const { toggleSideBar } = useSideBarContext()
  return (
    <div className="side-controller" onClick={toggleSideBar}>
      <HiOutlineMenu />
    </div>
  )
}

const UserInfo = () => {
  const userName = "테스트"
  return (
    <>
      <RiUser5Fill />
      <span> {userName} </span>
    </>
  )
}

const Preferences = () => {
  return (
    <div className="preferences-wrapper">
      <div className="preferences-item ">
        <UserInfo />
      </div>
      <div className="preferences-item ">
        <HiMiniBellAlert />
      </div>
      <div className="preferences-item ">
        <FiSettings />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <SideController />
      </div>
      <div>
        <Preferences />
      </div>
    </div>
  )
}

export default Header
