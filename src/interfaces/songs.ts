import { Response } from './response'

export interface Song {
  title: string
  url: string
  input: string
  userId: string
}

export interface SongResponse extends Response {
  code: number
  message: string
  result: Song
  status: string
  statusMessage: string
}
