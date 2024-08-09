import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import A from './src/app/componentes/A/index.jsx';
import B from './src/app/componentes/B/index.jsx';
import C from './src/app/componentes/C/index.jsx';
import 'react-native-gesture-handler';
import style from './style.js';

const Stack = createStackNavigator();

const App = () => {

  return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName='A'> 
          <Stack.Screen name="A" component={A}
            options={({ navigation }) => ({
            title: 'A titulo...',
            headerStyle: { backgroundColor: '#f0f0f0' },
            })} />
          <Stack.Screen name="B" component={B}
            options={({ navigation }) => ({
            title: 'B titulo...',
            headerStyle: { backgroundColor: '#f0f0f0' },
            })} />
          <Stack.Screen name="C" component={C}
            options={({ navigation }) => ({
            title: 'C titulo...',
            headerStyle: { backgroundColor: '#f0f0f0' },
            })} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;