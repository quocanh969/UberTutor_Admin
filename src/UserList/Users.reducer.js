const initState = {    
    userData:[],
    tutorData:[],
    status: 0,
    message: '',
    loading: false,
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_USERS_REQUEST':
            return {
                ...state,
                userData:[],
                tutorData:[],
                status: 0,
                message: '',
                loading: true,
            };
        case 'LOAD_USERS_SUCCESS':
            if(action.role === 0)
            {
                return {
                    ...state,
                    userData:action.data,               
                    status: 1,
                    message: '',
                    loading: false,
                };
            }
            else
            {
                return {
                    ...state,                  
                    tutorData:action.data,
                    status: 1,
                    message: '',
                    loading: false,
                };
            }            
        case 'LOAD_USERS_FAILURE':
            return {
                ...state,
                userData:[],
                tutorData:[],
                status: -1,
                message: action.message,
                loading: false,
            };
        default:
            return state
    }
}

export default UsersReducer;