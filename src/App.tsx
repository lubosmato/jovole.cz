import { FC, useEffect, useMemo, useState } from "react"
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

const Earthquake = styled.div<{ isEnabled: boolean }>`
  animation-name: ${(props) => (props.isEnabled ? "shake-hard" : "")};
  animation-duration: 100ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @keyframes shake-hard {
    2% {
      transform: translate(3px, -8px) rotate(-0.5deg);
    }

    4% {
      transform: translate(-9px, 5px) rotate(-0.5deg);
    }

    6% {
      transform: translate(-6px, 9px) rotate(2.5deg);
    }

    8% {
      transform: translate(-8px, 9px) rotate(0.5deg);
    }

    10% {
      transform: translate(-6px, -1px) rotate(0.5deg);
    }

    12% {
      transform: translate(-9px, 2px) rotate(2.5deg);
    }

    14% {
      transform: translate(-2px, 9px) rotate(-1.5deg);
    }

    16% {
      transform: translate(0px, 10px) rotate(-0.5deg);
    }

    18% {
      transform: translate(-3px, -3px) rotate(3.5deg);
    }

    20% {
      transform: translate(8px, -1px) rotate(3.5deg);
    }

    22% {
      transform: translate(10px, -4px) rotate(-0.5deg);
    }

    24% {
      transform: translate(0px, -8px) rotate(0.5deg);
    }

    26% {
      transform: translate(-1px, 2px) rotate(-1.5deg);
    }

    28% {
      transform: translate(8px, 8px) rotate(-1.5deg);
    }

    30% {
      transform: translate(-9px, 5px) rotate(-0.5deg);
    }

    32% {
      transform: translate(1px, 10px) rotate(1.5deg);
    }

    34% {
      transform: translate(7px, -4px) rotate(3.5deg);
    }

    36% {
      transform: translate(2px, -8px) rotate(-1.5deg);
    }

    38% {
      transform: translate(6px, 10px) rotate(-2.5deg);
    }

    40% {
      transform: translate(3px, -1px) rotate(0.5deg);
    }

    42% {
      transform: translate(-5px, -4px) rotate(-0.5deg);
    }

    44% {
      transform: translate(-3px, 10px) rotate(-2.5deg);
    }

    46% {
      transform: translate(-7px, 2px) rotate(-2.5deg);
    }

    48% {
      transform: translate(-5px, -1px) rotate(3.5deg);
    }

    50% {
      transform: translate(-7px, -1px) rotate(1.5deg);
    }

    52% {
      transform: translate(2px, 8px) rotate(-1.5deg);
    }

    54% {
      transform: translate(7px, -9px) rotate(0.5deg);
    }

    56% {
      transform: translate(-4px, 1px) rotate(1.5deg);
    }

    58% {
      transform: translate(-2px, -8px) rotate(1.5deg);
    }

    60% {
      transform: translate(-7px, 1px) rotate(-0.5deg);
    }

    62% {
      transform: translate(-5px, -2px) rotate(-0.5deg);
    }

    64% {
      transform: translate(-2px, 5px) rotate(-2.5deg);
    }

    66% {
      transform: translate(-2px, 7px) rotate(3.5deg);
    }

    68% {
      transform: translate(-7px, -1px) rotate(-0.5deg);
    }

    70% {
      transform: translate(-5px, 8px) rotate(-2.5deg);
    }

    72% {
      transform: translate(-3px, -9px) rotate(-2.5deg);
    }

    74% {
      transform: translate(-2px, -7px) rotate(3.5deg);
    }

    76% {
      transform: translate(-5px, -4px) rotate(2.5deg);
    }

    78% {
      transform: translate(-2px, 10px) rotate(-1.5deg);
    }

    80% {
      transform: translate(4px, 9px) rotate(3.5deg);
    }

    82% {
      transform: translate(3px, -1px) rotate(-1.5deg);
    }

    84% {
      transform: translate(4px, -6px) rotate(0.5deg);
    }

    86% {
      transform: translate(-1px, 4px) rotate(-0.5deg);
    }

    88% {
      transform: translate(10px, -5px) rotate(3.5deg);
    }

    90% {
      transform: translate(-3px, 7px) rotate(-0.5deg);
    }

    92% {
      transform: translate(5px, -2px) rotate(2.5deg);
    }

    94% {
      transform: translate(-2px, -7px) rotate(-0.5deg);
    }

    96% {
      transform: translate(0px, 10px) rotate(-2.5deg);
    }

    98% {
      transform: translate(-4px, 3px) rotate(2.5deg);
    }

    0%,
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
`

export const App: FC = () => {
  const [isPlaying, setPlaying] = useState(false)

  const audio = useMemo(() => new Audio("/jovole.mp3"), [])
  const play = () => {
    audio.currentTime = 0
    audio.play()
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        play()
      }
    }

    const handlePlaying = () => {
      setPlaying(true)
    }

    const handlePause = () => {
      setPlaying(false)
    }

    audio.addEventListener("playing", handlePlaying)
    audio.addEventListener("pause", handlePause)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      audio.removeEventListener("playing", handlePlaying)
      audio.removeEventListener("pause", handlePause)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <Main>
      <Title>Jo vole!</Title>
      <Earthquake isEnabled={isPlaying}>
        <Button click={play}></Button>
      </Earthquake>
    </Main>
  )
}
