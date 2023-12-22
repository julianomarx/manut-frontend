import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import NavigationService from './NavigationService';

const AppNavigator = () => {
  const userIsAuthenticated = true; // Exemplo: verificar se o usuário está autenticado

  return (
    <NavigationContainer
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
    >
      {userIsAuthenticated ? (
        <MainTabNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
