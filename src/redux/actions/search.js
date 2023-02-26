// import Api from '../../Api';


import Api from '../../Api';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export function searchRequest(search) {
    return async (dispatch) => {
        try {
            dispatch({
                type: SEARCH_REQUEST,
                payload: {}
            })
            console.log(449999)

            const { data } = await Api.getData(search)
            console.log(data,9999)
            dispatch({
                type: SEARCH_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: SEARCH_FAIL,
                payload: {}
            })
        }
    }
}

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL';



export function categoryRequest() {
    return async (dispatch) => {
        try {
            dispatch({
                type: CATEGORIES_REQUEST,
                payload: {}
            })
            const { data } = await Api.getCategories()

            dispatch({
                type: CATEGORIES_SUCCESS,
                payload: { data }
            })
        } catch (e) {
            dispatch({
                type: CATEGORIES_FAIL,
                payload: {}
            })
        }
    }
}

