import Api from '../../Api';
export const ORDER_GET_REQUEST = 'ORDER_GET_REQUEST';
export const ORDER_GET_SUCCESS = 'ORDER_GET_SUCCESS';
export const ORDER_GET_FAIL = 'ORDER_GET_FAIL';

export function orderGetRequest() {
    return async (dispatch) => {
        try {
            dispatch({
                type: ORDER_GET_REQUEST,
                payload: {}
            })
            const { data } = await Api.getOrders()
            dispatch({
                type: ORDER_GET_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: ORDER_GET_FAIL,
                payload: {}
            })
        }
    }
}

