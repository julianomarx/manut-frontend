import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';

const OrdersScreen = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    Controller.getAllPendingOrders()
    .then((response) => response)
      .then((responseJson) => {
        setOrders(responseJson);
        console.log(responseJson);
      })
  }, [])

  return (
    <>
      <SafeAreaView>
      <ScrollView>
       {orders.map(OrderItemList)} 
      </ScrollView>
      
      </SafeAreaView>

      <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
    </>
  ); 
};

export default OrdersScreen;

