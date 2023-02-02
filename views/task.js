'use strict'

const profile = require("../services/profile")

module.exports = (data, props) => {
    return {
        type: "actionable",
        onPressed: {
            action: "checkTodo",
            props
        },
        child: {
            "type": "container",
            "decoration": {
                color: 0xFFFFFFFF,
                boxShadow: {
                    blurRadius: 8,
                    color: 0x1A000000,
                    offset: {
                        dx: 0,
                        dy: 1
                    }
                },
                "borderRadius": {
                    "topLeft": {
                        x: 4,
                        y: 4
                    },
                    "bottomRight": {
                        x: 4,
                        y: 4
                    },
                    topRight: {
                        x: 4,
                        y: 4
                    },
                    bottomLeft: {
                        x: 4,
                        y: 4
                    }
                },
            },
            child: {
                type: "flex",
                fillParent: true,
                crossAxisAlignment: "center",
                padding: {
                    top: 8,
                    left: 16,
                    right: 16,
                    bottom: 8,
                },
                children: [
                    {
                        type: "flexible",
                        child: {
                            type: "text",
                            value: props.body
                        }
                    },
                    {
                        type: "button",
                        text: "Share",
                        "leftIcon": {
                            "type": "icon",
                            "value": "share",
                        },
                        onPressed: {
                            action: "openModal",
                            props: {
                                modal: "profiles",
                                data: {
                                    coll: profile.collection,
                                    // query: {
                                    //     "user": {
                                    //         "$not": "@me",
                                    //     }
                                    // }
                                },
                                props: {
                                    todo: props._id
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
}

