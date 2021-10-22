import { StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import styled from 'constants/styled'

export const PostDetailScreenStyles = StyleSheet.create({
  shadowContainer: {
    marginTop: hp(3),
    marginHorizontal: wp(5),
    paddingVertical: hp(2),
    paddingHorizontal: wp(3),
    height: hp(50),
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 5,
    },
    shadowColor: styled.colors.black,
    shadowOpacity: 0.2,
    backgroundColor: styled.colors.white.white,
    shadowRadius: 5,
  },
})
