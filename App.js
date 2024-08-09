import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import a from './src/app/a';
import b from './src/app/b';
import c from './src/app/c';
import 'react-native-gesture-handler';
import './styles.js';
import Layout from './layout.js';

const Stack = createStackNavigator();

const App = () => {

  return (
      <SafeAreaView style={style.container}>
      <Text>Hola mundo</Text>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('a')}
      >
        <Text style={styles.buttonText}>Ir a Pantalla a</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('b')}
      >
        <Text style={styles.buttonText}>Ir a Pantalla b</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('c')}
      >
        <Text style={styles.buttonText}>Ir a Pantalla c</Text>
      </TouchableOpacity>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default App;