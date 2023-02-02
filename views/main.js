'use strict'

const profile = require("../services/profile")

module.exports = (data, props) => {
  return {
    "type": "view",
    "name": "profileChecker",
    "coll": profile.collection,
    query: {
      user: "@me",
    }
  }
}

