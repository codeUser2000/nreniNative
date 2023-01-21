import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Wrapper} from '../components/Wrapper';

function Profile({navigation}) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [profile, setProfile] = useState({
        firstName: 'joe',
        lastName: 'Doe',
        phone: '09898989',
    });
    return (
        <View style={{flex: 1}}>
            <Text style={styles.text}>Hello {profile.firstName} {profile.lastName}</Text>
            <Text style={styles.text}>{profile.phone}</Text>
            <View style={{flex:1,justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.buttons}><Text>Edit</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text>Delete</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text>Logout</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        alignSelf: 'center',
    },
    buttons: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        // borderBottomColor: "red",
    },
});

export default Profile;
