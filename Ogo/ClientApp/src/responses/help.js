const {default: axios} = require("axios");

export async function fetchGetStudentsShort(){
    const axios = require('axios').default;
    let response = [];
    try {
        response = (await axios.get('https://localhost:7076/api/GetStudentsShort/'));
    } catch (error) {
        console.error(error);
    }
    return response.data;
}

export async function fetchRooms(housing, floor){
    const axios = require('axios').default;
    let response = [];
    try {
        response = (await axios.get(`https://localhost:7076/api/rooms/housing/${housing}/floor/${floor}`));
    } catch (error) {
        console.error(error);
    }
    return response.data;
}