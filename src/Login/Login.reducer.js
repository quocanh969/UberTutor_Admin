const initState = {
    status: 0,
    message: '',
    loading: false,
}

const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                status: 0,
                message: '',
                loading: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                loading: false,
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                loading: false,
            };
        case 'REFRESH_LOGIN':
            return initState;
        default:
            return state
    }
}

export default LoginReducer;