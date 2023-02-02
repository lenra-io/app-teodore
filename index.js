'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      layout: require('./views/layout'),
      userData: require('./views/userData'),
      counter: require('./views/counter'),
      home: require('./views/home'),
      menu: require('./views/menu'),
      todoList: require('./views/todoList'),
      task: require('./views/task'),
      footer: require('./views/footer'),
      profileChecker: require('./views/profileChecker'),
      profileForm: require('./views/profileForm'),
      profiles: require('./views/profiles'),
      profileShared: require('./views/profileShared'),
    },
    listeners: {
      createProfile: require('./listeners/createProfile'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      addTodo: require('./listeners/addTodo'),
      checkTodo: require('./listeners/checkTodo'),
      openModal: require('./listeners/openModal'),
    },
    rootView: 'main'
  }
}