import axios from 'axios'

const url= "http://localhost:3003/users";
 
export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUsers = async (users) => {
    return await axios.post(url,users);
}

export const editUsers = async (id,users) => {
    return await axios.put(`${url}/${id}`,users);
}

export const deleteUsers = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

