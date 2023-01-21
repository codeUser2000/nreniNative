import React from 'react';
import {Text, TextInput, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function ProfileRegister({navigation}) {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <View style={{flex:1}}>
            <Text>Register</Text>
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
});

export default ProfileRegister;
