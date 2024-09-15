import { IUserRepository } from './user.repository'

interface IUserService {
  createUser2(): Promise<void>
}

class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  // async createUser(newUser: NewUser): Promise<InsertedUser> {
  //   return await this.userModel.save(newUser)
  // }

  async createUser2(): Promise<void> {
    // const result = await this.userRepository.save2(newUser)
    console.log('result')
    return
  }
}

export { IUserService, UserService }
