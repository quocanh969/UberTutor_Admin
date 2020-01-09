const ApiUrl = "http://localhost:8080";


export const contractServ = {
    getContracts,
    getPendingContracts,
    getActiveContracts,
    getExpiredContracts,
    getHistoryContracts,
    getComplainContracts,
    getIncomeEachYear,
    getStatisticByWeek,
    getStatisticByMonth,
    getStatisticByDate,
    getTutorByIncomeFromLastNDays,
    getTopMajorsByIncome,
    getTopTutorsAllTime,
    getTopMajorsAllTime,
    cancelContract,
    stopContract,
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

function stopContract(id){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({id_contract: id})
    };

    return fetch(`${ApiUrl}/users/stopContract`, requestOption)
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


function getIncomeEachYear(){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
    };

    return fetch(`${ApiUrl}/users/getIncomeEachYear`, requestOption)
        .then(handleResponse);
}

function getStatisticByWeek(year){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({year: year}),
    };

    return fetch(`${ApiUrl}/users/getStatisticByWeek`, requestOption)
        .then(handleResponse);
}

function getStatisticByMonth(year, month){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({year: year, month: month}),
    };

    return fetch(`${ApiUrl}/users/getStatisticByMonth`, requestOption)
        .then(handleResponse);
}

function getStatisticByDate(date){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({date: date}),
    };

    return fetch(`${ApiUrl}/users/getIncomeByDate`, requestOption)
        .then(handleResponse);
}

function getTopTutorsAllTime(){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
    };

    return fetch(`${ApiUrl}/users/getTopTutorsAllTime`, requestOption)
        .then(handleResponse);
}

function getTutorByIncomeFromLastNDays(days){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({days: days}),
    };

    return fetch(`${ApiUrl}/users/getTopTutorsByIncome`, requestOption)
        .then(handleResponse);
}

function getTopMajorsAllTime(){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
    };

    return fetch(`${ApiUrl}/users/getTopMajorsAllTime`, requestOption)
        .then(handleResponse);
}

function getTopMajorsByIncome(days){
    let token = JSON.parse(localStorage.getItem('user')).token;
    const requestOption = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({days: days}),
    };

    return fetch(`${ApiUrl}/users/getTopMajorsByIncome`, requestOption)
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