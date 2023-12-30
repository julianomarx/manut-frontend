import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';
import { StatusBar } from 'expo-status-bar';
import FloatingButton from '../components/floatingButton/FloatingButton';

function SummaryScreen () {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
   /* Controller.getAllOrders('http://192.168.100.105:8000/api/list-orders/')
    .then((response) => response)
      .then((responseJson) => {
        setOrders(responseJson);
        console.log(responseJson);
      })*/

  }, [])

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <ScrollView>
        <Text>Summary</Text>

        </ScrollView>

      </SafeAreaView>
      <FloatingButton />

      <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
    </>
  );  
};

export default SummaryScreen;
