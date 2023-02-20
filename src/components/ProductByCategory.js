import React, {useCallback} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";

function ProductByCategory({item}) {
    const navigation = useNavigation();
    const handleSingle = useCallback(() => {
        navigation.navigate('SearchNavigation',{screen:'Search', params:item.type}, )
    }, [item]);
    return (
        <ImageBackground source={item.img} resizeMode="cover" style={styles.block} imageStyle={{borderRadius: 10}} >
            <TouchableOpacity onPress={() => handleSingle(item)} style={{justifyContent: 'flex-end', height: 300, width:200}}>
                <View style={styles.textBlock}>
                    <View>
                        <Text style={styles.text}>{item.title}</Text>
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
export default ProductByCategory;
