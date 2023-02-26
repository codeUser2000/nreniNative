import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../redux/actions/search';
import ProductNewItem from '../components/ProductNewItem';
import category from "../category";
import Icon from "react-native-vector-icons/MaterialIcons";
import img from '../assets/images/banner.jpeg';
import chainRing from '../assets/images/post/chainRing.jpg';
import {API_URL} from "@env";
import _ from 'lodash';
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ProductByCategory from "../components/ProductByCategory";
import ring from '../assets/images/post/ring.jpg';
import Api from "../Api";
import Loader from "../components/Loader";

function Home({navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const loadMore = useCallback(async () => {
        console.log(56789)
        setPage(+page + 1)
    }, [])
    const getData = useCallback(() => {
        setIsLoading(true)
        Api.getData({page}).then(({data}) => {
            setProduct([...product,...data.products])
            setIsLoading(false)
        }).catch((e) => console.log(e))
    }, [page])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getData();
        })
    },[])
    useEffect(() => {
        getData()
    }, [page]);
    return (
        <View style={{backgroundColor: 'white', flex: 1, padding: 15}}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                    <Icon name='dashboard' size={20} style={styles.topIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileNavigation', { screen: 'Profile' })}>
                    <Icon name='person' size={20} style={styles.topIcon}/>

                </TouchableOpacity>
            </View>
            <View style={styles.banner}>
                <Image resizeMode="cover" source={img} style={styles.bannerImg}/>
                <Text style={styles.welcome}>Welcome to SILVER NRENI page</Text>
            </View>


            <Text style={{fontSize: 30}}>New product</Text>
            <FlatList
                numColumns={2}
                keyExtractor={() => _.uniqueId()}
                data={product}
                renderItem={({item}) => <ProductNewItem api={API_URL} item={item}/>}
                style={{flexGrow: 0}}
                onEndReachedThreshold={0}
                onEndReached={loadMore}
                ListFooterComponent={() => <Loader state={isLoading} />}
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
        padding: 15,
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
