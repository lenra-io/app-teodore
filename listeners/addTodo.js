'use strict'

const todoService = require("../services/todo");


module.exports = async (props, event, api) => {
    return todoService.create(api, {
        body: event.value.todoBody,
        inProgress: true,
        user: "@me",
        list: props.listId
    })
}
