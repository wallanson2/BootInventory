const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions.js')

const AuthView = require('./auth-view.js')
const MultiView = require('./multi-view.js')

const AppViewController = React.createClass({


  // componentWillMount: function(){
  //   let self = this
  //   STORE.onChange(function(){
  //       let updateState = STORE.getStoreData()
  //       self.setState(updateState)
  //   })
  // }


  render: function() {

    switch(this.props.routedFrom) {
      case "AuthView":
         return <AuthView/>
         break;

      case "MultiView":
        console.log("rendering multiview")
        return <MultiView />
        break;
    }
  }
})

module.exports = AppViewController
