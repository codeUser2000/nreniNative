import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet} from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import {useDispatch, useSelector} from "react-redux";
import {searchRequest} from "../redux/actions/search";
import ShopComponent from "../components/ShopComponent";
import Loader from "../components/Loader";
import Api from "../Api";

function Shop({navigation}) {
    const product = useSelector((state) => state.reducer.search.product);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const loadMore = useCallback(async () => {
        setPage(+page + 1)
        await dispatch(searchRequest({page: +page + 1}));
    }, [])
    useEffect(() => {
        navigation.addListener('focus',async () => {
            await dispatch(searchRequest({page:1}))
        })
    },[])
    useEffect(() => {
        (async () => {
            await dispatch(searchRequest({page: 1}));
        })();
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
