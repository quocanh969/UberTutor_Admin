import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Users from './Users';
import { LoadData } from './Users.action';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadData:(id,queryOption)=>{
            dispatch(LoadData(id,queryOption));
        },
    }
}

const UsersContainer =  withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));

export default UsersContainer;