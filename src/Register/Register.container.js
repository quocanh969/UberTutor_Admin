import { connect } from 'react-redux'

import Register from './Register';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const RegisterContainer =  connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;