import React from 'react';
import {ActivityIndicator, View} from "react-native";

function Loader({isLoading}) {
    return (
        isLoading?
        <View style={{flex: 1}}>
            <ActivityIndicator size='large' color="#ccc"/>
        </View>:null
    );
}

export default Loader;
