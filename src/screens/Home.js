import React, {useCallback, useEffect, useState} from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import img from '../assets/images/banner.jpeg';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Api from "../Api";
import Loader from "../components/Loader";
import ShopComponent from "../components/ShopComponent";
import Utils from "../helpers/Utils";
import {useDispatch} from "react-redux";

function Home({navigation}) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(1)

    const getData = useCallback(() => {
        setIsLoading(true)
        Api.getData({page}).then(({data}) => {
            setProduct(Utils.dataFilterFromDuplicates(product, data.products))
            setPagination(data.totalPages)
            setIsLoading(false)
        }).catch((e) => console.log(e))
    }, [page])

    const loadMore = useCallback(async () => {
        if (+page < +pagination) {
            setPage(+page + 1)
        }
    }, [page, pagination])

    useEffect(() => {
        getData()
    }, [page]);

    useEffect(() => {
        setProduct(product)
    }, [product]);
    useEffect(() => {
        (async () => {
           await dispatch()
        })()
    }, []);
    return (
        <View style={{backgroundColor: 'white', flex: 1, padding: 15}}>
            <View style={styles.top}>
                <TouchableOpacity style={styles.topIcon} onPress={() => navigation.navigate('Categories')}>
                    <Icon name='grid-view' size={23} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topIcon}
                                  onPress={() => navigation.navigate('ProfileNavigation', {screen: 'Profile'})}>
                    <Icon name='person' size={25} style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.banner}>
                <Image resizeMode="cover" source={img} style={styles.bannerImg}/>
                <Text style={styles.welcome}>Welcome to SILVER NRENI page</Text>
            </View>

            <FlatList
                style={styles.shop}
                data={product}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({item}) => <ShopComponent item={item}/>}
                onEndReachedThreshold={0}
                onEndReached={() => loadMore()}
                ListFooterComponent={() => <Loader state={isLoading}/>}
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
        width: 35,
        height: 35,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c31e39',
    },
    icon: {
        color: '#ffece5',
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
