import React, {useCallback, useState} from 'react';
import {Text, TextInput, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";

function Register({navigation}) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        status: 'pending',
    });
    const handleChange = useCallback((key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, [formData]);
    return (
        <View style={{ flex: 1 }}>
            <View style={{backgroundColor: 'white',flex: 3}}>
                {/*<TextInput*/}
                {/*    placeholder="First name."*/}
                {/*    style={styles.input}*/}
                {/*    placeholderTextColor="#ccc"*/}
                {/*    value={formData.firstName}*/}
                {/*    onChangeText={(firstName) => handleChange("firstName", firstName)} />*/}
                {/*<TextInput*/}
                {/*    placeholder="Last name."*/}
                {/*    style={styles.input}*/}
                {/*    placeholderTextColor="#ccc"*/}
                {/*    value={formData.lastName}*/}
                {/*    onChangeText={(lastName) => handleChange("lastName", lastName)} />*/}
                {/*<TextInput*/}
                {/*    placeholder="Email"*/}
                {/*    style={styles.input}*/}
                {/*    placeholderTextColor="#ccc"*/}
                {/*    value={formData.email}*/}
                {/*    onChangeText={(email) => handleChange("email", email)} />*/}
                {/*<TextInput*/}
                {/*    placeholder="Password"*/}
                {/*    style={styles.input}*/}
                {/*    placeholderTextColor="#ccc"*/}
                {/*    value={formData.password}*/}
                {/*    onChangeText={(password) => handleChange("password", password)} />*/}
                {/*<TextInput*/}
                {/*    placeholder="Confirm password"*/}
                {/*    style={styles.input}*/}
                {/*    placeholderTextColor="#ccc"*/}
                {/*    value={formData.email}*/}
                {/*    onChangeText={(email) => handleChange("email", email)} />*/}

                <TouchableOpacity style={styles.button} onPress={() => console.log('hy')}>
                    <Text style={{color: 'white'}}>Submit</Text>
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
});

export default Register;
