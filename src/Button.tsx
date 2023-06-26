import { FC, useEffect, useState } from "react"
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

  min-width: 230px;

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

const Counter = styled.div`
  font-size: 1rem;
  color: ${theme.secondary};
  margin-top: 1rem;
`

export type ButtonProps = {
  click?: () => void
}

const COUNT_KEY = "count"

export const Button: FC<ButtonProps> = ({ click }) => {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem(COUNT_KEY) ?? "0"),
  )

  useEffect(() => {
    localStorage.setItem(COUNT_KEY, count.toString())
  }, [count])

  const handleClick = () => {
    setCount((count) => count + 1)
    if (click) click()
  }

  return (
    <>
      <StyledButton onClick={handleClick}>
        <Megaphone />
      </StyledButton>
      <Counter>{count}</Counter>
    </>
  )
}
