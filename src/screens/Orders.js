import React, {useCallback, useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {orderGetRequest} from "../redux/actions/orders";
import OrderItem from "../components/OrderItem";


function Orders(props) {
    const dispatch = useDispatch();
    const order = useSelector(state => state.reducer.orders.orderData)
    useEffect(() => {
        (async () => {
            await dispatch(orderGetRequest())
        })()
    }, [])
    console.log(order)
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 15,}}>
            <FlatList
                data={order}
                keyExtractor={() => _.uniqueId()}
                renderItem={({item}) => <OrderItem item={item}/>}/>
        </View>
    );
}

export default Orders;
