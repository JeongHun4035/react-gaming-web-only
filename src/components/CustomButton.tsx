import styled, { css } from "styled-components"

interface CustomButtonProps {
  padding?: string
  fontSize?: string
  border?: string
  color?: string
  background?: string
  primary?: boolean
}

const StyledButton = styled.button<CustomButtonProps>`
  padding: ${(props) => props.padding || "6px 12px"};
  font-size: ${(props) => props.fontSize || "12px"};
  line-height: 1.5;
  border: ${(props) => props.border || "1px solid #0376f9"};
  border-radius: 4% / 8%;
  color: ${(props) => props.color || "#0376f9"};
  background: ${(props) => props.background || "#ffffff"};

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
      background: #0376f9;
    `}
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? "#0255b5" : "#f0f0f0")};
    border-color: ${(props) => (props.primary ? "#0255b5" : "#0376f9")};
  }
`

const CustomButton: React.FC<
  CustomButtonProps & { children: React.ReactNode }
> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default CustomButton
