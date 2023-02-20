import React, {useCallback, useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import Api from "../Api";
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
        <View style={{flex:1, backgroundColor:'white'}}>
            <FlatList
                data={order}
                renderItem={({item}) => <OrderItem item={item} /> } />
        </View>
    );
}
const styles = StyleSheet.create({
    stretch: {
        height:200,
    },
})
export default Orders;
