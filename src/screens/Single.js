import React, {useCallback, useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import _ from 'lodash';
import {API_URL} from "@env";
import {useDispatch, useSelector} from "react-redux";
import {deleteLikeRequest, likeRequest, singleRequest} from "../redux/actions/product";
import {addToCardRequest} from "../redux/actions/card";
import Icon from "react-native-vector-icons/MaterialIcons";

function Single({route, navigation, setLikeLocal}) {
    const [data, setData] = useState({});
    const [count, setCount] = useState(1);
    const [isLiked, setIsLiked] = useState(1);
    const dispatch = useDispatch();
    const handleChange = useCallback((ev) => {
        if (_.isNumber(+ev) || ev) {
            if (+ev < 0) {
                setCount(1);
            } else {
                setCount(ev);
            }
            if (+ev > +data.countProduct) {
                setCount(+data.countProduct);
            }
        } else {
            setCount(1);
        }
    }, [data]);
    const product = useSelector((state) => state.reducer.product.singleData);

    const handleLike = useCallback(async (product) => {
        if (isLiked) {
            setIsLiked(false)
            await dispatch(deleteLikeRequest(product.product.id))
            // setLikeLocal(product.product.id, false)

        } else {
            setIsLiked(true)
            await dispatch(likeRequest(product.product.id))
            // setLikeLocal(product.product.id, true)

        }
    }, [isLiked])

    const handleProductCountChange = useCallback((operator) => {
        if (operator === 'add' && +count < +data.countProduct) {
            setCount(+count + 1);
        } else if (operator === 'delete' && +count > 1) {
            setCount(+count - 1);
        }
    }, [data, count]);


    const handleAddToCart = useCallback(async (data) => {
        const product = {
            quantity: count,
            price: +data.newPrice * count,
            product: data,
        };
        await dispatch(addToCardRequest(product));
    }, [])
    useEffect(() => {
        (async () => {
            await dispatch(singleRequest(route.params))
        })()
    }, [route.params])
    useEffect(() => {
        setData(product.product)
        setIsLiked(product.isLiked)
    }, [product])
    return (
        <>
            {!_.isEmpty(data) ?
                <View style={styles.block}>
                    <View style={styles.top}>
                        <TouchableOpacity style={styles.like} onPress={() => handleLike(product)}>
                            {isLiked ?
                                <Icon name='favorite' color='#c31e39' size={25}/>
                                :
                                <Icon name='favorite' color='#4a4a4a' size={25}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <Image
                        style={styles.avatar}
                        source={{uri: `${API_URL}${data.avatar}`}}/>
                    <ScrollView style={styles.textBlock}>
                        <View>
                            <View style={styles.info}>
                                <View style={styles.name}>
                                    <Text style={styles.title}>{data.title}</Text>
                                    <Text style={styles.category}>{data.categories?.type}</Text>
                                </View>
                                <View style={styles.price}>
                                    <Text style={styles.newPrice}>$
                                        {' '}
                                        {data.newPrice}
                                    </Text>
                                    <Text style={styles.oldPrice}>
                                        ${' '}
                                        {data.oldPrice}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.desc}>{data.description}</Text>
                            <View style={styles.quantity}>
                                <TouchableOpacity onPress={() => handleProductCountChange('delete')}>
                                    <Text style={styles.count}>-</Text>
                                </TouchableOpacity>
                                <TextInput
                                    keyboardType='numeric'
                                    value={count + ''}
                                    onChangeText={(ev) => handleChange(ev)}
                                    style={styles.count}/>
                                <TouchableOpacity onPress={() => handleProductCountChange('add')}>
                                    <Text style={styles.count}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.singleBottom}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.buy}>Buy Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleAddToCart(data)} style={styles.addToCard}>
                                <Icon name='shopping-cart' style={styles.cardIcon} size={23}/>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View> : null}
        </>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    like: {
        top: 15,
        right: 15,
        width: 35,
        height: 35,
        lineHeight: 30,
        zIndex: 1000000,
        borderRadius: 23,
        textAlign: 'center',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: '#ffece5',
    },
    avatar: {
        height: '60%',
        width: '100%',
    },
    textBlock: {
        // flex: 3,
        padding: 20,
        marginTop: -20,
        borderRadius: 23,
        backgroundColor: '#ffece5',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 23,
        color: '#c31e39',
        marginBottom: 5,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    category: {
        fontSize: 19,
        textTransform: 'capitalize',
    },
    price: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    newPrice: {
        fontSize: 22,
        marginRight: 7,
        color: '#c31e39',
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
    },
    desc: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '400',
    },
    quantity: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    count: {
        fontSize: 25,
        color: '#4a4a4a',
        marginBottom: 50
    },
    singleBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        height: 50,
        width: '70%',
        borderWidth: 2,
        marginRight: 15,
        borderRadius: 23,
        alignItems: 'center',
        borderColor: '#c31e39',
        justifyContent: 'center',
        backgroundColor: '#c31e39',
    },
    buy: {
        fontSize: 20,
        color: "#ffece5",
        textAlign: 'center',
    },
    addToCard: {
        width: 50,
        height: 50,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#c31e39",
    },
    cardIcon: {
        color: '#ffece5',
    }
})
export default Single;
