import React from 'react';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App'
import a from './src/app/a';
import b from './src/app/b';
import c from './src/app/c';
import 'react-native-gesture-handler';
import './styles.js';


export default function RootLayout( ) {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen name="App" component={App}
          options={{ headerShown: false, headerStyle: { backgroundColor: '#f0f0f0' } }} />
          <Stack.Screen name="a" component={a}
          options={({ navigation }) => ({
          title: 'a titulo...',
          headerStyle: { backgroundColor: '#f0f0f0' },
          })} />
          <Stack.Screen name="b" component={b}
          options={({ navigation }) => ({
          title: 'b titulo...',
          headerStyle: { backgroundColor: '#f0f0f0' },
          })} />
           <Stack.Screen name="c" component={c}
          options={({ navigation }) => ({
          title: 'c titulo...',
          headerStyle: { backgroundColor: '#f0f0f0' },
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  
  );
}