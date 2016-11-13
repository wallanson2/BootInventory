const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions.js')

const AuthView = require('./auth-view.js')
const MultiView = require('./multi-view.js')
const SingleView = require('./single-view.js')




const AppViewController = React.createClass({


  componentWillMount: function(){
    let self = this

    let updateState = STORE.getStoreData()
    console.log( "the retrieved data:" ,updateState.currentInventory)
    self.setState({currentInventory: updateState.currentInventory})


    STORE.onChange(function(){
        let updateState = STORE.getStoreData()
        console.log( "the retrieved data:" ,updateState.currentInventory)
        self.setState({currentInventory: updateState.currentInventory})
    })


  },


  render: function() {

    switch(this.props.routedFrom) {
      case "AuthView":
         return <AuthView/>
         break;

      case "MultiView":

        console.log("rendering multiview")
        return <MultiView payloadData={this.state.currentInventory}/>
        break;

      case "SingleView":
          return <SingleView />
          break;
    }
  }
})

module.exports = AppViewController
