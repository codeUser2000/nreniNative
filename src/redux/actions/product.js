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
            console.log(data, 23)

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

