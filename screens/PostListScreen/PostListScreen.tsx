import React from 'react'
import { View } from 'react-native'
import { useFetchData } from 'utils/fetchData/fetchDataHook'

interface PostListScreenProps {}

const PostListScreen: React.FunctionComponent<PostListScreenProps> = (
  props
) => {
  const { posts, error, isLoading } = useFetchData()
  return <View></View>
}

export default PostListScreen
