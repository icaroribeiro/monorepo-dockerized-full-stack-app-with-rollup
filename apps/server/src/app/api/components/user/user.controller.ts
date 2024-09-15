import { OK } from 'http-status'
import { Controller, Post, Route, Tags } from 'tsoa'
import { inject, injectable } from 'tsyringe'

// import { NewUser } from './user.repository'
import { IUserService } from './user.service'

@injectable()
@Route('users')
@Tags('users')
class UserController extends Controller {
  constructor(@inject('IUserService') private userService: IUserService) {
    super()
  }

  @Post('/')
  async createUser() {
    // const newUser: NewUser = {
    //   name: 'Ícaro Ribeiro',
    // }
    const insertedUser = await this.userService.createUser2()
    console.log(insertedUser)
    this.setStatus(OK)
    return
  }
}

export { UserController }
