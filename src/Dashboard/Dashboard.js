import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import MainDashboard from '../MainDashboard/MainDashboard';
import UsersContainer from '../UserList/Users.container';
import SkillTagsContainer from '../SkillTag/SkillTag.container';
import DetailUser from '../UserList/DetailUser/DetailUser';

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
                                <i className="fas fa-fw fa-tachometer-alt mr-2 col-2" />
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
                                <i className="fa fa-users mr-2 col-2"></i>
                                <span className="font-weight-700 col">Users</span>
                            </NavLink>
                        </li>

                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            TUTOR MANAGEMENT
                        </div>
                        <li className="nav-item">
                            <NavLink className="nav-link py-1 row" to='/dashboard/skill-tags'>
                                <i className="fas fa-list mr-2 col-2 text-center"></i>
                                <span className="font-weight-700 col">Skill Tags</span>
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
                                {/* Topbar Search */}
                                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* Topbar Navbar */}
                                <ul className="navbar-nav ml-auto">
                                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw" />
                                        </a>
                                        {/* Dropdown - Messages */}
                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    {/* Nav Item - Alerts */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-bell fa-fw" />
                                            {/* Counter - Alerts */}
                                            {/*<span className="badge badge-danger badge-counter">3+</span>*/}
                                        </a>
                                        {/* Dropdown - Alerts */}
                                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                            <h6 className="dropdown-header">
                                                Alerts Center
                                            </h6>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="mr-3">
                                                    <div className="icon-circle bg-primary">
                                                        <i className="fas fa-file-alt text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="small text-gray-500">December 12, 2019</div>
                                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                </div>
                                            </a>
                                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                        </div>
                                    </li>
                                    {/* Nav Item - Messages */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-envelope fa-fw" />
                                            {/* Counter - Messages */}
                                            {/*<span className="badge badge-danger badge-counter">7</span>*/}
                                        </a>
                                        {/* Dropdown - Messages */}
                                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                            <h6 className="dropdown-header">
                                                Message Center
                                            </h6>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="dropdown-list-image mr-3">
                                                    <img className="rounded-circle" src={this.imageSrc} alt="" />
                                                    <div className="status-indicator bg-success" />
                                                </div>
                                                <div className="font-weight-bold">
                                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                        </div>
                                    </li>
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