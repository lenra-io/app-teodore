'use strict'

module.exports = (data, props) => {
    return {
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
            "type": "flex",
            "direction": "vertical",
            "crossAxisAlignment": "stretch",
            "children": [
                {
                    "type": "text",
                    "textAlign": "center",
                    "value": props.name,
                },
                {
                    type: "flex",
                    fillParent: true,
                    direction: "vertical",
                    padding: {
                        top: 8,
                        left: 16,
                        right: 16,
                        bottom: 8,
                    },
                    children: data.map((todo) => {
                        return {
                            "type": "view",
                            "name": "task",
                            "props": todo
                        }
                    })
                },
                {
                    "type": "view",
                    "name": "taskForm",
                    "props": props
                }
            ]
        }
    }
}
