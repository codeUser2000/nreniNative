import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import ring from '../assets/images/post/ring.jpg';
import chainRing from '../assets/images/post/chainRing.jpg';
import Icon from "react-native-vector-icons/MaterialIcons";

function Shop(props) {
    return (
        <View style={styles.shop}>
            <View style={styles.block}>
                <Image style={styles.img} source={ring} resizeMode='cover' borderRadius={25}/>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>Ring</Text>
                    <Text style={styles.price}>
                        $ 25.00
                        {' '}
                        <Text style={styles.oldPrice}>$ 30.00</Text>
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="favorite" size={21} color={"#c31e39"}/>
                        <Text style={styles.like}>5</Text>
                    </View>
                </View>
            </View>
            <View style={styles.block}>
                <Image style={styles.img} source={chainRing} resizeMode='cover' borderRadius={25}/>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>chain ring</Text>
                    <Text style={styles.price}>
                        $ 25.00
                        {' '}
                        <Text style={styles.oldPrice}>$ 30.00</Text>
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="favorite" size={21} color={"#c31e39"}/>
                        <Text style={styles.like}>5</Text>
                    </View>
                </View>
            </View>
            <View style={styles.block}>
                <Image style={styles.img} source={ring} resizeMode='cover' borderRadius={25}/>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>Ring</Text>
                    <Text style={styles.price}>
                        $ 25.00
                        {' '}
                        <Text style={styles.oldPrice}>$ 30.00</Text>
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="favorite" size={21} color={"#c31e39"}/>
                        <Text style={styles.like}>5</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shop: {
        flex: 1,
        padding: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    block: {
        height: 220,
        width: "47%",
        borderRadius: 25,
        marginBottom: 150,
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

export default Shop;
