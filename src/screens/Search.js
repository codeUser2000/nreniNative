import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MasonryList from '@react-native-seoul/masonry-list';
import {useDispatch, useSelector} from 'react-redux';
import {categoryRequest, searchRequest} from '../redux/actions/search';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import {API_URL} from '@env';

function Search(props) {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const product = useSelector((state) => state.reducer.search.product);
    const category = useSelector(state => state.reducer.search.category);
    useEffect(() => {
        (async () => {
            await dispatch(categoryRequest());
            await dispatch(searchRequest({page: 1}));
        })();
    }, []);
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <Icon name="search" size={30}/>
                <TextInput
                    style={styles.input}
                    value={search}
                    placeholder="Search..."
                    onChange={setSearch}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <MasonryList
                    data={category}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <CategoryItem item={item}/>}
                />
                {/*<Text>All</Text>*/}
            </View>
            <View style={{flex: 1}}>
                <MasonryList
                    data={product}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({item}) => <ProductItem api={API_URL} item={item}/>}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({first: ITEM_CNT})}
                    // onEndReachedThreshold={0.1}
                    onEndReached={() => alert(3)}
                />
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
