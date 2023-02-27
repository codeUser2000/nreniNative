import React, {useCallback, useEffect, useState} from 'react';
import {Text, TextInput, StyleSheet, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import MyInputs from "../components/MyInputs";
import {Toast} from "toastify-react-native";
import img from '../assets/images/logo.png'
import {useDispatch, useSelector} from "react-redux";
import {userRegisterRequest} from "../redux/actions/user";
import LogoHeader from "../components/LogoHeader";
import SubmitBtn from "../components/SubmitBtn";

function Register({navigation}) {
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const userDataStatus = useSelector(state => state.reducer.user.userDataStatus);

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        status: 'pending',
        isDevice:true
    });
    const handleChange = useCallback((key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, [formData]);
    const handleSubmit  = useCallback(async () => {
        if (formData.password !== passwordConfirm){
            Toast.error('Passwords should be same')
        }else {
            await dispatch(userRegisterRequest(formData))
        }
        if(userDataStatus === 'ok'){
            navigation.navigate('InsertCode', 'register')
        }
    }, [formData, passwordConfirm, userDataStatus])

    useEffect(() => {
        // if(userDataStatus === 'ok'){
        //     navigation.navigate('Login')
        // }
    }, [userDataStatus])
    return (
       <ScrollView style={{flex: 1,backgroundColor: 'white' }}>
           <View style={{ flex: 1, paddingHorizontal: 40}}>
               <View style={{flex: 3}}>
                   <LogoHeader title="Sign up"/>
                   <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your first name</Text>
                   <MyInputs
                       handleChange={handleChange}
                       placeholder=""
                       value={formData.firstName}
                       keyValue="firstName" />
                   <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your Last name</Text>

                   <MyInputs
                       handleChange={handleChange}
                       placeholder=""
                       value={formData.lastName}
                       keyValue="lastName"/>
                   <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your email</Text>

                   <MyInputs
                       handleChange={handleChange}
                       placeholder=""
                       value={formData.email}
                       keyValue="email"/>
                   <Text style={{ marginLeft:10, fontSize: 20 }}>Enter your password</Text>
                   <MyInputs
                       handleChange={handleChange}
                       placeholder=""
                       value={formData.password}
                       keyValue="password"/>
                   <Text style={{ marginLeft:10, fontSize: 20 }}>Confirm your password</Text>
                   <TextInput
                       onChangeText={(ev) => setPasswordConfirm(ev)}
                       style={styles.input}
                       value={passwordConfirm}
                   />
                   <SubmitBtn handleSubmit={handleSubmit} title="Register"/>
                   <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{flexDirection: 'row', width: 300,justifyContent: 'center', alignSelf: 'center'}}>
                       <Text>Or sign in</Text>
                   </TouchableOpacity>
               </View>
           </View>
       </ScrollView>

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

export default Register;
