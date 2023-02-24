import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import {API_URL} from "@env";
import {useDispatch, useSelector} from "react-redux";
import {deleteLikeRequest, likeRequest, singleRequest} from "../redux/actions/product";
import {addToCardRequest} from "../redux/actions/card";


function Single({route}) {
    const [data, setData] = useState({});
    const [count, setCount] = useState(1);
    const [isLiked, setIsLiked] = useState(1);
    const dispatch = useDispatch();
    const handleChange = useCallback((ev) => {
        if (_.isNumber(+ev) || ev) {
            if (+ev < 0) {
                setCount(1);
            }else{
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
        if(isLiked){
            setIsLiked(false)
            await dispatch(deleteLikeRequest(product.product.id))
        } else{
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
    },[route.params])
    useEffect(() => {
        setData(product.product)
        setIsLiked(product.isLiked)
    },[product])
    return (
        <>
            {!_.isEmpty(data)?       <View style={styles.block}>
                <View style={{padding:10, flex:3}}>
                    <Text>{data.categories?.type}</Text>
                    <Text style={styles.title}>{data.title}</Text>
                    <Image
                        style={styles.stretch}
                        source={{uri:`${API_URL}${data.avatar}`}} />
                </View>
                <View style={styles.bottom}>
                    <View style={styles.topBlock}>
                        <Text style={styles.price}>Price</Text>
                        <TouchableOpacity style={{flexDirection:'row', alignItems:"center"}} onPress={() => handleLike(product)}>
                            <Icon name="favorite" style={styles.price} color="#c31e39"/>
                            <Text style={styles.texts}>{isLiked+ ''}</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.texts}>{product.description}</Text>
                    <View style={{flexDirection:'row', alignItems:"center", flex:1, justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => handleProductCountChange('delete')}><Text style={styles.count} >-</Text></TouchableOpacity>
                        <TextInput
                            keyboardType='numeric'
                            value={count + ''}
                            onChangeText={(ev) => handleChange(ev)}
                            style={styles.count}/>
                        <TouchableOpacity onPress={() => handleProductCountChange('add')}><Text style={styles.count} >+</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => handleAddToCart(data)} style={styles.addToCart}><Text style={{color:"#c31e39", fontSize:20}}>Add to cart</Text></TouchableOpacity>
                </View>
            </View> :null}
        </>
    );
}
const styles = StyleSheet.create({
    block: {
        flex:1,
        alignSelf: 'stretch',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    title:{
        color: '#c31e39',
        fontSize: 30
    },
    stretch: {
        flex: 2,
        margin:20
    },
    bottom: {
        flex:2,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        backgroundColor: '#ccc',
        paddingHorizontal:30,
        paddingVertical:10

    },
    texts: {
        color: 'white'
    } ,
    topBlock: {
        color: 'white',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    price: {
        fontSize: 30
    },
    count: {
        fontSize: 30,
        color: 'white'
    },
    addToCart: {
        borderWidth: 2,
        borderColor:"white",
        backgroundColor:"white",
        padding:10,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 20
    }
})
export default Single;
