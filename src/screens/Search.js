import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import MasonryList from '@react-native-seoul/masonry-list';
import {useSelector} from 'react-redux';
import CategoryItem from '../components/CategoryItem';
import ProductNewItem from '../components/ProductNewItem';
import NoData from "../components/NoData";
import Loader from "../components/Loader";
import Api from "../Api";

function Search({route, navigation}) {
    const [search, setSearch] = useState('')
    const category = useSelector(state => state.reducer.search.category);
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const loadMore = useCallback(async () => {
        setPage(+page + 1)
    }, [])
    const getData = useCallback(() => {
        setIsLoading(true)
        Api.getData({page, search, filter: route.params || ''}).then(({data}) => {
            setProduct([...product, ...data.products])
            // if(search){
            //     setProduct([...data.products])
            // }
            setIsLoading(false)
        }).catch((e) => console.log(e))
    }, [page, search, route.params])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getData();
        })
    },[])
    useEffect(() => {
        getData()
    }, [page, search]);

    const handleSearch = useCallback( (ev) => {
        setSearch(ev)
    }, []);

    useEffect(() => {
        setSearch(route.params)
    }, [route.params])
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <Icon name="search" size={30}/>
                <TextInput
                    style={styles.input}
                    value={search}
                    placeholder="Search..."
                    onChangeText={(ev) => handleSearch(ev)}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
               <MasonryList
                    data={category}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <CategoryItem setSearch={setSearch} item={item}/>}
                />
            </View>
            <View style={{flex: 1}}>
                {!_.isEmpty(product)?
                    <FlatList
                    data={product}
                    keyExtractor={() => _.uniqueId()}
                    numColumns={2}
                    renderItem={({item}) => <ProductNewItem item={item}/>}
                    onEndReachedThreshold={0}
                    onEndReached={loadMore}
                    ListFooterComponent={() => <Loader state={isLoading} />}
                />:
                    <NoData />}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 40,
        flex: 1,
    },
});

export default Search;
