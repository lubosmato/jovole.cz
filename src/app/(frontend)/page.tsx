import { getPayload } from "payload"

import config from "@/payload.config"
import { notFound, redirect, RedirectType } from "next/navigation"

export const revalidate = 60

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const {
    docs: [defaultButton],
  } = await payload.find({
    collection: "buttons",
    limit: 1,
    where: {
      default: { equals: true },
    },
  })

  if (!defaultButton) notFound()

  redirect(`/${defaultButton.slug}`, RedirectType.replace)
}
