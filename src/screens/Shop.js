import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {searchRequest} from "../redux/actions/search";
import ShopComponent from "../components/ShopComponent";
import Loader from "../components/Loader";
import Api from "../Api";

function Shop({navigation}) {
    // const product = useSelector((state) => state.reducer.search.product);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [product, setProduct] = useState([])

    const getData = useCallback(() => {
        setIsLoading(true)
       Api.getData({page}).then(({data}) => {
           setProduct([...product,...data.products])
           setIsLoading(false)
       }).catch((e) => console.log(e))
    }, [page])
    const loadMore = useCallback(async () => {
        console.log(56789)
        setPage(+page + 1)
    }, [])


    useEffect(() => {
        navigation.addListener('focus', () => {
            getData();
        })
    },[])
    useEffect(() => {
        getData()
    }, [page]);
    return (
        <FlatList
            style={styles.shop}
            data={product}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({item}) => <ShopComponent item={item}/>}
            onEndReachedThreshold={0}
            onEndReached={loadMore}
            ListFooterComponent={() => <Loader state={isLoading} />}
        />
    );
}

const styles = StyleSheet.create({
    shop: {
        backgroundColor: 'white',
    },
});

export default Shop;
