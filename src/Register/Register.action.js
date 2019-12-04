import { us } from '../Services/UserServices';

export const ActionRegister = (user) => {
    return dispatch => {

        dispatch(request(user));

        us.register(user)
            .then(
                res => {
                    if (res.code === 1) {
                        dispatch(success(res.message));
                    }
                    else {
                        dispatch(failure(res.message));
                    }
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            )

    }

    function request(user) {
        return {
            type: 'REGISTER_REQUEST',
            user
        }
    }

    function success(message) {
        return {
            type: 'REGISTER_SUCCESS',
            message
        }
    }

    function failure(message) {
        return {
            type: 'REGISTER_FAILURE',
            message
        }
    }
}

export const ActionValidateFail = message => {
    return {
        type: 'REGISTER_FAILURE',
        message,
    }
}
