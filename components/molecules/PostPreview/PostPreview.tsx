import ContainerCenter from 'components/atoms/Containers/ContainerCenter'
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText'
import React from 'react'
import { View } from 'react-native'
import styled from '@constants/styled'
import { StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { PostType } from 'types/generalTypes'

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

const PostPreviewStyles = StyleSheet.create({
  mainWrapper: { flex: 1, marginHorizontal: wp(4), marginVertical: hp(1) },
  postContainer: {
    height: hp(10),
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 5,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    backgroundColor: styled.colors.white.white,
    shadowRadius: 5,
  },
})

export default PostPreview
