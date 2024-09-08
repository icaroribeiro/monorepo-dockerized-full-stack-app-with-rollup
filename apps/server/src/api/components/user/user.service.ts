import { inject, injectable } from 'tsyringe'

import { InsertedUser, IUserRepository, NewUser } from './user.repository'

interface IUserService {
  // createUser(newUser: NewUser): Promise<InsertedUser>
  createUser2(newUser: NewUser): Promise<void>
}

class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  // async createUser(newUser: NewUser): Promise<InsertedUser> {
  //   return await this.userModel.save(newUser)
  // }

  async createUser2(newUser: NewUser): Promise<void> {
    const result = await this.userRepository.save2(newUser)
    console.log(result)
    return
  }
}

export { IUserService, UserService }
