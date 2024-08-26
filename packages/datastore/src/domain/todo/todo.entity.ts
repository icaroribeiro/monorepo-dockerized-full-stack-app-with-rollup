import { Column, Entity } from 'typeorm'

import { BaseEntity } from '../../utils/base.entity'

@Entity({
  name: 'todo',
})
export class Todo extends BaseEntity {
  @Column({
    nullable: false,
    length: 100,
  })
  content: string
}
