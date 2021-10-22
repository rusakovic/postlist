import ContainerCenter from 'components/atoms/Containers/ContainerCenter'
import ContainerSpace from 'components/atoms/Containers/ContainerSpace'
import DefaultText from 'components/atoms/Text/DefaultText/DefaultText'
import { PostPreview } from 'components/molecules'
import React, { useEffect, useMemo, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  TextInput,
  View,
} from 'react-native'
import { useFetchData } from 'utils/fetchData/fetchDataHook'
import { PostListScreenStyles } from './styles'
import { Feather as Icon } from '@expo/vector-icons'
import styled from 'constants/styled'

interface PostListScreenProps {}

const PostListScreen: React.FunctionComponent<PostListScreenProps> = (
  props
) => {
  const { posts, error, isLoading } = useFetchData()

  const [searchText, setSearchText] = useState('')

  const filterPostsByUserId = () =>
    isSearchTextFilled
      ? posts.filter((item) => item.userId === +searchText)
      : posts

  const isSearchTextFilled = searchText.length

  const filteredPosts = useMemo(
    () => filterPostsByUserId(),
    [searchText, posts]
  )

  const onClearSearchInputHandler = () => {
    setSearchText('')
  }
  console.log('🚀 ~ file: PostListScreen.tsx ~ line 12 ~ posts', posts)
  return (
    <>
      <View style={PostListScreenStyles.searchWrapper}>
        <View style={PostListScreenStyles.searchInput}>
          <TextInput
            value={searchText}
            placeholder='search...'
            style={PostListScreenStyles.searchField}
            onChangeText={setSearchText}
            keyboardType='numeric'
          />
          {isSearchTextFilled ? (
            <Pressable
              style={PostListScreenStyles.crossButtonWrapper}
              onPress={onClearSearchInputHandler}
            >
              <Icon
                name='x-circle'
                size={20}
                color={styled.colors.grey30opacity}
              />
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      </View>
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
          renderItem={({ item: { userId, title } }) => {
            return <PostPreview userId={userId} title={title} />
          }}
          ListFooterComponent={<ContainerSpace mtXL />}
        />
      )}
    </>
  )
}

export default PostListScreen
