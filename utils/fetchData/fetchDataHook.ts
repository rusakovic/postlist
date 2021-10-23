import { useEffect, useState } from 'react'
import { DataPostAPIs } from '@constants/constants'
import { PostType } from 'types/generalTypes'
import { isEmpty } from 'lodash'

export const useFetchData = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    try {
      setError(null)
      setIsLoading(true)

      const fetchReq = await fetch(DataPostAPIs.allPostsAPI)
      const fetchRes = await fetchReq.json()

      if (!isEmpty(fetchRes)) {
        setPosts(fetchRes)
        setIsLoading(false)
      } else {
        setError('Posts not fetched')
        setIsLoading(false)
        setPosts([])
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message
        setError(errorMessage)
        setIsLoading(false)
        setPosts([])
      }
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, isLoading, error }
}
