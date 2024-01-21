import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



const CreateOrderForm = () => {

  const [orderType, setOrderType] = useState(null);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState(null)

  useEffect(() => {

    const requestPermissions = async () => {
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (cameraPermission.status !== 'granted') {
        alert('Desculpe, é necessário acesso à câmera!');
      }
  
      if (galleryPermission.status !== 'granted') {
        alert('Desculpe, é necessário acesso à galeria!');
      }
    };

    requestPermissions();
  }, []);

  

  const pickImage = async (source) => {
    let result;

    if (source === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImageData(result.uri);
    }
  };

  
  const locationData = [
    {label: 'Recepção', value: '1'},
    {label: 'Banheiro lobby', value: '2'},
    {label: '654', value: '3'}
  ]

  const orderTypeData = [
    {label: 'Eletrica', value: '1'},
    {label: 'Pintura', value: '2'},
    {label: 'Hidraulica', value: '3'}
  ];

  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      
      <Text style={{marginBottom: -12, marginLeft: 18, color: 'gray'}}>Local</Text>
      
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={locationData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecionar local"
        searchPlaceholder="Search..."
        value={location}
        onChange={item => {
          setLocation(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="enviromento" size={20} />
        )}
      />

      <Text style={{marginBottom: -12, marginLeft: 18, color: 'gray'}}>Categoria</Text>

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={orderTypeData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecionar categoria"
        searchPlaceholder="Search..."
        value={orderType}
        onChange={item => {
          setOrderType(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="tags" size={20} />
        )}
      />

      <Text style={{marginBottom: -12, marginLeft: 18, color: 'gray'}}>Descrição:</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicione uma descrição"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        returnKeyType='done'
        
      />

      <Text style={{ marginLeft: 18, color: 'gray'}}>Adicionar uma imagem</Text>

      <View style={styles.imageContainer}>
        {imageData && <Image source={{ uri: imageData }} style={styles.image} />}
      </View>

      <View style={styles.buttonContainer}>

        <View style={styles.buttonRow}>

          <TouchableOpacity style={styles.button} onPress={() => pickImage('camera')}>
            <Text style={styles.buttonText}>Câmera</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={() => pickImage('gallery')}>
            <Text style={styles.buttonText}>Galeria</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#55ba66', width: '100%' }]}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>

      </View>


    </SafeAreaView>
  );
};



export default CreateOrderForm;


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
