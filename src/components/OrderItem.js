import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import _ from "lodash";
import {API_URL} from "@env";

function OrderItem({item}) {
    return (
        <View key={_.uniqueId()}>
            <Text>{item.quantity}</Text>
            <Text>{item.deliveryStatus}</Text>
            <Image style={styles.stretch} source={{uri:API_URL + item.products.avatar}} />
        </View>
    );
}
const styles = StyleSheet.create({
    stretch: {
        height:200,
    },
})

export default OrderItem;
