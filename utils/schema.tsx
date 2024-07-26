import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";



export const AiOutput = (
    pgTable("ai_output", {
        id: serial("id").primaryKey(),
        output: varchar("formData").notNull(),
        aiResponse : text("aiResponse").notNull(),
        templateSlug : varchar("templateSlug").notNull(),
        createdBy : varchar("createdBy").notNull(),
        createAt: varchar("createAt").notNull(),
    })
)