import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import _ from "lodash";
import {API_URL} from "@env";
import ring from '../assets/images/post/ring.jpg'

function OrderItem({item}) {
    return (
        <View key={_.uniqueId()}>
            <Text>{item.quantity}</Text>
            <Text>{item.deliveryStatus}</Text>
            <Image resizeMode='cover' style={styles.img} source={{uri: API_URL + item.avatar}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
    },
})

export default OrderItem;
