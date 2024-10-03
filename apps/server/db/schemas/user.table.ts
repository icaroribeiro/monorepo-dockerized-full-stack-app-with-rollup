import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  cpf7: text('cpf7'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
})

export { userTable }
