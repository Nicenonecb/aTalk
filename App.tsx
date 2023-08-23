

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AITalk from './views/AITalk/index'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
// 创建一些屏幕组件
function Screen1() {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
    </View>
  );
}

// 创建 tab 导航器
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen name="AI talk" component={AITalk} />
          <Tab.Screen name="我" component={Screen2} />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
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

