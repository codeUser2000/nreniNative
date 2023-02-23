import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../redux/actions/search';
import ProductNewItem from '../components/ProductNewItem';
import category from "../category";
import img from '../assets/images/banner.jpeg';
import {API_URL} from "@env";
import _ from 'lodash';
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
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
        <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
            <View style={styles.top}>
                <Text>category icon</Text>
                <Text>profile icon</Text>
            </View>
            <View style={styles.banner}>
                <Image resizeMode="cover" source={img} style={styles.bannerImg}/>
                <Text style={styles.welcome}>Welcome to SILVER NRENI page</Text>
            </View>
            <Text style={{fontSize: 30}}>New product</Text>
            <FlatList
                keyExtractor={() => _.uniqueId()}
                data={product}
                horizontal
                renderItem={({item}) => <ProductNewItem api={API_URL} item={item}/>}
                style={{flexGrow: 0}}
            />
            <Text style={{fontSize: 30, marginBottom: 10}}>Categories product</Text>
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

const styles = StyleSheet.create({
    banner: {
        flex: 1,
        padding: 10,
        height: 500,
        width: '100%',
        flexDirection:'row',
        marginBottom: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffece5',
    },
    bannerImg: {
        width: '50%',
        height: '100%',
        borderRadius: 25,
    },
    welcome: {
        width: '50%',
        fontSize: 18,
        color: '#c31e39',
    },
});

export default Home;
