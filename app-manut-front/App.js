import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';


 
export default function App() {
  return (
    <SafeAreaView>{styles.container}
      <AppNavigator />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})