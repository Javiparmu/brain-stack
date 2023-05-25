import { Response } from './response';

export enum Role {
  'ADMIN',
  'USER',
}

export interface User {
  _id: string;
  avatar: string;
  username: string;
  email: string;
  password: string;
  role: Role;
}

export interface UserResponseData {
  token: string;
  user: User;
}

export interface UserResponse extends Response {
  result: UserResponseData;
}
