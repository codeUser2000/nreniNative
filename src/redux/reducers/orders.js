import {ORDER_GET_FAIL, ORDER_GET_REQUEST, ORDER_GET_SUCCESS,} from '../actions/orders';

const initialState = {
    orderData: [],
    orderStatus: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ORDER_GET_REQUEST: {
            return {
                ...state,
                orderStatus: 'request',
                // users: {}

            }
        }
        case ORDER_GET_SUCCESS: {
            const { orders } = action.payload.data;
            const allProduct = [];
            orders.map((o) => {
                o.products.map((p) => {
                    p.deliveryStatus = o.deliveryStatus;
                    return p;
                });
                allProduct.push(...o.products);
                return true;
            });
            return {
                ...state,
                orderStatus: 'ok',
                orderData: allProduct
            }
        }
        case  ORDER_GET_FAIL: {
            return {
                ...state,
                orderStatus: 'fail',
                orderData: []
            }
        }

        default: {
            return {
                ...state,
            }
        }

    }
}
