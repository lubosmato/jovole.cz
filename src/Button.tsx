import { FC } from "react"
import styled from "styled-components"
import { theme } from "./theme"
import { Megaphone } from "./Megaphone"

const StyledButton = styled.button`
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 20%;
  background-color: ${theme.primary};
  border-radius: 12px;
  border: 8px ${theme.secondary} solid;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.75);

  > svg {
    background-color: transparent;
    padding: 2rem;
    fill: ${theme.secondary};
  }

  &:hover {
    transform: scale(1.2) rotate(-5deg);
    box-shadow: 0px 0px 16px 8px ${theme.secondary};
  }
`

export type ButtonProps = {
  click?: () => void
}

export const Button: FC<ButtonProps> = ({ click }) => {
  return (
    <>
      <StyledButton onClick={click}>
        <Megaphone />
      </StyledButton>
    </>
  )
}
