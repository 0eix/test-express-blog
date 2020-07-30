axios = require('axios');

const API_URL = "https://jsonplaceholder.typicode.com";

class Repository {
    constructor (document) {
        this.document = document;
    };

     readAll() {
        try {
            return axios.get(`${API_URL}/${this.document}`);
        } catch (error) {
            throw error;
        }
    };

    readById (id) {
        try {
            return axios.get(`${API_URL}/${this.document}/${id}`);
        } catch (error) {
            throw error;
        }
    };

    create (obj) {
        try {
            return axios.post(`${API_URL}/${this.document}`, obj);
        } catch (error) {
            throw error;
        }
    };

    update (obj) {
        try {
            return axios.put(`${API_URL}/${this.document}/${obj.id}`, obj);
        } catch (error) {
            throw error;
        }
    };

    delete (obj) {
        try {
            return axios.delete(`${API_URL}/${this.document}/${obj.id}`);
        } catch (error) {
            throw error;
        }
    };
}



module.exports = {
    postRepository: new Repository("posts"),
    userRepository: new Repository("users"),
    commentRepository: new Repository("comments"),
}