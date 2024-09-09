import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

import * as schemas from '../../../db/schemas'

type NewUser = InferInsertModel<typeof schemas.user>

type InsertedUser = InferSelectModel<typeof schemas.user>

interface IUserRepository {
  // save(newUser: NewUser): Promise<InsertedUser>
  save2(newUser: NewUser): Promise<string>
}

class UserRepository implements IUserRepository {
  constructor(private db: PostgresJsDatabase<Record<string, never>>) {}

  // async save(newUser: NewUser): Promise<InsertedUser> {
  //   const result: InsertedUser[] = await this.db
  //     .insert(schemas.user)
  //     .values(newUser)
  //     .returning()
  //   return result[0]
  // }

  async save2(newUser: NewUser): Promise<string> {
    try {
      this.db.execute(sql`SELECT 1`)
    } catch (error) {
      console.log(error)
    }
    return '67890'
  }
}

export { InsertedUser, IUserRepository, NewUser, UserRepository }
