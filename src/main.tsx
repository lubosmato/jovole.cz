import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"
import { SoundProvider } from "./SoundContext.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SoundProvider>
      <App />
    </SoundProvider>
  </React.StrictMode>,
)
