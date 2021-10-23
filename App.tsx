import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Routes } from '@routes'
import { PostDetailScreen, PostListScreen } from '@screens'
import styled from '@constants/styled'
import { StatusBar } from 'expo-status-bar'
import { RootStackParamList } from 'types/generalTypes'

const RootStack = createNativeStackNavigator<RootStackParamList>()

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
      <RootStack.Navigator>
        <RootStack.Screen
          name={Routes.PostList}
          component={PostListScreen}
          options={{ headerTitle: 'Posts' }}
        />
        <RootStack.Screen
          name={Routes.PostDetail}
          component={PostDetailScreen}
          options={{ headerTitle: '' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <>
      <StatusBar style='dark' />
      <Navigator />
    </>
  )
}

export default App
