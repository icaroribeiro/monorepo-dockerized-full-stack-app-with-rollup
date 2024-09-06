import { InsertedUser, NewUser, UserModel } from './user.model'

interface UserService {
  createUser(newUser: NewUser): Promise<InsertedUser>
}

class UserServiceImpl implements UserService {
  constructor(private userModel: UserModel) {}

  async createUser(newUser: NewUser): Promise<InsertedUser> {
    return await this.userModel.save(newUser)
  }
}

export { UserService, UserServiceImpl }
