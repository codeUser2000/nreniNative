import {SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS,GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS,} from '../actions/product';

const initialState = {
    singleData: [],
    singleStatus: '',
    productData: [],
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
        case SINGLE_PRODUCT_FAIL: {
            return {
                ...state,
                singleStatus: 'fail',
                singleData: []
            }
        }
        case GET_PRODUCT_SUCCESS: {
            console.log(action.payload.data)
            return {
                ...state,
                productData: action.payload.data
            }
        }
        case  GET_PRODUCT_FAIL: {
            return {
                ...state,
                productData: []
            }
        }

        default: {
            return {
                ...state,
            }
        }

    }
}
