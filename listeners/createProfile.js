'use strict'

const apiService = require("../services/api");
const profile = require("../services/profile");

module.exports = (props, event, api) => {
    console.log("createProfile", event);
    return apiService.createDoc(api, profile.collection, {
        "user": "@me",
        "pseudo": event.value.pseudo,
    });
}