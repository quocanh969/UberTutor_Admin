import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Login from './Login'
import { ActionLogIn } from './Login.Action';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => {            
            dispatch(ActionLogIn(user));
        },
        onRefreshLogin: () => {
            dispatch({
                type:'REFRESH_LOGIN',
            });
        },
    }
}

const LoginContainer =  withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

export default LoginContainer;