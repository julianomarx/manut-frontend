import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';
import { StatusBar } from 'expo-status-bar';

const SummaryScreen = () => {

  const Render = (data) => {
    return (
      <>
        <Text>{data.Location}</Text>
        <Text>{data.Description}</Text>
        <Text>{data.CreatedBy}</Text>
        <Text>{data.IdOrder}</Text>
      </>
    );
  }
  

  const [orders, setOrders] = useState([]);

  Controller.getAllOrders('http://192.168.100.105:8000/api/list-orders/')
    .then((response) => {
      JSON.parse(response)})
        .then((responseJson) =>{
          console.log(responseJson)
        })
  
  return (
    <View>
      <ScrollView>
        {orders.map(Render)}
      </ScrollView>
    </View>
  );  
};

export default SummaryScreen;
