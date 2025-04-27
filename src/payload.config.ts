// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"

import { Sounds } from "./collections/Sounds"
import { Users } from "./collections/Users"
import { Buttons } from "./collections/Buttons"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Buttons, Sounds],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: true,
      collections: {
        sounds: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
