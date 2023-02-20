import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {searchRequest} from '../redux/actions/search';

function CategoryItem({item, setSearch}) {
    const dispatch = useDispatch();
    const handleProductSearch = useCallback( async (categ) => {
        if(categ === 'all'){
            await dispatch(searchRequest({page:1}));
            return;
        }
        setSearch(categ)
        await dispatch(searchRequest({page:1, filter: categ}))
    }, [])
    return (
        <TouchableOpacity onPress={() => handleProductSearch(item.type)} style={styles.block}>
            <Icon name="search" size={20} />
            <Text style={{paddingHorizontal:10}}>{item.type}</Text>
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    block: {
        width:100,
        backgroundColor: 'white',
        margin:5,
        paddingVertical:5,
        alignSelf: "center",
        flexDirection: 'row'
    },
    stretch: {
        resizeMode: 'stretch',
        height:200,
        objectFit: 'cover'
    },
})


export default CategoryItem;
