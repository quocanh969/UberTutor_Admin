import React, { Component } from 'react';
import './detail.css';
import us from '../../Services/UserServices';

export default class DetailUser extends Component {

    constructor(props) {
        super(props);
        let { id, role } = this.props.match.params;
        var temp;
        if (role === 0) { // learner
            temp = {
                role: Number.parseInt(role),
                tab: 1,
                user: {
                    id: 1,
                    name: '',
                    address: '',
                    email: '',
                    phone: '',
                    gender: 0,
                    yob: null,
                    avatarLink: '',
                    isEditting: false,
                },
            }
        }
        else { // tutor
            temp = {
                role: Number.parseInt(role),
                tab: 1,
                user: {
                    id: 1,
                    name: '',
                    address: '',
                    email: '',
                    phone: '',
                    gender: 0,
                    evaluation: 0,
                    yob: null,
                    avatarLink: '',
                    isEditting: false,
                    id_major: 0,
                    major_name: '',
                    price: 0,
                    level: '',
                    areaCode: 0,
                    area: '',
                    introduction: '',
                    skills: [],
                },
            }
        }

        this.state = temp;

        this.initData(id, role);
    }

    initData(id, role) {
        us.loadUserDetail({ id: id, role: role })
            .then(res => {
                if (this.state.role === 1) {
                    this.setState({ user: res.info.data });
                }
                else {
                    this.setState({ user: res.info.data[0] });
                }
                console.log(this.state.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    generateTutorTab(proInfoBtn) {
        if (this.state.role === 1) {
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
        if (this.state.role === 1) {
            return (
                <div className={proInfoClass} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                        <div className="col-3">
                            <label>Major</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.major_name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Hourly Rate</label>
                        </div>
                        <div className="col-9">
                            <p>$&nbsp;{this.state.user.price}/hr</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label>Level Teaching</label>
                        </div>
                        <div className="col-9">
                            <p>{this.state.user.level}</p>
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

    generateTag() {
        let content = [];
        for(let e of this.state.user.skills)
        {
            content.push(
                <span className="text-primary p-1" key={e.id_skill}><u>{e.skill_tag}</u>,</span>
            );
        }
        return content;
    }

    generateTagBox() {
        if (this.state.role === 1) {
            return (
                <div className="profile-work rounded w-75 mt-0 mx-auto text-wrap">
                    <div className="text-center font-weight-bold">TAGs</div>
                    <hr />
                    {this.generateTag()}
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        var accountInfoClass = "";
        var proInfoClass = "";
        var accountInfoBtn = "";
        var proInfoBtn = "";
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
                        <div className="col-4">
                            <div className="profile-img mb-5">
                                <img src={ImgSrc} alt="avatar-user" />
                            </div>
                            {this.generateTagBox()}
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {this.state.user.name.toUpperCase()}
                                </h5>
                                <h6 className="font-weight-bold">
                                    {RoleStr}
                                </h6>

                                {this.state.role === 1
                                    ?
                                    <p className="proile-rating">EVALUATION : <span>{this.state.user.evaluation}/10 <i className="fa fa-star text-warning"></i></span></p>
                                    :
                                    ''
                                }
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

                            <div>
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
                                                <p>{
                                                    this.state.user.gender === 1
                                                    ?
                                                    'Male'
                                                    :
                                                    'Female'
                                                }</p>
                                            </div>
                                        </div>
                                    </div>
                                    {this.generateTutorContent(proInfoClass)}

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
