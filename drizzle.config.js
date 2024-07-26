import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://content_db_owner:oOKJ8tchzf1l@ep-shiny-breeze-a7u4cf6e.ap-southeast-2.aws.neon.tech/content_db?sslmode=require",
  },
  verbose: true,
  strict: true,
})
