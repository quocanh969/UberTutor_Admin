const ApiUrl = "http://localhost:8080";


export const us = {
    login,
    register,
    loadUserData,
    loadSkillTag,
    addSkillTag,
    deleteSkillTag,
    loadUserData,
    loadUserDetail,
    turnOnOffStt,
}


function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${ApiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user !== false) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function register(user) {
    user.name = user.username;

    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    return fetch(`${ApiUrl}/register`, requestOption)
        .then(handleResponse);
}

function loadUserData(option)
{
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify(option),
    };

    return fetch(`${ApiUrl}/users/getUserList`, requestOption)
        .then(handleResponse);
}

function loadSkillTag(option)
{
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify(option),
    };

    return fetch(`${ApiUrl}/users/getSkillList`, requestOption)
        .then(handleResponse);
}



function addSkillTag(id, skill, skill_tag)
{
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({id,skill, skill_tag,}),
    };

    return fetch(`${ApiUrl}/users/addSkill`, requestOption)
        .then(handleResponse);
}

function deleteSkillTag(id, id_skill)
{
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({id,id_skill}),
    };

    return fetch(`${ApiUrl}/users/deleteSkill`, requestOption)
        .then(handleResponse);
}


function loadUserDetail(option){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify(option),
    };

    return fetch(`${ApiUrl}/users/getDetailUser`, requestOption)
        .then(handleResponse);
}


function turnOnOffStt(id, status, email){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({id: id, status: status, email: email}),
    };

    return fetch(`${ApiUrl}/users/changeAccountStatus`, requestOption)
        .then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                //logout();
                //window.location.reload(true);
                alert('code: 401');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export default us;