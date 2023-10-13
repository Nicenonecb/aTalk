

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';


import AITalk from './views/AITalk/index'

import Dialogue from './views/AITalk/pages/Dialogue'


const Stack = createStackNavigator()


const theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        color: 'red',
      },
    },
  },
});
// 创建 tab 导航器
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AITalk" component={AITalk as React.ComponentType} />
          <Stack.Screen name="Dialogue" component={Dialogue}  />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

