import { IoWarning } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import CustomButton from "@/components/CustomButton"

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  gap: 20px;
  height: 100vh;
`

const NotFound = () => {
  const navigate = useNavigate()
  const clickYes = () => {
    navigate("/")
  }
  return (
    <ErrorWrapper>
      <h2>
        <IoWarning />
        <span> Oops !</span>
      </h2>
      <div>이런, 길을 잃으셨군요 ? </div>
      <CustomButton $primary onClick={clickYes} name="네, 돌려보내주세요." />
    </ErrorWrapper>
  )
}

export default NotFound
