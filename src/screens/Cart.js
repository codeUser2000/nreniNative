import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import ring from '../assets/images/post/ring.jpg';
import Icon from "react-native-vector-icons/MaterialIcons";
import Api from "../Api";
import {useDispatch, useSelector} from "react-redux";
import {getCardRequest} from "../redux/actions/card";
import {API_URL} from "@env";


function Cart({navigation}) {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.reducer.card.cardData);
    const [productData, setProductData] = useState([])
    const [editData, setEditData] = useState([])
    useEffect(() => {
        (async () => {
            await dispatch(getCardRequest(1))
        })()
    }, [])

    useEffect(() => {
        setProductData(product)
        setEditData(product)
    }, [product])
    useEffect(() => {
        navigation.addListener('focus', async () => {
            await dispatch(getCardRequest(1))
        })
    },[])
    const handleCountChange = useCallback((operation, id) => {
        if(operation === '+'){
            editData.map((p) => {
                if(+p.product.id === +id){
                    p.quantity +=1
                    p.price = p.product.newPrice * p.quantity
                }
                return p;
            })
            setProductData(editData)
        }
    }, [editData])

    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
            <FlatList data={productData} renderItem={({item}) => (
                <View style={styles.cardItem}>
                    <Image style={styles.img} source={{uri:API_URL + item.product.avatar}} resizeMode='cover'/>
                    <View style={styles.itemDesk}>
                        <View style={styles.info}>
                            <View style={styles.main}>
                                <Text style={styles.infoTitle}>{item.product.title}</Text>
                                <Text style={styles.desk}>{item.product.description}</Text>
                            </View>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                        <View style={styles.action}>
                            <Text style={styles.delete}>
                                <Icon name="delete" size={25}/>
                            </Text>
                            <View style={styles.countBtn}>
                                <TouchableOpacity>
                                    <Text style={styles.count}>─</Text>
                                </TouchableOpacity>
                                <TextInput value={item.quantity + ''} style={styles.quantity}/>
                                <TouchableOpacity onPress={() => handleCountChange('+', item.product.id)}>
                                    <Text style={styles.count}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )} />
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
    quantity: {
        fontSize: 20,
        textAlign: 'center',
    }
});


export default Cart;
