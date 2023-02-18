import React, {useCallback} from 'react';
import {Text, TouchableOpacity,StyleSheet, View} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";

function DeleteMe({show, setShow}) {
    const handleUserDelete = useCallback(async () => {
        try {
            console.log("yes")
            // await Api.userSelfDelete(formData)
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <Modal
            isVisible={show}
        >
            <View style={{flex: 1}}>
                <View style={{backgroundColor: 'white', borderRadius:10}}>
                    <TouchableOpacity onPress={() => setShow(false)}>
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10, alignSelf: 'flex-end'}}
                            size={30} name="close"/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Are you sure?</Text>
                    <View style={{flexDirection: 'row' ,justifyContent:'flex-end'}}>
                        <TouchableOpacity style={styles.buttonYes} onPress={handleUserDelete}><Text style={styles.buttons}>Yes</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNo} onPress={() => setShow(false)}><Text style={styles.buttons}>No</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        flexDirection:'row',
        justifyContent: 'center'
    },
    buttons:{
        fontSize: 20,
        marginHorizontal:25
    },
    buttonYes:{
        fontSize: 30,
        backgroundColor: 'red',
        marginRight: 10
    },
    buttonNo:{
        fontSize: 30,
        backgroundColor: 'blue'
    }
})
export default DeleteMe;
