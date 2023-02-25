import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import ring from '../assets/images/post/ring.jpg';
import chainRing from '../assets/images/post/chainRing.jpg';
import Icon from "react-native-vector-icons/MaterialIcons";
import MasonryList from "@react-native-seoul/masonry-list";
import {useDispatch, useSelector} from "react-redux";
import {searchRequest} from "../redux/actions/search";

function Shop(props) {
    const product = useSelector((state) => state.reducer.search.product);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(searchRequest({page: 1}));
        })();
    }, []);
    return (
        // <View style={styles.shop}>
            <MasonryList
                style={styles.shop}
                data={product}
                keyExtractor={(item) => item.id}
                numColumns={2}
                // showsVerticalScrollIndicator={false}
                renderItem={({item}) => <View style={styles.block}>
                    <Image style={styles.img} source={ring} resizeMode='cover' borderRadius={25}/>
                    <View style={styles.textBlock}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>
                            $ {item.newPrice}
                            {' '}
                            {item.oldPrice ?<Text style={styles.oldPrice}>${item.oldPrice}</Text>: null}
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="favorite" size={21} color={"#c31e39"}/>
                            <Text style={styles.like}>{item.like}</Text>
                        </View>
                    </View>
                </View>}
                // refreshing={isLoadingNext}
                // onRefresh={() => refetch({first: ITEM_CNT})}
                // onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
            />
        // </View>
    );
}

const styles = StyleSheet.create({
    shop: {
        flex: 1,
        padding: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    block: {
        height: 220,
        width: "90%",
        borderRadius: 25,
        marginBottom: 150,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    textBlock: {
        padding: 10,
    },
    title: {
        fontSize: 19,
        fontWeight: '600',
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    price: {
        fontSize: 18,
        marginBottom: 10,
        flexWrap: 'wrap',
        fontWeight: '400',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
    },
    like: {
        fontSize: 18,
    }
});

export default Shop;
