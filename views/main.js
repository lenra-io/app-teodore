'use strict'

module.exports = (data, props) => {
  return {
    "type": "flex",
    "direction": "vertical",
    "spacing": 4,
    "crossAxisAlignment": "center",
    "children": [
      {
        "type": "view",
        "name": "menu",
      },
      {
        type: "flexible",
        child: {
          "type": "view",
          "name": "home"
        },
      },
      {
        type: "view",
        name: "footer"
      }
    ]
  }
}
