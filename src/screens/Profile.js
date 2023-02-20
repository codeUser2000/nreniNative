import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {useDispatch, useSelector} from "react-redux";
import {userProfileRequest} from "../redux/actions/user";
import _ from 'lodash';
import AboutMe from "../components/AboutMe";
import {AuthContext} from "../context/AuthContext";
import DeleteMe from "../components/DeleteMe";

function Profile({navigation}) {
    const {logout} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector(state => state.reducer.user.userData)
    const [profile, setProfile] = useState({});

    const handleLogout = useCallback(async () => {
        await logout()
    }, [logout])

    const handleOrder = useCallback(() => {

    }, [])


    useEffect(() => {
        (async () => {
            await dispatch(userProfileRequest())
        })()
    }, [])
    useEffect(() => {
        if (!_.isEmpty(user)) {
            setProfile(user.user)
        }
    }, [user])
    return (
        <>
            {_.isEmpty(profile) ? <Text>loading...</Text> : null}
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text style={styles.text}>Hello {profile.firstName} {profile.lastName}</Text>
                <Text style={styles.text}>{profile.phone}</Text>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => setShow(true)}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30} name="group"/>
                        <Text>About me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Order')}
                        style={styles.buttons}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30}
                            name="list-alt"/>
                        <Text>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShowDelete(true)}
                        style={styles.buttons}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30}
                            name="person-remove"/>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.buttons}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30}
                            name="power-settings-new"/>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
                <AboutMe show={show} setShow={setShow} data={profile}/>
                <DeleteMe show={showDelete} setShow={setShowDelete} email={profile.email}/>
            </View>
        </>
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
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
        // borderBottomColor: "red",
    },
});

export default Profile;
