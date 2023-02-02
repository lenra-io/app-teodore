'use strict'

const apiService = require("../services/api");
const modal = require("../services/modal");


module.exports = async (props, event, api) => {
    console.log("openModal", props);
    return apiService.createDoc(api, modal.collection, {
        "user": "@me",
        ...props
    });
}