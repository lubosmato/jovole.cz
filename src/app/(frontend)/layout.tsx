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
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jo vole!</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
