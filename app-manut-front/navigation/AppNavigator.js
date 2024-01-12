import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import NavigationService from './NavigationService';
import FloatingButton from '../components/floatingButton/FloatingButton';
import { View } from 'react-native';


const AppNavigator = () => {
  const userIsAuthenticated = true; 

  return (
    <NavigationContainer
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
    >
      {userIsAuthenticated ? (

        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}> 

          <MainTabNavigator />

          <FloatingButton />

        </View>
          
      ) : (

        <AuthNavigator />

      )}

    </NavigationContainer>
    
  );
};

export default AppNavigator;
