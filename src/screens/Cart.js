import React, {useCallback, useEffect, useState} from 'react';
import { View, FlatList} from 'react-native';
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {getCardRequest, deleteFromCardRequest} from "../redux/actions/card";
import Loader from "../components/Loader";
import CardComponent from "../components/CardComponent";
import Api from "../Api";


function Cart({navigation}) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.reducer.card.cardData);
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const getCartData = useCallback(() => {
        setIsLoading(true)
        Api.getCard(page).then(({data}) => {
            setProductData(...productData, data.cartItem)
        }).catch((e) => console.log(e))
        setIsLoading(false)

    }, [page])

    useEffect(() => {
        getCartData()
    }, [page])

    useEffect(() => {
        setProductData(product)
    }, [product])

    const loadMore = useCallback(() => {
        setPage(+page + 1)
    }, [])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getCartData()
        })
    },[])
    // const handleCountChange = useCallback((operation, id) => {
    //     if(operation === '+'){
    //         editData.map((p) => {
    //             if(+p.product.id === +id){
    //                 p.quantity +=1
    //                 p.price = p.product.newPrice * p.quantity
    //             }
    //             return p;
    //         })
    //         setProductData(editData)
    //     }
    // }, [editData]);

    const handleDelete = useCallback(async (id) => {
            await dispatch(deleteFromCardRequest(id));
            await dispatch(getCardRequest(page));
    }, []);


    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
            <FlatList
                data={productData}
                keyExtractor={() => _.uniqueId()}
                ListFooterComponent={() => <Loader state={isLoading} />}
                renderItem={({item}) => <CardComponent handleDelete={handleDelete} item={item} /> }
                onEndReachedThreshold={0}
                onEndReached={() => loadMore}
            />
        </View>
    );
}


export default Cart;
