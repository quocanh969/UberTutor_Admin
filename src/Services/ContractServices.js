const ApiUrl = "http://localhost:8080";


export const contractServ = {
    getContracts,
    getPendingContracts,
    getActiveContracts,
    getExpiredContracts,
    getHistoryContracts,
    getComplainContracts,
    cancelContract,
    removeComplain,
}


function getContracts(page){
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({page: page}),
    };

    return fetch(`${ApiUrl}/getContracts`, requestOption)
        .then(handleResponse);
}

function getPendingContracts(page){
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({page: page}),
    };

    return fetch(`${ApiUrl}/getPendingContracts`, requestOption)
        .then(handleResponse);
}

function getActiveContracts(page){
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({page: page}),
    };

    return fetch(`${ApiUrl}/getActiveContracts`, requestOption)
        .then(handleResponse);
}

function getExpiredContracts(page){
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({page: page}),
    };

    return fetch(`${ApiUrl}/getExpiredContracts`, requestOption)
        .then(handleResponse);
}

function getHistoryContracts(page){
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({page: page}),
    };

    return fetch(`${ApiUrl}/getHistoryContracts`, requestOption)
        .then(handleResponse);
}

function getComplainContracts(){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
    };

    return fetch(`${ApiUrl}/users/getComplainedContracts`, requestOption)
        .then(handleResponse);
}

function cancelContract(id){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({id_contract: id})
    };

    return fetch(`${ApiUrl}/users/cancelAnActiveContract`, requestOption)
        .then(handleResponse);
}

function removeComplain(id){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({id_contract: id})
    };

    return fetch(`${ApiUrl}/users/removeComplain`, requestOption)
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