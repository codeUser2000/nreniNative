import React, {useCallback} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";

function ProductNewItem({item, api}) {
    const navigation = useNavigation();
    const handleSingle = useCallback((data) => {
        navigation.navigate('Single', data.id)
    }, []);
    return (
            <ImageBackground source={{uri: api + item.avatar}} resizeMode="cover" style={styles.block} imageStyle={{borderRadius: 10}} >
                <TouchableOpacity onPress={() => handleSingle(item)}>
                        <View style={styles.textBlock}>
                            <View>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.text}>${item.newPrice}</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon name="favorite" style={styles.price} color={"white"}/>
                                <Text style={styles.text}>{item.likeCount?.length}</Text>
                            </View>
                        </View>
                </TouchableOpacity>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    block: {
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 300,
        width:200
    },
    stretch: {
        resizeMode: 'cover',
        width: 100,
        height: 100,
        objectFit: 'cover'
    },
    text: {
        color: 'white',
        fontSize: 20,
        lineHeight: 40,
        fontWeight: 'bold',
        // textAlign: 'center',
    },
    textBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.46)',
        padding: 20
    },
    price: {
        fontSize: 30,
    }
})
export default ProductNewItem;
