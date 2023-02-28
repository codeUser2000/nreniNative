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
                <Text style={styles.name}>{item.products.title}</Text>
                <Text style={styles.desc}>{item.products.description}</Text>
                <Text style={styles.count}>{item.quantity} pcs ─ ${item.price}</Text>
                <Text style={styles.status}>status - {item.deliveryStatus}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderItem: {
        padding: 15,
        marginBottom: 20,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#ffece5',
    },
    main: {
        width: '60%',
    },
    img: {
        width: '39%',
        height: 180,
        marginRight: 10,
        borderRadius: 15,
    },
    name: {
        fontSize: 19,
        color: '#c31e39',
        marginBottom: 10,
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    desc: {
        fontSize: 16,
        marginBottom: 15,
    },
    count: {
        fontSize: 17,
        color: '#c31e39',
    },
    status: {
        right: 0,
        bottom: 0,
        fontSize: 16,
        fontWeight: '500',
        position: "absolute",
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textTransform: 'capitalize',
    }
});

export default OrderItem;
