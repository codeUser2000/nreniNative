import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import Api from "../Api";
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {orderGetRequest} from "../redux/actions/orders";

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
        <View style={{flex:1}}>
            {order.map((o) => (
                <View key={_.uniqueId()}>
                    <Text>{o.quantity}</Text>
                    <Text>{o.deliveryStatus}</Text>
                </View>
            ))}
        </View>
    );
}

export default Orders;
