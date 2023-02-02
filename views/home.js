'use strict'

module.exports = (data, counter) => {
    return {
        type: "container",
        "constraints": {
            "minWidth": 200,
            "maxWidth": 600,
        },
        child: {
            "type": "flex",
            "direction": "vertical",
            "spacing": 16,
            "mainAxisAlignment": "spaceEvenly",
            "crossAxisAlignment": "center",
            "children": [
                {
                    type: "view",
                    name: "todoList",
                    coll: "list",
                    query: {
                        user: "@me"
                    }
                }
            ]
        }
    }
}
