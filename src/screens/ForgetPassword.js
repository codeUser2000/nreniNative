import React, {useCallback, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../Api";
import {Toast} from "toastify-react-native";
import LogoHeader from "../components/LogoHeader";
import SubmitBtn from "../components/SubmitBtn";
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
        <View style={{ paddingHorizontal: 40, backgroundColor: 'white', flex: 1,}}>
        <LogoHeader title="New password"/>
            <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your email</Text>
            <TextInput
                onChangeText={(ev) => setEmail(ev)}
                style={styles.input}
            />
            <SubmitBtn handleSubmit={handlePassWordChange} title="Submit" />
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
