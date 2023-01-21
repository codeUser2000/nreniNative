import React, {useCallback, useContext, useState} from 'react';
import {Text, StyleSheet, TextInput, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import image from "../assets/images/banner.jpeg";
import {useDispatch} from 'react-redux';
import {userLoginRequest} from '../redux/actions/user';
import {Wrapper} from '../components/Wrapper';
function ProfileLogin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = useCallback(async () => {
        // if (!email || !password) {
        //     // toast.error('Enter email and password');
        //     return;
        // }
        console.log(email, password, );
        await dispatch(userLoginRequest({email, password}));
    }, [email, password]);
    return (
        <View style={styles.container}>
            {/*<Image style={styles.image} source={image} />*/}
            <StatusBar style="auto" />
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
            <TouchableOpacity>
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

export default ProfileLogin;
