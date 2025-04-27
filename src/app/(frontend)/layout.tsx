import React from "react"
import "./styles.css"

export const metadata = {
  description: "Jo vole for life",
  title: "Jo vole",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
