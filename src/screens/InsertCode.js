import React, {useCallback, useEffect, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import Api from "../Api";
import LogoHeader from "../components/LogoHeader";
import SubmitBtn from "../components/SubmitBtn";

function InsertCode({navigation, route}) {
    const [code, setCode] = useState('');
    const [isRegister, setIsRegister] = useState(false);
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

    useEffect(() => {
        // if(route.params === 'register'){
        //     setIsRegister(true)
        // }else{
        //     setIsRegister(false)
        // }
        console.log(route.params)
    }, [route.params])
    return (
        <View style={{ paddingHorizontal: 40, backgroundColor: 'white', flex: 1,}}>
            <LogoHeader title="Insert Code" />
            <Text style={{ marginLeft:10, fontSize: 20 }}>Enter Code</Text>

            <TextInput
                style={styles.input}
                onChangeText={(ev) => setCode(ev)}
            />
            <SubmitBtn handleSubmit={handleSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 60
    },

});

export default InsertCode;
