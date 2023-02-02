'use strict'

const listService = require("../services/list");


module.exports = async (props, event, api) => {
    return listService.create(api, {
        name: event.value.todoBody,
        user: "@me"
    })
}
