import React, {useCallback, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import Api from "../Api";

function InsertCode({navigation}) {
    const [code, setCode] = useState('');
    const handleSubmit = useCallback(async () => {
        try{
            const {data} = await Api.newPasswordDeviceConfirm(code)
            if(data.status === 'ok'){
                navigation.navigate('DropPassword')
            }
        }catch (e){
            console.log(e)
        }
    }, [code])
    return (
        <View>
            <TextInput
                onChangeText={(ev) => setCode(ev)}
            />
            <TouchableOpacity onPress={handleSubmit}><Text>Submit</Text></TouchableOpacity>
        </View>
    );
}

export default InsertCode;
