'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      userData: require('./views/userData'),
      counter: require('./views/counter'),
      home: require('./views/home'),
      menu: require('./views/menu'),
      todoList: require('./views/todoList'),
      listCard: require('./views/listCard'),
      taskForm: require('./views/taskForm'),
      task: require('./views/task'),
      footer: require('./views/footer')
    },
    listeners: {
      increment: require('./listeners/increment'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      addTodo: require('./listeners/addTodo'),
      addList: require('./listeners/addList'),
      checkTodo: require('./listeners/checkTodo')
    },
    rootView: 'main'
  }
}
