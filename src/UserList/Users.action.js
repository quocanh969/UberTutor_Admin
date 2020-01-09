import { us } from '../Services/UserServices';
import { history } from '../Helpers/History';

export const LoadData = (id, queryOption) => {
    return dispatch => {
        dispatch(request());
        let option = {
            id: id,
            queryOption: queryOption,
        }
        us.loadUserData(option)
            .then(
                (res) => {
                    let infoRes = res.info;
                    console.log(res);
                    // Update token for local storage
                    let user = JSON.parse(localStorage.getItem('user'));
                    console.log(user);
                    

                    dispatch(success(queryOption.role, infoRes.data));
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );
    };

    function request() {
        return {
            type: 'LOAD_USERS_REQUEST',
        }
    }
    function success(role, data) {
        return {
            type: 'LOAD_USERS_SUCCESS',
            role,
            data,
        }
    }
    function failure(message) {
        return {
            type: 'LOAD_USERS_FAILURE',
            message,
        }
    }
}

export const TurnOnOffStatus = (id, status, role, email) => {
    return dispatch => {
        us.turnOnOffStt(id, !status, email)
        .then(res=>{
            if(res.code === 1)
            {
                dispatch({
                    type: 'USER_TURN_STATUS',
                    id,
                    role,
                    stt: !status,
                });
            }
            else
            {
                console.log(res.info.message);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}