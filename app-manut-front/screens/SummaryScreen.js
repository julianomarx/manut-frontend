import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';
import { StatusBar } from 'expo-status-bar';
import FloatingButton from '../components/floatingButton/FloatingButton';

function SummaryScreen () {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
  
  }, [])

  return (
    <>
      <SafeAreaView>
        <ScrollView>
        <Text>Summary</Text>

        </ScrollView>

      </SafeAreaView>

      <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
    </>
  );  
};

export default SummaryScreen;
