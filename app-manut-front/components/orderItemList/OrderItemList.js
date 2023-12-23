import React from 'react';
import { View, Text } from 'react-native';


const OrderItemList = (props) => {
    return (
        <View>
            <Text>{props.texto}</Text>
            <Text>{props.nome}</Text>
            <Text>{props.sobrenome}</Text>
        </View>
                    
    );
}

export default OrderItemList;