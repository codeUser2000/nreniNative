import Api from '../../Api';
export const PRODUCT_LIKE_REQUEST = 'PRODUCT_LIKE_REQUEST';
export const PRODUCT_LIKE_SUCCESS = 'PRODUCT_LIKE_SUCCESS';
export const PRODUCT_LIKE_FAIL = 'PRODUCT_LIKE_FAIL';

export function likeRequest(id) {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_LIKE_REQUEST,
                payload: {}
            })
            const { data } = await Api.likeProduct(id)

            dispatch({
                type: PRODUCT_LIKE_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: PRODUCT_LIKE_FAIL,
                payload: {}
            })
        }
    }
}

export const PRODUCT_DELETE_LIKE_REQUEST = 'PRODUCT_DELETE_LIKE_REQUEST';
export const PRODUCT_DELETE_LIKE_SUCCESS = 'PRODUCT_DELETE_LIKE_SUCCESS';
export const PRODUCT_DELETE_LIKE_FAIL = 'PRODUCT_DELETE_LIKE_FAIL';

export function deleteLikeRequest(id) {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_DELETE_LIKE_REQUEST,
                payload: {}
            })
            const { data } = await Api.deleteLikeProduct(id)
            dispatch({
                type: PRODUCT_DELETE_LIKE_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: PRODUCT_DELETE_LIKE_FAIL,
                payload: {}
            })
        }
    }
}
export const SINGLE_PRODUCT_REQUEST = 'SINGLE_PRODUCT_REQUEST';
export const SINGLE_PRODUCT_SUCCESS = 'SINGLE_PRODUCT_SUCCESS';
export const SINGLE_PRODUCT_FAIL = 'SINGLE_PRODUCT_FAIL';

export function singleRequest(id) {
    return async (dispatch) => {
        try {
            dispatch({
                type: SINGLE_PRODUCT_REQUEST,
                payload: {}
            })
            const { data } = await Api.getSingle(id)
            dispatch({
                type: SINGLE_PRODUCT_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: SINGLE_PRODUCT_FAIL,
                payload: {}
            })
        }
    }
}
export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

export function productRequest() {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_PRODUCT_REQUEST,
                payload: {}
            })
            const { data } = await Api.getData({page: 1})
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: {}
            })
        }
    }
}

