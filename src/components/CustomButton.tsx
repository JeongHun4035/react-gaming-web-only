import styled, { css } from "styled-components"

interface StyledButtonProps {
  $padding?: string
  $fontSize?: string
  $border?: string
  $color?: string
  $background?: string
  $hoverColor?: string
  $hoverBackground?: string
  $hoverBorder?: string
  $primary?: boolean
}

interface ButtonProps {
  onClick?: () => void
  name: string
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${(props) => props.$padding || "6px 12px"};
  font-size: ${(props) => props.$fontSize || "12px"};
  line-height: 1.5;
  border: ${(props) => props.$border || "1px solid #0376f9"};
  border-radius: 4% / 8%;
  color: ${(props) => props.$color || "#0376f9"};
  background: ${(props) => props.$background || "#ffffff"};

  ${(props) =>
    props.$primary &&
    css`
      color: #ffffff;
      background: #0376f9;
    `}
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.$primary ? "#0376f9" : props.$hoverColor)};
    background: ${(props) =>
      props.$primary ? "#0255b5" : props.$hoverBackground};
    border-color: ${(props) =>
      props.$primary ? "#0255b5" : props.$hoverBorder};
  }
`

const CustomButton: React.FC<StyledButtonProps & ButtonProps> = ({
  onClick,
  name,
  ...props
}) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {name}
    </StyledButton>
  )
}

export default CustomButton
