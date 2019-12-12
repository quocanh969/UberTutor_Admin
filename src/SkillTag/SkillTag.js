import React, { Component } from 'react'

class SkillTag extends Component {
    constructor(props) {
        super(props);
        this.generateSkillTagsData();
    }

    detailClick(id) {
        console.log("detail click: ",id);
    }

    generateSkillTagsData() {
        let { onLoadSkillTagsData } = this.props;
        onLoadSkillTagsData(null);
    }

    generateContent() {
        let { returnData, status, message, loading } = this.props.SkillTagsReducer;
        let content = [];
        console.log("data in comp")
        console.log(returnData);
        for (let e of returnData) {
            content.push(<tr key={e.id_skill}>
                <td>{e.id_skill}</td>
                <td>{e.skill}</td>
                <td>{e.skill_tag}</td>
            </tr>);
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
                                <button type="button" className="btn btn-success">
                                    <i className="fa fa-plus"></i> | Add new
                                </button>
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


                {/* Tutor table whom have skill which is chosen */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Tutor: who have skill tag which is chosen</h6>
                    </div>
                    <div className="card-body">
                        <div className="row my-1">
                            <div className="col-9">
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
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* End tutor table whom have skill which is chosen */}
            </div>
        )
    }
}

export default SkillTag