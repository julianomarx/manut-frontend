
import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import CreateOrderForm from '../components/createOrderForm/CreateOrderForm';

const CreateOrderScreen = () => {

    useEffect(() => {

    }, [])

    return(
        <>
            <SafeAreaView>
                <View>

                    <CreateOrderForm />

                </View>
            </SafeAreaView>
            <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
        </>
    )
}

export default CreateOrderScreen;