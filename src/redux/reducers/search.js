import {
    CATEGORIES_FAIL,
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS,
    SEARCH_FAIL,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
} from '../actions/search';

const initialState = {
    product: [],
    productStatus: '',
    category: [],
    categoryStatus: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST: {
            return {
                ...state,
                productStatus: 'request',
                // users: {}

            }
        }
        case SEARCH_SUCCESS: {
            return {
                ...state,
                productStatus: 'ok',
                product: action.payload.data.products
            }
        }
        case  SEARCH_FAIL: {
            return {
                ...state,
                productStatus: 'fail',
                product: []
            }
        }

        case CATEGORIES_REQUEST : {
           return {
               ...state,
               category: [],
               categoryStatus: 'request'
           }
        }
        case CATEGORIES_SUCCESS : {
           return {
               ...state,
               category: [...action.payload.data.category, {id:6, type: 'all'}],
               categoryStatus: 'request'
           }
        }
        case CATEGORIES_FAIL : {
            return {
                ...state,
                category: [],
                categoryStatus: 'fail',
            };
        }

        default: {
            return {
                ...state,
            }
        }

    }
}
