import "@/components/styles/Sidebar.css"
import { FaWindowClose } from "react-icons/fa"

import CustomTree from "@/components/CustomTree"
import { ITreeItem } from "@/components/types/tree"
import { useSideBarContext } from "@/context/SideBarContext"

const mockTreeData: ITreeItem[] = [
  {
    parentId: "#",
    id: "001",
    name: "Parents 1",
  },
  {
    parentId: "#",
    id: "002",
    name: "Parents 2",
  },
  {
    parentId: "001",
    id: "001-1",
    name: "child 1-1",
  },
  {
    parentId: "001-1",
    id: "001-2",
    name: "child 1-2 ",
  },
  {
    parentId: "002",
    id: "002-1",
    name: "child 2-1",
  },
]

const SideBar = () => {
  const { isSideBarVisible, toggleSideBar } = useSideBarContext()
  return (
    <div
      className={`sidebar-wrapper ${isSideBarVisible ? "visible" : "hidden"}`}
    >
      <div className="sidebar-header">
        <FaWindowClose
          className="sidebar-close-button"
          onClick={toggleSideBar}
        />
      </div>
      <div className="sidebar-menus">
        <CustomTree data={mockTreeData} />
      </div>
      <div className="sidebar-footer">footer</div>
    </div>
  )
}

export default SideBar
