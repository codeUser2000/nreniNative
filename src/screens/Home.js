import React, {useCallback, useEffect, useState} from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import img from '../assets/images/banner.jpeg';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Api from "../Api";
import Loader from "../components/Loader";
import ShopComponent from "../components/ShopComponent";
import Utils from "../helpers/Utils";

function Home({navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(1)

    const setLikeLocal = useCallback((id, bool) => {
        product.map((p) => {
            if(+p.id === +id){
               if (bool){
                   p.like += 1
               }else {
                   p.isLiked -= 1
               }
            }
            return p;
        })

        setProduct(product)
    }, [])
    const getData = useCallback(() => {
        setIsLoading(true)
        Api.getData({page}).then(({data}) => {
            setProduct(Utils.dataFilterFromDuplicates(product, data.products))
            setPagination(data.totalPages)
            setIsLoading(false)
        }).catch((e) => console.log(e))
    }, [page])

    const loadMore = useCallback(async () => {
        if (+page < +pagination){
            setPage(+page + 1)
        }
    }, [page,pagination])

    useEffect(() => {
        getData()
    }, [page]);
    useEffect(() => {
        getData()
    }, []);
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

            <FlatList
                style={styles.shop}
                data={product}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({item}) => <ShopComponent setLikeLocal={setLikeLocal} item={item}/>}
                onEndReachedThreshold={0}
                onEndReached={() => loadMore()}
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
