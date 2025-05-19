
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcomescreen  from './screens/welcomescreen';
import homescreen from './screens/homescreen';
import checkoutscreen from './screens/checkoutscreen';
import addDish from './screens/addDish'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={welcomescreen} />
        <Stack.Screen name="Home" component={homescreen} />
        <Stack.Screen name="Checkout" component={checkoutscreen} />
        <Stack.Screen name="AddDish" component={addDish} />
      </Stack.Navigator>
    </NavigationContainer>
  );}




