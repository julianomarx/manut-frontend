import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    input: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      backgroundColor: '#f6f6f6',
      borderRadius: 5,
      paddingLeft: 10, 
    },
  
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      backgroundColor: '#f6f6f6',
      borderRadius: 5
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '95%',
      alignSelf: 'center',
      flexWrap: 'wrap',
    },
  
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
  
  
    button: {
      flex: 1,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 8
    },
  
    buttonText: {
      color: 'white'
    },
  
    imageContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    
    image: {
      width: 200,
      height: 200,
      borderRadius: 5,
  
    },
  
});

export default styles;

  