"use client"

import { cn, unwrapRelation } from "@/lib/util"
import { Button } from "@/payload-types"
import { useCallback, useEffect, useState } from "react"
import { Megaphone } from "./Megaphone"

function getStorageKey(button: Button) {
  return `count-${button.id}`
}

export function SoundButton({ button }: { button: Button }) {
  const [count, setCount] = useState<number | undefined>(undefined)
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined)
  const sound = unwrapRelation(button.sound)

  useEffect(() => {
    setAudio(new Audio(sound.url ?? ""))
  }, [sound.url])

  useEffect(() => {
    setCount(parseInt(localStorage.getItem(getStorageKey(button)) ?? "0"))
  }, [button])

  useEffect(() => {
    localStorage.setItem(getStorageKey(button), (count ?? 0).toString())
  }, [count, button])

  const handleClick = () => {
    setCount((count) => (count ?? 0) + 1)
    play()
  }

  const [isPlaying, setPlaying] = useState(false)

  const play = useCallback(() => {
    if (!audio) return

    audio.currentTime = 0
    audio.play()
  }, [audio])

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

    audio?.addEventListener("playing", handlePlaying)
    audio?.addEventListener("pause", handlePause)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      audio?.removeEventListener("playing", handlePlaying)
      audio?.removeEventListener("pause", handlePause)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [audio, play])

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleClick}
        style={{ background: button.bgColor }}
        className={cn(
          "transition-all",
          isPlaying ? "shaking" : "",
          "hover:-rotate-8 hover:scale-125 hover:shadow-[0px_0px_16px_8px_currentColor]",
          "w-[230px] p-10 cursor-pointer rounded-xl shadow-[0px_0px_9px_0px_currentColor]",
          "border-8 border-[currentColor] mb-4",
        )}
      >
        <Megaphone />
      </button>
      <span>{count ?? <>&nbsp;</>}</span>
    </div>
  )
}
