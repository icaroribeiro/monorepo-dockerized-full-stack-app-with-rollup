import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
const user = pgTable('user', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    cpf: text('cpf'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at'),
});
export { user };
