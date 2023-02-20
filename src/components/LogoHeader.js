import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import img from "../assets/images/logo.png";

function LogoHeader({title}) {
    return (
        <View style={styles.header}>
            <Image style={{height:60, width: 60}} source={img} />
            <Text style={{ marginLeft:10, fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40,
    },
});


export default LogoHeader;
