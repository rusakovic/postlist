import { Routes } from 'routes'

export interface PostType {
  userId: number
  id: number
  title: string
  body: string
}

export type RootStackParamList = {
  [Routes.PostList]: undefined
  [Routes.PostDetail]: {
    userId: PostType['userId']
    title: PostType['title']
    body: PostType['body']
  }
}
