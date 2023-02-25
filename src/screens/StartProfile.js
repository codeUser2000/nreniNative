import React from 'react';
import {Text, StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import img from '../assets/images/start.jpg'

function StartProfile({navigation}) {
    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.start}>
            <View style={styles.layout}>
                <Text style={styles.title}>nreni</Text>
                <Text style={styles.info}>Sign up now and shop the latest and trendiest jewelry</Text>
                <View style={styles.startNBtm}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}>sign in</Text>
                    </TouchableOpacity>
                    <Text style={styles.or}>Or</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.buttonText}>sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    start: {
        width: '100%',
        height: '100%',
    },
    layout: {
        flex: 2,
        padding: 30,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.70)',
    },
    startInfo: {
        marginTop: 300,
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    info: {
        flex: 3,
        fontSize: 30,
        color: 'white',
        marginTop: 250,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    bannerBtm: {
        flex: 4,
        paddingBottom: 50,
        justifyContent: 'flex-end',
    },
    button: {
        height: 40,
        margin: 12,
        padding: 5,
        borderRadius: 50,
        backgroundColor: '#c31e39'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    or: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
});

export default StartProfile;
