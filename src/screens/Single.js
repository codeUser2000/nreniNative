import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import _ from 'lodash';
import {API_URL} from "@env";
import {useDispatch, useSelector} from "react-redux";
import {deleteLikeRequest, likeRequest, singleRequest} from "../redux/actions/product";
import {addToCardRequest} from "../redux/actions/card";
// import Icon from "react-native-vector-icons/MaterialIcons";

function Single({route}) {
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
        } else {
            setIsLiked(true)
            await dispatch(likeRequest(product.product.id))
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
            {!_.isEmpty(data) ? <View style={styles.block}>
                {/*<View style={styles.top}>*/}
                {/*    <Icon style={styles.undo} name='reply' size={22}/>*/}
                {/*    <Icon style={styles.like} name="favorite" size={20}/>*/}
                {/*</View>*/}
                <Image
                    style={styles.avatar}
                    source={{uri: `${API_URL}${data.avatar}`}}/>
                <View style={styles.textBlock}>
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

                    <TouchableOpacity onPress={() => handleAddToCart(data)} style={styles.btn}>
                        <Text style={styles.addToCard}>Add to card</Text>
                    </TouchableOpacity>

                </View>
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
        width: 30,
        height: 30,
        lineHeight: 30,
        color: "#ffece5",
        borderRadius: 25,
        textAlign: 'center',
        backgroundColor: '#c31e39',
    },
    undo: {
        width: 30,
        height: 30,
        lineHeight: 30,
        borderRadius: 25,
        color: "#ffece5",
        textAlign: 'center',
        backgroundColor: '#c31e39',
    },
    avatar: {
        height: '60%',
        width: '100%',
    },
    textBlock: {
        height: '45%',
        padding: 20,
        marginTop: -20,
        borderRadius: 25,
        backgroundColor: '#ffece5',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20,
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
        fontWeight: '400',
        marginTop: 15,
    },
    quantity: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    count: {
        fontSize: 25,
        color: '#4a4a4a',
    },
    btn: {
        padding: 10,
        width: '100%',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#c31e39',
        backgroundColor: '#c31e39',
    },
    addToCard: {
        fontSize: 20,
        color: "#ffece5",
        textAlign: 'center',
    },
})
export default Single;
