import type { CollectionConfig } from "payload"

export const Sounds: CollectionConfig = {
  slug: "sounds",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
  ],
  upload: {
    mimeTypes: ["audio/*"],
  },
}
