const {default: axios} = require("axios");

export async function fetchStudentsShort() {
    const axios = require('axios').default;
    let response = [];
    try {
        response = (await axios.get('https://localhost:7076/api/GetStudentsShort/'));
    } catch (error) {
        console.error(error);
    }
    return response.data;
}

export async function fetchStudentInfo(id) {
    const axios = require('axios').default;
    let response = null;
    try {
        response = (await axios.get('https://localhost:7076/api/GetStudentInfo/', { params: { id: id } }));
    } catch (error) {
        console.error(error);
    }
    return response.data;
}

export async function fetchRooms(housing, floor) {
    const axios = require('axios').default;
    let response = [];
    try {
        response = (await axios.get(`https://localhost:7076/api/rooms/housing/${housing}/floor/${floor}`));
    } catch (error) {
        console.error(error);
    }
    return response.data;
}

export async function postStudent(formData) {
    let response = {status: "400"};
    try {
        response = (await axios.post('https://localhost:7076/api/AddStudent/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }));
        console.log(response);
    } catch (error) {
        console.error(error);
    }
    console.log(response);
    return response;
}

