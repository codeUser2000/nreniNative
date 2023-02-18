import React, {useCallback, useContext, useState} from 'react';
import {Text, StyleSheet, TextInput, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {AuthContext} from "../context/AuthContext";
import {Toast} from "toastify-react-native";
import Api from "../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext)
    const handleSubmit = useCallback(async () => {
        try{
            if (!email || !password) {
                Toast.error('Enter email and password', 'top');
                return;
            }
            const { data } = await Api.login({email, password})
            if(data.status === 'ok'){
                await AsyncStorage.setItem('token', data.token)
                login(data.token)
            }else{
                Toast.error('Login or password is wrong', 'top');
            }
        }catch (e) {
            console.log(e)
        }
    }, [email, password]);
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#ffffff"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
                <Text style={{color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#e56277",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#c31e39",
    }
});

export default Login;
