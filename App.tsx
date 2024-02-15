import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import { NavigationContainer } from '@react-navigation/native';
import Counter from './src/screens/Counter';
import Todo from './src/screens/Todo';
import { Provider } from 'react-redux';
import store from './Reducer/store';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:true,
          headerTitle: 'Counter & Todo App',
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name="Counter" component={Counter}/>
            <Stack.Screen name="Todo" component={Todo}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})