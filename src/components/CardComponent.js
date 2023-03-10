import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {API_URL} from "@env";

function CardComponent({item, handleDelete, handleCountChange}) {
    return (
        <View style={styles.cardItem}>
            <View style={styles.cardItemMain}>
                <Image style={styles.img} source={{uri: API_URL + item.product.avatar}} resizeMode='cover'/>
                <View style={styles.itemDesk}>
                    <View style={styles.info}>
                        <View style={styles.main}>
                            <Text style={styles.infoTitle}>{item.product.title}</Text>
                            <Text style={styles.desk}>{item.product.description}</Text>
                        </View>
                        <Text style={styles.price}>$ {item.price}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.action}>
                <View style={styles.countBtn}>
                    <TouchableOpacity style={styles.countBtns} onPress={() => handleCountChange('-', item)}>
                        <Text
                            style={[styles.count, +item.quantity === 1 || +item.product.countProduct === 0 ? {backgroundColor: '#ccc'} : {}]}>─</Text>
                    </TouchableOpacity>
                    <TextInput value={item.quantity + ''} style={styles.quantity}/>
                    <TouchableOpacity onPress={() => handleCountChange('+', item)} style={styles.countBtns}>
                        <Text
                            style={[styles.count, +item.quantity === +item.product.countProduct || +item.product.countProduct === 0 ? {backgroundColor: '#ccc'} : {}]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconsBtn}>
                    <TouchableOpacity style={styles.buy}>
                        <Icon name='payments' size={20} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.delete}>
                        <Icon name='delete' size={20} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardItem: {
        // height: 250,
        padding: 14,
        marginBottom: 25,
        borderRadius: 20,
        backgroundColor: '#ffece5',
        justifyContent: 'space-between',
    },
    cardItemMain: {
        height: 180,
        // height: '79%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img: {
        width: '39%',
        height: '100%',
        marginRight: 15,
        borderRadius: 20,
    },
    itemDesk: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    infoTitle: {
        fontSize: 19,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    desk: {
        fontSize: 17,
        fontWeight: '400',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    countBtm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    count: {
        width: 25,
        height: 25,
        fontSize: 20,
        borderRadius: 12,
        color: '#ffece5',
        textAlign: 'center',
        backgroundColor: '#c31e39',
    },
    quantity: {
        fontSize: 23,
        textAlign: 'center',
    },
    action: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    countBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    countBtns: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconsBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buy: {
        width: 30,
        height: 32,
        marginRight: 7,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c31e39',
    },
    delete: {
        width: 30,
        height: 32,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c31e39',
    },
    icon: {
        color: '#ffece5',
        borderRadius: 20,
    }
});

export default CardComponent;
