import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

function SubmitBtn({handleSubmit, title='Submit'}) {
    return (
        <TouchableOpacity onPress={handleSubmit} style={[styles.input, {backgroundColor: '#c31e39', width: 300,justifyContent: 'center', alignSelf: 'center'}]}>
            <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
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

export default SubmitBtn;
