const fetch = require('node-fetch');
const querystring = require('querystring');

const headers = {
    "Content-type": "application/x-www-form-urlencoded",
}
const employeeData = {
    fullName: "test data",
    email: "mail@mail.com",
    mobile: "0123456789",
    city: "jakarta"
}

const insertData = () => {
    fetch("http://localhost:8080/newEmployee", {
        headers,
        method: "POST",
        body: querystring.stringify(employeeData)
    })
    .then(res => {
        if(res.status == 201) console.log("successfully add new employee data");
        else console.log("failed to add new employee data");
    })
}

const deleteData = () => {
    fetch("http://localhost:8080/deleteEmployee", {
        headers,
        method: "DELETE"
    })
    .then(res => {
        if(res.status == 200) console.log("successfully delete employee data");
        else console.log("failed to delete employee data");
    })
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const spammingRequest = async(time) => {
    while(true) {
        insertData()
        await sleep(time);
        deleteData()
        await sleep(time);
    } 
}

spammingRequest(500);


