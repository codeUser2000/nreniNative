import Api from '../../Api';
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
            dispatch({
                type: ADD_TO_CARD_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type: ADD_TO_CARD_FAIL,
                payload: {}
            })
        }
    }
}

