import { connect } from 'react-redux'

import Login from './Login'

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;