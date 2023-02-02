'use strict'

module.exports = (data, props) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 16,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": data.map(profile => {
            return {
                type: "view",
                name: "profileShared",
                coll: "todo",
                query: {
                    _id: props.todo
                },
                props: {
                    profile
                }
            }
        })
    }
}

