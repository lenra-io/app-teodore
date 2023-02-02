'use strict'

module.exports = (modals, props) => {
  let child = {
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
  console.log("layout modals", modals);
  if (modals.length > 0) {
    child = {
      "type": "stack",
      "children": [
        child,
        ...modals.map(modal => {
          console.log("modal", modal);
          return {
            type: "container",
            alignment: "center",
            child: {
              type: "container",
              padding: {
                top: 16,
                bottom: 16,
                left: 16,
                right: 16
              },
              decoration: {
                color: 0xFFFFFFFF,
              },
              child: {
                type: "view",
                name: modal.modal,
                ...(modal.data || {}),
                props: modal.props
              }
            }
          }
        })
      ]
    }
  }
  return child;
}

