import React from 'react';
import {Text, Image, View, StyleSheet} from "react-native";
import ring from '../assets/images/post/ring.jpg';
import chainRing from '../assets/images/post/chainRing.jpg';
import ceramicRing from '../assets/images/post/ceramicRing.jpg';
import necklace from '../assets/images/post/necklace.jpg';
import nameNecklace from '../assets/images/post/nameNecklace.jpg';
import bracelet from '../assets/images/post/bracelet.jpg';
import earring from '../assets/images/post/earring.jpg';
import collection from '../assets/images/post/collection.jpg';

function Categories(props) {
    return (
        <View style={styles.categories}>
            <Text style={styles.title}>Product categories</Text>
            <View style={styles.category}>
                <Image source={bracelet} style={styles.cImage}/>
                <Text style={styles.cTitle}>bracelet</Text>
            </View>

            <View style={styles.category}>
                <Image source={collection} style={styles.cImage}/>
                <Text style={styles.cTitle}>collection</Text>
            </View>

            <View style={styles.category}>
                <Image source={earring} style={styles.cImage}/>
                <Text style={styles.cTitle}>earring</Text>
            </View>

            <View style={styles.category}>
                <Image source={ring} style={styles.cImage}/>
                <Text style={styles.cTitle}>rings</Text>
            </View>

            <View style={styles.category}>
                <Image source={ceramicRing} style={styles.cImage}/>
                <Text style={styles.cTitle}>ceramic rings</Text>
            </View>

            <View style={styles.category}>
                <Image source={chainRing} style={styles.cImage}/>
                <Text style={styles.cTitle}>chain rings</Text>
            </View>

            <View style={styles.category}>
                <Image source={necklace} style={styles.cImage}/>
                <Text style={styles.cTitle}>necklaces</Text>
            </View>

            <View style={styles.category}>
                <Image source={nameNecklace} style={styles.cImage}/>
                <Text style={styles.cTitle}>name necklaces</Text>
            </View>
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
