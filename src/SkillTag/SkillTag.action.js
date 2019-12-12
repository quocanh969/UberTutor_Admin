import { us } from '../Services/UserServices';
import { history } from '../Helpers/History';
import { delay } from 'q';

export const LoadData = (queryOption) => {
    return dispatch => {
        //dispatch(request(queryOption));
        /*
        us.loadUserData(user)
            .then(
                (res) => {
                    dispatch(success(res));
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );
            */
        let res = us.loadSkillTag(queryOption);    
        dispatch(success(res));
    };

    function request(user) {
        return {
            type: 'LOAD_SKILL_TAG_REQUEST',
            user,
        }
    }
    function success(data) {
        return {
            type: 'LOAD_SKILL_TAG_SUCCESS',
            data,
        }
    }
    function failure(message) {
        return {
            type: 'LOAD_SKILL_TAG_FAILURE',
            message,
        }
    }
}
