import React, {useEffect, useState} from 'react';
import {Text, TextInput, StyleSheet, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import img from '../assets/images/banner.jpeg'
import AsyncStorage from '@react-native-async-storage/async-storage';
function StartProfile({navigation}) {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <View style={{flex:1}}>
            <Text style={{alignSelf:'center',fontSize:30}}>Welcome</Text>
            <View style={{justifyContent:'flex-end', flex:2}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ProfileLogin')}
                >
                    <Text
                        style={styles.buttonText}
                    >Go and login</Text>
                </TouchableOpacity>
                <Text style={{alignSelf:'center'}}>Or</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ProfileRegister')}
                >
                    <Text
                        style={styles.buttonText}
                    >Go and Register</Text>
                </TouchableOpacity>
            </View>
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

export default StartProfile;
