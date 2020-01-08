import React, { Component } from 'react';
import {history} from '../Helpers/History';

class Users extends Component {

    constructor(props) {
        super(props);



        this.generateUserData("");
        this.generateTutorData("");
    }

    detailClick(id, role) {
        history.push(`/dashboard/users/id=${id}&role=${role}`);
    }

    turnStatusClick(id, curStatus, role, email) {
        let { onTurnStatus } = this.props;
        onTurnStatus(id, curStatus, role, email);
    }

    addNewUser() {
        console.log("add new user");
    }

    searchUser() {
        if (this.refs.userSearchStr.value.length > 3) {
            this.generateUserData(this.refs.userSearchStr.value);
            this.generateTutorData("");
            this.refs.userSearchStr.value = "";
        }
        else {
            alert("Thông tin nhập phải nhiều hơn 3 ký tự");
        }

    }

    searchTutor() {
        if (this.refs.tutorSearchStr.value.length > 3) {
            this.generateUserData("");
            this.generateTutorData(this.refs.tutorSearchStr.value);
            this.refs.tutorSearchStr.value = "";
        }
        else {
            alert("Thông tin nhập phải nhiều hơn 3 ký tự");
        }
    }

    generateUserData(searchStr) {
        let { onLoadData } = this.props;
        let queryOption = {
            role: 0, // user
            searchStr,
            page: 0,
        }
        onLoadData(JSON.parse(localStorage.getItem('user')).user.loginUser.id, queryOption);
    }

    generateTutorData(searchStr) {
        let { onLoadData } = this.props;
        let queryOption = {
            role: 1, // tutor
            searchStr,
            page: 0,
        }
        onLoadData(JSON.parse(localStorage.getItem('user')).user.loginUser.id, queryOption);
    }

    generateUserList() {
        let { userData, status, message, loading } = this.props.UsersReducer;
        let content = [];
        for (let e of userData) {
            let imgSrc = e.avatarLink;
            if (imgSrc === "" || imgSrc === null) {
                imgSrc = "https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/10645251_10150004552801937_4553731092814901385_n.jpg?_nc_cat=1&_nc_ohc=hnKkw-bKtIkAQlIhz4gzarCWd3tTja6CU5x12XZnI2YTuW9TiBuSlIBlQ&_nc_ht=scontent.xx&oh=64b6c755de54ecae67c9742219d23174&oe=5E7F1EA8";
            }

            content.push(<tr key={e.id}>
                <td>{e.id}</td>
                <td>
                    <img height={50} width={50} alt="user-avatar" src={imgSrc}></img>
                </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td className="cursor-pointer" onClick={() => this.turnStatusClick(e.id,e.status,e.role, e.email)}>
                    {e.status === 1
                    ?
                    <i className="fa fa-user text-success"></i>
                    :
                    <i className="fa fa-user-slash text-danger"></i>
                    }                    
                </td>
                <td className="cursor-pointer" onClick={() => this.detailClick(e.id, e.role)}>
                    <i className="fa fa-angle-right"></i>
                </td>
            </tr>);
        }
        //}

        return content;
    }

    generateTutorList() {
        let { tutorData, status, message, loading } = this.props.UsersReducer;
        let content = [];
        for (let e of tutorData) {
            let imgSrc = e.avatarLink;
            if (imgSrc === "" || imgSrc === null) {
                imgSrc = "https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/10645251_10150004552801937_4553731092814901385_n.jpg?_nc_cat=1&_nc_ohc=hnKkw-bKtIkAQlIhz4gzarCWd3tTja6CU5x12XZnI2YTuW9TiBuSlIBlQ&_nc_ht=scontent.xx&oh=64b6c755de54ecae67c9742219d23174&oe=5E7F1EA8";
            }

            content.push(<tr key={e.id}>
                <td>{e.id}</td>
                <td>
                    <img height={50} width={50} alt="user-avatar" src={imgSrc}></img>
                </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td className="cursor-pointer" onClick={() => this.turnStatusClick(e.id,e.status,e.role, e.email)}>
                    {e.status === 1
                    ?
                    <i className="fa fa-user text-success"></i>
                    :
                    <i className="fa fa-user-slash text-danger"></i>
                    } 
                </td>
                <td className="cursor-pointer" onClick={() => this.detailClick(e.id, e.role)}>
                    <i className="fa fa-angle-right"></i>
                </td>
            </tr>);
        }
        //}

        return content;
    }

    render() {

        return (
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Accounts table</h1>
                <p className="mb-4">
                    List of people who use UBER TUTOR as a student.
                </p>
                {/* Userlist DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Users</h6>
                    </div>
                    <div className="card-body">
                        <div className="row my-1">
                            <div className="col-9">
                                {/* <button type="button" className="btn btn-success">
                                    <i className="fa fa-plus"></i> | Add new
                                </button> */}
                            </div>
                            <div className="col-3 text-right">
                                <div className="input-group mb-3">
                                    <input type="text" ref="userSearchStr" className="form-control" placeholder="Search ..."
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                this.searchUser();
                                            }
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => { this.searchUser() }}>
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
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.generateUserList()}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                <p className="mb-4">
                    List of people who are tutors of our UBER TUTOR.
                </p>
                {/* Tutorlist DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Tutors</h6>
                    </div>
                    <div className="card-body">
                        <div className="row my-1">
                            <div className="col-9">
                                {/* <button type="button" className="btn btn-success">
                                    <i className="fa fa-plus"></i> | Add new
                                </button> */}
                            </div>
                            <div className="col-3 text-right">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" ref="tutorSearchStr" placeholder="Search ..."
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                this.searchTutor();
                                            }
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => { this.searchTutor() }}>
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
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.generateTutorList()}
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