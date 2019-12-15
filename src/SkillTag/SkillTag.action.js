import { us } from '../Services/UserServices';
import { history } from '../Helpers/History';
import { delay } from 'q';

export const LoadData = (id, queryOption) => {
    return dispatch => {
        dispatch(request());
        let option = {
            id: id,
            queryOption: queryOption,
        }
        us.loadSkillTag(option)
            .then(
                (res) => {
                    let infoRes = res.info;
                    console.log(res);
                    // Update token for local storage
                    let user = JSON.parse(localStorage.getItem('user'));
                    console.log(user);
                    //user.token = infoRes.token;
                    //localStorage.setItem('user', user);

                    dispatch(success(infoRes.data));
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );
    };

    function request() {
        return {
            type: 'LOAD_SKILL_TAG_REQUEST',
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
