'use strict'

const profile = require("../services/profile")

module.exports = ([profile], props) => {
    return {
        type: "container",
        alignment: "center",
        child: {
            type: "container",
            constraints: {
                maxWidth: 600
            },
            child: {
                type: "form",
                onSubmit: {
                    action: "createProfile",
                },
                child: {
                    type: "flex",
                    direction: "vertical",
                    crossAxisAlignment: "stretch",
                    children: [
                        {
                            type: "textfield",
                            name: "pseudo",
                            value: "",
                            style: {
                                decoration: {
                                    labelText: "label",
                                },
                            },
                        },
                        {
                            type: "button",
                            text: "Create profile",
                            submit: true
                        }
                    ]
                },
            }
        }
    }
}

