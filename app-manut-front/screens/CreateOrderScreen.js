import React, { useEffect, useState } from "react";
import {  View ,Text, TextInput, TouchableOpacity, Image, Platform, SafeAreaView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants'; 
import axios from "axios";
import API_REQUESTS from "../controller/ApiManager";
import { Picker } from "react-native-web";
import RNPickerSelect from 'react-native-picker-select';




const CreateOrderScreen = () => {

    const [location, setLocation] = useState(0);
    const [order_type, setOrderType] = useState(0);
    const [image_data, setImageData] = useState('hardcoded');
    const [description, setDescription] = useState('');
    const [created_by, setCreatedBy] = useState(0);
    const [status, setStatus] = useState(1);
    const [hotel_id, setHotelId] = useState(0);

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

    }, [])
    
    const pickImage = async (source) => {

        let result;

        if (source === 'camera') {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4],
                quality: 1,
            });
        } else {

            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4],
                quality: 1,
            })
        }

        if (!result.canceled) {
            setImageData(result.uri);
        }

    }

    const submitOrder = async () => {

        const formData = {
            
                location,
                order_type,
                image_data,
                description,
                created_by,
                status,
                hotel_id,
            
        };

        console.log(formData)

        try {
            const response = await axios.post(API_REQUESTS.insertOrder, formData)

            if(response.status === 200) {
                alert('Orderm criada com sucesso!')

            }

        } catch(error) {

            console.error('Erro ao enviar a orderm: ', error)
            alert('Erro ao criar nova ordem. Tente novamente!')

        };
    }

    return(
        <>
            <SafeAreaView>
                
                <View>

                <RNPickerSelect
                    onValueChange={(itemValue) => setLocation(itemValue)}
                    items={[
                        { label: 'Location 1', value: 1 },
                        { label: 'Location 2', value: 2 },
                        { label: 'Location 3', value: 3 },
                    ]}
                />

                <RNPickerSelect
                    onValueChange={(itemValue) => setOrderType(itemValue)}
                    items={[
                        { label: 'Type 1', value: 1 },
                        { label: 'Type 2', value: 2 },
                        { label: 'Type 3', value: 3 },
                    ]}
                />

                    <TextInput 
                        placeholder="Descrição"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />

                   <TouchableOpacity onPress={() => pickImage('camera')}>
                        <Text>Adicionar pela câmera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => pickImage('gallery')}>
                        <Text>Adicionar pela galeria</Text>
                    </TouchableOpacity>


                    {/* verifica se imageData é verdadeiro para renderiza-lo */}
                    {image_data && <Image source={{ uri: image_data }} style={{ width: 200, height: 200 }} />}

                    <TouchableOpacity onPress={submitOrder}>
                        <Text>Enviar Ordem</Text>
                    </TouchableOpacity>

                </View>
            


            </SafeAreaView>
            <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
        </>
    )
}

export default CreateOrderScreen;