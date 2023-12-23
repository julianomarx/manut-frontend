import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import OrderItemList from '../components/orderItemList/OrderItemList';
import Controller from '../controller/Controller';

const SummaryScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Ao montar o componente, faz a requisição e atualiza o estado com os dados
    const fetchData = async () => {
      try {
        const ordersData = await Controller.getAllOrders('http://192.168.100.105:8000/api/list-orders/')
        setOrders(ordersData);

        console.log(orders);

      } catch (error) {
        console.error('Erro ao realizar a requisição', error);
      }
    };

    fetchData();
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez

  return(
    <View>
      <Text>Test</Text>
    </View>
  );

};

export default SummaryScreen;
