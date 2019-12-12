const initState = {    
    returnData:[],
    status: 0,
    message: '',
    loading: false,
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_USERS_REQUEST':
            return {
                ...state,
                returnData:[],
                status: 0,
                message: '',
                loading: true,
            };
        case 'LOAD_USERS_SUCCESS':
            return {
                ...state,
                returnData:action.data,
                status: 1,
                message: '',
                loading: false,
            };
        case 'LOAD_USERS_FAILURE':
            return {
                ...state,
                returnData:[],
                status: -1,
                message: action.message,
                loading: false,
            };
        default:
            return state
    }
}

export default UsersReducer;