import styled from '@constants/styled'
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const SearchInputStyles = StyleSheet.create({
  mainContainer: { flex: 1 },
  searchWrapper: {
    marginHorizontal: wp(4),
    marginVertical: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    borderColor: styled.colors.grey20opacity,
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(5.5),
  },
  searchField: {
    width: '85%',
    paddingHorizontal: '5%',
  },
  crossButtonWrapper: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
