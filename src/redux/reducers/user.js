import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, USER_PROFILE_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS
} from '../actions/user';

const initialState = {
    userDataStatus: '',
    userData:{},
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
        case USER_PROFILE_REQUEST: {
            return {
                ...state,
                userDataStatus: 'request',
                userData: {}
            };
        }
        case USER_PROFILE_SUCCESS: {
            console.log(action.payload.data,67)
            return {
                ...state,
                userDataStatus: 'ok',
                userData: action.payload.data
            };
        }
        case  USER_PROFILE_FAIL: {
            return {
                ...state,
                userDataStatus: 'fail',
                userData: {}
            };
        }
        default: {
            return {
                ...state,
            };
        }

    }
}
