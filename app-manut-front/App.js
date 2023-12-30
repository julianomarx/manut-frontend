import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import FloatingButton from './components/floatingButton/FloatingButton';


 
export default function App() {
  return (

        <AppNavigator />

      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  }
})