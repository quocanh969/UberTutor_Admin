const initState = {    
    returnData:[],
    status: 0,
    message: '',
    loading: false,
}

const SkillTagsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_SKILL_TAG_REQUEST':
            return {
                ...state,
                returnData:[],
                status: 0,
                message: '',
                loading: true,
            };
        case 'LOAD_SKILL_TAG_SUCCESS':
            return {
                ...state,
                returnData:action.data,
                status: 1,
                message: '',
                loading: false,
            };
        case 'LOAD_SKILL_TAG_FAILURE':
            return {
                ...state,
                returnData:[],
                status: -1,
                message: action.message,
                loading: false,
            };
        case 'EDITTING_SKILL_TAG':
            let temp = state.returnData;
            if(temp[action.index].isEditting === 0)
            {
                temp[action.index].isEditting = 1;
            }
            else
            {
                temp[action.index].isEditting = 0;
            }
            return {
                ...state,
                returnData:temp,
            };
        default:
            return state
    }
}

export default SkillTagsReducer;