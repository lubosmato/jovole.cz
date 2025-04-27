import { CollectionConfig } from "payload"

export const Buttons: CollectionConfig = {
  slug: "buttons",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "color",
      type: "text",
      required: true,
    },
    {
      name: "bgColor",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "sound",
      type: "relationship",
      relationTo: "sounds",
      required: true,
      hasMany: false,
    },
    {
      name: "default",
      type: "checkbox",
      required: true,
    },
  ],
}
