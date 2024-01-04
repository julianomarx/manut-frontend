import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FloatingButton from '../components/floatingButton/FloatingButton';

const LocationsScreen = () => (

  <>
    <SafeAreaView>
      <Text>Locations Screen</Text>
    </SafeAreaView>
    <FloatingButton path="CreateOrder" />

    <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
  </>
);

export default LocationsScreen;
