import API_URL from '../config/api'
import axios from 'axios';

export default {

    posts () {
        return axios.get(`${API_URL}/posts`);
    },

    add (post) {
        return axios.post(`${API_URL}/post`, post)
    },

    delete (id) {
        return axios.delete(`${API_URL}/post/${id}`);
    }
}