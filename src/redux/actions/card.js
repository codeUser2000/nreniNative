import Api from '../../Api';
import {Toast} from "toastify-react-native";
export const ADD_TO_CARD_REQUEST = 'ADD_TO_CARD_REQUEST';
export const ADD_TO_CARD_SUCCESS = 'ADD_TO_CARD_SUCCESS';
export const ADD_TO_CARD_FAIL = 'ADD_TO_CARD_FAIL';

export function addToCardRequest(product) {
    return async (dispatch) => {
        try {
            dispatch({
                type: ADD_TO_CARD_REQUEST,
                payload: {}
            })
            const { data } = await Api.addToCart(product)
            Toast.success('The product has been successfully added to card:)')

            dispatch({
                type: ADD_TO_CARD_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            Toast.error(e.response.data.message)
            dispatch({
                type: ADD_TO_CARD_FAIL,
                payload: {}
            })
        }
    }
}
export const GET_CARD_REQUEST = 'GET_CARD_REQUEST';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';
export const GET_CARD_FAIL = 'GET_CARD_FAIL';

export function getCardRequest(page) {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_CARD_REQUEST,
                payload: {}
            })
            const { data } = await Api.getCard(page)
            dispatch({
                type: GET_CARD_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type: GET_CARD_FAIL,
                payload: {}
            })
        }
    }
}
export const UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST';
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAIL = 'UPDATE_CART_FAIL';

export function updateCartRequest(data) {
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_CART_REQUEST,
                payload: {}
            })
            await Api.updateCart(data)
            dispatch({
                type: UPDATE_CART_SUCCESS,
                payload: {}
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type: UPDATE_CART_FAIL,
                payload: {}
            })
        }
    }
}

export const DELETE_FROM_CARD_REQUEST = 'DELETE_FROM_CARD_REQUEST';
export const DELETE_FROM_CARD_SUCCESS = 'DELETE_FROM_CARD_SUCCESS';
export const DELETE_FROM_CARD_FAIL = 'DELETE_FROM_CARD_FAIL';

export function deleteFromCardRequest(productId) {
    return async (dispatch) => {
        try {
            dispatch({
                type:DELETE_FROM_CARD_REQUEST,
                payload: {}
            })
            const { data } = await Api.deleteFromCart({productId})
            Toast.success('The product has been successfully deleted from the card:)')
            dispatch({
                type:DELETE_FROM_CARD_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            Toast.error(e.response.data.message)
            dispatch({
                type:DELETE_FROM_CARD_FAIL,
                payload: {}
            })
        }
    }
}

