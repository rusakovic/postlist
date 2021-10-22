import { RouteProp, useRoute } from '@react-navigation/native'
import ContainerCenter from 'components/atoms/Containers/ContainerCenter'
import ContainerSpace from 'components/atoms/Containers/ContainerSpace'
import DefaultText from 'components/atoms/Text/DefaultText/DefaultText'
import React, { FC } from 'react'
import { View } from 'react-native'
import { PostType } from 'types/generalTypes'
import { PostDetailScreenStyles } from './styles'

const PostDetailScreen: FC = () => {
  const {
    params: { body, title, userId },
  } = useRoute<RouteProp<Record<string, PostType>, string>>()

  return (
    <View style={PostDetailScreenStyles.shadowContainer}>
      {/* USER ID */}
      <ContainerCenter>
        <DefaultText s fontFamilyLight>
          {userId} wrote:
        </DefaultText>
      </ContainerCenter>
      <ContainerSpace mtXS />

      {/* TITLE */}
      <ContainerCenter>
        <DefaultText fontFamilyMedium numberOfLines={2}>
          {title}
        </DefaultText>
      </ContainerCenter>
      <ContainerSpace mtXXXS />

      {/* BODY */}
      <ContainerCenter alignItemsCenter>
        <DefaultText numberOfLines={10} s>
          {body}
        </DefaultText>
      </ContainerCenter>
    </View>
  )
}

export default PostDetailScreen
