import axios from 'axios';

const API_URL = 'http://localhost:9090'; 

// Users


export const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:9090/user');  // Replace with your API endpoint
        console.log(response); //
        return response;
    } catch (error) {
        throw error;
    }
};
export const getUserById = (id) => axios.get(`${API_URL}/user/${id}`);
export const createUser = (user) => axios.post(`${API_URL}/user`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/user/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/user/${id}`);