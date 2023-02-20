import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../redux/actions/search';
import ProductNewItem from '../components/ProductNewItem';
import MasonryList from '@react-native-seoul/masonry-list';
import category from "../category";
import {API_URL} from "@env";
import _ from 'lodash';
import {FlatList, Text, View} from "react-native";
import ProductByCategory from "../components/ProductByCategory";

function Home() {
    const product = useSelector((state) => state.reducer.search.product);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(searchRequest({page: 1}));
        })();
        console.log(API_URL);
    }, []);
    return (
        <View style={{ backgroundColor: 'white', flex: 1, padding:10}}>
            <Text style={{fontSize:30}}>New product</Text>
            <FlatList
                keyExtractor={() => _.uniqueId()}
                data={product}
                horizontal
                renderItem={({item}) => <ProductNewItem api={API_URL} item={item}/>}
                style={{flexGrow: 0}}
            />
            <Text style={{fontSize:30, marginBottom: 10}}>Categories product</Text>
            <FlatList
                data={category}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ProductByCategory item={item}/>}
                // refreshing={isLoadingNext}
                // onRefresh={() => refetch({first: ITEM_CNT})}
                // onEndReachedThreshold={0.1}
                horizontal

                // onEndReached={() => alert(3)}
            />
        </View>
    );
}

export default Home;
