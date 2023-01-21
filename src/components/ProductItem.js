import React, {useCallback, useEffect} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function ProductItem({item, api}) {
    const navigation = useNavigation();
    const handleSingle = useCallback((data) => {
        navigation.navigate('Single', data)
    },[]);
    return (
        <TouchableOpacity style={styles.block}  onPress={() => handleSingle(item)}>
            <View>
                <Image
                    style={styles.stretch}
                    source={{uri:api + item.avatar}} />
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignSelf: 'stretch',
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
    },
    stretch: {
        resizeMode: 'stretch',
        height:200,
        objectFit: 'cover'
    },
})
export default ProductItem;
