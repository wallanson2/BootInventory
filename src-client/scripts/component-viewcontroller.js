const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions.js')
const OopsView = require('./oops-view.js')
const AuthView = require('./auth-view.js')
const MultiView = require('./multi-view.js')
const SingleView = require('./single-view.js')

const {InventoryModel} = require('./models.js')



const AppViewController = React.createClass({

   getInitialState: function(){
      let updateState = STORE.getStoreData()
      console.log( "the retrieved data:" ,updateState.currentInventory)
      STORE.setStore('currentInventory', updateState.currentInventory)
      STORE.setStore('singleListing', new InventoryModel())

      return STORE.getStoreData()
   },

  componentWillMount: function(){
    let self = this


    STORE.onChange(function(){
        let updateState = STORE.getStoreData()
        console.log( "the retrieved data:" ,updateState.currentInventory)
        self.setState(updateState)
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
          return <SingleView singleData={this.state.singleListing} pidVal={this.props.pidInRoute} />
          break;

      case "OopsView":
         return <OopsView/>
         break;
    }
  }
})

module.exports = AppViewController
