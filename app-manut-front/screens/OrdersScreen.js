import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';
import token from './LoginScreen';


const OrdersScreen = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    token.then((result) => {

      Controller.getPendingOrders(result.access_token)
        .then((response) => response)
          .then((responseJson) => {
            setOrders(responseJson);
            console.log(responseJson);
      })
  
    }
  
  )
    
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

