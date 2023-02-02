'use strict'

module.exports = ([todo], { profile }) => {
    return {
        "type": "flex",
        crossAxisAlignment: "center",
        children: [
            {
                type: "text",
                value: profile.pseudo
            },
            {
                "type": "checkbox",
                "value": false,
                "onPressed": {
                    action: "shareTodo",
                    props: {
                        profile: profile._id,
                        todo: todo._id
                    }
                }
            }
        ],
    }
}

