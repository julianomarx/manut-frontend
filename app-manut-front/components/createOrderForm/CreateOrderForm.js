import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import styles from './CreateOrderFormStyles';

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
    

    const sourceFunction = {
      'camera': ImagePicker.launchCameraAsync,
      'gallery': ImagePicker.launchImageLibraryAsync,
    }

    const result = await sourceFunction[source]({

      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,

    });


    if (!result.canceled) {
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
        searchPlaceholder="Pesquisar..."
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


