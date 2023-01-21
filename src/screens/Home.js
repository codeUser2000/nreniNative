import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../redux/actions/search';
import ProductItem from '../components/ProductItem';
import MasonryList from '@react-native-seoul/masonry-list';
import {API_URL} from "@env";
function Home() {
    const product = useSelector((state) => state.reducer.search.product);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(searchRequest({page:1}));
        })();
        console.log(API_URL);
    }, []);
    return (
        <MasonryList
            data={product}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({item}) => <ProductItem api={API_URL} item={item}/>}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            onEndReached={() => alert(3)}
        />

    );
}

export default Home;
