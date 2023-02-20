import Api from '../../Api';
import {Toast} from "toastify-react-native";
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

export function userRegisterRequest(formData) {

    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
                payload: {}
            })
            const { data } = await Api.register(formData)
            Toast.success('You are registered successfully','top')
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: USER_REGISTER_FAIL,
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

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL';
export function userUpdateRequest(formData) {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_UPDATE_REQUEST,
                payload: {}
            })
            const { data } = await Api.addresses(formData)
            console.log(data)
            Toast.success('User is updated')
            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            if(e.response.data.errors){
                for (const i in e.response.data.errors) {
                    Toast.error(e.response.data.errors[i]);
                }
            }
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: {}
            })
        }
    }
}


