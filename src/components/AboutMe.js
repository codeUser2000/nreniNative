import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyInputs from "./MyInputs";
import LogoHeader from "./LogoHeader";
import {useDispatch} from "react-redux";
import {userUpdateRequest} from "../redux/actions/user";
import DatePicker from "react-native-date-picker";

function AboutMe({show, setShow, data}) {
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setProfile({
            firstName: data.firstName || '',
            lastName: data.lastName|| '',
            birthYear: new Date(data.birthYear) || new Date(),
            phone: data.phone || '',
            country: data.country || '',
            city: data.city || '',
            street: data.street || '',
            postal: data.postal|| '',
        });
    }, [data]);

    const handleSubmit = useCallback(async () => {
        await dispatch(userUpdateRequest(profile))
    }, [profile])

    const handleChange = useCallback((key, value) => {
        setProfile((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    return (
        <Modal isVisible={show}>
            <View style={{flex: 1}}>
                <View style={{backgroundColor: 'white', flex: 3, padding: 10, height: 800, overflow: 'scroll',}}>
                    <ScrollView>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            overflow: 'scroll',
                            justifyContent: 'space-between'
                        }}>
                            <LogoHeader title="Add information"/>
                            <TouchableOpacity onPress={() => setShow(false)}>
                                <Icon
                                    color='#c31e39'
                                    style={{paddingHorizontal: 10, alignSelf: 'flex-end'}}
                                    size={30} name="close"/>
                            </TouchableOpacity>
                        </View>
                        <MyInputs value={profile.firstName} placeholder="First name." handleChange={handleChange}
                                  keyValue="firstName"/>
                        <MyInputs value={profile.lastName} placeholder="Last name." handleChange={handleChange}
                                  keyValue="lastName"/>
                        <MyInputs value={profile.phone} placeholder="Phone." handleChange={handleChange}
                                  keyValue="phone"/>
                        <MyInputs value={profile.country} placeholder="Country." handleChange={handleChange}
                                  keyValue="country"/>
                        <MyInputs value={profile.city} placeholder="City." handleChange={handleChange} keyValue="city"/>
                        <MyInputs value={profile.postal} placeholder="Postal" handleChange={handleChange}
                                  keyValue="postal"/>
                        <MyInputs value={profile.street} placeholder="Street" handleChange={handleChange}
                                  keyValue="street"/>
                        <DatePicker
                            mode="date"
                            date={profile.birthYear}
                            onDateChange={(date) => {
                                handleChange('birthYear', date)
                            }}
                        />
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={{color: 'white'}}>Submit</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    text: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        alignSelf: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#c31e39',
    },
});

export default AboutMe;
