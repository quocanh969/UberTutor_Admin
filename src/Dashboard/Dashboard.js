import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import MainDashboard from '../MainDashboard/MainDashboard';
import UsersContainer from '../UserList/Users.container';
import SkillTagsContainer from '../SkillTag/SkillTag.container';
import DetailUser from '../UserList/DetailUser/DetailUser';
import Statistic from '../Statistic/Statistic';
import Complains from '../Complains/Complains';
import Contracts from '../Contracts/Contracts';

export default class Dashboard extends Component {

    user;
    imageSrc = "";

    componentWillMount() {
        this.initData();
    }

    initData() {
        this.user = JSON.parse(localStorage.getItem("user"));

        if (this.user.user.loginUser.avatarLink === null || this.user.user.loginUser.avatarLink === "") {
            this.imageSrc = "https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/10645251_10150004552801937_4553731092814901385_n.jpg?_nc_cat=1&_nc_ohc=hnKkw-bKtIkAQlIhz4gzarCWd3tTja6CU5x12XZnI2YTuW9TiBuSlIBlQ&_nc_ht=scontent.xx&oh=64b6c755de54ecae67c9742219d23174&oe=5E7F1EA8";
        }
        else {
            this.imageSrc = this.user.user.loginUser.avatarLink;
        }
    }
    
    render() {
        return (
            <div id="page-top">
                <div id="wrapper">
                    {/* Sidebar */}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        {/* Sidebar - Brand */}
                        <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                            <div className="sidebar-brand-text mx-3">UBER TUTOR</div>
                        </NavLink>
                        {/* Divider */}
                        <hr className="sidebar-divider my-0" />
                        {/* Nav Item - Dashboard */}
                        <li className="nav-item">
                            <NavLink className="nav-link row" to="/dashboard">
                                <i className="fas fa-fw fa-tachometer-alt mr-1 pl-4 col-2" />
                                <span className="font-weight-700 col">Dashboard</span>
                            </NavLink>
                        </li>
                        {/* Divider */}
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            USER MANAGEMENT
                        </div>
                        <li className="nav-item">
                            <NavLink className="nav-link py-1 row" to='/dashboard/users'>
                                <i className="fa fa-users mr-1 pl-4 col-2"></i>
                                <span className="font-weight-700 col">Users</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-1 row" to='/dashboard/contracts'>
                                <i className="fa fa-clipboard mr-1 pl-4 col-2"></i>
                                <span className="font-weight-700 col">Contracts</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-1 row" to='/dashboard/complains'>
                                <i className="fa fa-comments mr-1 pl-4 col-2"></i>
                                <span className="font-weight-700 col">Complains</span>
                            </NavLink>
                        </li>

                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            TUTOR MANAGEMENT
                        </div>
                        <li className="nav-item">
                            <NavLink className="nav-link py-1 row" to='/dashboard/skill-tags'>
                                <i className="fas fa-list mr-1 pl-4 col-2 text-center"></i>
                                <span className="font-weight-700 col">Skill Tags</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-1 row" to='/dashboard/statistic'>
                                <i className="fas fa-chart-area mr-1 pl-4 col-2 text-center"></i>
                                <span className="font-weight-700 col">Statistic</span>
                            </NavLink>
                        </li>
                    </ul>
                    {/* End of Sidebar */}

                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            {/* Topbar - Nav bar*/}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                {/* Sidebar Toggle (Topbar) */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars" />
                                </button>
                                
                                {/* Topbar Navbar */}
                                <ul className="navbar-nav ml-auto">                                    
                                    <div className="topbar-divider d-none d-sm-block" />
                                    {/* Nav Item - User Information */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-3 d-none d-lg-inline text-gray-600 small">
                                                {this.user.user.loginUser.name}
                                            </span>
                                            <img alt="user-avatar" className="img-profile rounded-circle" src={this.imageSrc} />
                                        </a>
                                        {/* Dropdown - User Information */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                                Settings
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                                Activity Log
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                                Logout
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            {/* End of Topbar */}
                            <Switch>
                                <Route path="/dashboard/users" exact component={UsersContainer}></Route>
                                <Route path={`/dashboard/users/id=:id&role=:role`} exact component={DetailUser}></Route>
                                <Route path="/dashboard/skill-tags" exact component={SkillTagsContainer}></Route>
                                <Route path="/dashboard" exact component={MainDashboard}></Route>
                                <Route path="/dashboard/contracts" exact component={Contracts}></Route>
                                <Route path="/dashboard/complains" exact component={Complains}></Route>
                                <Route path="/dashboard/statistic" exact component={Statistic}></Route>
                                <Redirect to="/dashboard"></Redirect>
                            </Switch>
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2019</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                    {/* End of Content Wrapper */}

                </div>
            </div>
        );
    }
}