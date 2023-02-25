import React, {useCallback, useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from "../context/AuthContext";
import {Toast} from "toastify-react-native";
import Api from "../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyInputs from "../components/MyInputs";
import img from "../assets/images/logo.png";
import LogoHeader from "../components/LogoHeader";
import SubmitBtn from "../components/SubmitBtn";

function Login({navigation}) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = useCallback((key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, [formData]);
    const {login} = useContext(AuthContext)
    const handleSubmit = useCallback(async () => {

        try {
            if (!formData.email || !formData.password) {
                Toast.error('Enter email and password', 'top');
                return;
            }

            const {data} = await Api.login(formData)
            if (data.status === 'ok') {
                await AsyncStorage.setItem('token', data.token)
                login(data.token)
            }

        } catch (e) {
            console.log(e)
            Toast.error(e.response.data.message)
        }
    }, [formData]);
    return (
        <View style={{ paddingHorizontal: 40, backgroundColor: 'white', flex: 1,}}>
            <LogoHeader title="Sign in"/>
            <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your email</Text>

            <MyInputs
                value={formData.email}
                placeholder=""
                keyValue="email"
                handleChange={handleChange}
            />
            <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your password</Text>

            <MyInputs
                value={formData.password}
                placeholder=""
                isPass={true}
                keyValue="password"
                handleChange={handleChange}
            />
            <TouchableOpacity style={{flexDirection: 'row', width: 300,justifyContent: 'center', alignSelf: 'center'}} onPress={() => navigation.navigate('ForgetPassword')}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <SubmitBtn handleSubmit={handleSubmit} title="Login" />
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{flexDirection: 'row', width: 300,justifyContent: 'center', alignSelf: 'center'}}>
                <Text>Or sign up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        marginBottom: 40,
    },
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

export default Login;
