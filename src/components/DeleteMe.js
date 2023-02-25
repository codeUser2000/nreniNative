import React, {useCallback, useContext} from 'react';
import {Text, TouchableOpacity,StyleSheet, View} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import LogoHeader from "./LogoHeader";
import {useDispatch} from "react-redux";
import Api from "../Api";
import {Toast} from "toastify-react-native";
import {AuthContext} from "../context/AuthContext";

function DeleteMe({show, setShow, email}) {
    const {logout} = useContext(AuthContext)

    const handleUserDelete = useCallback(async () => {
        try {
            await Api.userSelfDelete(email)
            Toast.success('User is Deleted')
            await logout()
            setShow(false)
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <Modal
            isVisible={show}
        >
            <View style={{flex: 1}}>
                <View style={{backgroundColor: 'white',borderRadius:10, paddingHorizontal: 20}}>
                    <TouchableOpacity onPress={() => setShow(false)} style={{flexDirection: 'row', justifyContent: 'space-between' , alignItems: "center"}}>
                        <LogoHeader title="Delete" />
                        <Icon
                            color='#c31e39'
                            style={{paddingHorizontal: 10}}
                            size={30} name="close"/>
                    </TouchableOpacity>
                    <View style={{alignItems:'center' , justifyContent: 'center'}}>
                        <Text style={styles.title}>Are you sure?</Text>
                    </View>
                    <View style={{flexDirection: 'row' ,justifyContent:'flex-end', marginVertical: 40}}>
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
        marginHorizontal:25,
        color: 'white',

    },
    buttonYes:{
        fontSize: 30,
        borderRadius: 10,
        backgroundColor: '#ccc',
        marginRight: 10,
        padding: 10
    },
    buttonNo:{
        fontSize: 30,
        borderRadius: 10,
        backgroundColor: '#c31e39',
        padding: 10
    }
})
export default DeleteMe;
