'use strict'

const { default: axios } = require("axios");
const apiService = require("./api");

module.exports = {
    all(api) {
        return apiService.executeQuery(api, "list", {});
    },
    create(api, list) {
        return apiService.createDoc(api, "list", list);
    },
    update(api, list) {
        return apiService.updateDoc(api, "list", list);
    },
    delete(api, list) {
        return apiService.deleteDoc(api, "list", list);
    }
}
