import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import './style.js';

export default function RootLayout( ) {
  return (

    <SafeAreaProvider>
       <Text>Hola mundo</Text>
    </SafeAreaProvider>
  );
}