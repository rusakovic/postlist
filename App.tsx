import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Routes } from '@routes'
import { PostDetailScreen, PostListScreen } from '@screens'
import styled from '@constants/styled'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: styled.colors.white.white,
    },
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        <Stack.Screen name={Routes.PostList} component={PostListScreen} />
        <Stack.Screen name={Routes.PostDetail} component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return <Navigator />
}

export default App
