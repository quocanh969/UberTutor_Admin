import React, { Component } from 'react';
import './SkillTag.css';
import Popup from "reactjs-popup";
import AddSkillTag from './AddSkillTag';
import us from '../Services/UserServices';

class SkillTag extends Component {
    //skillTagData = [];
    selectedElement = null;
    constructor(props) {
        super(props);
        this.generateSkillTagsData("",0);

        this.handleSkillChange = this.handleSkillChange.bind(this);
    }

    detailClick(id) {
        console.log("detail click: ",id);
    }

    // Thao tác table

    selectedChange(e)
    {
        this.selectedElement = e;
    }

    handleSkillChange(e)
    { // Cập nhật nội dung skill
        this.selectedElement.skill = e.target.value;
        console.log(e.target.value);
    }

    handleEdittingClick(index)
    {   
        console.log("editting");
        this.props.onEdittingSkillTag(index);
    }

    saveSkillTag(id)
    {

    }

    deleteSkillTag(id)
    {
        us.deleteSkillTag(JSON.parse(localStorage.getItem('user')).user.loginUser.id, id)
        .then(res=>{
            if(res.code === 1)
            {
                this.generateSkillTagsData('',0);
                alert('Remove skill tag successfully');
            }
            else
            {
                alert('Remove skill tag failed');
            }
        })
        .catch(err=>{
            alert('Remove skill tag successfully');
        })
    }


    // Khởi tạo data

    generateSkillTagsData(searchStr, page) {
        let { onLoadSkillTagsData } = this.props;
        let queryOption = {
            page,
            searchStr,
        }
        onLoadSkillTagsData(JSON.parse(localStorage.getItem('user')).user.loginUser.id, queryOption);
    }

    generateContent() {
        let { returnData, status, message, loading } = this.props.SkillTagsReducer;

        let content = [];
        for (let i = 0; i < returnData.length; i++) {
            if(returnData[i].isEditting === 1)
            {
                content.push(                
                    <tr key={returnData[i].id_skill} onClick={()=>{this.selectedChange(returnData[i])}}>
                        <td>{returnData[i].id_skill}</td>
                        <td>
                            <input type="text" className="px-2 w-100" 
                                    defaultValue={returnData[i].skill} onChange={this.handleSkillChange}/>
                        </td>
                        <td>
                            <input type="text" className="px-2 w-100" defaultValue={returnData[i].skill_tag}/>
                        </td>
                        <td className="d-flex justify-content-around">
                            <i className="fa fa-save text-dark cursor-pointer" onClick={()=>{this.handleEdittingClick(i)}}></i>
                            <i className="fa fa-times text-dark cursor-pointer" onClick={()=>{this.handleEdittingClick(i)}}></i>
                        </td>
                    </tr>);
            }
            else
            {
                content.push(                
                    <tr key={returnData[i].id_skill} onClick={()=>{this.selectedChange(returnData[i])}}>
                        <td>{returnData[i].id_skill}</td>
                        <td>
                            <input type="text" className="px-2 w-100" disabled
                                    defaultValue={returnData[i].skill}/>
                        </td>
                        <td>
                            <input type="text" className="px-2 w-100" disabled
                                    defaultValue={returnData[i].skill_tag}/>
                        </td>
                        <td className="d-flex justify-content-around">
                            <i className="fa fa-pencil-alt text-dark cursor-pointer" onClick={()=>{this.handleEdittingClick(i)}}></i>
                            <i className="fa fa-trash-alt text-dark cursor-pointer" onClick={()=>{this.deleteSkillTag(returnData[i].id_skill)}}></i>
                        </td>
                    </tr>);
            }
        }
        return content;
    }

    render() {
        return (
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Skill tag table</h1>
                <p className="mb-4">
                    Skill tag and skill code which is tutor 's advantage.
                </p>
                {/* Skill tag table */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Skills</h6>
                    </div>
                    <div className="card-body">
                        <div className="row my-1">
                            <div className="col-9">
                            <Popup trigger={
                                        <div type="button" className="btn btn-success cursor-pointer">
                                            <i className="fa fa-plus"></i> | Add new
                                        </div>} 
                                        modal>
                                        {close => (
                                            <AddSkillTag onClose={close}>
                                            </AddSkillTag>
                                        )}
                                    </Popup>
                            </div>
                            <div className="col-3 text-right">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search ..." />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="col-12 table" id="dataTable" width="100%" cellSpacing={0} >
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Skill</th>
                                        <th>Tag</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.generateContent()}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
                {/* End skill tag table */}
            </div>
        )
    }
}

export default SkillTag