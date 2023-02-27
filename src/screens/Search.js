import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import MasonryList from '@react-native-seoul/masonry-list';
import {useSelector} from 'react-redux';
import CategoryItem from '../components/CategoryItem';
import NoData from "../components/NoData";
import Loader from "../components/Loader";
import Api from "../Api";
import ShopComponent from "../components/ShopComponent";
import Utils from "../helpers/Utils";

function Search({route}) {
    const [search, setSearch] = useState('')
    const category = useSelector(state => state.reducer.search.category);
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(1)

    const getData = useCallback(() => {
        setIsLoading(true)
        Api.getData({page, search, filter: route.params || ''}).then(({data}) => {
            if(search && +page === 1){
                setProduct(data.products)
            }else if(search){
                setProduct(Utils.dataFilterFromDuplicates(product, data.products))
            } else{
                setProduct(Utils.dataFilterFromDuplicates(product, data.products))
            }
            setPagination(data.totalPages)
            setIsLoading(false)
        }).catch((e) => console.log(e,88))
    }, [page, product, search, route.params])
    const loadMore = useCallback(async () => {
        if (+page < +pagination){
            setPage(+page + 1)
        }
    }, [pagination, page])
    useEffect(() => {
        getData()
    }, [page, search]);

    const handleSearch = useCallback( (ev) => {
        setSearch(ev)
        setPage(1)
    }, []);

    useEffect(() => {
        setSearch(route.params || '')
        setPage(1)
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
                    renderItem={({item}) => <ShopComponent item={item}/>}
                    onEndReachedThreshold={0}
                    onEndReached={() => loadMore()}
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
