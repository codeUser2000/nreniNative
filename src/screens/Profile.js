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

    // const handleOrder = useCallback(() => {
    //
    // }, [])


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
            <View style={styles.profile}>
                <View style={styles.top}>
                    <Text style={styles.topTitle}>My account</Text>
                    <Text style={styles.hello}>
                        Hello
                        {' '}
                        <Text style={styles.name}>
                            {profile.firstName} {profile.lastName}
                        </Text>
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => setShow(true)}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30} name="group"/>
                        <Text style={styles.titles}>About me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Order')}
                        style={styles.buttons}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30}
                            name="list-alt"/>
                        <Text style={styles.titles}>my orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShowDelete(true)}
                        style={styles.buttons}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30}
                            name="person-remove"/>
                        <Text style={styles.titles}>delete account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.buttons}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30}
                            name="power-settings-new"/>
                        <Text style={styles.titles}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <AboutMe show={show} setShow={setShow} data={profile}/>
                <DeleteMe show={showDelete} setShow={setShowDelete} email={profile.email}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        padding: 20,
        paddingTop: 150,
        paddingBottom: 150,
        backgroundColor: 'white',
    },
    top: {
        textAlign: 'center',
    },
    topTitle: {
        fontSize: 30,
        color: '#c31e39',
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    hello: {
        fontSize: 20,
        color: '#4a4a4a',
        textAlign: 'center',
    },
    name: {
        color: "#c31e39",
    },
    buttons: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titles: {
        fontSize: 18,
        fontWeight: '400',
        textTransform: 'capitalize',
    }
});

export default Profile;
