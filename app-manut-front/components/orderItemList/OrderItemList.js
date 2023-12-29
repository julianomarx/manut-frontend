import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderItemList = (data) => {
  return (
    <TouchableOpacity style={styles.itemContainer} key={data.IdOrder}>
      <Text style={styles.text}>{data.IdOrder}</Text>
      <Text style={styles.text}>{data.Description}</Text>
      <Text style={styles.text}>{data.Location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#c1c1c1', // Cor de fundo
    borderRadius: 10, // Borda arredondada
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Cor do texto
    marginBottom: 3,
  },
});

export default OrderItemList;
