import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import SkillTag from './SkillTag';
import { LoadData } from './SkillTag.action';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadSkillTagsData:(id,queryOption)=>{
            dispatch(LoadData(id,queryOption));
        },
    }
}

const SkillTagsContainer =  withRouter(connect(mapStateToProps, mapDispatchToProps)(SkillTag));

export default SkillTagsContainer;