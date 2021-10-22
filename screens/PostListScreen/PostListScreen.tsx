import ContainerCenter from 'components/atoms/Containers/ContainerCenter'
import ContainerSpace from 'components/atoms/Containers/ContainerSpace'
import DefaultText from 'components/atoms/Text/DefaultText/DefaultText'
import { PostPreview, SearchInput } from 'components/molecules'
import React, { useMemo, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useFetchData } from 'utils/fetchData/fetchDataHook'

const PostListScreen = () => {
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
