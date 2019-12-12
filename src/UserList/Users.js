import React, { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.generateUserData();
    }

    detailClick(id) {
        console.log("detail click: ",id);
    }

    addNewUser()
    {
        console.log("add new user");
    }

    generateUserData() {
        let { onLoadData } = this.props;
        onLoadData(null);
    }

    generateContent() {
        let { returnData, status, message, loading } = this.props.UsersReducer;
        let content = [];
        console.log("data in comp")
        console.log(returnData);
        for (let e of returnData) {
            let imgSrc = e.avatarLink;
            if(imgSrc === "")
            {
                imgSrc = "https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/10645251_10150004552801937_4553731092814901385_n.jpg?_nc_cat=1&_nc_ohc=hnKkw-bKtIkAQlIhz4gzarCWd3tTja6CU5x12XZnI2YTuW9TiBuSlIBlQ&_nc_ht=scontent.xx&oh=64b6c755de54ecae67c9742219d23174&oe=5E7F1EA8";
            }
            console.log(e);
            content.push(<tr key={e.id}>
                <td>{e.id}</td>
                <td>
                    <img height={50} width={50} alt="user-avatar" src={imgSrc}></img>
                </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td className="cursor-pointer" onClick={() => this.detailClick(e.id)}>
                    <i className="fa fa-angle-right"></i>
                </td>
            </tr>);
        }
        return content;
    }

    render() {

        return (
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Users table</h1>
                <p className="mb-4">
                    Users list of people who use UBER TUTOR
                </p>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Users</h6>
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
                                        <th>Id</th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>                                        
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
            </div>
        )
    }
}

export default Users;