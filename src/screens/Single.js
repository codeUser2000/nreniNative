import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {API_URL} from "@env";


function Single({route}) {
    const [data, setData] = useState({});
    const [count, setCount] = useState(1);

    const handleProductCountChange = useCallback((operator) => {
        console.log(data);
        if (operator === 'add' && +count < +data.countProduct) {
            setCount(+count + 1);
        } else if (operator === 'delete' && +count > 0) {
            setCount(+count - 1);
        }
    }, [data, count]);

    useEffect(() => {
        setData(route.params)
        console.log(API_URL,route.params);
    },[route.params])
    return (
       <View style={styles.block}>
           <View style={{padding:10, flex:3}}>
               <Text>{data.categories?.type}</Text>
               <Text style={styles.title}>{data.title}</Text>
               <Image
                   style={styles.stretch}
                   source={{uri:`${API_URL}${data.avatar}`}} />
           </View>
           <View style={styles.bottom}>
               <View style={styles.topBlock}>
                   <Text style={styles.price}>Price</Text>
                   <TouchableOpacity style={{flexDirection:'row', alignItems:"center"}}>
                       <Icon name="favorite" style={styles.price} color="white"/>
                       <Text style={styles.texts}>{data.likeCount?.length}</Text>
                   </TouchableOpacity>
               </View>

               <Text style={styles.texts}>{data.description}</Text>
               <View style={{flexDirection:'row', alignItems:"center", flex:1, justifyContent: "space-between"}}>
                   <TouchableOpacity onPress={() => handleProductCountChange('delete')}><Text style={styles.count} >-</Text></TouchableOpacity>
                   <TextInput value={count + ''} editable={false} style={styles.count}/>
                   <TouchableOpacity onPress={() => handleProductCountChange('add')}><Text style={styles.count} >+</Text></TouchableOpacity>
               </View>
               <TouchableOpacity style={styles.addToCart}><Text style={{color:"#c31e39", fontSize:20}}>Add to cart</Text></TouchableOpacity>
           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    block: {
        flex:1,
        alignSelf: 'stretch',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    title:{
        color: '#c31e39',
        fontSize: 30
    },
    stretch: {
        flex: 2,
        margin:20
    },
    bottom: {
        flex:2,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        backgroundColor: '#c31e39',
        paddingHorizontal:30,
        paddingVertical:10

    },
    texts: {
        color: 'white'
    } ,
    topBlock: {
        color: 'white',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    price: {
        color: 'white',
        fontSize: 30
    },
    count: {
        fontSize: 30,
        color: 'white'
    },
    addToCart: {
        borderWidth: 2,
        borderColor:"white",
        backgroundColor:"white",
        padding:10,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 20
    }
})
export default Single;
