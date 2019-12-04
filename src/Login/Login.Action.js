import { us } from '../Services/UserServices';
import { history } from '../Helpers/History';

export const ActionLogIn = (user) => {
    return dispatch => {
        dispatch(request(user));
        us.login(user)
            .then(
                (res) => {
                    if (res.info.code === 0) {
                        dispatch(failure(res.info.message));
                    }
                    else if (res.info.code === 1) {
                        dispatch(failure(res.info.message));
                    }
                    else {
                        dispatch(success(res.info.message));
                        history.push('/dashboard');
                    }
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );
    };

    function request(user) {
        return {
            type: 'LOG_IN_REQUEST',
            user,
        }
    }
    function success(message) {
        return {
            type: 'LOG_IN_SUCCESS',
            message,
        }
    }
    function failure(message) {
        return {
            type: 'LOG_IN_FAILURE',
            message,
        }
    }
}
