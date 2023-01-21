import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
            console.log(data);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: {}
            })
        }
    }
}
