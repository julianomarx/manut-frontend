import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './OrderItemListStyles';

const OrderItemList = (data) => {
  return (
    <TouchableOpacity style={styles.itemContainer} key={data.IdOrder}>

      <View style={styles.imageContainer}>
        
      </View>
      
      <View style={styles.rightContent}>
        <View style={styles.topRow}>
    
          <Text style={styles.smallText}>{data.IdOrder}</Text>
        </View>
        
        <Text style={styles.text}>{data.Description}</Text>
        <Text style={styles.smallText}>{data.Location}</Text>

        <View style={styles.iconContainer}>
          <Text>Category</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default OrderItemList;
