import React, { Component } from 'react';
import './detail.css';
import us from '../../Services/UserServices';

export default class DetailUser extends Component {

    constructor(props) {
        super(props);
        let { id, role } = this.props.match.params;
        if (role === 0) { // learner
            this.state = {
                tab: 1,
                user: {
                    name: '',
                    avatarLink: '',
                    id: id,
                    role: role,
                    email: '',
                    phone: '',
                    gender: 0,
                },
            }
        }
        else { // tutor
            this.state = {
                tab: 1,
                user: {
                    name: '',
                    avatarLink: '',
                    id: id,
                    role: role,
                    email: '',
                    phone: '',
                    gender: 0,
                    major: 0,
                    price: 0,
                    levelTeaching: 0,
                    area: '',
                    successRate: 0,
                    introduction: '',
                },
            }
        }


        this.initData(id, role);
    }

    initData(id, role) {
        us.loadUserDetail({ id: id, role: role })
            .then(res => {
                console.log(res);
                this.setState({ user: res.info.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    generateTutorTab(proInfoBtn) {
        if (this.state.user.role === 1) {
            return (
                <li className="nav-item">
                    <div className={proInfoBtn} id="profile-tab" data-toggle="tab"
                        aria-controls="profile" aria-selected="false"
                        onClick={() => { this.setState({ tab: 2 }) }}
                    >Profession</div>
                </li>
            );
        }
    }

    generateTutorContent(proInfoClass) {
        if (this.state.user.role === 1) {
            return (
                <div className={proInfoClass} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                        <div className="col-3">
                            <label>Major</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.major}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Hourly Rate</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.price}$/hr</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Level Teaching</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.levelTeaching}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Area</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.area}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Success Rate</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.successRate}%</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Introduction</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.introduction}</p>
                        </div>
                    </div>
                </div>

            );
        }
    }

    generateTagBox() {
        if(this.state.user.role === 1)
        {
            return (
                <div className="profile-work rounded w-75 mt-0 mx-auto text-wrap">
                    <div className="text-center font-weight-bold">TAGs</div>
                    <hr />
                    <span className="text-primary p-1"><u>English</u></span>,
                    <span className="text-primary p-1"><u>Dynamic</u></span>,
                    <span className="text-primary p-1"><u>Pedagogica</u></span>,
                    <span className="text-primary p-1"><u>Algebra</u></span>,
                    <span className="text-primary p-1"><u>Geometry</u></span>
                </div>
            );
        }
        else
        {
            return null;
        }        
    }

    render() {
        var accountInfoClass = "";
        var proInfoClass = "";
        var accountInfoBtn = "";
        var proInfoBtn = "";
        console.log('render:');
        console.log(this.state.user);
        let ImgSrc = this.state.user.avatarLink;
        if (ImgSrc === null || ImgSrc === '') {
            ImgSrc = 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/10645251_10150004552801937_4553731092814901385_n.jpg?_nc_cat=1&_nc_ohc=hnKkw-bKtIkAQlIhz4gzarCWd3tTja6CU5x12XZnI2YTuW9TiBuSlIBlQ&_nc_ht=scontent.xx&oh=64b6c755de54ecae67c9742219d23174&oe=5E7F1EA8';
        }

        let RoleStr = '';
        if (this.state.user.role === 0) {
            RoleStr = 'LEARNER';
        }
        else {
            RoleStr = 'TUTOR';
        }

        if (this.state.tab === 1) {
            accountInfoBtn = 'nav-link active cursor-pointer';
            accountInfoClass = 'tab-pane fade show active';
            proInfoBtn = 'nav-link cursor-pointer';
            proInfoClass = 'tab-pane fade';
        }
        else {
            accountInfoBtn = 'nav-link cursor-pointer';
            accountInfoClass = 'tab-pane fade';
            proInfoBtn = 'nav-link cursor-pointer  active';
            proInfoClass = 'tab-pane fade show active';
        }

        return (
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={ImgSrc}
                                    alt="avatar-user" />
                                <input type="file" name="file" ref="imgInput" className="d-none" />
                                <div className="file btn btn-lg btn-primary cursor-pointer"
                                    onClick={() => { this.refs.imgInput.click() }}>
                                    Change Photo
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {this.state.user.name.toUpperCase()}
                                </h5>
                                <h6 className="font-weight-bold">
                                    {RoleStr}
                                </h6>

                                <p className="proile-rating">EVALUATION : <span>8/10</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <div className={accountInfoBtn} id="home-tab" data-toggle="tab"
                                            role="tab" aria-controls="home" aria-selected="true"
                                            onClick={() => { this.setState({ tab: 1 }) }}
                                        >Account</div>
                                    </li>
                                    {this.generateTutorTab(proInfoBtn)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {this.generateTagBox()}
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className={accountInfoClass} id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-3">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-9">
                                            <p>{this.state.user.id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-9">
                                            <p>{this.state.user.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-9">
                                            <p>{this.state.user.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-9">
                                            <p>{this.state.user.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <label>Gender</label>
                                        </div>
                                        <div className="col-9">
                                            <p>{this.state.user.gender}</p>
                                        </div>
                                    </div>
                                </div>
                                {this.generateTutorContent(proInfoClass)}

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
