const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions.js')

const AuthView = require('./auth-view.js')


const AppViewController = React.createClass({





  render: function() {

    switch(this.props.routedFrom) {
      case "AuthView":
         return <AuthView/>
         break;
    }
  }
})

module.exports = AppViewController
