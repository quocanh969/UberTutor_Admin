import React, { Component } from 'react'
import { contractServ } from '../Services/ContractServices';

export default class Complains extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            total: 0,
            page: 0,
            conplainsContract: [],
        }
    }

    componentDidMount() {
        this.loadComplainContract();
    }

    loadComplainContract() {
        contractServ.getComplainContracts()
        .then(res=>{
            if(res.code === 1)
            {
                console.log(res);
                this.setState({conplainsContract: res.info.data});
                console.log(this.state);
            }
            else
            {
                alert("There was an error when connecting to the server");
            }
        })
        .catch(err=>{
            alert("There was an error when connecting to the server");
        })
    }

    generateComplainContract() {
        let content = [];
        for(let e of this.state.conplainsContract)
        {
            content.push(
                <tr key={e.id}>
                    <th>{e.id}</th>
                    <th>{e.id_learner}</th>
                    <th>{e.id_tutor}</th>
                    <th>{e.StartDate}</th>
                    <th>{e.EstimatedEndDate}</th>
                    <th>{e.complain}</th>
                    <th className='text-center'>
                        <i className="fa fa-times cursor-pointer text-danger" onClick={()=>{this.cancelContractClick(e.id)}}></i>
                    </th>
                    <th className='text-center'>
                        <i className="fa fa-trash-alt cursor-pointer text-secondary" onClick={()=>{this.removeComplain(e.id)}}></i>
                    </th>                    
                </tr>
            );
        }
        return content;
    }

    cancelContractClick(id) {
        contractServ.cancelContract(id)
        .then(res=>{
            if(res.code === 1)
            {
                this.loadComplainContract();
                alert("End contract successfull");
            }
            else
            {
                alert("End contract failed");
            }
        })
        .catch(err=>{
            alert("End contract failed");
        })
    }

    removeComplain(id) {
        contractServ.removeComplain(id)
        .then(res=>{
            if(res.code === 1)
            {
                this.loadComplainContract();
                alert("Remove complain successfull");
            }
            else
            {
                alert("Remove complain failed");
            }
        })
        .catch(err=>{
            alert("Remove complain failed");
        })
    }

    render() {
        return (
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Contract with complain table</h1>
                <p className="mb-4">
                    Learner will tell us about their think of tutors. They write down and we can read to improve the service.
                </p>
                {/* Skill tag table */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Complains</h6>
                    </div>
                    <div className="card-body">
                        <div className="row my-1">
                            {/* <div className="col-9">
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
                            </div> */}
                        </div>

                        <div className="table-responsive">
                            <table className="col-12 table" id="dataTable" width="100%" cellSpacing={0} >
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ID Contract</th>
                                        <th>ID Learner</th>
                                        <th>ID Tutor</th>
                                        <th>Start Date</th>
                                        <th>Estimated End</th>
                                        <th style={{width:300}}>Complain</th>                                        
                                        <th>End Contract</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.generateComplainContract()}
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
