import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'


export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">ADMIN LOGIN</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Username" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                    <a href="index.html" className="btn btn-primary btn-user btn-block mt-5 font-weight-bold font-20">
                                                        Login
                                                    </a>
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                                <div className="text-center">
                                                    <NavLink className="small" to="/register">Create an Account!</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
