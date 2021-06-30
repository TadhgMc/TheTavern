/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    // user routes
    getUser: function(userID) {
        return axios.get(`/api/accounts/${userID}`);
    },
    updateUser: function(userID, userChanges) {
        return axios.put(`/api/accounts/${userID}`, userChanges);
    },
    createUser: function(newAccount) {
        return axios.post('/api/accounts/new', newAccount);
    },
    removeUser: function(userID) {
        return axios.delete(`/api/accounts/${userID}`)
    },
    // character routes
    createCharacter: function(userID, newCharacter) {
        return axios.post(`/api/characters/userID/${userID}/new`, newCharacter);
    },
    getCharacter: function(charID) {
        return axios.get(`/api/characters/${charID}`);
    },
    removeCharacter: function(charID) {
        return axios.delete(`/api/characters/${charID}`);
    },
    updateCharacter: function(charID, charChanges) {
        return axios.put(`/api/characters/${charID}`, charChanges);
    },
    // log in and out routes
    login: function(userDetails) {
        return axios.post('/api/log/in', userDetails);
    },
    logout: function(){
        return axios.post('/api/log/out');
    }
}