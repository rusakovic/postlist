import ContainerCenter from 'components/atoms/Containers/ContainerCenter'
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText'
import React from 'react'
import { View } from 'react-native'
import styled from '@constants/styled'
import { PostType } from 'types/generalTypes'
import { PostPreviewStyles } from './styles'

interface PostPreviewProps {
  userId: PostType['userId']
  title: PostType['title']
}

const PostPreview: React.FunctionComponent<PostPreviewProps> = ({
  userId,
  title,
}) => {
  return (
    <View style={PostPreviewStyles.mainWrapper}>
      <View style={PostPreviewStyles.postContainer}>
        <ContainerCenter
          alignItemsCenter
          isVerticalCenter
          style={{
            width: '15%',
            borderRightWidth: 1,
            borderRightColor: styled.colors.grey10opacity,
          }}
        >
          <DefaultText>{userId}</DefaultText>
        </ContainerCenter>
        <ContainerCenter isContainer isVerticalCenter style={{ width: '85%' }}>
          <DefaultText numberOfLines={3} xs fitText={false}>
            "{title}"
          </DefaultText>
        </ContainerCenter>
      </View>
    </View>
  )
}

export default PostPreview
