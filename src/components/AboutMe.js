import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyInputs from "./MyInputs";

function AboutMe({show, setShow, data}) {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        setProfile(data)
    }, [data])

    const handleChange = useCallback((key, value) => {
        setProfile((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    return (
        <Modal isVisible={show}>
            <View style={{ flex: 1 }}>
                <View style={{backgroundColor: 'white',flex: 3}}>
                    <TouchableOpacity onPress={() => setShow(false)}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal:10, alignSelf:'flex-end'}}
                            size={30} name="close"/>
                    </TouchableOpacity>
                    <MyInputs value={data.firstName} placeholder="First name." handleChange={handleChange} keyValue="firstName"/>
                    <MyInputs value={data.lastName} placeholder="Last name." handleChange={handleChange} keyValue="lastName"/>
                    <MyInputs value={data.email} placeholder="Email." handleChange={handleChange} keyValue="email"/>
                    <MyInputs value={data.phone} placeholder="Phone." handleChange={handleChange} keyValue="phone"/>
                    <MyInputs value={data.country} placeholder="Country." handleChange={handleChange} keyValue="country"/>
                    <MyInputs value={data.city} placeholder="City." handleChange={handleChange} keyValue="city"/>
                    <MyInputs value={data.postal} placeholder="Postal" handleChange={handleChange} keyValue="postal"/>
                    <TouchableOpacity style={style.button}>
                        <Text style={{color: 'white'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    text: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        alignSelf: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#c31e39',
    },
});

export default AboutMe;
