import {SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS,} from '../actions/product';

const initialState = {
    singleData: [],
    singleStatus: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST: {
            return {
                ...state,
                singleStatus: 'request',
                // users: {}

            }
        }
        case SINGLE_PRODUCT_SUCCESS: {
            return {
                ...state,
                singleStatus: 'ok',
                singleData: action.payload.data
            }
        }
        case  SINGLE_PRODUCT_FAIL: {
            return {
                ...state,
                singleStatus: 'fail',
                singleData: []
            }
        }

        default: {
            return {
                ...state,
            }
        }

    }
}
