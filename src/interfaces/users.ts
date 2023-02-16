import { Response } from './response'

export interface User {
  _id: string
  avatar: string
  username: string
  email: string
  password: string
}

export interface UserResponseData {
  token: string
  user: User
}

export interface UserResponse extends Response {
  result: UserResponseData
}
