// OrderItemStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    itemContainer: {
        flexDirection: 'row', 
        padding: 5,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },

    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 5,
        marginRight: 10,
        marginLeft: 5,
        width: 70, 
        height: 70, 
        backgroundColor: '#ccc',
        borderRadius: 5,
    },

    rightContent: {
        flex: 1, 
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5,
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    smallText: {
        fontSize: 12,
        color: '#aaa',
    },

    iconContainer: {
        alignSelf: 'flex-end',
    },

});

export default styles;
