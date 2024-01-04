import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import SummaryScreen from '../screens/SummaryScreen';
import OrdersScreen from '../screens/OrdersScreen';
import LocationsScreen from '../screens/LocationsScreen';
import OrdersByTypeScreen from '../screens/OrdersByTypeScreen';
import CreateOrderScreen from '../screens/CreateOrderScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppTab = createBottomTabNavigator();
const OrderCreationStack = createNativeStackNavigator();

export const OrderCreationNavigator = () => (
  <OrderCreationStack.Navigator>
    <OrderCreationStack.Screen
      name="CreateOrder"
      component={CreateOrderScreen}
      options={{ headerShown: false }}
    />
  </OrderCreationStack.Navigator>
);

const MainTabNavigator = () => (  

 
<AppTab.Navigator screenOptions={{tabBarActiveTintColor: '#2c53ff'}}>

  <AppTab.Screen
    name="Summary"
    component={SummaryScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="home" color={color} size={size} />
      ),
    }}
  />

  <AppTab.Screen
    name="OrderCreationNavigator"
    component={OrderCreationNavigator}
    options={{ tabBarButton: () => null }} // Hide the tab button
  />

  <AppTab.Screen
    name="Orders"
    component={OrdersScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="clipboard-list" color={color} size={size} />
      ),
    }}
  >
  </AppTab.Screen> 

  <AppTab.Screen
    name="Locations"
    component={LocationsScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="map-marker-alt" color={color} size={size} />
      ),
    }}
  />

  <AppTab.Screen
    name="Orders By Type"
    component={OrdersByTypeScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="filter" color={color} size={size} />
      ),
    }}
  />

</AppTab.Navigator>

);

export default MainTabNavigator;
