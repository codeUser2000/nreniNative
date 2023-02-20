import React from 'react';
import {StyleSheet, Text, View} from "react-native";

function NoData(props) {
    return (
        <View style={{flex: 1, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>No data</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
});


export default NoData;
