import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RegisterScreen from './app/screens/RegisterScreen'
import LoginScreen from './app/screens/LoginScreen'
import Screen from './app/components/Screen'

export default function App() {
  return (
    // <Screen>
    //   <Text>Hello</Text>
    // </Screen>
    <LoginScreen />
  );
}

