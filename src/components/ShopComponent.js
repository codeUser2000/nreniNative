import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {API_URL} from "@env";

function ShopComponent({item}) {
    return (
        <View style={styles.block}>
            <Image style={styles.img} source={{uri:API_URL + item.avatar}} resizeMode='cover' borderRadius={25}/>
            <View style={styles.textBlock}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>
                    $ {item.newPrice}
                    {' '}
                    {item.oldPrice ?<Text style={styles.oldPrice}>${item.oldPrice}</Text>: null}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="favorite" size={21} color={"#c31e39"}/>
                    <Text style={styles.like}>{item.like}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 220,
        width: "45%",
        borderRadius: 25,
        marginBottom: 150,
        marginHorizontal: 10,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    textBlock: {
        padding: 10,
    },
    title: {
        fontSize: 19,
        fontWeight: '600',
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    price: {
        fontSize: 18,
        marginBottom: 10,
        flexWrap: 'wrap',
        fontWeight: '400',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
    },
    like: {
        fontSize: 18,
    }
});


export default ShopComponent;
