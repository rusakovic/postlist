import { useNavigation } from '@react-navigation/core'
import ContainerCenter from 'components/atoms/Containers/ContainerCenter'
import ContainerSpace from 'components/atoms/Containers/ContainerSpace'
import DefaultText from 'components/atoms/Text/DefaultText/DefaultText'
import { PostPreview, SearchInput } from 'components/molecules'
import React, { useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable } from 'react-native'
import { Routes } from 'routes'
import { PostType } from 'types/generalTypes'
import { useFetchData } from 'utils/fetchData/fetchDataHook'

const PostListScreen = () => {
  const { navigate } = useNavigation()

  const { posts, error, isLoading } = useFetchData()
  const [searchText, setSearchText] = useState('')
  const isSearchTextFilled = !!searchText.length
  const onClearSearchInputHandler = () => {
    setSearchText('')
  }

  const filterPostsByUserId = () =>
    isSearchTextFilled
      ? posts.filter((item) => item.userId === +searchText)
      : posts

  const filteredPosts = useMemo(
    () => filterPostsByUserId(),
    [searchText, posts]
  )

  const onPostPress = (
    userId: PostType['userId'],
    title: PostType['title'],
    body: PostType['body'],
    id: PostType['id']
  ) => {
    navigate(Routes.PostDetail, {
      userId,
      title,
      body,
    })
  }

  return (
    <>
      <SearchInput
        setSearchText={setSearchText}
        searchText={searchText}
        isSearchTextFilled={isSearchTextFilled}
        onClearSearchInputHandler={onClearSearchInputHandler}
      />
      {isLoading ? (
        <ContainerCenter isMarginTop>
          <ContainerSpace mtXL />
          <ActivityIndicator size='large' />
        </ContainerCenter>
      ) : error ? (
        <ContainerCenter isContainer isVerticalCenter>
          <DefaultText numberOfLines={4}>Error occurs: {error}</DefaultText>
        </ContainerCenter>
      ) : (
        <FlatList
          data={filteredPosts}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item: { userId, title, body, id } }) => {
            return (
              <Pressable onPress={() => onPostPress(userId, title, body, id)}>
                <PostPreview userId={userId} title={title} />
              </Pressable>
            )
          }}
          ListFooterComponent={<ContainerSpace mtXL />}
        />
      )}
    </>
  )
}

export default PostListScreen
