import React, {useEffect} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import ring from '../assets/images/post/ring.jpg';
import Icon from "react-native-vector-icons/MaterialIcons";
import Api from "../Api";

function Cart(props) {
    useEffect(() => {
        (async () => {
           const {data} = await Api.getCard(1)
            console.log(data)
        })()
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
            <View style={styles.cardItem}>
                <Image style={styles.img} source={ring} resizeMode='cover'/>
                <View style={styles.itemDesk}>
                    <View style={styles.info}>
                        <View style={styles.main}>
                            <Text style={styles.infoTitle}>Ring</Text>
                            <Text style={styles.desk}>Lorem Ipsum</Text>
                        </View>
                        <Text style={styles.price}>$ 25.00</Text>
                    </View>
                    <View style={styles.action}>
                        <Text style={styles.delete}>
                            <Icon name="delete" size={25}/>
                        </Text>
                        <View style={styles.countBtn}>
                            <TouchableOpacity>
                                <Text style={styles.count}>─</Text>
                            </TouchableOpacity>
                            <TextInput value='1'/>
                            <TouchableOpacity>
                                <Text style={styles.count}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardItem: {
        height: 180,
        padding: 13,
        marginBottom: 20,
        borderRadius: 30,
        flexDirection: 'row',
        backgroundColor: '#ffece5',
        justifyContent: 'space-between',
    },
    img: {
        width: '30%',
        height: '100%',
        borderRadius: 25,
    },
    itemDesk: {
        width: '65%',
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
    },
    desk: {
        fontSize: 17,
        fontWeight: '400',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    action: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    countBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    count: {
        width: 25,
        height: 25,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 12,
        textAlign: 'center',
        borderColor: '#4a4a4a',
    },
});


export default Cart;
