import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import SkillTag from './SkillTag';
import { LoadData } from './SkillTag.action';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadSkillTagsData:queryOption=>{
            dispatch(LoadData(queryOption));
        },
    }
}

const SkillTagsContainer =  withRouter(connect(mapStateToProps, mapDispatchToProps)(SkillTag));

export default SkillTagsContainer;