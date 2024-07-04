import "@/styles/DashBaord.css"
import { BiSolidCategory } from "react-icons/bi"

const DashboardGif = () => {
  return (
    <div className="dashboard-display-board">
      <img src="/dash-board.gif" alt="baseImage" className="dashboard-image" />
    </div>
  )
}

const DashboardIntro = () => {
  return (
    <div className="dashboard-introduction">
      <div>
        <h2>
          <BiSolidCategory /> Intro
        </h2>
      </div>
      <div>
        <span>Emplty</span>
      </div>
    </div>
  )
}

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <DashboardGif />
          <DashboardIntro />
        </div>
      </div>
    </>
  )
}

export default DashBoard
