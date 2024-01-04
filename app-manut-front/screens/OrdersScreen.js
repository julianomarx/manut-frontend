import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';
import FloatingButton from '../components/floatingButton/FloatingButton';

const OrdersScreen = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    Controller.getAllPendingOrders('http://192.168.100.105:8000/api/list-orders/?status=1')
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

      <FloatingButton />
      
      <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
    </>
  ); 
};

export default OrdersScreen;

