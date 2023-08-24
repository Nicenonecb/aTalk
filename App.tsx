

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import AITalk from './views/AITalk/index'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'
import Dialogue from './views/AITalk/pages/Dialogue'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
const Stack = createStackNavigator()
// const Stack1 = createNativeStackNavigator()

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
          <Tab.Screen name="AI talk" component={AITalkStack} />
          {/* <Tab.Screen name="AI talk" component={AITalk} /> */}
          <Tab.Screen name="我" component={Screen2} />

        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}
function AITalkStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AITalk" component={AITalk as React.ComponentType} />
      <Stack.Screen name="Dialogue" component={Dialogue} options={ {cardStyle:{display:"none"}}} />
    </Stack.Navigator>
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

