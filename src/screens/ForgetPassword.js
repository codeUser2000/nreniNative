import React, {useCallback, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../Api";
import {Toast} from "toastify-react-native";
function ForgetPassword({navigation}) {
    const [email, setEmail] = useState("");
    const handlePassWordChange = useCallback(async () => {
        if(email){
            try{
                const { data } = await Api.forgetPass(email)
                await AsyncStorage.setItem('email', email)
                if(data.status === 'ok'){
                    Toast.success('Check your email for code')
                    navigation.navigate('InsertCode')
                }
            }catch (e) {
                console.log(e)
            }
        }else{
            Toast.error('You should enter email')
        }
    }, [email])
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <Text>Set new Password</Text>
            <TextInput
                onChangeText={(ev) => setEmail(ev)}
                style={styles.input}
            />
            <TouchableOpacity onPress={handlePassWordChange}><Text>Submit</Text></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius:40,
        backgroundColor:'#c31e39'
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    }
});

export default ForgetPassword;
