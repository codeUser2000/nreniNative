import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {deleteFromCardRequest, getCardRequest, updateCartRequest} from "../redux/actions/card";
import Loader from "../components/Loader";
import CardComponent from "../components/CardComponent";
import Api from "../Api";
import Utils from "../helpers/Utils";


function Cart({navigation}) {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(1)
    const product = useSelector((state) => state.reducer.card.cardData);

    const getCartData = useCallback(() => {
        setIsLoading(true)
        Api.getCard(page || 1).then(({data}) => {
            setProductData(Utils.dataFilterFromDuplicates(productData, data.cartItem))
            setPagination(data.totalPages)
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
        if (+page < +pagination) {
            setPage(+page + 1)
        }
    }, [pagination, page])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getCartData()
        })
    }, [])
    const handleCountChange = useCallback(async (operator, product) => {
        console.log(operator === '+' && product.product.countProduct >= product.quantity + 1)

        if (operator === '+' && product.product.countProduct >= product.quantity + 1) {
            await dispatch(updateCartRequest({
                productId: product.product.id,
                count: product.quantity + 1,
                price: product.product.newPrice,
            }));

        } else if (product.quantity > 1 && operator === '-') {
            await dispatch(updateCartRequest({
                productId: product.product.id,
                count: product.quantity - 1,
                price: product.product.newPrice,
            }));
        }
        await dispatch(getCardRequest(page));

    }, [page]);

    const handleDelete = useCallback(async (id) => {
        await dispatch(deleteFromCardRequest(id));
        await dispatch(getCardRequest(1));
    }, [page]);


    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
            <FlatList
                data={productData}
                keyExtractor={() => _.uniqueId()}
                ListFooterComponent={() => <Loader state={isLoading}/>}
                renderItem={({item}) => <CardComponent handleCountChange={handleCountChange} handleDelete={handleDelete} item={item}/>}
                onEndReachedThreshold={0}
                onEndReached={() => loadMore()}
            />
        </View>
    );
}


export default Cart;
