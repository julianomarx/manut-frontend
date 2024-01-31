import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    floatingButton: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: '11%',
        right: 20,
        backgroundColor: '#2c53ff',  
        borderRadius: 30, 
        width: 60,
        height: 60,       
        padding: 15,
        elevation: 5,    
        zIndex: 1,       
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
})

export default styles;