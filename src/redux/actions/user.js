import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from "toastify-react-native";
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export function userLoginRequest(formData) {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST,
                payload: {}
            })
            const { data } = await Api.login(formData)
            await AsyncStorage.setItem('token', data.token)
            Toast.info('Hello','top')
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            console.log(e,4567)
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: {}
            })
        }
    }
}


export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL';
export function userProfileRequest() {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_PROFILE_REQUEST,
                payload: {}
            })
            const { data } = await Api.getProfile()
            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: USER_PROFILE_FAIL,
                payload: {}
            })
        }
    }
}


