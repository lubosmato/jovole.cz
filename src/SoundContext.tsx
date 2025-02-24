import React, { createContext, useContext, useState } from "react"

export type SoundType = "jovole" | "jozo"

type SoundContextType = {
  soundType: SoundType
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export const useSoundContext = () => {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider")
  }
  return context
}

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [soundType] = useState<SoundType>(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const soundParam = searchParams.get("sound")

    if (soundParam !== "jovole" && soundParam !== "jozo") {
      return "jovole"
    }

    return soundParam
  })

  const value = {
    soundType,
  }

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}
