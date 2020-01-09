import React, { Component } from 'react'
import us from '../Services/UserServices';

export default class AddSkillTag extends Component {

    skill = {
        skill: '',
        skill_tag: '',
    }
    constructor(props)
    {
        super(props);
        this.state = {
            skill: '',
            skill_tag: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);        
    }

    handleSubmit(e)
    {
        e.preventDefault();        

        console.log(this.skill);

        us.addSkillTag(JSON.parse(localStorage.getItem('user')).user.loginUser.id, this.skill.skill, this.skill.skill_tag)
        .then(res=>{
            if(res.code === 1)
            {
                alert('Add skill successfully');
                this.props.onClose();
            }
            else
            {
                alert('Add skill failed');
            }
        })
        .catch(err=>{
            alert('Add skill failed');
        })
        
    }

    handleChange(e)
    {
        this.skill[e.target.name] = e.target.value;
    }

    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="card o-hidden border-0 shadow-lg my-5 py-4">
                        <div className="card-body p-0">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Add new Skill Tag!</h1>
                            </div>
                            <form ref="registerForm" onSubmit={this.handleSubmit}>  
                                <div className='row my-2'>
                                    <label className='col-4'>Skill:</label>
                                    <input type='text' required className='col-5 text-left' name='skill' onChange={this.handleChange}/>
                                </div>
                            
                                <div className='row my-2'>
                                    <label className='col-4'>Skill_tag:</label>
                                    <input type='text' required className='col-5 text-left' name='skill_tag' onChange={this.handleChange}/>
                                </div>
                                    

                                <button className='btn btn-primary mx-auto mt-4'>ADD SKILL</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
