const React = require('react')
const Backbone = require('backbone')
const {InventoryModel, InventoryCollection} = require('./models.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')


const SingleView = React.createClass({

   render: function(){
      return(
         <div className="single-container">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12">

               </div>
            </div>
         </div>
      )
   },

    _addItem: function() {
     ACTIONS.addInventoryItem()
    },

    _subtractItem: function() {
      ACTIONS.subtractInventoryItem()
    },




    })


module.exports = SingleView
