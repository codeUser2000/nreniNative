import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {API_URL} from "@env";
import {useNavigation} from "@react-navigation/native";

function ShopComponent({item}) {
    const navigation = useNavigation();
    const handleSingle = useCallback((data) => {
        navigation.navigate('Single', data.id)
    }, []);
    return (
        <>
            <TouchableOpacity onPress={() => handleSingle(item)} style={styles.block}>

                {item.discount !== '0' ?
                    <View style={styles.top}>
                        <Text style={styles.discount}>-{item.discount}%</Text>
                    </View>
                    : null
                }

                <Image style={styles.img} source={{uri: API_URL + item.avatar}} resizeMode='cover' borderRadius={25}/>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item.discount !== 0 ?
                        <Text style={styles.price}>
                            $ {item.newPrice}
                            {' '}
                            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                        </Text>
                        :
                        <Text style={styles.price}>
                            $ {item.newPrice}
                        </Text>
                    }
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="favorite" size={21} color={"#c31e39"}/>
                        <Text style={styles.like}>{item.like}</Text>
                    </View>
                </View>
            </TouchableOpacity></>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 220,
        width: "45%",
        borderRadius: 23,
        marginBottom: 150,
        marginHorizontal: 10,
        position: 'relative',
    },
    top: {
        top: 5,
        left: 5,
        width: 43,
        height: 43,
        zIndex: 1000,
        display: 'flex',
        borderRadius: 23,
        textAlign: 'center',
        position: 'absolute',
        alignItems: 'center',
        borderColor: '#c31e39',
        justifyContent: 'center',
        backgroundColor: '#c31e39',
    },
    discount: {
        fontSize: 16,
        color: '#ffece5',
        fontWeight: '500',
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
