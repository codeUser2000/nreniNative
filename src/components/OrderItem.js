import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import _ from "lodash";
import {API_URL} from "@env";

function OrderItem({item}) {
    return (
        <View key={_.uniqueId()}>
           <ScrollView>
               <Text>{item.quantity}</Text>
               <Text>{item.deliveryStatus}</Text>
               <Image resizeMode='cover' style={styles.img} source={{uri: API_URL + item.products.avatar}}/>
           </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 200,
    },
})

export default OrderItem;
