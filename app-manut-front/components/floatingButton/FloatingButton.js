import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FloatingButton () {
    return(
        <TouchableOpacity style={styles.floatingButton}>
            <Icon name="plus" style={styles.buttonText}></Icon>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    floatingButton: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: 12,
        right: 12,
        backgroundColor: '#2c53ff',  // Cor do botão
        borderRadius: 30, 
        width: 60,
        height: 60,       // Borda arredondada para formar um círculo
        padding: 15,
        elevation: 5,    
        zIndex: 1,         // Sombra para dar uma aparência flutuante
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
})
