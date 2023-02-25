import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../redux/actions/search';
import ProductNewItem from '../components/ProductNewItem';
import category from "../category";
import Icon from "react-native-vector-icons/MaterialIcons";
import img from '../assets/images/banner.jpeg';
import {API_URL} from "@env";
import _ from 'lodash';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ProductByCategory from "../components/ProductByCategory";

function Home({navigation}) {
    const product = useSelector((state) => state.reducer.search.product);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(searchRequest({page: 1}));
        })();
        console.log(API_URL);
    }, []);
    return (
        <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                    <Icon name='dashboard' size={20} style={styles.topIcon}/>
                </TouchableOpacity>
                <Icon name='person' size={20} style={styles.topIcon}/>
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
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topIcon: {
        width: 30,
        height: 30,
        lineHeight: 30,
        borderRadius: 30,
        color: '#ffece5',
        textAlign: 'center',
        backgroundColor: '#c31e39',
    },
    banner: {
        padding: 10,
        height: 200,
        marginRight: 15,
        marginBottom: 30,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffece5',
    },
    bannerImg: {
        width: '50%',
        height: '100%',
        marginRight: 15,
        borderRadius: 25,
    },
    welcome: {
        width: '50%',
        fontSize: 25,
        color: '#c31e39',
        textAlign: 'center',
    },
});

export default Home;
