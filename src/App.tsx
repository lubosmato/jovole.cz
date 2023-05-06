import { FC, useMemo } from "react"
import "./reset.css"
import "@fontsource/pacifico"

import { Button } from "./Button"
import styled from "styled-components"
import { theme } from "./theme"

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
`

const Main = styled.div`
  background-color: ${theme.primary};
  color: ${theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`

export const App: FC = () => {
  const audio = useMemo(() => new Audio("/jovole.mp3"), [])
  const play = () => {
    audio.currentTime = 0
    audio.play()
  }

  return (
    <Main>
      <Title>Jo vole!</Title>
      <Button click={play}></Button>
    </Main>
  )
}
