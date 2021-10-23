import styled from 'constants/styled'
import React from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { SearchInputStyles } from './styles'
import { Feather as Icon } from '@expo/vector-icons'

interface SearchInputProps {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  isSearchTextFilled: boolean
  onClearSearchInputHandler: () => void
  isDisabled: boolean
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  searchText,
  setSearchText,
  isSearchTextFilled,
  onClearSearchInputHandler,
  isDisabled,
}) => {
  return (
    <View style={SearchInputStyles.searchWrapper}>
      <View style={SearchInputStyles.searchInput}>
        <TextInput
          value={searchText}
          placeholder='search...'
          style={SearchInputStyles.searchField}
          onChangeText={setSearchText}
          keyboardType='numeric'
          editable={!isDisabled}
          selectTextOnFocus={!isDisabled}
        />
        {isSearchTextFilled ? (
          <Pressable
            style={SearchInputStyles.crossButtonWrapper}
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
  )
}

export default SearchInput
