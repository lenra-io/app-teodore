'use strict'

module.exports = (data, counter) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 16,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": data.map(list => {
            return {
                "type": "view",
                name: "listCard",
                coll: "todo",
                query: {
                    inProgress: true,
                    user: "@me",
                    list: list._id
                },
                props: list
            }
        })
    }
}
