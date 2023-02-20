import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Api from "../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Toast} from "toastify-react-native";
import LogoHeader from "../components/LogoHeader";
import SubmitBtn from "../components/SubmitBtn";

function DropPassword({navigation}) {
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = useCallback(async () => {
        if (password === passwordConfirm) {
            try {
                const email = await AsyncStorage.getItem('email')
                const {data} = await Api.newPasswordDevice({password, email})
                if (data.status === 'ok') {
                    Toast.success('Your new password is set')
                    navigation.navigate('Login')
                }
            } catch (e) {
                console.log(e)
            }
        }
    }, [password, passwordConfirm])

    return (
        <View style={{paddingHorizontal: 40, backgroundColor: 'white', flex: 1,}}>
            <LogoHeader title="Set new password"/>
            <Text style={{ marginLeft:10, fontSize: 20 }}>Enter new password</Text>

            <TextInput
                style={styles.input}
                onChangeText={(ev) => setPassword(ev)}
            />
            <Text style={{ marginLeft:10, fontSize: 20 }}>Confirm new password</Text>

            <TextInput
                style={styles.input}
                onChangeText={(ev) => setPasswordConfirm(ev)}
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


export default DropPassword;
