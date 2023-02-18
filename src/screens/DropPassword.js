import React, {useCallback, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import Api from "../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Toast} from "toastify-react-native";

function DropPassword({navigation}) {
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = useCallback(async () => {
        if(password === passwordConfirm){
            try{
                const email = await AsyncStorage.getItem('email')
                const {data} = await Api.newPasswordDevice({password, email})
                if(data.status === 'ok'){
                    Toast.success('Your new password is set')
                    navigation.navigate('Login')
                }
            }catch (e) {
                console.log(e)
            }
        }
    }, [password, passwordConfirm])

    return (
        <View style={{flex: 1}}>
            <TextInput onChangeText={(ev) => setPassword(ev)}/>
            <TextInput onChangeText={(ev) => setPasswordConfirm(ev)}/>
            <TouchableOpacity onPress={handleSubmit}><Text>Submit</Text></TouchableOpacity>
        </View>
    );
}

export default DropPassword;
