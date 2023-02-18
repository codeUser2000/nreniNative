import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";

function MyInputs({handleChange,value,keyValue,placeholder}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={style.input}
            placeholderTextColor="#ccc"
            value={value}
            onChangeText={(city) => handleChange(keyValue, city)} />
    );
}
const style = StyleSheet.create({
    input: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default MyInputs;
