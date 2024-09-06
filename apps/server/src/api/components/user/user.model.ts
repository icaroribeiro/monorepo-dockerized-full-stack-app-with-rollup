import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

import * as schemas from '../../../db/schemas'

type NewUser = InferInsertModel<typeof schemas.user>

type InsertedUser = InferSelectModel<typeof schemas.user>

interface UserModel {
  save(newUser: NewUser): Promise<InsertedUser>
}

class UserModelImpl implements UserModel {
  constructor(private db: PostgresJsDatabase<Record<string, never>>) {}

  async save(newUser: NewUser): Promise<InsertedUser> {
    const result: InsertedUser[] = await this.db
      .insert(schemas.user)
      .values(newUser)
      .returning()
    return result[0]
  }
}

export { InsertedUser, NewUser, UserModel, UserModelImpl }
