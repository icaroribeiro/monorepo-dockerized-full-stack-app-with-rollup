import { OK } from 'http-status'
import { Controller, Post, Route, Tags } from 'tsoa'

import { NewUser } from './user.model'
import { UserService } from './user.service'

@Route('users')
@Tags('users')
class UserController extends Controller {
  constructor(private userService: UserService) {
    super()
  }

  @Post('/')
  async createUser() {
    const newUser: NewUser = {
      name: 'Ícaro Ribeiro',
    }
    const insertedUser = await this.userService.createUser(newUser)
    console.log(insertedUser)
    this.setStatus(OK)
    return
  }
}

export { UserController }
