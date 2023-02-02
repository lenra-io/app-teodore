'use strict'

const { default: axios } = require("axios");
const apiService = require("./api");

module.exports = {
    collection: "profile",
    create(api, todo) {
        return apiService.createDoc(api, "todo", todo);
    },
}
