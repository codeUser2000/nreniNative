import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import ring from '../assets/images/post/ring.jpg';
import Icon from "react-native-vector-icons/MaterialIcons";

function Cart(props) {
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
            <View style={styles.cardItem}>
                <Image style={styles.img} source={ring} resizeMode='cover'/>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Ring</Text>
                    <Text style={styles.desk}>Lorem Ipsum</Text>
                    <Text style={styles.price}>$ 25.00</Text>
                </View>
                <View style={styles.action}>
                    <Text style={styles.delete}>
                        <Icon name="delete"/>
                    </Text>
                    <View style={styles.count}>
                        <TouchableOpacity><Text>-</Text></TouchableOpacity>
                        <TextInput value='1'/>
                        <TouchableOpacity><Text>+</Text></TouchableOpacity>
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
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    desk: {
        fontSize: 17,
        fontWeight: '300',
    },
    price: {
        fontSize: 23,
        fontWeight: 'bold',
    },
});


export default Cart;
