import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FloatingButtonStyles';
import { useNavigation } from '@react-navigation/native';

export default function FloatingButton () {

    const navigation = useNavigation();

    const createOrder = () => {
        navigation.navigate('OrderCreationNavigator', {screen: 'CreateOrder'})
    };

    return(
        <TouchableOpacity onPress={createOrder}  style={styles.floatingButton}>
            
            <Icon name="plus" style={styles.buttonText}></Icon>
            
        </TouchableOpacity>
    )
}
