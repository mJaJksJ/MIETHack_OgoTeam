const {default: axios} = require("axios");

export async function fetchGetStudentsShort(){
    const axios = require('axios').default;
    let response = [];
    try {
        response = (await axios.get('https://localhost:7076/api/GetStudentsShort/'));
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    return response.data;
}