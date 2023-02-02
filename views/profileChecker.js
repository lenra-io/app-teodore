'use strict'

const modal = require("../services/modal")
const profile = require("../services/profile")

module.exports = ([profile], props) => {
    if (!profile) {
        return {
            "type": "view",
            "name": "profileForm"
        }
    }
    return {
        "type": "view",
        "name": "layout",
        coll: modal.collection,
        query: {
            user: "@me",
        }
    }
}

