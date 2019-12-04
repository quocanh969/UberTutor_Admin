import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Register extends Component {

    user = {
        username: '',
        password: '',
        name: '',
        email: '',
        yob: 1980,
        gender: 0,
        address: '',
        phone: '',
    }

    constructor()
    {
        super();

        this.handleSubmit = this.handleSubmit.bind(this); // handle submit
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount()
    {
        let { onRegisterRefresh } = this.props;
        onRegisterRefresh();
    }

    handleChange(e)
    {
        this.user[e.target.name] = e.target.value;   
    }

    handleSubmit(e)
    {
        e.preventDefault();       
        if(this.user.password === this.refs.confirm.value)
        {
            let {onRegister} = this.props;
            onRegister(this.user);
        }
        else
        {
            let { onValidateFail } = this.props;
            onValidateFail('Repeat is not the same as password');
        }
    }

    generateNotice()
    {
        let { status, message, loading } = this.props.RegisterReducer;

        if(status === 0)
        {            
            if( loading === true)
            {
                return(
                    <div className="d-flex justify-content-center my-2">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                );
            }
            else
            {
                return null;
            }            
        }
        else if(status === 1)
        {// Thành công
            this.refs.registerForm.reset()
            return(
                <div className="alert alert-success mb-3">
                    {message}
                </div>
            );
        }
        else
        {// Thất bại
            return(
                <div className="alert alert-danger mb-3">
                    {message}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="container my-0">
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Create an Account for Admin!</h1>
                                                </div>
                                                {this.generateNotice()}
                                                <form ref="registerForm" className="user" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input type="text" required onChange={this.handleChange} className="form-control form-control-user" id="name" name="name" placeholder="Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" required onChange={this.handleChange} className="form-control form-control-user" id="email" name="email" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" required onChange={this.handleChange} className="form-control form-control-user" id="username" name="username" placeholder="Username" />
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="password" required onChange={this.handleChange} className="form-control form-control-user" id="password" name="password" placeholder="Password" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="password" required className="form-control form-control-user" id="confirm" ref="confirm" name="confirm" placeholder="Repeat Password" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" onChange={this.handleChange} className="form-control form-control-user" id="address" name="address" placeholder="Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="tel" required onChange={this.handleChange} className="form-control form-control-user" id="phone" name="phone" placeholder="Phone number" />
                                                    </div>
                                                    <div className="form-group row py-auto">
                                                        <div className="col-6 mb-3 mb-sm-0">
                                                            <input type="number" required onChange={this.handleChange} className="form-control form-control-user" id="yob" name="yob" min="1980" placeholder="Years Of Birth" />
                                                        </div>                                                                                                                
                                                        <select className="form-select col-6" 
                                                            name="gender" 
                                                            id="gender" 
                                                            onChange={this.handleChange}
                                                            defaultValue={0}>
                                                            <option value={0}>Male</option>
                                                            <option value={1}>Female</option>
                                                        </select>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-user btn-block font-weight-bold font-20">
                                                        Register Account
                                                    </button>
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                                <div className="text-center">
                                                    <NavLink className="small" to="/login">Already have an account? Login!</NavLink>
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

export default Register;