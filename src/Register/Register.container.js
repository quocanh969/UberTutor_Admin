import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Register from './Register';
import { ActionRegister, ActionValidateFail } from './Register.action';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onRegister: user => {
            dispatch(ActionRegister(user));
        },
        onValidateFail: message => {
            dispatch(ActionValidateFail(message));
        },
        onRegisterRefresh: () => {
            dispatch({
                type:'REFRESH_REGISTER',
            });
        },
    }
}

const RegisterContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));

export default RegisterContainer;