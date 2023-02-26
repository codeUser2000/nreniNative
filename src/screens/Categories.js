import React from 'react';
import {Text, Image, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import _ from 'lodash'
import categories from "../categories";

function Categories({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: 'white', padding:15}}>
            <Text style={styles.title}>Product categories</Text>
            <FlatList
                keyExtractor={() => _.uniqueId()}
                data={categories}
                renderItem={({item}) => (
                    <>
                       <TouchableOpacity onPress={() => navigation.navigate('SearchNavigation', { screen: 'Search', params: item.title})}>
                           <View style={styles.category}>
                               <Image source={item.img} style={styles.cImage}/>
                               <Text style={styles.cTitle}>{item.title}</Text>
                           </View>
                       </TouchableOpacity>
                    </>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    categories: {
        padding: 20,
    },
    title: {
        fontSize: 25,
        color: '#c31e39',
        marginBottom: 20,
        textTransform: 'capitalize'
    },
    category: {
        padding: 13,
        height: 180,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffece5',
        justifyContent: 'space-between',
    },
    cImage: {
        width: '50%',
        height: '100%',
        borderRadius: 25,
    },
    cTitle: {
        fontSize: 20,
        color: '#c31e39',
        textTransform: 'capitalize'
    },
});


export default Categories;
