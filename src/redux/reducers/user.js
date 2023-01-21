import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from '../actions/user';

const initialState = {
    userDataStatus: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                userDataStatus: 'request',
            };
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                userDataStatus: 'ok',
            };
        }
        case  USER_LOGIN_FAIL: {
            return {
                ...state,
                userDataStatus: 'fail',
            };
        }
        default: {
            return {
                ...state,
            };
        }

    }
}
