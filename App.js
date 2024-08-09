/*import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from 'styles.js';
import Layout from './layout.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/
import React from 'react';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import Screen01 from './src/screens/Screen01';
import 'react-native-gesture-handler';
import './gesture-handler';


const Stack = createStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{ headerShown: false, headerStyle: { backgroundColor: '#f0f0f0' } }} />
          <Stack.Screen name="Screen01" component={Screen01}
          options={({ navigation }) => ({
          title: 'Screen01 titulo...',
          headerStyle: { backgroundColor: '#f0f0f0' },
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to the Login Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen01')}
      >
        <Text style={styles.buttonText}>Go to Screen 01</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Screen01 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is Screen 01</Text>
    </SafeAreaView>
  );
};

export { LoginScreen, Screen01 };
