import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, Image} from 'react-native';
import img from '../assets/images/banner.jpeg'
function StartProfile({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <Text style={{alignSelf:'center',fontSize:30}}>Welcome</Text>
            <Image source={img} style={{ resizeMode: 'contain',
                height: 400,
                width: 400,}}/>
            <View style={{justifyContent:'flex-end', flex:2}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text
                        style={styles.buttonText}
                    >Go and login</Text>
                </TouchableOpacity>
                <Text style={{alignSelf:'center'}}>Or</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
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
