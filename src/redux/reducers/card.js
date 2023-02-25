import {GET_CARD_FAIL, GET_CARD_REQUEST, GET_CARD_SUCCESS,} from '../actions/card';

const initialState = {
    cardData: [],
    cardStatus: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARD_REQUEST: {
            return {
                ...state,
                cardStatus: 'request',
                // users: {}

            }
        }
        case GET_CARD_SUCCESS: {
            const { cartItem } = action.payload.data;
            return {
                ...state,
                cardStatus: 'ok',
                cardData: cartItem
            }
        }
        case  GET_CARD_FAIL: {
            return {
                ...state,
                cardStatus: 'fail',
                cardData: []
            }
        }

        default: {
            return {
                ...state,
            }
        }

    }
}
