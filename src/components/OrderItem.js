import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import _ from "lodash";
import {API_URL} from "@env";
import Icon from "react-native-vector-icons/MaterialIcons";

function OrderItem({item}) {
    return (
        <View style={styles.orderItem} key={_.uniqueId()}>
            <Image resizeMode='cover' style={styles.img} source={{uri: API_URL + item.products.avatar}}/>
            <View style={styles.main}>
                <Text>{item.products.title}</Text>
                <Text>{item.products.description}</Text>
                <Text>product count - {item.quantity}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
                <Text>status - {item.deliveryStatus}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderItem: {
        height: 220,
        padding: 13,
        marginBottom: 25,
        borderRadius: 30,
        flexDirection: 'row',
        backgroundColor: '#ffece5',
    },
    main: {
        width:'65%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    img: {
        width: '37%',
        height: '100%',
        marginRight: 10,
        borderRadius: 23,
    },
});

export default OrderItem;
