import { getPayload } from "payload"

import config from "@/payload.config"
import { notFound } from "next/navigation"
import { SoundButton } from "./SoundButton"
import "@fontsource/pacifico"

export default async function HomePage({ params }: { params: Promise<{ button: string }> }) {
  const { button: slug } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const {
    docs: [button],
  } = await payload.find({
    collection: "buttons",
    where: {
      slug: { equals: slug },
    },
    depth: 1,
    limit: 1,
  })

  if (!button) {
    notFound()
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-dvh"
      style={{ background: button.bgColor, color: button.color }}
    >
      <h1 className="text-7xl mb-6">{button.title}</h1>
      <SoundButton button={button} />
    </div>
  )
}
