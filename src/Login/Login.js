import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'


export default class Login extends Component {

    user = {
        username: '',
        password: '',
    }

    constructor(props)
    {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this); // handle submit
        this.handleChange = this.handleChange.bind(this);
    }

    

    handleChange(e)
    {
        this.user[e.target.name] = e.target.value;
    }

    handleSubmit(e)
    {
        e.preventDefault();
        
        console.log(this.user);

        let { onLogin } = this.props;
        onLogin(this.user);
        
    }

    generateNotice()
    {
        let { status, message, loading } = this.props.LoginReducer;

        if(status === -1)
        {// Thất bại
            return(
                <div className="alert alert-danger mb-3">
                    {message}
                </div>
            );
        }
        else if( loading === true)
        {
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        else
        {
            return ;
        }
    }

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
                                               
                                                <form className="user" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input type="email" 
                                                                required
                                                                className="form-control form-control-user" 
                                                                id="username" 
                                                                name="username"
                                                                placeholder="Email" 
                                                                onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" 
                                                                required
                                                                className="form-control form-control-user" 
                                                                name="password"
                                                                id="password" 
                                                                placeholder="Password" 
                                                                onChange={this.handleChange}
                                                        />
                                                    </div>  
                                                    {this.generateNotice()}                                                   
                                                    <button className="btn btn-primary btn-user btn-block mt-5 font-weight-bold font-20" type="submit">
                                                        Login
                                                    </button>
                                                </form>
                                                <hr />
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
